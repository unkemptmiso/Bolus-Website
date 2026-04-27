import urllib.request
import re
import ssl

urls = [
    "https://bolusanesthesia.com/",
    "https://bolusanesthesia.com/pricing",
    "https://bolusanesthesia.com/about",
    "https://bolusanesthesia.com/contact",
    "https://bolusanesthesia.com/robots.txt",
    "https://bolusanesthesia.com/llms.txt",
    "https://bolusanesthesia.com/sitemap-index.xml",
    "https://bolusanesthesia.com/login",
    "https://bolusanesthesia.com/app",
    "https://bolusanesthesia.com/compare/paper-charts"
]

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

sitemap_urls = set()
try:
    req = urllib.request.Request("https://bolusanesthesia.com/sitemap-index.xml", headers={'User-Agent': 'Mozilla/5.0'})
    res = urllib.request.urlopen(req, context=ctx)
    content = res.read().decode('utf-8')
    sitemap_urls.update(re.findall(r'<loc>(.*?)</loc>', content))
    
    for sub in re.findall(r'<loc>(.*?sitemap.*?\.xml)</loc>', content):
        req_sub = urllib.request.Request(sub, headers={'User-Agent': 'Mozilla/5.0'})
        res_sub = urllib.request.urlopen(req_sub, context=ctx)
        content_sub = res_sub.read().decode('utf-8')
        sitemap_urls.update(re.findall(r'<loc>(.*?)</loc>', content_sub))
except Exception as e:
    pass

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, context=ctx)
        html = res.read().decode('utf-8', errors='ignore')
        status = res.getcode()
    except urllib.error.HTTPError as e:
        status = e.code
        html = e.read().decode('utf-8', errors='ignore')
    except Exception as e:
        status = str(e)
        html = ""

    title = ""
    m = re.search(r'<title[^>]*>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
    if m: title = m.group(1).strip()
    
    desc = ""
    m = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', html, re.IGNORECASE)
    if not m:
        m = re.search(r'<meta[^>]*content=["\'](.*?)["\'][^>]*name=["\']description["\']', html, re.IGNORECASE)
    if m: desc = m.group(1).strip()
    
    canonical = ""
    m = re.search(r'<link[^>]*rel=["\']canonical["\'][^>]*href=["\'](.*?)["\']', html, re.IGNORECASE)
    if not m:
        m = re.search(r'<link[^>]*href=["\'](.*?)["\'][^>]*rel=["\']canonical["\']', html, re.IGNORECASE)
    if m: canonical = m.group(1).strip()
    
    robots = ""
    m = re.search(r'<meta[^>]*name=["\']robots["\'][^>]*content=["\'](.*?)["\']', html, re.IGNORECASE)
    if not m:
         m = re.search(r'<meta[^>]*content=["\'](.*?)["\'][^>]*name=["\']robots["\']', html, re.IGNORECASE)
    if m: robots = m.group(1).strip()
    
    h1 = ""
    m = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.IGNORECASE | re.DOTALL)
    if m: h1 = re.sub(r'<[^>]*>', '', m.group(1)).strip()
    h1 = " ".join(h1.split())
    
    url_normalized = url.rstrip('/')
    in_sitemap = "Yes" if any(u.rstrip('/') == url_normalized for u in sitemap_urls) else "No"
    
    print(f"URL: {url}\nStatus: {status}\nTitle: {title}\nDescription: {desc}\nCanonical: {canonical}\nRobots: {robots}\nH1: {h1}\nIn Sitemap: {in_sitemap}\n---")

