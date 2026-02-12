import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/blog/Navbar';
import { BannerImage } from '@/components/blog/BannerImage';
import { ArticleMeta } from '@/components/blog/ArticleMeta';
import { SocialShare } from '@/components/blog/SocialShare';
import { RecipeVideo } from '@/components/blog/RecipeVideo';
import { RecipeCard } from '@/components/blog/RecipeCard';
import { RecipeSteps } from '@/components/blog/RecipeSteps';
import { TipsCallout } from '@/components/blog/TipsCallout';
import { ProductCallout } from '@/components/blog/ProductCallout';
import { RelatedArticles } from '@/components/blog/RelatedArticles';
import { Footer } from '@/components/blog/Footer';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Soft, Golden Burger Buns From Scratch | Earthy Bliss Co. Blog',
  description:
    'A step-by-step recipe for soft, golden homemade burger buns with a tender crumb and bakery shine. Bread flour, egg wash, and a little patience — that\'s all it takes.',
  openGraph: {
    title: 'Soft, Golden Burger Buns From Scratch',
    description:
      'A step-by-step recipe for soft, golden homemade burger buns with a tender crumb and bakery shine.',
    images: [
      'https://images.unsplash.com/photo-1586816001966-79b736744398?w=1200&h=630&fit=crop',
    ],
    type: 'article',
    publishedTime: '2025-12-02',
    authors: ['Earthy Bliss Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soft, Golden Burger Buns From Scratch',
    description:
      'A step-by-step recipe for soft, golden homemade burger buns. No bread machine needed.',
    images: [
      'https://images.unsplash.com/photo-1586816001966-79b736744398?w=1200&h=630&fit=crop',
    ],
  },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const recipeIngredients = [
  {
    section: 'Dough',
    items: [
      '3 cups bread flour (plus extra for dusting)',
      '2 \u00BC tsp active dry yeast (one standard packet)',
      '\u00BE cup warm milk (about 110\u00B0F)',
      '3 tbsp unsalted butter, melted',
      '2 tbsp granulated sugar',
      '1 tsp salt',
      '1 large egg, room temperature',
    ],
  },
  {
    section: 'Egg Wash & Topping',
    items: [
      '1 egg + 1 tbsp water',
      'Sesame seeds (optional)',
    ],
  },
];

const recipeEquipment = [
  'Large mixing bowl',
  'Baking sheet + parchment paper',
  'Kitchen scale (recommended)',
  'Dough scraper',
  'Wire cooling rack',
  'Pastry brush',
  'Bread knife or bow knife',
];

const recipePhases = [
  {
    phase: 1,
    title: 'Start the Dough',
    steps: [
      {
        number: 1,
        title: 'Activate the yeast.',
        content:
          'Combine the warm milk, sugar, and yeast in a large bowl. Stir gently and let it sit for 5\u20138 minutes until it\u2019s foamy on top. If nothing happens, your milk was either too hot (killed the yeast) or too cold (didn\u2019t wake it up). Start over with fresh yeast and check the temperature.',
      },
      {
        number: 2,
        title: 'Mix the dough.',
        content:
          'Add the melted butter, egg, salt, and flour to the yeast mixture. Stir with a wooden spoon until it comes together into a shaggy mass \u2014 it\u2019ll look rough, and that\u2019s fine.',
      },
      {
        number: 3,
        title: 'Knead until smooth.',
        content:
          'Turn the dough onto a lightly floured surface and knead for 8\u201310 minutes. You\u2019re done when the dough is smooth, slightly tacky (not sticky), and springs back when you poke it. If it keeps sticking to your hands, add flour a tablespoon at a time. Less is more \u2014 too much flour makes dense buns.',
        tip: 'A dough scraper is your best friend here. It keeps your work surface clean and makes it easy to fold the dough without adding excess flour.',
      },
      {
        number: 4,
        title: 'First rise.',
        content:
          'Shape the dough into a ball and place it in a lightly oiled bowl. Cover with a damp towel or plastic wrap. Let it rise in a warm spot for 45\u201360 minutes, until it doubles in size.',
        tip: 'The ideal spot: your oven with just the light on, or on top of the fridge. You want warmth, not heat.',
      },
    ],
  },
  {
    phase: 2,
    title: 'Shape the Buns',
    steps: [
      {
        number: 5,
        title: 'Divide evenly.',
        content:
          'Punch down the risen dough and turn it out onto your work surface. Divide it into 8 equal pieces. If you have a kitchen scale, aim for about 3 oz (85g) each.',
        tip: 'Uneven portioning leads to buns that bake at different rates \u2014 some overdone, some underdone. A kitchen scale takes the guesswork out entirely.',
      },
      {
        number: 6,
        title: 'Shape into balls.',
        content:
          'Take each piece and tuck the edges underneath, rotating the dough against the counter with cupped hands to create surface tension. You want a smooth, taut top \u2014 that\u2019s what gives the bun its dome shape in the oven.',
      },
      {
        number: 7,
        title: 'Arrange and rest.',
        content:
          'Place the shaped buns on a parchment-lined baking sheet, about 2 inches apart. Cover loosely with a towel and let them rise again for 25\u201330 minutes. They\u2019ll puff up and nearly touch each other. That\u2019s what you want.',
      },
    ],
  },
  {
    phase: 3,
    title: 'Bake to Golden',
    steps: [
      {
        number: 8,
        title: 'Preheat your oven to 375\u00B0F (190\u00B0C).',
        content: 'Place a rack in the center of the oven and let it come to full temperature before baking.',
      },
      {
        number: 9,
        title: 'Apply the egg wash.',
        content:
          'Beat one egg with a tablespoon of water. Brush the tops of each bun gently \u2014 this is what creates that golden, slightly glossy finish. Sprinkle sesame seeds on top if you\u2019d like.',
      },
      {
        number: 10,
        title: 'Bake for 14\u201316 minutes.',
        content:
          'They\u2019re done when the tops are deep golden brown and the bottoms sound hollow when you tap them. Don\u2019t pull them early \u2014 an extra minute or two gives you better color and a firmer crust that softens as they cool.',
      },
      {
        number: 11,
        title: 'Cool on a wire rack.',
        content:
          'Give them at least 10\u201315 minutes before slicing. Cutting into hot bread compresses the crumb. A bread knife gives you a clean, even cut without tearing.',
      },
    ],
  },
];

const tips = [
  {
    title: 'For softer buns',
    content:
      'Replace half the milk with heavy cream. Richer dough = softer crumb.',
  },
  {
    title: 'For brioche-style buns',
    content:
      'Increase the butter to 5 tbsp and add an extra egg yolk. These take longer to knead, but the result is incredible.',
  },
  {
    title: 'For meal prep',
    content:
      'These freeze beautifully. Cool completely, store in a freezer bag for up to 3 months. Thaw at room temp or warm at 300\u00B0F for 5 minutes.',
  },
  {
    title: 'For sliders',
    content:
      'Divide the dough into 12\u201314 pieces instead of 8. Reduce bake time to 11\u201313 minutes.',
  },
];


// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PerfectHomemadeBunPage() {
  const fullUrl = 'https://blog.earthyblissco.com/blog/perfect-homemade-bun';
  const bannerImage =
    'https://images.unsplash.com/photo-1586816001966-79b736744398?w=1600&h=900&fit=crop';

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Banner */}
        <BannerImage
          src={bannerImage}
          alt="Golden homemade burger buns cooling on a wire rack"
        />

        {/* Article meta */}
        <ArticleMeta
          category="Recipes"
          title="Soft, Golden Burger Buns From Scratch (No Bread Machine Needed)"
          author={{ name: 'Earthy Bliss Team' }}
          publishedDate="2025-12-02"
          readTime={8}
        />

        {/* Social share */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-8">
          <SocialShare
            title="Soft, Golden Burger Buns From Scratch"
            url={fullUrl}
            image={bannerImage}
          />
        </div>

        {/* ============================================================== */}
        {/* ARTICLE BODY — inline JSX for full design control              */}
        {/* ============================================================== */}

        {/* Intro */}
        <div className="w-full max-w-[720px] mx-auto px-4">
          <div className="mb-12">
            <p className="text-lg md:text-xl text-[#2D150B] leading-[1.85] mb-6 first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8] first-letter:text-[#BD2B2D]">
              Once you bake your own burger buns, you can&rsquo;t go back. Not
              because the process is complicated &mdash; it&rsquo;s not. But
              because that first bite of a burger on a warm, freshly baked bun
              rewires your expectations. The soft give of the crumb. The faint
              sweetness. The way it holds everything together without falling
              apart in your hands.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
              Store-bought buns sit in a plastic bag for weeks. These won&rsquo;t
              last the afternoon.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8]">
              This recipe makes 8 buns in under two hours (including rise time).
              You don&rsquo;t need a stand mixer, a bread machine, or any special
              experience. Just a bowl, your hands, and a little patience with the
              dough.
            </p>
          </div>
        </div>

        {/* Video */}
        <RecipeVideo
          src="https://cdn.shopify.com/videos/c/o/v/8ca0f0e44d5e487098701da070f7edcd.mp4"
          title="How to make perfect homemade burger buns"
          caption="See the entire technique in under 60 seconds"
        />

        {/* Pullquote */}
        <div className="w-full max-w-[720px] mx-auto px-4 my-16">
          <blockquote className="relative py-8 px-6 md:px-10">
            {/* Decorative quotation mark */}
            <span
              className="absolute top-0 left-0 md:left-4 font-serif text-[6rem] md:text-[8rem] leading-none text-[#CBAC96]/30 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="font-serif text-2xl md:text-3xl text-[#2D150B] italic leading-snug relative z-10 pl-2 md:pl-6">
              A great burger starts with the bun. Get that right, and the rest
              just falls into place.
            </p>
          </blockquote>
        </div>

        {/* Flour note */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-4">
            What You&rsquo;ll Need
          </h2>
          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-2">
            <strong>Why bread flour?</strong> It has more protein than
            all-purpose (12&ndash;14% vs. 10&ndash;12%), which develops stronger
            gluten. That&rsquo;s what gives these buns their structure &mdash;
            soft and pillowy, but sturdy enough to hold a loaded burger without
            tearing.
          </p>
          <p className="text-[16px] text-[#3E3E3E] leading-[1.8]">
            All-purpose will work in a pinch, but the texture won&rsquo;t be
            quite the same. If you bake bread regularly, keep bread flour on
            hand. The difference is real.
          </p>
        </div>

        {/* Recipe card */}
        <RecipeCard
          title="Soft Golden Burger Buns"
          recipeYield="8 buns"
          prepTime="20 min"
          riseTime="1 hr 15 min"
          bakeTime="14-16 min"
          totalTime="~2 hrs"
          difficulty="Easy"
          ingredients={recipeIngredients}
          equipment={recipeEquipment}
        />

        {/* Steps */}
        <RecipeSteps phases={recipePhases} />

        {/* Tips */}
        <TipsCallout tips={tips} />

        {/* Closing */}
        <div className="w-full max-w-[720px] mx-auto px-4 my-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-6">
            The Sweet Finish
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            That&rsquo;s it. Flour, yeast, a little butter, and some patience.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            No preservatives. No ingredients you can&rsquo;t pronounce. Just
            bread the way it&rsquo;s supposed to taste &mdash; warm, soft, and
            made by your own hands.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-10">
            Once you&rsquo;ve built a burger on one of these, the
            plastic-bagged kind starts to feel like a compromise. And if
            you&rsquo;re already baking your own buns, you&rsquo;re the kind of
            person who appreciates good tools. The right pan, a solid dough
            scraper, a scale that&rsquo;s actually accurate &mdash; they
            don&rsquo;t make you a better baker, but they make the process a
            whole lot smoother.
          </p>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#2D150B] text-[#FFFDF9] hover:bg-[#2D150B]/90 px-10 py-6 text-base font-semibold rounded-sm"
            >
              <Link href="https://earthyblissco.com/collections/bread-making-essentials">
                Shop Baking Essentials &rarr;
              </Link>
            </Button>
          </div>
        </div>

        {/* Product callout (collection mode) */}
        <ProductCallout slug="perfect-homemade-bun" />

        {/* Related articles */}
        <RelatedArticles slug="perfect-homemade-bun" />
      </main>

      <Footer />
      <Toaster />

      {/* Recipe Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Recipe',
            name: 'Soft Golden Burger Buns',
            description:
              'A step-by-step recipe for soft, golden homemade burger buns with a tender crumb and bakery shine. Bread flour, egg wash, and a little patience.',
            image:
              'https://images.unsplash.com/photo-1586816001966-79b736744398?w=1200&h=630&fit=crop',
            author: { '@type': 'Organization', name: 'Earthy Bliss Co.' },
            datePublished: '2025-12-02',
            prepTime: 'PT20M',
            cookTime: 'PT16M',
            totalTime: 'PT2H',
            recipeYield: '8 buns',
            recipeCategory: 'Bread',
            recipeCuisine: 'American',
            recipeIngredient: [
              '3 cups bread flour',
              '2 1/4 tsp active dry yeast',
              '3/4 cup warm milk',
              '3 tbsp unsalted butter, melted',
              '2 tbsp granulated sugar',
              '1 tsp salt',
              '1 large egg',
              '1 egg + 1 tbsp water for egg wash',
              'Sesame seeds (optional)',
            ],
            recipeInstructions: [
              {
                '@type': 'HowToStep',
                name: 'Activate the yeast',
                text: 'Combine the warm milk, sugar, and yeast in a large bowl. Stir gently and let sit for 5-8 minutes until foamy.',
              },
              {
                '@type': 'HowToStep',
                name: 'Mix the dough',
                text: 'Add melted butter, egg, salt, and flour to the yeast mixture. Stir until it forms a shaggy mass.',
              },
              {
                '@type': 'HowToStep',
                name: 'Knead until smooth',
                text: 'Knead on a floured surface for 8-10 minutes until smooth and slightly tacky.',
              },
              {
                '@type': 'HowToStep',
                name: 'First rise',
                text: 'Place in oiled bowl, cover, and let rise 45-60 minutes until doubled.',
              },
              {
                '@type': 'HowToStep',
                name: 'Divide and shape',
                text: 'Divide into 8 equal pieces (about 3 oz each) and shape into smooth balls.',
              },
              {
                '@type': 'HowToStep',
                name: 'Second rise',
                text: 'Place on parchment-lined baking sheet, cover, and rise 25-30 minutes.',
              },
              {
                '@type': 'HowToStep',
                name: 'Egg wash and bake',
                text: 'Brush with egg wash, add sesame seeds if desired, and bake at 375°F for 14-16 minutes until golden.',
              },
              {
                '@type': 'HowToStep',
                name: 'Cool',
                text: 'Cool on a wire rack for at least 10-15 minutes before slicing.',
              },
            ],
          }),
        }}
      />
    </>
  );
}
