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
  title: 'Easy Homemade Focaccia: Crispy Outside, Soft Inside | Earthy Bliss Co. Blog',
  description:
    'A simple homemade focaccia recipe with a crispy golden crust and impossibly soft interior. Olive oil, sea salt, rosemary — and your fingers do the kneading.',
  openGraph: {
    title: 'Easy Homemade Focaccia: Crispy Outside, Soft Inside',
    description:
      'A simple homemade focaccia recipe with a crispy golden crust and impossibly soft interior. Olive oil, sea salt, rosemary — and your fingers do the kneading.',
    images: [
      '/images/blog/easy-focaccia-recipe.png',
    ],
    type: 'article',
    publishedTime: '2026-02-03',
    authors: ['Earthy Bliss Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy Homemade Focaccia: Crispy Outside, Soft Inside',
    description:
      'A simple homemade focaccia recipe with a crispy golden crust and impossibly soft interior.',
    images: [
      '/images/blog/easy-focaccia-recipe.png',
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
      '3 cups all-purpose flour',
      '1 packet (2 ¼ tsp) active dry yeast',
      '1 ¼ cups warm water (about 110°F)',
      '2 tsp granulated sugar',
      '1 ½ tsp salt',
      '¼ cup extra virgin olive oil (for dough)',
    ],
  },
  {
    section: 'Pan & Topping',
    items: [
      '3 tbsp extra virgin olive oil (for pan and topping)',
      'Flaky sea salt',
      'Fresh rosemary leaves (about 2–3 sprigs)',
      'Optional: cherry tomatoes, garlic, red pepper flakes',
    ],
  },
];

const recipeEquipment = [
  '9×13 inch sheet pan or baking dish',
  'Large mixing bowl',
  'Kitchen towel or plastic wrap',
  'Measuring cups and spoons',
  'Pastry brush (optional)',
];

const recipePhases = [
  {
    phase: 1,
    title: 'Make the Dough',
    steps: [
      {
        number: 1,
        title: 'Bloom the yeast.',
        content:
          'In a large bowl, combine the warm water, sugar, and yeast. Stir gently and let it sit for 5–8 minutes until foamy. If nothing happens, your water was too hot or too cold. Start over with fresh yeast and check the temperature — 110°F feels warm to the touch, but not hot.',
      },
      {
        number: 2,
        title: 'Mix the dough.',
        content:
          'Add the flour, salt, and ¼ cup olive oil to the yeast mixture. Stir with a wooden spoon or your hands until everything comes together into a shaggy, sticky dough. It will look rough and wet — that\'s exactly right.',
        tip: 'Focaccia dough is wetter than most bread doughs. Resist the urge to add more flour. That wetness is what creates the airy, open crumb.',
      },
      {
        number: 3,
        title: 'Fold and rest.',
        content:
          'Instead of kneading, use a stretch-and-fold technique. Wet your hands, grab one edge of the dough, stretch it up, and fold it over itself. Rotate the bowl 90 degrees and repeat. Do this 4 times, then let the dough rest for 10 minutes. Repeat the stretch-and-fold process two more times (30 minutes total). The dough will become smoother and more cohesive each time.',
      },
      {
        number: 4,
        title: 'First rise.',
        content:
          'Drizzle a little olive oil around the inside of the bowl, turning the dough to coat it. Cover with a damp towel or plastic wrap and let it rise in a warm spot for 60–90 minutes, until doubled in size. It should be puffy and full of air bubbles.',
        tip: 'For the warmest spot, turn your oven light on (not the oven itself) and place the bowl inside. Or set it on top of the fridge.',
      },
    ],
  },
  {
    phase: 2,
    title: 'Shape and Dimple',
    steps: [
      {
        number: 5,
        title: 'Prepare the pan.',
        content:
          'Drizzle 2 tablespoons of olive oil into your 9×13 inch sheet pan. Use your hands to spread it evenly across the bottom and up the sides. This is what gives focaccia its crispy, golden underside.',
      },
      {
        number: 6,
        title: 'Transfer the dough.',
        content:
          'Turn the risen dough out into the oiled pan. Don\'t punch it down — you want to keep those air bubbles. Use your fingertips to gently stretch the dough toward the edges. If it resists, let it rest for 5 minutes and try again. Get it as close to the corners as you can.',
      },
      {
        number: 7,
        title: 'Dimple the dough.',
        content:
          'Press your fingertips straight down into the dough, all the way to the bottom of the pan, creating deep dimples across the entire surface. Don\'t be shy — these dimples are signature focaccia. They hold olive oil, salt, and toppings, and they help the bread bake evenly.',
        tip: 'The dimpling action redistributes the air pockets and gives focaccia its iconic texture. This is the fun part.',
      },
      {
        number: 8,
        title: 'Second rise and top.',
        content:
          'Cover the pan loosely with a towel and let the dough rise for another 30 minutes. It will puff up and fill the dimples slightly. Just before baking, drizzle the remaining tablespoon of olive oil over the top, sprinkle with flaky sea salt, and press fresh rosemary leaves into the dough. Add cherry tomatoes or garlic slices if you like.',
      },
    ],
  },
  {
    phase: 3,
    title: 'Bake to Golden Perfection',
    steps: [
      {
        number: 9,
        title: 'Preheat your oven to 425°F (220°C).',
        content:
          'Place a rack in the center of the oven and let it come to full temperature. Focaccia needs high heat to develop that crispy, golden crust.',
      },
      {
        number: 10,
        title: 'Bake for 20–25 minutes.',
        content:
          'The focaccia is done when the top is deeply golden brown and the edges are crisp. If you lift a corner with a spatula, the bottom should be golden too. Don\'t pull it early — an extra 2–3 minutes makes all the difference.',
        tip: 'If the top is browning too quickly but the center isn\'t done, tent loosely with foil for the last 5 minutes.',
      },
      {
        number: 11,
        title: 'Brush with olive oil.',
        content:
          'As soon as it comes out of the oven, brush the top with another drizzle of olive oil. This adds flavor and gives it a beautiful sheen. Let it cool in the pan for 10 minutes, then transfer to a cutting board.',
      },
      {
        number: 12,
        title: 'Slice and serve.',
        content:
          'Cut into squares or rectangles. Focaccia is best served warm, but it\'s still delicious at room temperature. It makes incredible sandwiches, and it\'s perfect for dipping in olive oil and balsamic vinegar.',
      },
    ],
  },
];

const tips = [
  {
    title: 'For flavored oil',
    content:
      'Infuse your olive oil before baking. Warm ¼ cup olive oil with crushed garlic, red pepper flakes, or herbs in a small pan over low heat for 5 minutes. Let it cool, then use it for the topping. The flavor blooms in the oven.',
  },
  {
    title: 'For overnight focaccia',
    content:
      'After the first rise, cover the bowl tightly and refrigerate overnight (up to 24 hours). The next day, bring it to room temperature for 30 minutes, then proceed with shaping and the second rise. Cold fermentation deepens the flavor.',
  },
  {
    title: 'For storing and freezing',
    content:
      'Store leftovers wrapped in foil at room temperature for up to 2 days, or freeze in a ziplock bag for up to 3 months. Reheat at 350°F for 8–10 minutes to crisp it back up.',
  },
  {
    title: 'For sandwich use',
    content:
      'Slice the focaccia horizontally to make one giant sandwich, then cut into portions. It holds up beautifully to roasted vegetables, cured meats, fresh mozzarella, and arugula.',
  },
];


// Recipe structured data
const recipeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: 'Easy Homemade Focaccia',
  description:
    'A simple homemade focaccia recipe with a crispy golden crust and impossibly soft interior. No kneading required — just stretch, fold, and dimple.',
  image: [
    '/images/blog/easy-focaccia-recipe.png',
  ],
  author: {
    '@type': 'Organization',
    name: 'Earthy Bliss Co.',
  },
  datePublished: '2026-02-03',
  prepTime: 'PT20M',
  cookTime: 'PT25M',
  totalTime: 'PT2H45M',
  recipeYield: '8 servings',
  recipeCategory: 'Bread',
  recipeCuisine: 'Italian',
  keywords: 'focaccia, homemade bread, olive oil bread, Italian bread, no-knead bread',
  recipeIngredient: [
    '3 cups all-purpose flour',
    '1 packet (2 ¼ tsp) active dry yeast',
    '1 ¼ cups warm water (about 110°F)',
    '2 tsp granulated sugar',
    '1 ½ tsp salt',
    '¼ cup extra virgin olive oil (for dough)',
    '3 tbsp extra virgin olive oil (for pan and topping)',
    'Flaky sea salt',
    'Fresh rosemary leaves (about 2–3 sprigs)',
  ],
  recipeInstructions: [
    {
      '@type': 'HowToStep',
      name: 'Bloom the yeast',
      text: 'In a large bowl, combine the warm water, sugar, and yeast. Stir gently and let it sit for 5–8 minutes until foamy.',
    },
    {
      '@type': 'HowToStep',
      name: 'Mix the dough',
      text: 'Add the flour, salt, and ¼ cup olive oil to the yeast mixture. Stir until everything comes together into a shaggy, sticky dough.',
    },
    {
      '@type': 'HowToStep',
      name: 'Fold and rest',
      text: 'Wet your hands and perform stretch-and-fold technique: grab one edge, stretch up, fold over. Rotate bowl 90 degrees and repeat 4 times. Rest 10 minutes. Repeat process two more times.',
    },
    {
      '@type': 'HowToStep',
      name: 'First rise',
      text: 'Drizzle olive oil around the bowl and coat the dough. Cover and let rise in a warm spot for 60–90 minutes until doubled in size.',
    },
    {
      '@type': 'HowToStep',
      name: 'Prepare the pan',
      text: 'Drizzle 2 tablespoons olive oil into a 9×13 inch sheet pan and spread evenly across the bottom and up the sides.',
    },
    {
      '@type': 'HowToStep',
      name: 'Transfer and stretch',
      text: 'Turn the risen dough into the oiled pan. Gently stretch toward the edges with your fingertips.',
    },
    {
      '@type': 'HowToStep',
      name: 'Dimple the dough',
      text: 'Press your fingertips straight down into the dough, all the way to the bottom, creating deep dimples across the entire surface.',
    },
    {
      '@type': 'HowToStep',
      name: 'Second rise and top',
      text: 'Cover loosely and let rise 30 minutes. Before baking, drizzle remaining olive oil, sprinkle with flaky sea salt, and press fresh rosemary into the dough.',
    },
    {
      '@type': 'HowToStep',
      name: 'Bake',
      text: 'Preheat oven to 425°F. Bake for 20–25 minutes until deeply golden brown and crisp on the edges.',
    },
    {
      '@type': 'HowToStep',
      name: 'Finish and serve',
      text: 'Brush with olive oil immediately after removing from oven. Cool 10 minutes in pan, then transfer to a cutting board. Slice and serve warm.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function EasyFocacciaRecipePage() {
  const fullUrl = 'https://blog.earthyblissco.com/blog/easy-focaccia-recipe';
  const bannerImage =
    '/images/blog/easy-focaccia-recipe.png';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
      />

      <Navbar />

      <main className="min-h-screen">
        {/* Banner */}
        <BannerImage
          src={bannerImage}
          alt="Golden focaccia bread with rosemary and olive oil on a wooden board"
        />

        {/* Article meta */}
        <ArticleMeta
          category="Recipes"
          title="Easy Homemade Focaccia: Crispy Outside, Soft Inside"
          author={{ name: 'Earthy Bliss Team' }}
          publishedDate="2026-02-03"
          readTime={9}
        />

        {/* Social share */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-8">
          <SocialShare
            title="Easy Homemade Focaccia: Crispy Outside, Soft Inside"
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
              Focaccia is the bread you make when you want something impressive
              without the fuss. No kneading. No shaping. No complicated
              technique. Just flour, water, yeast, and enough olive oil to make
              the edges crisp and golden while the inside stays impossibly
              soft.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
              It&rsquo;s the kind of bread that makes your kitchen smell like an
              Italian bakery. The kind that disappears within an hour of coming
              out of the oven. The kind that turns a simple dinner into something
              worth remembering.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8]">
              This recipe takes about three hours from start to finish, but most
              of that is hands-off rising time. Your actual work? Maybe 15
              minutes. The rest is just waiting &mdash; and trust me, it&rsquo;s
              worth every minute.
            </p>
          </div>
        </div>

        {/* Video */}
        <RecipeVideo
          src="https://cdn.shopify.com/videos/c/o/v/0282fd9dc94e49c1a6f4ea55a44c2986.mp4"
          title="The secret to perfect focaccia texture"
          caption="Watch how olive oil transforms this bread"
        />

        {/* Why olive oil matters */}
        <div className="w-full max-w-[720px] mx-auto px-4 my-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-4">
            Why Olive Oil Matters
          </h2>
          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-4">
            Olive oil isn&rsquo;t just an ingredient in focaccia &mdash;
            it&rsquo;s the ingredient. It does three critical things:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[16px] text-[#2D150B] leading-[1.8] mb-4 pl-2">
            <li>
              <strong>Texture:</strong> It keeps the crumb tender and open, creating
              those signature air pockets.
            </li>
            <li>
              <strong>Flavor:</strong> Extra virgin olive oil adds a fruity,
              peppery depth that plain bread can&rsquo;t match.
            </li>
            <li>
              <strong>Crust:</strong> The oil in the pan fries the bottom and edges
              as the bread bakes, giving you that golden, crispy exterior.
            </li>
          </ul>
          <p className="text-[16px] text-[#2D150B] leading-[1.8]">
            Don&rsquo;t skimp. Use good olive oil. You&rsquo;ll taste the
            difference.
          </p>
        </div>

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
              The dimples aren&rsquo;t just for show. They&rsquo;re little pools
              for olive oil, salt, and herbs to settle into as the bread bakes.
            </p>
          </blockquote>
        </div>

        {/* What makes this recipe easy */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-4">
            What Makes This Recipe Easy
          </h2>
          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-4">
            Traditional bread recipes require kneading for 10+ minutes to develop
            gluten. This one doesn&rsquo;t. Instead, we use a wet dough and a
            stretch-and-fold technique. It&rsquo;s gentler, faster, and it builds
            structure without the arm workout.
          </p>
          <p className="text-[16px] text-[#2D150B] leading-[1.8]">
            The dough is sticky, almost batter-like. That&rsquo;s intentional.
            High hydration = open crumb and soft texture. Embrace the
            stickiness. It&rsquo;s working for you.
          </p>
        </div>

        {/* Recipe card */}
        <RecipeCard
          title="Easy Homemade Focaccia"
          recipeYield="8 servings (9×13 pan)"
          prepTime="20 min"
          riseTime="1 hr 30 min – 2 hrs"
          bakeTime="20-25 min"
          totalTime="~2 hrs 45 min"
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
            The Final Word
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            This is the bread you make when you want something special without
            the stress. No stand mixer. No complicated shaping. Just your hands,
            a bowl, and a sheet pan.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            It&rsquo;s perfect on its own, torn into pieces and dipped in olive
            oil. It&rsquo;s even better as the foundation for sandwiches,
            alongside soup, or served with a charcuterie board. And if
            you&rsquo;ve never made bread before? This is the place to start.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-10">
            Once you pull this out of the oven &mdash; golden, fragrant, still
            crackling from the heat &mdash; you&rsquo;ll understand why focaccia
            has been a staple for centuries. It&rsquo;s simple. It&rsquo;s
            forgiving. And it always, always delivers.
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
        <ProductCallout slug="easy-focaccia-recipe" />

        {/* Related articles */}
        <RelatedArticles slug="easy-focaccia-recipe" />
      </main>

      <Footer />
      <Toaster />
    </>
  );
}
