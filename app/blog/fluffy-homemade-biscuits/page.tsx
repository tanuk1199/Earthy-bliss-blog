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
  title: 'Fluffy Homemade Biscuits With Buttery Layers (30 Minutes) | Earthy Bliss Co. Blog',
  description:
    'Tall, flaky, buttery biscuits in 30 minutes. The secret is frozen butter, cold buttermilk, and knowing when to stop mixing. A recipe you\'ll make every weekend.',
  openGraph: {
    title: 'Fluffy Homemade Biscuits With Buttery Layers (30 Minutes)',
    description:
      'Tall, flaky, buttery biscuits in 30 minutes. The secret is frozen butter, cold buttermilk, and knowing when to stop mixing.',
    images: [
      '/images/blog/fluffy-homemade-biscuits.png',
    ],
    type: 'article',
    publishedTime: '2026-01-22',
    authors: ['Earthy Bliss Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fluffy Homemade Biscuits With Buttery Layers (30 Minutes)',
    description:
      'Tall, flaky, buttery biscuits in 30 minutes. Frozen butter is the secret to sky-high layers.',
    images: [
      '/images/blog/fluffy-homemade-biscuits.png',
    ],
  },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const recipeIngredients = [
  {
    items: [
      '2½ cups all-purpose flour, plus extra for dusting',
      '1 tbsp baking powder',
      '½ tsp baking soda',
      '1 tsp salt',
      '1 tbsp granulated sugar',
      '½ cup (1 stick) unsalted butter, frozen',
      '¾ cup cold buttermilk',
    ],
  },
  {
    section: 'Egg Wash',
    items: [
      '1 large egg',
      '1 tbsp whole milk',
    ],
  },
];

const recipeEquipment = [
  'Large mixing bowl',
  'Box grater or food processor',
  'Fork or pastry cutter',
  'Round biscuit cutter (2½ to 3 inches)',
  'Baking sheet + parchment paper',
  'Pastry brush',
];

const recipePhases = [
  {
    phase: 1,
    title: 'Prep the Dough',
    steps: [
      {
        number: 1,
        title: 'Freeze the butter.',
        content:
          'Place the butter in the freezer for at least 30 minutes before you start. You want it rock-solid — this is what creates those pockets of steam that puff the biscuits into tall, flaky layers. If you skip this step, you’ll still get biscuits, but they’ll be flat and dense.',
        tip: 'Wrap the stick of butter in plastic wrap before freezing so it doesn’t pick up freezer odors. Some bakers keep a stick in the freezer year-round just for biscuits.',
      },
      {
        number: 2,
        title: 'Combine the dry ingredients.',
        content:
          'In a large bowl, whisk together the flour, baking powder, baking soda, salt, and sugar. Whisk well — at least 30 seconds. You’re trying to evenly distribute the leavening agents so every biscuit rises the same way.',
      },
      {
        number: 3,
        title: 'Grate the frozen butter.',
        content:
          'Using the large holes of a box grater, grate the frozen butter directly into the flour mixture. Toss gently with your hands after every few strokes to coat the butter shreds in flour. This prevents clumping and helps distribute it evenly. Work quickly so the butter doesn’t warm up.',
        tip: 'If you have a food processor, pulse the flour mixture and frozen butter cubes for 5–6 pulses until it looks like coarse crumbs. Don’t overprocess or you’ll lose the flaky texture.',
      },
      {
        number: 4,
        title: 'Add the buttermilk.',
        content:
          'Make a well in the center of the flour-butter mixture. Pour in the cold buttermilk all at once. Use a fork to gently fold the mixture together, starting from the edges and working inward. Stop as soon as no dry flour is visible. The dough will look shaggy and rough — that’s exactly what you want.',
      },
      {
        number: 5,
        title: 'Don’t overmix.',
        content:
          'This is where most people go wrong. Every extra stir develops gluten, and gluten makes biscuits tough. If you see a few dry spots, that’s fine — you’ll bring it together in the next step. Resist the urge to keep stirring.',
        tip: 'The dough should be sticky and barely holding together. If it’s wet and soupy, add a tablespoon of flour. If it’s too dry to come together, add buttermilk one teaspoon at a time.',
      },
    ],
  },
  {
    phase: 2,
    title: 'Shape the Biscuits',
    steps: [
      {
        number: 6,
        title: 'Turn out onto a floured surface.',
        content:
          'Dust your counter or a large cutting board with flour. Turn the shaggy dough out onto it. Dust the top lightly with more flour. Pat the dough gently into a rough rectangle about ¾ inch thick. Use your hands, not a rolling pin — you want to handle it as little as possible.',
      },
      {
        number: 7,
        title: 'Fold for layers.',
        content:
          'This is the secret to tall, flaky biscuits. Fold the dough in thirds like you’re folding a letter — left third over the center, then right third over that. Rotate the dough 90 degrees, pat it back out to ¾ inch thick, and fold again. Repeat one more time for a total of three folds. Each fold creates more layers.',
        tip: 'If the dough feels sticky at any point, dust it lightly with flour. But don’t add too much — you want the dough to stay soft and pliable.',
      },
      {
        number: 8,
        title: 'Cut the biscuits.',
        content:
          'Pat the dough out one final time to ¾ inch thick. Press your biscuit cutter straight down into the dough — don’t twist. Twisting seals the edges and prevents the biscuits from rising properly. Lift straight up, place the biscuit on a parchment-lined baking sheet, and repeat. Space them about 1 inch apart for crispy sides, or touching for soft sides.',
        tip: 'Use a sharp-edged cutter, not a drinking glass. Dull edges compress the dough and ruin the rise.',
      },
      {
        number: 9,
        title: 'Handle the scraps carefully.',
        content:
          'Gather the leftover dough scraps gently and press them together — don’t re-knead. Pat out to ¾ inch thick and cut a few more biscuits. These won’t be quite as tall as the first batch because the dough has been worked more, but they’ll still be delicious.',
      },
    ],
  },
  {
    phase: 3,
    title: 'Bake to Golden',
    steps: [
      {
        number: 10,
        title: 'Preheat the oven to 425°F (220°C).',
        content:
          'Place a rack in the upper third of the oven. High heat is essential — it turns the butter into steam quickly, which is what makes the biscuits puff up. Let the oven come to full temperature before baking.',
      },
      {
        number: 11,
        title: 'Brush with egg wash.',
        content:
          'Beat the egg and milk together in a small bowl. Brush the tops of each biscuit gently with a pastry brush. This gives you that beautiful golden-brown finish. Don’t skip it — pale biscuits look sad.',
        tip: 'If you don’t have a pastry brush, use a spoon to drizzle a little egg wash on top and spread it gently with the back of the spoon.',
      },
      {
        number: 12,
        title: 'Bake for 12–15 minutes.',
        content:
          'They’re done when the tops are deep golden brown and the biscuits have risen to about double their original height. The edges should be slightly crisp, and the bottoms should sound hollow when you tap them. If you pull them too early, they’ll be doughy inside.',
      },
      {
        number: 13,
        title: 'Serve warm.',
        content:
          'Transfer the biscuits to a wire rack to cool slightly — or don’t wait at all. Tear one open while it’s still steaming, slather it with butter and honey, and understand why people have been making biscuits this way for generations.',
      },
    ],
  },
];

const tips = [
  {
    title: 'Why frozen butter matters',
    content:
      'Cold butter creates steam pockets as it melts in the oven. Those pockets = layers. Room temperature butter blends into the dough and gives you a texture closer to cake. If you want tall, flaky biscuits, the butter needs to stay cold and solid until it hits the heat.',
  },
  {
    title: 'No buttermilk? Make your own.',
    content:
      'Add 2 teaspoons of white vinegar or lemon juice to ¾ cup of whole milk. Stir and let it sit for 5 minutes until it curdles slightly. Use it just like buttermilk. The acidity reacts with the baking soda to give you extra lift.',
  },
  {
    title: 'Don’t twist the cutter',
    content:
      'Twisting the biscuit cutter seals the edges and prevents the dough from rising evenly. Press straight down with confidence, then lift straight up. If the dough sticks to the cutter, dip it in flour between cuts.',
  },
  {
    title: 'What to do with leftover scraps',
    content:
      'Press the scraps together gently — don’t knead them. Pat them out and cut a few more biscuits. They won’t be quite as tall because the dough has been worked more, but they’ll still taste great. Some people skip cutting and just bake the scraps as one rustic biscuit.',
  },
  {
    title: 'For drop biscuits (even faster)',
    content:
      'Skip the folding and cutting. Add an extra 2–3 tablespoons of buttermilk to make the dough wetter. Scoop it onto the baking sheet with a large spoon or ice cream scoop. You lose the layers, but you gain speed and simplicity. Bake at 425°F for 10–12 minutes.',
  },
];


// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function FluffyHomemadeBiscuitsPage() {
  const fullUrl = 'https://blog.earthyblissco.com/blog/fluffy-homemade-biscuits';
  const bannerImage =
    '/images/blog/fluffy-homemade-biscuits.png';

  // JSON-LD structured data for SEO
  const recipeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: 'Fluffy Homemade Biscuits With Buttery Layers',
    author: {
      '@type': 'Organization',
      name: 'Earthy Bliss Co.',
    },
    datePublished: '2026-01-22',
    description:
      'Tall, flaky, buttery biscuits in 30 minutes. The secret is frozen butter, cold buttermilk, and knowing when to stop mixing.',
    prepTime: 'PT10M',
    cookTime: 'PT15M',
    totalTime: 'PT30M',
    recipeYield: '8-10 biscuits',
    recipeCategory: 'Breakfast, Bread',
    recipeCuisine: 'American',
    keywords: 'homemade biscuits, fluffy biscuits, buttermilk biscuits, flaky biscuits, easy biscuit recipe',
    image: [bannerImage],
    video: {
      '@type': 'VideoObject',
      name: 'How to Bake the Perfect Fluffy Biscuits',
      description: 'Learn the secrets to tall, flaky biscuits with buttery layers',
      thumbnailUrl: [bannerImage],
      contentUrl: 'https://cdn.shopify.com/videos/c/o/v/b0279bcf6a024d468eaf49fb7ac6712c.mp4',
      uploadDate: '2026-01-22',
    },
    recipeIngredient: [
      '2½ cups all-purpose flour',
      '1 tbsp baking powder',
      '½ tsp baking soda',
      '1 tsp salt',
      '1 tbsp granulated sugar',
      '½ cup (1 stick) unsalted butter, frozen',
      '¾ cup cold buttermilk',
      '1 large egg',
      '1 tbsp whole milk',
    ],
    recipeInstructions: [
      {
        '@type': 'HowToStep',
        name: 'Freeze the butter',
        text: 'Place the butter in the freezer for at least 30 minutes before you start.',
      },
      {
        '@type': 'HowToStep',
        name: 'Combine dry ingredients',
        text: 'In a large bowl, whisk together the flour, baking powder, baking soda, salt, and sugar.',
      },
      {
        '@type': 'HowToStep',
        name: 'Grate frozen butter',
        text: 'Grate the frozen butter into the flour mixture and toss gently to coat.',
      },
      {
        '@type': 'HowToStep',
        name: 'Add buttermilk',
        text: 'Make a well in the center, pour in the cold buttermilk, and fold gently with a fork until just combined.',
      },
      {
        '@type': 'HowToStep',
        name: 'Shape and fold',
        text: 'Turn out onto a floured surface, pat into a rectangle, and fold in thirds three times.',
      },
      {
        '@type': 'HowToStep',
        name: 'Cut biscuits',
        text: 'Pat dough to ¾ inch thick and cut with a biscuit cutter, pressing straight down without twisting.',
      },
      {
        '@type': 'HowToStep',
        name: 'Brush and bake',
        text: 'Brush tops with egg wash and bake at 425°F for 12-15 minutes until golden brown.',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '342',
    },
  };

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
          alt="Golden fluffy biscuits with buttery layers on a rustic wooden board"
        />

        {/* Article meta */}
        <ArticleMeta
          category="Recipes"
          title="Fluffy Homemade Biscuits With Buttery Layers (30 Minutes)"
          author={{ name: 'Earthy Bliss Team' }}
          publishedDate="2026-01-22"
          readTime={6}
        />

        {/* Social share */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-8">
          <SocialShare
            title="Fluffy Homemade Biscuits With Buttery Layers"
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
              Good biscuits don&rsquo;t take long. Thirty minutes from counter
              to table. But they do require a shift in how you think about
              dough. You&rsquo;re not trying to smooth it out or bring it
              together into a perfect ball. You&rsquo;re trying to leave it
              alone. The less you touch it, the better it gets.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
              That shaggy, barely-holding-together mess you&rsquo;re staring at
              after mixing? That&rsquo;s exactly what you want. Those uneven
              chunks of butter that look too big? They&rsquo;re about to turn
              into pockets of steam that puff the dough into tall, flaky layers.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8]">
              This recipe makes 8 to 10 biscuits. You&rsquo;ll eat half of them
              while they&rsquo;re still warm, standing at the counter, tearing
              them open with your hands and watching the steam rise. The other
              half won&rsquo;t last until dinner.
            </p>
          </div>
        </div>

        {/* Video */}
        <RecipeVideo
          src="https://cdn.shopify.com/videos/c/o/v/b0279bcf6a024d468eaf49fb7ac6712c.mp4"
          title="How to Bake the Perfect Fluffy Biscuits"
          caption="See the folding technique and key tips in under 60 seconds"
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
              The secret to tall biscuits isn&rsquo;t technique. It&rsquo;s
              restraint. Stop mixing sooner than you think you should.
            </p>
          </blockquote>
        </div>

        {/* The Golden Rules */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-4">
            The Golden Rules
          </h2>
          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            There are three things that separate tall, flaky biscuits from flat,
            dense ones. Get these right, and the rest is just following the
            steps.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#2D150B] text-lg mb-2">
                1. Embrace the Chill
              </h3>
              <p className="text-[16px] text-[#2D150B] leading-[1.8]">
                Freeze your butter solid before you start. Not cold.
                <em>Frozen</em>. When frozen butter hits a 425°F oven, it melts
                and turns to steam instantly. That steam pushes the dough
                upward, creating those sky-high layers. Room temperature butter
                just blends into the flour and you end up with something closer
                to cake.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D150B] text-lg mb-2">
                2. Do Not Overwork the Dough
              </h3>
              <p className="text-[16px] text-[#2D150B] leading-[1.8]">
                Every extra stir, every extra knead, develops gluten. Gluten
                makes bread chewy and strong. That&rsquo;s great for a baguette.
                Terrible for a biscuit. Mix until there&rsquo;s no dry flour
                visible, then stop. The dough should look rough and shaggy. If
                it looks smooth, you&rsquo;ve gone too far.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2D150B] text-lg mb-2">
                3. The Cutter Conundrum: Press Straight Down
              </h3>
              <p className="text-[16px] text-[#2D150B] leading-[1.8]">
                When you twist the biscuit cutter, you seal the edges of the
                dough together. Sealed edges can&rsquo;t rise. Press straight
                down with confidence, lift straight up, and place the biscuit on
                the pan. Don&rsquo;t twist. Ever.
              </p>
            </div>
          </div>
        </div>

        {/* Recipe card */}
        <RecipeCard
          title="Fluffy Homemade Biscuits"
          recipeYield="8-10 biscuits"
          prepTime="10 min"
          riseTime="None"
          bakeTime="12-15 min"
          totalTime="~30 min"
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
            Why This Recipe Works
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            Biscuits are one of those recipes where understanding the
            <em>why</em> matters more than memorizing the steps. Once you
            understand that cold butter = steam = layers, and that gluten
            development = toughness, you can adjust on the fly. Dough too wet?
            Add a little flour. Too dry? Add buttermilk a teaspoon at a time.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            The folding technique — patting the dough out and folding it in
            thirds three times — isn&rsquo;t fussy or complicated. It&rsquo;s
            just creating more layers. Each fold doubles the number of thin
            sheets of dough stacked on top of each other. When those sheets hit
            the heat, they separate and puff up. That&rsquo;s what gives you
            those beautiful horizontal layers when you tear a biscuit open.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-10">
            And if you&rsquo;re the kind of person who wants to make biscuits
            every weekend — and once you taste these, you will be — the right
            tools make the process faster and cleaner. A sharp biscuit cutter
            gives you clean edges. A dough scraper keeps your counter tidy. A
            pastry brush makes the egg wash effortless. None of it&rsquo;s
            required, but all of it helps.
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
        <ProductCallout slug="fluffy-homemade-biscuits" />

        {/* Related articles */}
        <RelatedArticles slug="fluffy-homemade-biscuits" />
      </main>

      <Footer />
      <Toaster />
    </>
  );
}
