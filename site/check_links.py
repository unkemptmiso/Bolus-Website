import os
from bs4 import BeautifulSoup
import re

DIST_DIR = "dist/client"
SITE_URL = "https://bolusanesthesia.com"

def get_html_files(root_dir):
    html_files = []
    if not os.path.exists(root_dir):
        return []
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))
    return html_files

def check_links():
    html_files = get_html_files(DIST_DIR)
    if not html_files:
        print(f"No HTML files found in {DIST_DIR}. Did you run 'npm run build'?")
        return

    all_pages = []
    for f in html_files:
        rel = os.path.relpath(f, DIST_DIR)
        path = "/" + rel.replace("index.html", "").replace("\\", "/")
        all_pages.append(path)
    
    # Add files in public that are not HTML but might be linked
    public_files = []
    for root, dirs, files in os.walk(DIST_DIR):
        for file in files:
            if not file.endswith(".html"):
                rel = os.path.relpath(os.path.join(root, file), DIST_DIR)
                public_files.append("/" + rel.replace("\\", "/"))

    errors = []
    for file_path in html_files:
        rel_path = os.path.relpath(file_path, DIST_DIR)
        with open(file_path, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f, "html.parser")
        
        links = soup.find_all("a")
        for link in links:
            href = link.get("href")
            if not href: continue
            if href.startswith("http") or href.startswith("mailto:") or href.startswith("#"):
                continue
            
            # Clean href
            clean_href = href.split("?")[0].split("#")[0]
            if not clean_href: continue
            
            # Ensure absolute-ish path
            if not clean_href.startswith("/"):
                # Handle relative paths if any (Astro usually uses absolute-ish)
                pass 
            
            target = clean_href
            
            # Check if target exists
            found = False
            # Normalize target for comparison
            norm_target = target if target.startswith("/") else "/" + target
            
            if norm_target in all_pages or norm_target + "index.html" in all_pages or norm_target in public_files:
                found = True
            elif norm_target.endswith("/") and norm_target[:-1] in all_pages:
                found = True
            elif not norm_target.endswith("/") and norm_target + "/" in all_pages:
                found = True
            
            # Special case for homepage
            if norm_target == "/":
                found = True

            if not found:
                errors.append(f"Broken link in {rel_path}: {href}")
            
            # Check for non-trailing slash links to pages that should have them
            # Excluding files with extensions (like .png, .pdf)
            if not "." in os.path.basename(norm_target.rstrip("/")):
                if norm_target != "/" and not norm_target.endswith("/"):
                    # This check is a bit strict, but good for SEO consistency
                    # Let's see if there are any
                    pass

    if not errors:
        print("No broken links found!")
    else:
        print(f"Found {len(errors)} potential issues:")
        for err in errors:
            print(err)

if __name__ == "__main__":
    check_links()
