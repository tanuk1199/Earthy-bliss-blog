# Earthy Bliss Co — Blog Post Template

## Overview
A standalone Next.js blog for Earthy Bliss Co. that lives separately from the main Shopify store. Hosts SEO-driven baking content (recipes, techniques, guides) with embedded product recommendations that link back to `earthyblissco.com`.

## Deployment
- **Live URL**: https://blog.earthyblissco.com
- **Repo**: https://github.com/tanuk1199/Earthy-bliss-blog
- **Branch**: `main` (Vercel auto-deploys)
- **Domain**: `blog.earthyblissco.com` (subdomain on Vercel)
- No environment variables needed — all product data is baked in at build time

## Tech Stack
- **Next.js 16** + React 19 + TypeScript
- **Tailwind CSS v4** + shadcn/ui components
- **Vercel Analytics** included
- Dev server: `npm run dev` (port 3000, or next available)

## Project Structure
```
blog-post-template/
├── app/
│   ├── layout.tsx              # Root layout — Playfair Display + Source Sans 3 fonts
│   ├── page.tsx                # Redirects to /blog
│   ├── globals.css             # Brand CSS vars (Tailwind v4 @theme)
│   ├── icon.svg                # Branded favicon (Deep Cocoa "E")
│   ├── sitemap.ts              # Auto-generated from blog registry
│   ├── robots.ts               # Allows all, points to sitemap
│   └── blog/
│       ├── page.tsx            # Blog index — supports ?category=recipes|techniques
│       ├── [slug]/page.tsx     # Dynamic fallback — returns 404 for unknown slugs
│       ├── perfect-homemade-bun/page.tsx
│       ├── banana-bread-recipe/page.tsx
│       ├── easy-focaccia-recipe/page.tsx
│       ├── fluffy-homemade-biscuits/page.tsx
│       ├── pan-de-mallorca-recipe/page.tsx
│       ├── homemade-pizza-dough/page.tsx
│       ├── egg-wash-bread-guide/page.tsx
│       ├── how-to-knead-dough/page.tsx
│       ├── how-to-score-bread/page.tsx
│       ├── where-to-proof-bread-dough/page.tsx
│       └── holiday-cookie-decorating/page.tsx  # Exists but NOT in registry
├── components/blog/
│   ├── Navbar.tsx              # Sticky nav — Latest, Recipes, Techniques, Shop (external)
│   ├── Footer.tsx              # Matches main store footer (newsletter, 2-col links, social)
│   ├── FeaturedProducts.tsx    # Gift-framed 2-col product cards (Shopify CDN images)
│   ├── ProductCallout.tsx      # In-post product recommendations (4 items, slug-based)
│   ├── ArticleBody.tsx         # Renders HTML article content
│   ├── ArticleMeta.tsx         # Category badge, title, author, date, read time
│   ├── BannerImage.tsx         # Full-width hero image
│   ├── RelatedArticles.tsx     # 3-card related posts grid (slug-based, from registry)
│   ├── SocialShare.tsx         # Share buttons (clipboard, Twitter, Facebook, Pinterest)
│   ├── VideoEmbed.tsx          # YouTube embed wrapper
│   └── RecipeCard.tsx / RecipeSteps.tsx / RecipeVideo.tsx / TipsCallout.tsx
├── lib/
│   ├── blog-registry.ts        # Central post index (10 entries) — getAllPosts(), getRelatedArticles()
│   ├── blog-types.ts           # TypeScript interfaces (BlogPost, RelatedArticle — orphaned, kept for reference)
│   ├── product-catalog.ts      # Real Shopify products + per-slug recommendations
│   └── utils.ts                # cn() helper
└── public/
    └── images/blog/            # Custom post images (8 of 10 posts have local PNGs)
```

## Navigation
| Nav Item | Route | Behavior |
|----------|-------|----------|
| Latest | `/blog` | All posts, grouped: featured → Recipes → Techniques & Guides |
| Recipes | `/blog?category=recipes` | Filtered grid of recipe posts only |
| Techniques | `/blog?category=techniques` | Filtered grid of technique + guide posts |
| Shop | `https://earthyblissco.com` | External link (opens new tab) |

## Data Architecture

### Single Source of Truth: `blog-registry.ts`
All post metadata lives here — titles, categories, images, dates, read times, keywords. Components consume the registry:
- **Blog index** (`blog/page.tsx`) — `getAllPosts()`, `getPostsByCategory()`
- **Related articles** (`RelatedArticles.tsx`) — `getRelatedArticles(slug)` (smart matching: same category first, then same type, then others)
- **Sitemap** (`sitemap.ts`) — auto-generates from registry entries

### Centralized Components (slug-based)
Both `ProductCallout` and `RelatedArticles` accept a `slug` prop and resolve data internally:
- `<ProductCallout slug="perfect-homemade-bun" />` → looks up `product-catalog.ts`
- `<RelatedArticles slug="perfect-homemade-bun" />` → looks up `blog-registry.ts`

No hardcoded data arrays in individual post pages.

## Product Integration

### FeaturedProducts (category pages + blog index)
- Shows on ALL blog views (Latest, Recipes, Techniques)
- 2 products: **Breadly™ Share the Craft Set** (From $69) + **Everything Sourdough Baking Gift Set** ($99)
- Gift-framed copy: "Give the Gift of Baking"
- Images from Shopify CDN, links to `earthyblissco.com/products/...`

### ProductCallout (individual blog posts)
- 4-product horizontal scroll inside each blog post
- Uses `lib/product-catalog.ts` — central catalog with real Shopify CDN images + prices
- Per-slug recommendation map: each post gets contextually relevant products
- **Baker's Essentials Set always comes first** (main bundle to push, $65)
- Component accepts `slug` prop: `<ProductCallout slug="perfect-homemade-bun" />`

### Product Catalog Handles (sellable, non-gift)
| Handle | Title | Price |
|--------|-------|-------|
| `bakers-essentials-set` | The Baker's Essentials Set | $65 |
| `everythingsourdough-baking-set` | Everything Sourdough Baking Gift Set | $99 |
| `share-the-craft-set` | Breadly™ Share the Craft Set | From $69 |
| `beautiful-loaves-baking-kit` | The Perfect Loaf Scoring Kit | $37 |
| `breadly-9` | Breadly™ Bread Bow Knife | $43 |
| `stainless-steel-bread-lame` | Stainless Steel Bread Lame & 5 Blades | $14 |
| `danish-dough-whisk` | Danish Dough Whisk | $14 |
| `stainless-steel-dough-scraper` | Stainless Steel Dough Scraper | $13 |
| `waterproof-digital-kitchen-scale` | Digital Kitchen Scale | $20 |
| `waterproof-digital-kitchen-thermometer` | Digital Dough Thermometer | $25 |
| `round-bread-banneton-basket-liner-10` | Round Bread Banneton Basket | $25 |
| `silicone-bread-baking-mat` | Silicone Bread Sling | $15 |
| `non-stick-bread-baking-pan-w-lid-8-5` | Non-Stick Bread Baking Pan with Lid | $17 |
| `sourdough-starter-jar-kit` | Sourdough Starter Jar Kit | $40 |
| `non-slip-silicone-baking-mat` | Non-Slip Silicone Baking Mat | $20 |
| `petal-perfection-aprons` | Petal Perfection Kitchen Apron | $18 |

## Images
- **8 of 10 posts** have custom local images at `public/images/blog/{slug}.png`
- These are used as banner images, OG images, Twitter cards, JSON-LD schema, AND registry thumbnails
- **2 posts still use Unsplash**: `perfect-homemade-bun`, `homemade-pizza-dough`
- Registry images flow through to related articles cards automatically

## Footer
Matches the main Shopify store's `ebc-footer.liquid`:
1. **Newsletter** — "Join the Earthy Bliss community" + email input
2. **Two columns** — Quick Links (Breadly Series, Track Order, About, Contact, FAQ) + Policies (Terms, Returns, Privacy, Shipping, Payment)
3. **Bottom bar** — © year + social icons (Facebook, Instagram, TikTok, YouTube)
- All links go to `earthyblissco.com` (external, new tab)

## Brand Colors (CSS Variables in globals.css)
| Variable | Value | Maps to |
|----------|-------|---------|
| `--primary` | `#2D150B` | Deep Cocoa |
| `--primary-foreground` | `#FFFDF9` | Off-white |
| `--secondary` | `#CBAC96` | Warm Tan |
| `--muted` | `#FFEFD2` | Golden Cream |
| `--accent` | `#BD2B2D` | Heritage Red (CTA only) |
| `--muted-foreground` | `#3E3E3E` | Charcoal Hearth |

## Post Publication Dates
Posts are staggered for a natural publishing cadence (most recent first):
| Post | Date |
|------|------|
| pan-de-mallorca-recipe | 2026-02-07 |
| easy-focaccia-recipe | 2026-02-03 |
| egg-wash-bread-guide | 2026-01-28 |
| fluffy-homemade-biscuits | 2026-01-22 |
| how-to-score-bread | 2026-01-15 |
| banana-bread-recipe | 2026-01-08 |
| where-to-proof-bread-dough | 2025-12-18 |
| how-to-knead-dough | 2025-12-10 |
| perfect-homemade-bun | 2025-12-02 |
| homemade-pizza-dough | 2025-11-25 |

## Known Issues / TODO

### Resolved
- ~~`[slug]/page.tsx` mock data~~ — now returns 404 for unknown slugs
- ~~`mock-blog-data.tsx`~~ — deleted, no references remain
- ~~`holiday-cookie-decorating` mock dependency~~ — self-contained, no mock import
- ~~Blog registry images are Unsplash~~ — 8 of 10 replaced with local custom PNGs
- ~~Hardcoded `relatedArticles` arrays~~ — consolidated to use `getRelatedArticles()` from registry
- ~~Banner images are Unsplash~~ — 8 of 10 replaced with local custom PNGs (matching registry)

### Remaining
1. **2 posts still need custom images**: `perfect-homemade-bun` and `homemade-pizza-dough` still use Unsplash URLs in both registry and post pages
2. **`holiday-cookie-decorating/`** — page exists but isn't in `blog-registry.ts`, so it's invisible from the blog index
3. **Public folder** has leftover v0 placeholder icons (`placeholder-logo.png`, `placeholder.svg`, etc.) — can be cleaned up

## Shopify API Access
Credentials in `Stores/EarthyBlissCo.com/.env`:
- Domain: `earthlyblissco.myshopify.com`
- API version: `2025-07`
- Access token: `shpat_...` (via OAuth)
- Scopes: `read/write_products`, `read/write_themes`, etc.
