# Functionland Website (fx.land)

Source code for the [Functionland](https://fx.land) network website — a static site hosted on GitHub Pages.

## Tech Stack

- **Pure HTML/CSS/JS** — no build tools, no frameworks
- **GitHub Pages** hosting
- **Google Fonts** (Open Sans)
- **BEM** naming convention for CSS

## Project Structure

```
fxwebsite/
├── index.html                 # Homepage
├── 404.html                   # Custom 404 page
├── css/
│   ├── base.css               # Reset, variables, utilities, global components
│   ├── header.css             # Site header & navigation
│   ├── footer.css             # Site footer
│   ├── home.css               # Homepage styles
│   ├── ecosystem.css          # Ecosystem page
│   ├── fxblox-device.css      # FxBlox device listing page
│   ├── fxblox-lite.css        # FxBlox Lite product detail page
│   ├── token.css              # Token page
│   ├── use-apps.css           # Use Apps page
│   ├── build.css              # Build Apps page
│   ├── about.css              # About page
│   ├── branding.css           # Branding page
│   ├── fec-nfts.css           # FEC NFTs page
│   └── ipfs-ecosystem.css     # IPFS Ecosystem page
├── js/
│   ├── nav.js                 # Mobile hamburger menu & dropdown navigation
│   ├── analytics.js           # Analytics tracking
│   ├── scroll-reveal.js       # Scroll-triggered fade-in animations
│   ├── counter.js             # Animated number counters
│   ├── carousel.js            # Partner logo carousel
│   ├── product-gallery.js     # Product image thumbnail gallery
│   └── ...                    # Other page-specific scripts
├── assets/
│   ├── images/                # All site images (logo, products, team, etc.)
│   ├── videos/                # Video assets
│   └── data/                  # JSON data files
├── about/                     # /about/
├── branding/                  # /branding/
├── build/                     # /build/
├── ecosystem/                 # /ecosystem/
├── fec-nfts/                  # /fec-nfts/
├── fula-staking/              # /fula-staking/
├── fula-vip-staking/          # /fula-vip-staking/
├── fxblox-device/             # /fxblox-device/
├── fxblox-lite/               # /fxblox-lite/
├── ipfs-ecosystem/            # /ipfs-ecosystem/
├── live-map/                  # /live-map/
├── privacy-policy/            # /privacy-policy/
├── terms/                     # /terms/
├── token/                     # /token/
└── use-apps/                  # /use-apps/
```

Each page directory contains an `index.html` so URLs resolve cleanly (e.g. `fx.land/ecosystem/`).

## Running Locally

Since this is a static site with no build step, you just need a local HTTP server. Pick any of these:

**Python** (built-in):
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000
```

**Node.js** (npx, no install needed):
```bash
npx serve .

# Or install globally
npm install -g serve
serve .
```

**VS Code**: Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, then right-click `index.html` and select "Open with Live Server".

> **Note:** Opening HTML files directly via `file://` will work for most pages, but some features (fetch requests, ES module imports) may require a proper HTTP server.

## Conventions

- Each page has its own CSS file in `css/` — loaded only on that page
- Shared styles live in `base.css`, `header.css`, and `footer.css`
- CSS uses BEM naming (`.block__element--modifier`)
- CSS custom properties (variables) are defined in `:root` in `base.css`
- JS files are small, focused, framework-free IIFEs
- All pages share the same header and footer markup (copy-pasted, not templated)
