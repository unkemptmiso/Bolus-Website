import os
from bs4 import BeautifulSoup
import urllib.parse

DIST_DIR = "dist/client"

def get_html_files(root_dir):
    html_files = []
    if not os.path.exists(root_dir):
        return []
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))
    return html_files

def check_assets():
    html_files = get_html_files(DIST_DIR)
    if not html_files:
        print(f"No HTML files found in {DIST_DIR}.")
        return

    # Map of all files in dist/client for fast lookup
    all_files = set()
    for root, dirs, files in os.walk(DIST_DIR):
        for file in files:
            rel = os.path.relpath(os.path.join(root, file), DIST_DIR)
            all_files.add("/" + rel.replace("\\", "/"))

    errors = []
    for file_path in html_files:
        rel_html_path = os.path.relpath(file_path, DIST_DIR)
        with open(file_path, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f, "html.parser")
        
        # Tags to check and their attributes
        tags_to_check = {
            "img": ["src", "srcset"],
            "link": ["href"],
            "script": ["src"],
            "source": ["src", "srcset"],
            "video": ["src", "poster"],
        }
        
        for tag, attrs in tags_to_check.items():
            elements = soup.find_all(tag)
            for el in elements:
                for attr in attrs:
                    val = el.get(attr)
                    if not val: continue
                    
                    # Handle srcset (comma separated list of "url size")
                    urls_to_check = []
                    if attr == "srcset":
                        # Simple split, might need more robust parsing for complex srcsets
                        parts = val.split(",")
                        for p in parts:
                            urls_to_check.append(p.strip().split(" ")[0])
                    else:
                        urls_to_check.append(val)
                    
                    for url in urls_to_check:
                        if url.startswith("http") or url.startswith("data:") or url.startswith("//") or url.startswith("mailto:") or url.startswith("#"):
                            continue
                        
                        # Clean and normalize
                        clean_url = url.split("?")[0].split("#")[0]
                        if not clean_url: continue
                        
                        # Normalize path
                        if clean_url.startswith("/"):
                            target = clean_url
                        else:
                            # Relative to the HTML file
                            html_dir = os.path.dirname("/" + rel_html_path.replace("\\", "/"))
                            target = os.path.normpath(os.path.join(html_dir, clean_url)).replace("\\", "/")
                        
                        if target not in all_files:
                            # Also check for index.html if it's a directory link (though rare for assets)
                            if target + "/index.html" not in all_files and target + "index.html" not in all_files:
                                errors.append(f"Broken asset in {rel_html_path}: <{tag} {attr}='{url}'> -> {target}")

    if not errors:
        print("No broken assets found!")
    else:
        print(f"Found {len(errors)} potential asset issues:")
        for err in errors:
            print(err)

if __name__ == "__main__":
    check_assets()
