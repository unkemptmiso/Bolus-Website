import os
import xml.etree.ElementTree as ET

DIST_DIR = "dist/client"
SITEMAP_FILE = os.path.join(DIST_DIR, "sitemap-0.xml")

def verify_sitemap():
    if not os.path.exists(SITEMAP_FILE):
        print(f"Sitemap file not found at {SITEMAP_FILE}")
        return

    tree = ET.parse(SITEMAP_FILE)
    root = tree.getroot()
    
    # Namespaces
    ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    
    urls = root.findall(".//s:loc", ns)
    print(f"Found {len(urls)} URLs in sitemap.")
    
    errors = []
    for loc in urls:
        url = loc.text
        # Remove site prefix
        path = url.replace("https://bolusanesthesia.com", "")
        
        # Normalize path to file
        if path == "/":
            file_path = os.path.join(DIST_DIR, "index.html")
        elif path.endswith("/"):
            file_path = os.path.join(DIST_DIR, path[1:], "index.html")
        else:
            file_path = os.path.join(DIST_DIR, path[1:])
            
        if not os.path.exists(file_path):
            errors.append(f"Sitemap URL {url} points to missing file: {file_path}")
            
    if not errors:
        print("All sitemap URLs verified!")
    else:
        print(f"Found {len(errors)} issues in sitemap:")
        for err in errors:
            print(err)

if __name__ == "__main__":
    verify_sitemap()
