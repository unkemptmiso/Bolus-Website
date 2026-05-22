import os
import re
from bs4 import BeautifulSoup
import json

# Configuration
DIST_DIR = "dist/client"
SITE_URL = "https://bolusanesthesia.com"
EXPECTED_NOINDEX = ["/login/", "/app/", "/compare/paper-charts/", "/compare/maps-anesthesia/"]

def get_html_files(root_dir):
    html_files = []
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))
    return html_files

def audit_page(file_path):
    rel_path = os.path.relpath(file_path, DIST_DIR)
    url_path = "/" + rel_path.replace("index.html", "").replace("\\", "/")
    if url_path != "/" and url_path.endswith("/"):
        pass # keep it
    
    with open(file_path, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")
    
    results = {
        "file": rel_path,
        "url_path": url_path,
        "title": soup.title.string.strip() if soup.title else "MISSING",
        "description": "MISSING",
        "canonical": "MISSING",
        "robots": "index",
        "h1": [],
    }
    
    # Description
    desc_tag = soup.find("meta", attrs={"name": "description"})
    if desc_tag:
        results["description"] = desc_tag.get("content", "").strip()
        
    # Canonical
    canonical_tag = soup.find("link", attrs={"rel": "canonical"})
    if canonical_tag:
        results["canonical"] = canonical_tag.get("href", "").strip()
        
    # Robots
    robots_tag = soup.find("meta", attrs={"name": "robots"})
    if robots_tag:
        results["robots"] = robots_tag.get("content", "").strip()
        
    # H1
    results["h1"] = [h1.get_text().strip() for h1 in soup.find_all("h1")]
    
    return results

def main():
    html_files = get_html_files(DIST_DIR)
    audit_results = []
    
    for file in html_files:
        audit_results.append(audit_page(file))
        
    # Print Summary Table
    print(f"| URL Path | Title | Description | Canonical | Robots | H1 Count |")
    print(f"| --- | --- | --- | --- | --- | --- |")
    for res in sorted(audit_results, key=lambda x: x["url_path"]):
        h1_str = str(len(res["h1"]))
        if len(res["h1"]) != 1:
            h1_str = f"**{h1_str}**"
            
        canonical_status = "OK"
        expected_canonical = SITE_URL + res["url_path"]
        if res["canonical"] != expected_canonical:
            canonical_status = f"**MISMATCH** ({res['canonical']})"
            
        robots_status = res["robots"]
        if res["url_path"] in EXPECTED_NOINDEX and "noindex" not in res["robots"]:
            robots_status = f"**SHOULD BE NOINDEX** ({res['robots']})"
        elif res["url_path"] not in EXPECTED_NOINDEX and "noindex" in res["robots"]:
            robots_status = f"**SHOULD BE INDEX** ({res['robots']})"

        print(f"| {res['url_path']} | {res['title'][:30]}... | {res['description'][:30]}... | {canonical_status} | {robots_status} | {h1_str} |")

    # Check for Redirects
    print("\n## Redirect Check")
    redirects_file = os.path.join(DIST_DIR, "_redirects")
    if os.path.exists(redirects_file):
        with open(redirects_file, "r") as f:
            print("Redirects file found.")
            # Simple check for common issues
            lines = f.readlines()
            for line in lines:
                if line.strip() and not line.startswith("#"):
                    parts = line.split()
                    if len(parts) >= 2:
                        src, dest = parts[0], parts[1]
                        # Check if dest exists in audit_results
                        dest_clean = dest.split("?")[0]
                        if not any(r["url_path"] == dest_clean for r in audit_results) and not dest.startswith("http") and not dest.startswith("mailto:"):
                             print(f"WARNING: Redirect target {dest} for {src} might not exist.")

if __name__ == "__main__":
    main()
