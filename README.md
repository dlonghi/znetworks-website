# ZNetworks static site (Cloudflare Pages)


A minimal, SEO‑friendly static starter.


## Develop
Open `index.html` in a browser, or use any static server.


## Deploy (Cloudflare Pages)
1. Push these files to your Git repo.
2. In Cloudflare Dashboard → **Pages** → **Create project** → **Connect to Git**.
3. Build command: *none*; Output folder: `/` (root).
4. Deploy, then add custom domain: `znetworks.duckdns.org`.
5. At DuckDNS, add a CNAME from `znetworks.duckdns.org` → your `*.pages.dev` URL.


## SEO notes
- `robots.txt` allows crawling and points to `sitemap.xml`.
- `sitemap.xml` lists the homepage (add more URLs as you create pages).
- Open Graph and Twitter meta are in `index.html`.
- JSON‑LD (Organization + WebSite) is embedded.


## Assets
Add `og-image.png`, `icon-192.png`, and `icon-512.png` at the repo root for best previews.
