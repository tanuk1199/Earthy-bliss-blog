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
  title: 'Easy Homemade Pizza Dough (Ready in Under 90 Minutes) | Earthy Bliss Co. Blog',
  description:
    'A foolproof homemade pizza dough recipe with a chewy, crispy crust. Six ingredients, minimal kneading, and ready for the oven in under 90 minutes.',
  openGraph: {
    title: 'Easy Homemade Pizza Dough (Ready in Under 90 Minutes)',
    description:
      'A foolproof homemade pizza dough recipe with a chewy, crispy crust. Six ingredients, minimal kneading, and ready for the oven in under 90 minutes.',
    images: [
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&h=630&fit=crop',
    ],
    type: 'article',
    publishedTime: '2025-11-25',
    authors: ['Earthy Bliss Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy Homemade Pizza Dough (Ready in Under 90 Minutes)',
    description:
      'A foolproof homemade pizza dough recipe with a chewy, crispy crust. Six ingredients, minimal kneading, and ready for the oven in under 90 minutes.',
    images: [
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&h=630&fit=crop',
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
      '3 cups bread flour (or all-purpose flour, plus extra for dusting)',
      '1 packet active dry yeast (2 ¼ tsp)',
      '1 cup warm water (about 110°F)',
      '1 tsp granulated sugar',
      '1 ½ tsp salt',
      '2 tbsp olive oil',
    ],
  },
];

const recipeEquipment = [
  'Large mixing bowl',
  'Kitchen thermometer (optional but helpful)',
  'Wooden spoon or dough whisk',
  'Clean kitchen towel',
  'Rolling surface or parchment paper',
  'Pizza stone or baking sheet',
  'Oven mitts',
];

const recipePhases = [
  {
    phase: 1,
    title: 'Make the Dough',
    steps: [
      {
        number: 1,
        title: 'Activate the yeast.',
        content:
          'Pour the warm water into a large mixing bowl. Stir in the sugar until it dissolves, then sprinkle the yeast on top. Let it sit undisturbed for 5–8 minutes. You’re looking for a thick foam layer on the surface — that tells you the yeast is alive and ready to work.',
        tip: 'Water temperature matters. Too hot (over 120°F) kills the yeast. Too cold (under 100°F) and it won’t wake up. Aim for warm tap water that feels comfortable on your wrist, like bath water.',
      },
      {
        number: 2,
        title: 'Add oil, salt, and flour.',
        content:
          'Once the yeast is foamy, add the olive oil and salt. Stir briefly to combine. Then add the flour, one cup at a time, stirring with a wooden spoon or dough whisk until it comes together into a rough, shaggy dough.',
      },
      {
        number: 3,
        title: 'Knead until smooth.',
        content:
          'Turn the dough out onto a lightly floured surface. Knead for 5–7 minutes, using the heel of your hand to push the dough away, then fold it back over itself. You’re done when it feels smooth, elastic, and springs back slightly when you poke it. It should be soft but not sticky.',
        tip: 'If the dough sticks to your hands or the counter, sprinkle just a little more flour. But go easy — too much flour makes the dough dense and heavy.',
      },
    ],
  },
  {
    phase: 2,
    title: 'Rise and Divide',
    steps: [
      {
        number: 4,
        title: 'Let it rise.',
        content:
          'Lightly oil the mixing bowl and place the dough ball inside, turning it once to coat all sides. Cover the bowl with a damp kitchen towel or plastic wrap. Set it in a warm spot and let it rise for about 1 hour, or until it doubles in size.',
        tip: 'Your oven with just the light on makes a perfect rising chamber. Or try the top of the fridge if your kitchen is drafty.',
      },
      {
        number: 5,
        title: 'Punch down and divide.',
        content:
          'Once risen, punch down the dough gently to release the air bubbles. Turn it out onto a clean surface. Divide it into two equal portions for medium pizzas, or leave it whole for one large pizza. Shape each portion into a smooth ball by tucking the edges underneath.',
      },
      {
        number: 6,
        title: 'Rest before shaping.',
        content:
          'Let the dough balls rest on the counter, covered loosely with a towel, for about 10 minutes. This short rest relaxes the gluten, making the dough much easier to stretch.',
      },
    ],
  },
  {
    phase: 3,
    title: 'Shape and Bake',
    steps: [
      {
        number: 7,
        title: 'Preheat your oven.',
        content:
          'Set your oven to 475–500°F (245–260°C). If you have a pizza stone, place it on the middle rack to preheat. If you’re using a baking sheet, you can skip the preheat for the pan — but the oven itself needs to be screaming hot before your pizza goes in.',
        tip: 'A preheated pizza stone or upside-down baking sheet gives you a crispier bottom crust. Let it heat for at least 20 minutes before baking.',
      },
      {
        number: 8,
        title: 'Shape the dough.',
        content:
          'Take one dough ball and place it on a lightly floured surface or a sheet of parchment paper. Use your hands to gently press it out from the center, working your way to the edges. Stretch it into a round or oval shape, about ¼ inch thick. Don’t use a rolling pin — it presses out all the air bubbles that create texture.',
        tip: 'For a thicker, airier crust, leave a slightly thicker edge around the perimeter. For thin and crispy, stretch it evenly all the way to the edge.',
      },
      {
        number: 9,
        title: 'Add toppings.',
        content:
          'Transfer your shaped dough to a piece of parchment paper or a floured pizza peel. Add your sauce, cheese, and toppings. Keep it simple — overloading the pizza makes the crust soggy.',
      },
      {
        number: 10,
        title: 'Bake for 10–14 minutes.',
        content:
          'Slide the pizza (parchment and all, if using) onto the preheated stone or baking sheet. Bake for 10–14 minutes, until the crust is golden brown and the cheese is bubbling. The exact time depends on your oven and how thick your crust is.',
      },
      {
        number: 11,
        title: 'Cool briefly, then slice.',
        content:
          'Remove the pizza from the oven and let it rest for 2–3 minutes before slicing. This lets the cheese set slightly so it doesn’t slide off when you cut it. Use a pizza cutter or a sharp chef’s knife.',
      },
    ],
  },
];

const tips = [
  {
    title: 'Bread flour vs. all-purpose',
    content:
      'Bread flour has more protein (12–14%) than all-purpose (10–12%), which creates a chewier, more structured crust. All-purpose works fine, but if you like that pizzeria-style chew, bread flour is worth keeping on hand.',
  },
  {
    title: 'Don’t use a rolling pin',
    content:
      'Rolling pins press out all the air bubbles that give pizza dough its light, airy texture. Stretch it by hand instead — it’s easier than it looks, and the result is infinitely better.',
  },
  {
    title: 'Cold ferment for more flavor',
    content:
      'After the first rise, instead of shaping immediately, cover the dough tightly and refrigerate it overnight (or up to 3 days). The slow fermentation develops deeper, slightly tangy flavor. Let it come to room temp for 30 minutes before shaping.',
  },
  {
    title: 'Preheat your baking surface',
    content:
      'A hot pizza stone or upside-down baking sheet mimics the floor of a pizza oven. It crisps the bottom crust fast, preventing sogginess. Preheat it for at least 20 minutes before baking.',
  },
  {
    title: 'Make extra and freeze it',
    content:
      'This dough freezes beautifully. After dividing, wrap each ball tightly in plastic wrap and freeze for up to 3 months. Thaw in the fridge overnight, then bring to room temp before shaping.',
  },
];


// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HomemadePizzaDoughPage() {
  const fullUrl = 'https://blog.earthyblissco.com/blog/homemade-pizza-dough';
  const bannerImage =
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&h=900&fit=crop';

  return (
    <>
      {/* JSON-LD Schema for Recipe */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Recipe',
            name: 'Easy Homemade Pizza Dough',
            image: [bannerImage],
            author: {
              '@type': 'Organization',
              name: 'Earthy Bliss Co.',
            },
            datePublished: '2025-11-25',
            description:
              'A foolproof homemade pizza dough recipe with a chewy, crispy crust. Six ingredients, minimal kneading, and ready for the oven in under 90 minutes.',
            prepTime: 'PT15M',
            cookTime: 'PT14M',
            totalTime: 'PT1H30M',
            keywords:
              'homemade pizza dough, pizza dough recipe, easy pizza dough, homemade pizza dough from scratch',
            recipeYield: '2 medium pizzas or 1 large',
            recipeCategory: 'Main Dish',
            recipeCuisine: 'Italian',
            recipeIngredient: [
              '3 cups bread flour (or all-purpose flour)',
              '1 packet active dry yeast (2 ¼ tsp)',
              '1 cup warm water (about 110°F)',
              '1 tsp granulated sugar',
              '1 ½ tsp salt',
              '2 tbsp olive oil',
            ],
            recipeInstructions: [
              {
                '@type': 'HowToSection',
                name: 'Make the Dough',
                itemListElement: [
                  {
                    '@type': 'HowToStep',
                    text: 'Pour the warm water into a large mixing bowl. Stir in the sugar until it dissolves, then sprinkle the yeast on top. Let it sit undisturbed for 5–8 minutes until a thick foam layer forms on the surface.',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Once the yeast is foamy, add the olive oil and salt. Stir briefly to combine. Then add the flour, one cup at a time, stirring until it comes together into a rough, shaggy dough.',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Turn the dough out onto a lightly floured surface. Knead for 5–7 minutes until smooth, elastic, and springs back when poked.',
                  },
                ],
              },
              {
                '@type': 'HowToSection',
                name: 'Rise and Divide',
                itemListElement: [
                  {
                    '@type': 'HowToStep',
                    text: 'Lightly oil the mixing bowl and place the dough ball inside. Cover with a damp towel. Let it rise in a warm spot for about 1 hour, or until doubled in size.',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Punch down the dough and divide it into two equal portions. Shape each into a smooth ball.',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Let the dough balls rest, covered, for about 10 minutes.',
                  },
                ],
              },
              {
                '@type': 'HowToSection',
                name: 'Shape and Bake',
                itemListElement: [
                  {
                    '@type': 'HowToStep',
                    text: 'Preheat your oven to 475–500°F (245–260°C). If using a pizza stone, preheat it on the middle rack.',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Gently press and stretch the dough by hand into a round or oval shape, about ¼ inch thick. Do not use a rolling pin.',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Add your sauce, cheese, and toppings.',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Bake for 10–14 minutes, until the crust is golden brown and the cheese is bubbling.',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Remove from oven and let rest for 2–3 minutes before slicing.',
                  },
                ],
              },
            ],
          }),
        }}
      />

      <Navbar />

      <main className="min-h-screen">
        {/* Banner */}
        <BannerImage
          src={bannerImage}
          alt="Freshly baked homemade pizza with golden crust and melted cheese"
        />

        {/* Article meta */}
        <ArticleMeta
          category="Recipes"
          title="Easy Homemade Pizza Dough (Ready in Under 90 Minutes)"
          author={{ name: 'Earthy Bliss Team' }}
          publishedDate="2025-11-25"
          readTime={9}
        />

        {/* Social share */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-8">
          <SocialShare
            title="Easy Homemade Pizza Dough (Ready in Under 90 Minutes)"
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
              There’s a reason people remember their first bite of real pizza
              from a wood-fired oven. It’s not just the toppings or the sauce.
              It’s the crust — that perfect balance of chewy and crispy, soft
              and structured, with just enough char on the edges to remind you
              it was made with fire.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
              You can’t get that from a frozen pizza. But you can get
              surprisingly close in your own kitchen, and it doesn’t require
              specialty equipment, a sourdough starter, or hours of your day.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8]">
              This recipe makes two medium pizzas (or one large) in under 90
              minutes, start to finish. Six ingredients. Minimal kneading. No
              stand mixer. Just a bowl, your hands, and a hot oven. The secret?
              A teaspoon of sugar to feed the yeast, a proper rise, and
              stretching the dough by hand instead of rolling it flat.
            </p>
          </div>
        </div>

        {/* Video */}
        <RecipeVideo
          src="https://cdn.shopify.com/videos/c/o/v/9536568d55b446e0b36b37d41c72c734.mp4"
          title="The secret ingredient for homemade pizza dough"
          caption="See why a teaspoon of sugar makes all the difference"
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
              Great pizza starts with the dough. Get that right, and everything
              else just falls into place.
            </p>
          </blockquote>
        </div>

        {/* Flour note */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-4">
            Why Sugar Matters
          </h2>
          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-2">
            <strong>The secret ingredient isn’t a secret at all.</strong> It’s
            sugar. Just one teaspoon, dissolved in warm water before the yeast
            goes in. Sugar feeds the yeast, giving it the energy it needs to
            wake up, multiply, and create those air bubbles that make the dough
            rise.
          </p>
          <p className="text-[16px] text-[#3E3E3E] leading-[1.8]">
            Without it, the yeast works slower and the dough takes longer to
            rise. With it, you get a light, airy crust with better texture and
            flavor — ready in half the time. That one small step makes all the
            difference.
          </p>
        </div>

        {/* Recipe card */}
        <RecipeCard
          title="Easy Homemade Pizza Dough"
          recipeYield="2 medium pizzas or 1 large"
          prepTime="15 min"
          riseTime="1 hr 10 min"
          bakeTime="10-14 min"
          totalTime="~1 hr 30 min"
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
            The Last Slice
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            That’s it. Six ingredients, 90 minutes, and a pizza that tastes
            like it came from a real pizzeria.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            No artificial dough conditioners. No preservatives you can’t
            pronounce. Just flour, water, yeast, and time. The way pizza dough
            has been made for centuries.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-10">
            Once you’ve tasted homemade pizza on dough you made yourself, the
            frozen kind starts to feel like settling. And if you’re already
            making your own dough, you’re the kind of person who appreciates
            good tools. A sharp dough scraper, a reliable kitchen scale, a
            proper pizza stone — they don’t make you a better baker, but they
            make the process smoother, cleaner, and more enjoyable.
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
        <ProductCallout slug="homemade-pizza-dough" />

        {/* Related articles */}
        <RelatedArticles slug="homemade-pizza-dough" />
      </main>

      <Footer />
      <Toaster />
    </>
  );
}
