import urllib.request
import urllib.error
import re

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

def fetch_url(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            status = response.getcode()
            html = response.read().decode('utf-8')
            return status, html
    except urllib.error.HTTPError as e:
        html = ""
        try:
            html = e.read().decode('utf-8')
        except:
            pass
        return e.code, html
    except urllib.error.URLError as e:
        return 0, str(e.reason)

def extract_tags(html):
    title = re.search(r'<title[^>]*>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
    title = title.group(1).strip() if title else "None"

    meta_desc = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', html, re.IGNORECASE)
    if not meta_desc:
        meta_desc = re.search(r'<meta[^>]*content=["\'](.*?)["\'][^>]*name=["\']description["\']', html, re.IGNORECASE)
    meta_desc = meta_desc.group(1).strip() if meta_desc else "None"

    canonical = re.search(r'<link[^>]*rel=["\']canonical["\'][^>]*href=["\'](.*?)["\']', html, re.IGNORECASE)
    if not canonical:
        canonical = re.search(r'<link[^>]*href=["\'](.*?)["\'][^>]*rel=["\']canonical["\']', html, re.IGNORECASE)
    canonical = canonical.group(1).strip() if canonical else "None"

    robots = re.search(r'<meta[^>]*name=["\']robots["\'][^>]*content=["\'](.*?)["\']', html, re.IGNORECASE)
    if not robots:
        robots = re.search(r'<meta[^>]*content=["\'](.*?)["\'][^>]*name=["\']robots["\']', html, re.IGNORECASE)
    robots = robots.group(1).strip() if robots else "None"

    h1 = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.IGNORECASE | re.DOTALL)
    if h1:
        # remove inner tags
        h1 = re.sub(r'<[^>]+>', '', h1.group(1)).strip()
        h1 = re.sub(r'\s+', ' ', h1)
    else:
        h1 = "None"
        
    return title, meta_desc, canonical, robots, h1

# Get sitemap URLs
sitemap_status, sitemap_xml = fetch_url("https://bolusanesthesia.com/sitemap-index.xml")
all_sitemap_urls = set()
if sitemap_status == 200:
    sitemap_urls = re.findall(r'<loc>(.*?)</loc>', sitemap_xml)
    for url in sitemap_urls:
        if url.endswith('.xml'):
            _, sub_xml = fetch_url(url)
            all_sitemap_urls.update(re.findall(r'<loc>(.*?)</loc>', sub_xml))
        else:
            all_sitemap_urls.add(url)

print("URL | Status | Title | MetaDesc | Canonical | Robots | H1 | InSitemap")
print("--- | --- | --- | --- | --- | --- | --- | ---")
for url in urls:
    status, html = fetch_url(url)
    if url.endswith('.txt') or url.endswith('.xml'):
        in_sitemap = "Yes" if url in all_sitemap_urls else "No"
        print(f"{url} | {status} | N/A | N/A | N/A | N/A | N/A | {in_sitemap}")
        continue
    
    title, meta_desc, canonical, robots, h1 = extract_tags(html)
    in_sitemap = "Yes" if url in all_sitemap_urls else ("No" if status != 0 else "Error")
    print(f"{url} | {status} | {title} | {meta_desc} | {canonical} | {robots} | {h1} | {in_sitemap}")

# Also check robots.txt contents
robots_status, robots_txt = fetch_url("https://bolusanesthesia.com/robots.txt")
print("\n--- robots.txt ---")
print(robots_txt)
