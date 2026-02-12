export interface BlogEntry {
  slug: string;
  title: string;
  category: 'Recipes' | 'Baking' | 'Techniques' | 'Guides';
  description: string;
  image: string;
  author: string;
  publishedDate: string;
  readTime: number;
  keywords: string[];
  type: 'recipe' | 'technique' | 'guide';
}

export const blogRegistry: BlogEntry[] = [
  {
    slug: 'perfect-homemade-bun',
    title: 'Soft, Golden Burger Buns From Scratch (No Bread Machine Needed)',
    category: 'Recipes',
    description:
      'A step-by-step recipe for soft, golden homemade burger buns with a tender crumb and bakery shine.',
    image:
      'https://images.unsplash.com/photo-1586816001966-79b736744398?w=600&h=400&fit=crop',
    author: 'Earthy Bliss Team',
    publishedDate: '2025-12-02',
    readTime: 8,
    keywords: ['homemade hamburger buns', 'burger bun recipe', 'soft burger buns'],
    type: 'recipe',
  },
  {
    slug: 'banana-bread-recipe',
    title: 'The Best Banana Bread Recipe (Moist, Simple, One Bowl)',
    category: 'Recipes',
    description:
      'A one-bowl banana bread recipe that\'s moist, tender, and impossible to mess up.',
    image: '/images/blog/banana-bread-recipe.png',
    author: 'Earthy Bliss Team',
    publishedDate: '2026-01-08',
    readTime: 7,
    keywords: ['banana bread recipe', 'easy banana bread', 'moist banana bread'],
    type: 'recipe',
  },
  {
    slug: 'easy-focaccia-recipe',
    title: 'Easy Homemade Focaccia: Crispy Outside, Soft Inside',
    category: 'Recipes',
    description:
      'A simple homemade focaccia recipe with a crispy golden crust and impossibly soft interior.',
    image: '/images/blog/easy-focaccia-recipe.png',
    author: 'Earthy Bliss Team',
    publishedDate: '2026-02-03',
    readTime: 9,
    keywords: ['homemade focaccia recipe', 'focaccia bread recipe', 'no-knead focaccia'],
    type: 'recipe',
  },
  {
    slug: 'fluffy-homemade-biscuits',
    title: 'Fluffy Homemade Biscuits With Buttery Layers (30 Minutes)',
    category: 'Recipes',
    description:
      'Tall, flaky, buttery biscuits in 30 minutes. Frozen butter and cold buttermilk are the secrets.',
    image: '/images/blog/fluffy-homemade-biscuits.png',
    author: 'Earthy Bliss Team',
    publishedDate: '2026-01-22',
    readTime: 6,
    keywords: ['homemade biscuits recipe', 'fluffy biscuits', 'buttermilk biscuits'],
    type: 'recipe',
  },
  {
    slug: 'pan-de-mallorca-recipe',
    title: 'Pan de Mallorca: Soft Puerto Rican Sweet Rolls (Step by Step)',
    category: 'Recipes',
    description:
      'A step-by-step recipe for soft, buttery Puerto Rican sweet rolls dusted with powdered sugar.',
    image: '/images/blog/pan-de-mallorca-recipe.png',
    author: 'Earthy Bliss Team',
    publishedDate: '2026-02-07',
    readTime: 10,
    keywords: ['pan de mallorca recipe', 'mallorca bread', 'Puerto Rican sweet rolls'],
    type: 'recipe',
  },
  {
    slug: 'homemade-pizza-dough',
    title: 'Easy Homemade Pizza Dough (Ready in Under 90 Minutes)',
    category: 'Recipes',
    description:
      'A foolproof homemade pizza dough recipe with a chewy, crispy crust. Six ingredients, minimal kneading.',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
    author: 'Earthy Bliss Team',
    publishedDate: '2025-11-25',
    readTime: 8,
    keywords: ['homemade pizza dough recipe', 'pizza dough recipe', 'easy pizza dough'],
    type: 'recipe',
  },
  {
    slug: 'egg-wash-bread-guide',
    title: 'Egg Wash vs. Milk Wash vs. Butter: The Complete Bread Wash Guide',
    category: 'Guides',
    description:
      'Learn which bread wash gives you the crust you want — glossy, golden, soft, or crispy.',
    image: '/images/blog/egg-wash-bread-guide.png',
    author: 'Earthy Bliss Team',
    publishedDate: '2026-01-28',
    readTime: 7,
    keywords: ['egg wash for bread', 'egg wash vs milk wash', 'bread wash guide'],
    type: 'guide',
  },
  {
    slug: 'how-to-knead-dough',
    title: 'How to Knead Bread Dough by Hand (With the Windowpane Test)',
    category: 'Techniques',
    description:
      'Learn how to knead bread dough by hand with proper technique, timing, and the windowpane test.',
    image: '/images/blog/how-to-knead-dough.png',
    author: 'Earthy Bliss Team',
    publishedDate: '2025-12-10',
    readTime: 8,
    keywords: ['how to knead dough', 'kneading bread dough', 'windowpane test'],
    type: 'technique',
  },
  {
    slug: 'how-to-score-bread',
    title: 'How to Score Bread: Patterns, Tools, and Why It Matters',
    category: 'Techniques',
    description:
      'Learn how to score bread with a lame or razor — depth, angle, patterns, and why it matters for oven spring.',
    image: '/images/blog/how-to-score-bread.png',
    author: 'Earthy Bliss Team',
    publishedDate: '2026-01-15',
    readTime: 7,
    keywords: ['how to score bread', 'bread scoring techniques', 'bread scoring patterns'],
    type: 'technique',
  },
  {
    slug: 'where-to-proof-bread-dough',
    title: 'Where to Let Bread Dough Rise: 7 Warm Spots in Your Kitchen',
    category: 'Guides',
    description:
      'Seven clever warm spots for proofing bread dough, plus the ideal temperature range and signs it\'s ready.',
    image: '/images/blog/where-to-proof-bread-dough.png',
    author: 'Earthy Bliss Team',
    publishedDate: '2025-12-18',
    readTime: 6,
    keywords: ['where to let dough rise', 'bread proofing', 'proofing bread dough'],
    type: 'guide',
  },
];

// Helper: get related articles for a given slug (excludes self, returns 3)
export function getRelatedArticles(currentSlug: string, count = 3) {
  const current = blogRegistry.find((p) => p.slug === currentSlug);
  if (!current) return blogRegistry.filter((p) => p.slug !== currentSlug).slice(0, count);

  // Prioritize same category, then same type
  const others = blogRegistry.filter((p) => p.slug !== currentSlug);
  const sameCategory = others.filter((p) => p.category === current.category);
  const sameType = others.filter(
    (p) => p.type === current.type && p.category !== current.category
  );
  const rest = others.filter(
    (p) => p.category !== current.category && p.type !== current.type
  );

  const ranked = [...sameCategory, ...sameType, ...rest];
  // Deduplicate
  const seen = new Set<string>();
  const unique = ranked.filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });

  return unique.slice(0, count).map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    image: p.image,
    readTime: p.readTime,
  }));
}

// Helper: get all posts sorted by date (newest first)
export function getAllPosts() {
  return [...blogRegistry].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

// Helper: get posts by category
export function getPostsByCategory(category: BlogEntry['category']) {
  return blogRegistry
    .filter((p) => p.category === category)
    .sort(
      (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
}
