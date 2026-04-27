import re
import os

files = {
    '/': 'dist/client/index.html',
    '/pricing': 'dist/client/pricing/index.html',
    '/login': 'dist/client/login/index.html',
    '/app': 'dist/client/app/index.html'
}

for route, path in files.items():
    print(f"Inspecting route: {route}")
    if not os.path.exists(path):
        # fallback to dist
        path = path.replace('dist/client/', 'dist/')
    
    print(f"File path inspected: {path}")
    
    if not os.path.exists(path):
        print("File not found!")
        print("---")
        continue
        
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
        
    title = ""
    m = re.search(r'<title[^>]*>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
    if m: title = m.group(1).strip()
    
    desc = ""
    m = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', html, re.IGNORECASE)
    if not m:
        m = re.search(r'<meta[^>]*content=["\'](.*?)["\'][^>]*name=["\']description["\']', html, re.IGNORECASE)
    if m: desc = m.group(1).strip()
    
    print(f"Title: {title}")
    print(f"Description: {desc}")
    print("---")

