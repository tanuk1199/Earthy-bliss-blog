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
  title: 'The Best Banana Bread Recipe (Moist, Simple, One Bowl) | Earthy Bliss Co. Blog',
  description:
    'A one-bowl banana bread recipe that\'s moist, tender, and impossible to mess up. Ripe bananas, melted butter, and 10 minutes of prep — the rest is just patience.',
  openGraph: {
    title: 'The Best Banana Bread Recipe (Moist, Simple, One Bowl)',
    description:
      'A one-bowl banana bread recipe that\'s moist, tender, and impossible to mess up. Ripe bananas, melted butter, and 10 minutes of prep.',
    images: [
      '/images/blog/banana-bread-recipe.png',
    ],
    type: 'article',
    publishedTime: '2026-01-08',
    authors: ['Earthy Bliss Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Best Banana Bread Recipe (Moist, Simple, One Bowl)',
    description:
      'A one-bowl banana bread recipe that\'s moist, tender, and impossible to mess up.',
    images: [
      '/images/blog/banana-bread-recipe.png',
    ],
  },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const recipeIngredients = [
  {
    section: 'Wet Ingredients',
    items: [
      '3 large ripe bananas (about 1½ cups mashed)',
      '⅓ cup unsalted butter, melted',
      '¾ cup granulated sugar',
      '2 large eggs, room temperature',
      '1 tsp vanilla extract',
    ],
  },
  {
    section: 'Dry Ingredients',
    items: [
      '1½ cups all-purpose flour',
      '1 tsp baking soda',
      '½ tsp salt',
      '½ tsp ground cinnamon (optional)',
    ],
  },
  {
    section: 'Optional Add-Ins',
    items: [
      '½–1 cup chocolate chips',
      '½–1 cup chopped walnuts or pecans',
    ],
  },
];

const recipeEquipment = [
  '9×5-inch loaf pan',
  'Large mixing bowl',
  'Fork or potato masher',
  'Wooden spoon or rubber spatula',
  'Whisk',
  'Cooling rack',
  'Toothpick or cake tester',
];

const recipePhases = [
  {
    phase: 1,
    title: 'Prep the Bananas',
    steps: [
      {
        number: 1,
        title: 'Preheat your oven to 350°F (175°C).',
        content:
          'Grease a 9×5-inch loaf pan with butter or line it with parchment paper. Greasing prevents sticking, but parchment makes it even easier to lift the loaf out cleanly once it’s baked.',
      },
      {
        number: 2,
        title: 'Mash the bananas.',
        content:
          'Peel the bananas and place them in a large mixing bowl. Use a fork or potato masher to mash them until mostly smooth — a few lumps are fine. You want about 1½ cups of mashed banana. The riper the bananas, the sweeter and more flavorful your bread will be. Look for bananas with lots of brown spots.',
        tip: 'If your bananas aren’t ripe yet, put them in a 300°F oven for 15–20 minutes until the skins turn black. Let them cool slightly before peeling. The insides will be soft and sweet.',
      },
    ],
  },
  {
    phase: 2,
    title: 'Mix the Batter',
    steps: [
      {
        number: 3,
        title: 'Add the wet ingredients.',
        content:
          'Pour the melted butter into the bowl with the mashed bananas and stir to combine. Add the sugar, eggs, and vanilla extract. Mix until everything is well blended — you should have a thick, slightly lumpy mixture.',
      },
      {
        number: 4,
        title: 'Whisk the dry ingredients.',
        content:
          'In a separate bowl (or just measure directly into the banana mixture if you’re confident), whisk together the flour, baking soda, salt, and cinnamon. Whisking helps distribute the baking soda evenly, which is what gives the bread its rise and tender crumb.',
        tip: 'Don’t skip the whisking step. Unevenly distributed baking soda can create bitter pockets in the finished loaf.',
      },
      {
        number: 5,
        title: 'Fold the dry into the wet.',
        content:
          'Add the flour mixture to the banana mixture. Stir gently with a wooden spoon or rubber spatula until just combined. You should still see a few streaks of flour — that’s fine. Overmixing develops gluten, which makes the bread tough and dense instead of tender.',
        tip: 'Use a folding motion: scrape the bottom of the bowl and lift up and over. Stop as soon as you don’t see dry flour anymore.',
      },
      {
        number: 6,
        title: 'Add your mix-ins (optional).',
        content:
          'If you’re adding chocolate chips, nuts, or both, fold them in now. Start with ½ cup if you want them as an accent, or go up to 1 cup if you want them in every bite. Toss them in a little flour first to help prevent sinking.',
      },
    ],
  },
  {
    phase: 3,
    title: 'Bake and Cool',
    steps: [
      {
        number: 7,
        title: 'Pour into the pan.',
        content:
          'Scrape the batter into your prepared loaf pan. Use your spatula to spread it evenly and smooth the top. It should come about two-thirds of the way up the sides of the pan.',
      },
      {
        number: 8,
        title: 'Bake for 55–65 minutes.',
        content:
          'Place the pan in the center of your preheated oven. Bake until the top is golden brown and a toothpick inserted into the center comes out clean or with just a few moist crumbs. Start checking at the 55-minute mark. If the top is browning too quickly, tent it loosely with aluminum foil for the last 10–15 minutes.',
        tip: 'Every oven is different. A few extra minutes won’t hurt — underbaked banana bread is gummy in the middle.',
      },
      {
        number: 9,
        title: 'Cool in the pan for 10 minutes.',
        content:
          'Once the loaf is done, remove it from the oven and let it sit in the pan for 10 minutes. This gives it time to firm up slightly, making it easier to remove without breaking.',
      },
      {
        number: 10,
        title: 'Turn out onto a cooling rack.',
        content:
          'Run a butter knife around the edges of the pan to loosen the loaf, then turn it out onto a wire cooling rack. Let it cool completely before slicing — at least 30 minutes. The bread should have a golden-brown crust that crackles slightly as it cools. That’s the sign of a perfectly baked loaf.',
      },
    ],
  },
];

const tips = [
  {
    title: 'For extra-moist bread',
    content:
      'Replace ¼ cup of the melted butter with sour cream or Greek yogurt. The acidity balances the sweetness and adds incredible moisture.',
  },
  {
    title: 'For chocolate banana bread',
    content:
      'Add ¼ cup cocoa powder to the dry ingredients and reduce the flour to 1¼ cups. Fold in ¾ cup chocolate chips. You’ll get a rich, fudgy loaf that barely qualifies as breakfast.',
  },
  {
    title: 'For storage',
    content:
      'Wrap the cooled loaf tightly in plastic wrap or store in an airtight container at room temperature for up to 4 days. It actually gets better on day two. For longer storage, freeze individual slices wrapped in foil — they thaw in minutes and taste freshly baked.',
  },
  {
    title: 'For muffins instead',
    content:
      'Divide the batter into a greased 12-cup muffin tin and bake at 350°F for 18–22 minutes. Perfect for grab-and-go breakfasts.',
  },
];


// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function BananaBreadRecipePage() {
  const fullUrl = 'https://blog.earthyblissco.com/blog/banana-bread-recipe';
  const bannerImage =
    '/images/blog/banana-bread-recipe.png';

  return (
    <>
      {/* JSON-LD Recipe Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Recipe',
            name: 'The Best Banana Bread Recipe (Moist, Simple, One Bowl)',
            description:
              'A one-bowl banana bread recipe that’s moist, tender, and impossible to mess up. Ripe bananas, melted butter, and 10 minutes of prep — the rest is just patience.',
            image: [
              '/images/blog/banana-bread-recipe.png',
            ],
            author: {
              '@type': 'Organization',
              name: 'Earthy Bliss Co.',
            },
            datePublished: '2026-01-08',
            prepTime: 'PT10M',
            cookTime: 'PT60M',
            totalTime: 'PT70M',
            recipeYield: '1 loaf (8-10 slices)',
            recipeCategory: 'Dessert',
            recipeCuisine: 'American',
            recipeIngredient: [
              '3 large ripe bananas (about 1½ cups mashed)',
              '⅓ cup unsalted butter, melted',
              '¾ cup granulated sugar',
              '2 large eggs, room temperature',
              '1 tsp vanilla extract',
              '1½ cups all-purpose flour',
              '1 tsp baking soda',
              '½ tsp salt',
              '½ tsp ground cinnamon (optional)',
              '½–1 cup chocolate chips (optional)',
              '½–1 cup chopped walnuts or pecans (optional)',
            ],
            recipeInstructions: [
              {
                '@type': 'HowToStep',
                name: 'Preheat and prep',
                text: 'Preheat your oven to 350°F (175°C). Grease a 9×5-inch loaf pan with butter or line it with parchment paper.',
              },
              {
                '@type': 'HowToStep',
                name: 'Mash the bananas',
                text: 'Peel the bananas and place them in a large mixing bowl. Use a fork or potato masher to mash them until mostly smooth — a few lumps are fine. You want about 1½ cups of mashed banana.',
              },
              {
                '@type': 'HowToStep',
                name: 'Add wet ingredients',
                text: 'Pour the melted butter into the bowl with the mashed bananas and stir to combine. Add the sugar, eggs, and vanilla extract. Mix until everything is well blended.',
              },
              {
                '@type': 'HowToStep',
                name: 'Whisk dry ingredients',
                text: 'In a separate bowl, whisk together the flour, baking soda, salt, and cinnamon.',
              },
              {
                '@type': 'HowToStep',
                name: 'Fold together',
                text: 'Add the flour mixture to the banana mixture. Stir gently with a wooden spoon or rubber spatula until just combined. You should still see a few streaks of flour.',
              },
              {
                '@type': 'HowToStep',
                name: 'Add mix-ins',
                text: 'If using chocolate chips or nuts, fold them in now.',
              },
              {
                '@type': 'HowToStep',
                name: 'Pour and bake',
                text: 'Scrape the batter into your prepared loaf pan. Bake for 55–65 minutes until the top is golden brown and a toothpick inserted into the center comes out clean.',
              },
              {
                '@type': 'HowToStep',
                name: 'Cool',
                text: 'Let the loaf cool in the pan for 10 minutes, then turn out onto a wire cooling rack. Cool completely before slicing — at least 30 minutes.',
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
          alt="Perfectly golden banana bread cooling on a wire rack with visible chocolate chips"
        />

        {/* Article meta */}
        <ArticleMeta
          category="Recipes"
          title="The Best Banana Bread Recipe (Moist, Simple, One Bowl)"
          author={{ name: 'Earthy Bliss Team' }}
          publishedDate="2026-01-08"
          readTime={7}
        />

        {/* Social share */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-8">
          <SocialShare
            title="The Best Banana Bread Recipe (Moist, Simple, One Bowl)"
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
              If you&rsquo;ve ever baked banana bread and wondered why some
              loaves turn out moist and tender while others feel dry and
              crumbly, the answer isn&rsquo;t in the recipe. It&rsquo;s in the
              bananas themselves.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
              Those spotty, almost-too-far-gone bananas you keep pushing to the
              back of the counter? Those are exactly what you need. They
              aren&rsquo;t just for flavor — they bring natural sweetness,
              moisture, and structure. The riper they are, the better your bread
              will be.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
              This is a one-bowl recipe. No stand mixer. No complicated
              technique. Just mash, stir, fold, and bake. The hardest part is
              waiting for the loaf to cool before you slice into it.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8]">
              And if you want to add chocolate chips, walnuts, or both — go
              ahead. Banana bread is forgiving like that.
            </p>
          </div>
        </div>

        {/* Video */}
        <RecipeVideo
          src="https://cdn.shopify.com/videos/c/o/v/9b47ec7b512546b5873655968b099680.mp4"
          title="How to make the perfect banana bread"
          caption="Watch the entire process from mashing to baking in 60 seconds"
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
              The riper the bananas, the better the bread. Brown spots are your
              friend.
            </p>
          </blockquote>
        </div>

        {/* Why This Recipe Works */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-4">
            Why This Recipe Works
          </h2>
          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            <strong>Melted butter instead of softened.</strong> It mixes more
            easily and creates a denser, moister crumb. You don&rsquo;t need a
            mixer — just a bowl and a spoon.
          </p>
          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            <strong>Minimal mixing.</strong> Banana bread is a quick bread, not
            a yeast bread. The less you stir, the more tender it stays.
            Overmixing develops gluten, which makes the texture tough and
            chewy.
          </p>
          <p className="text-[16px] text-[#2D150B] leading-[1.8]">
            <strong>No mixer required.</strong> This is the kind of recipe you
            can make at 10 p.m. when you realize you have three overripe bananas
            and no plans for them. It&rsquo;s that simple.
          </p>
        </div>

        {/* Recipe card */}
        <RecipeCard
          title="The Best Banana Bread"
          recipeYield="1 loaf (8-10 slices)"
          prepTime="10 min"
          riseTime="—"
          bakeTime="55-65 min"
          totalTime="~1 hr 10 min"
          difficulty="Very Easy"
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
            The Final Slice
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            This is the kind of recipe that gets requested. The kind people ask
            you to make for potlucks, breakfast gatherings, and lazy Sunday
            mornings. Not because it&rsquo;s complicated or impressive —
            because it&rsquo;s simple and it works every single time.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            The bread should have a golden-brown crust that crackles slightly
            as it cools. The inside should be tender, moist, and just sweet
            enough. And if you added chocolate chips, you should see them
            peeking out from every slice.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-10">
            Good bread starts with good ingredients, but it also starts with
            good tools. A reliable loaf pan that bakes evenly. A wooden spoon
            that feels solid in your hand. A cooling rack that lets air
            circulate so the bottom doesn&rsquo;t get soggy. The small things
            add up.
          </p>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#2D150B] text-[#FFFDF9] hover:bg-[#2D150B]/90 px-10 py-6 text-base font-semibold rounded-sm"
            >
              <Link href="https://earthyblissco.com/collections/baking-pans">
                Shop Baking Essentials &rarr;
              </Link>
            </Button>
          </div>
        </div>

        {/* Product callout (collection mode) */}
        <ProductCallout slug="banana-bread-recipe" />

        {/* Related articles */}
        <RelatedArticles slug="banana-bread-recipe" />
      </main>

      <Footer />
      <Toaster />
    </>
  );
}
