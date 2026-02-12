/**
 * Real product catalog from Shopify — images, prices, and handles.
 * Used by ProductCallout to display relevant products on blog posts.
 */

const STORE_URL = "https://earthyblissco.com";

export interface ShopifyProduct {
  handle: string;
  title: string;
  price: string;
  image: string;
  href: string;
}

// Sellable products only (no $0 gifts, no duplicates, no shipping protection)
const catalog: Record<string, ShopifyProduct> = {
  "bakers-essentials-set": {
    handle: "bakers-essentials-set",
    title: "The Baker's Essentials Set",
    price: "$65.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/SourDoughKit_074.jpg?v=1769971187",
    href: `${STORE_URL}/products/bakers-essentials-set`,
  },
  "everythingsourdough-baking-set": {
    handle: "everythingsourdough-baking-set",
    title: "Everything Sourdough Baking Gift Set",
    price: "$99.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/SourDoughKit_209.jpg?v=1762459267",
    href: `${STORE_URL}/products/everythingsourdough-baking-set`,
  },
  "share-the-craft-set": {
    handle: "share-the-craft-set",
    title: "Breadly\u2122 Share the Craft Set",
    price: "From $69.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/imgi_121_d215e880-eee4-48de-8b70-933b4fb5be17.jpg?v=1769666560",
    href: `${STORE_URL}/products/share-the-craft-set`,
  },
  "beautiful-loaves-baking-kit": {
    handle: "beautiful-loaves-baking-kit",
    title: "The Perfect Loaf Scoring Kit",
    price: "$37.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/Bundle_018.jpg?v=1762459544",
    href: `${STORE_URL}/products/beautiful-loaves-baking-kit`,
  },
  "breadly-9": {
    handle: "breadly-9",
    title: "Breadly\u2122 Bread Bow Knife",
    price: "$43.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/Breadly_Image_1.png?v=1759553130",
    href: `${STORE_URL}/products/breadly-9`,
  },
  "stainless-steel-bread-lame": {
    handle: "stainless-steel-bread-lame",
    title: "Stainless Steel Bread Lame & 5 Blades",
    price: "$14.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/s_9.png?v=1762458862",
    href: `${STORE_URL}/products/stainless-steel-bread-lame`,
  },
  "danish-dough-whisk": {
    handle: "danish-dough-whisk",
    title: "Danish Dough Whisk",
    price: "$14.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/s_11.png?v=1762459174",
    href: `${STORE_URL}/products/danish-dough-whisk`,
  },
  "stainless-steel-dough-scraper": {
    handle: "stainless-steel-dough-scraper",
    title: "Stainless Steel Dough Scraper",
    price: "$13.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/s_10.png?v=1762458997",
    href: `${STORE_URL}/products/stainless-steel-dough-scraper`,
  },
  "waterproof-digital-kitchen-scale": {
    handle: "waterproof-digital-kitchen-scale",
    title: "Digital Kitchen Scale",
    price: "$20.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/s_18.png?v=1762458894",
    href: `${STORE_URL}/products/waterproof-digital-kitchen-scale`,
  },
  "waterproof-digital-kitchen-thermometer": {
    handle: "waterproof-digital-kitchen-thermometer",
    title: "Digital Dough Thermometer",
    price: "$25.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/s_19.png?v=1762458893",
    href: `${STORE_URL}/products/waterproof-digital-kitchen-thermometer`,
  },
  "round-bread-banneton-basket-liner-10": {
    handle: "round-bread-banneton-basket-liner-10",
    title: "Round Bread Banneton Basket",
    price: "$25.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/s_17.png?v=1762458861",
    href: `${STORE_URL}/products/round-bread-banneton-basket-liner-10`,
  },
  "silicone-bread-baking-mat": {
    handle: "silicone-bread-baking-mat",
    title: "Silicone Bread Sling",
    price: "$15.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/s_14.png?v=1762458997",
    href: `${STORE_URL}/products/silicone-bread-baking-mat`,
  },
  "non-stick-bread-baking-pan-w-lid-8-5": {
    handle: "non-stick-bread-baking-pan-w-lid-8-5",
    title: "Non-Stick Bread Baking Pan with Lid",
    price: "$17.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/s_16.png?v=1762458892",
    href: `${STORE_URL}/products/non-stick-bread-baking-pan-w-lid-8-5`,
  },
  "sourdough-starter-jar-kit": {
    handle: "sourdough-starter-jar-kit",
    title: "Sourdough Starter Jar Kit",
    price: "$40.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/s_21.png?v=1762459404",
    href: `${STORE_URL}/products/sourdough-starter-jar-kit`,
  },
  "non-slip-silicone-baking-mat": {
    handle: "non-slip-silicone-baking-mat",
    title: "Non-Slip Silicone Baking Mat",
    price: "$20.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/S0474edd4370e416e962cb34b23459200E_jpg_960x960q75_jpg.jpg?v=1762459405",
    href: `${STORE_URL}/products/non-slip-silicone-baking-mat`,
  },
  "petal-perfection-aprons": {
    handle: "petal-perfection-aprons",
    title: "Petal Perfection Kitchen Apron",
    price: "$18.00",
    image: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/s_15.png?v=1762458890",
    href: `${STORE_URL}/products/petal-perfection-aprons`,
  },
};

/**
 * Per-post product recommendations.
 * Baker's Essentials Set always first — it's the main bundle to push.
 * Remaining 3 items are contextually relevant to the post topic.
 */
const recommendations: Record<string, string[]> = {
  "perfect-homemade-bun": [
    "bakers-essentials-set",
    "danish-dough-whisk",
    "waterproof-digital-kitchen-scale",
    "non-stick-bread-baking-pan-w-lid-8-5",
  ],
  "banana-bread-recipe": [
    "bakers-essentials-set",
    "non-stick-bread-baking-pan-w-lid-8-5",
    "waterproof-digital-kitchen-scale",
    "non-slip-silicone-baking-mat",
  ],
  "easy-focaccia-recipe": [
    "bakers-essentials-set",
    "silicone-bread-baking-mat",
    "waterproof-digital-kitchen-scale",
    "stainless-steel-dough-scraper",
  ],
  "fluffy-homemade-biscuits": [
    "bakers-essentials-set",
    "stainless-steel-dough-scraper",
    "waterproof-digital-kitchen-scale",
    "non-slip-silicone-baking-mat",
  ],
  "pan-de-mallorca-recipe": [
    "bakers-essentials-set",
    "waterproof-digital-kitchen-scale",
    "danish-dough-whisk",
    "non-stick-bread-baking-pan-w-lid-8-5",
  ],
  "homemade-pizza-dough": [
    "bakers-essentials-set",
    "stainless-steel-dough-scraper",
    "waterproof-digital-kitchen-scale",
    "non-slip-silicone-baking-mat",
  ],
  "egg-wash-bread-guide": [
    "bakers-essentials-set",
    "breadly-9",
    "silicone-bread-baking-mat",
    "petal-perfection-aprons",
  ],
  "how-to-knead-dough": [
    "bakers-essentials-set",
    "stainless-steel-dough-scraper",
    "waterproof-digital-kitchen-scale",
    "waterproof-digital-kitchen-thermometer",
  ],
  "how-to-score-bread": [
    "beautiful-loaves-baking-kit",
    "bakers-essentials-set",
    "stainless-steel-bread-lame",
    "breadly-9",
  ],
  "where-to-proof-bread-dough": [
    "bakers-essentials-set",
    "waterproof-digital-kitchen-thermometer",
    "round-bread-banneton-basket-liner-10",
    "sourdough-starter-jar-kit",
  ],
};

// Default fallback — always push the bundles
const defaultRecommendations = [
  "bakers-essentials-set",
  "everythingsourdough-baking-set",
  "share-the-craft-set",
  "beautiful-loaves-baking-kit",
];

export function getRecommendedProducts(slug: string): ShopifyProduct[] {
  const handles = recommendations[slug] || defaultRecommendations;
  return handles
    .map((h) => catalog[h])
    .filter(Boolean);
}

export function getProduct(handle: string): ShopifyProduct | undefined {
  return catalog[handle];
}
