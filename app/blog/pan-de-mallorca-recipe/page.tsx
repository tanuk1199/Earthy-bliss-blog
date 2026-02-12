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
  title: 'Pan de Mallorca: Soft Puerto Rican Sweet Rolls (Step by Step) | Earthy Bliss Co. Blog',
  description:
    'A step-by-step Pan de Mallorca recipe for soft, buttery Puerto Rican sweet rolls dusted with powdered sugar. The coil shape is easier than you think.',
  openGraph: {
    title: 'Pan de Mallorca: Soft Puerto Rican Sweet Rolls (Step by Step)',
    description:
      'A step-by-step Pan de Mallorca recipe for soft, buttery Puerto Rican sweet rolls dusted with powdered sugar. The coil shape is easier than you think.',
    images: [
      '/images/blog/pan-de-mallorca-recipe.png',
    ],
    type: 'article',
    publishedTime: '2026-02-07',
    authors: ['Earthy Bliss Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pan de Mallorca: Soft Puerto Rican Sweet Rolls',
    description:
      'Soft, buttery Puerto Rican sweet rolls with the signature coil shape and powdered sugar finish.',
    images: [
      '/images/blog/pan-de-mallorca-recipe.png',
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
      '4 cups bread flour (plus extra for dusting)',
      '1 packet (2 ¼ tsp) active dry yeast',
      '¾ cup warm milk (about 110°F)',
      '½ cup (1 stick) unsalted butter, softened',
      '⅓ cup granulated sugar',
      '3 large eggs, room temperature',
      '1 tsp salt',
    ],
  },
  {
    section: 'Finishing',
    items: [
      '2 tbsp unsalted butter, melted (for brushing)',
      'Powdered sugar for dusting (generous)',
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
  'Fine-mesh sieve (for powdered sugar)',
];

const recipePhases = [
  {
    phase: 1,
    title: 'Make the Enriched Dough',
    steps: [
      {
        number: 1,
        title: 'Activate the yeast.',
        content:
          'In a large bowl, combine the warm milk, 1 tablespoon of the sugar, and the yeast. Stir gently and let sit for 5–8 minutes until foamy on top. If there’s no foam, your milk temperature is off — start over with fresh yeast and check your thermometer.',
      },
      {
        number: 2,
        title: 'Build the dough.',
        content:
          'Add the remaining sugar, eggs, softened butter, salt, and flour to the yeast mixture. Stir with a wooden spoon or dough whisk until it forms a shaggy, sticky mass. This dough is supposed to be rich and soft — don’t panic if it feels wetter than other bread doughs.',
      },
      {
        number: 3,
        title: 'Knead until smooth and elastic.',
        content:
          'Turn the dough onto a lightly floured surface. Knead for 10–12 minutes, adding flour only as needed to keep it from sticking to your hands. The dough is ready when it’s smooth, elastic, and springs back when you press it. It should feel tacky, not dry.',
        tip: 'Enriched doughs (butter, eggs, milk) take longer to knead than lean doughs. Be patient. The windowpane test works here: stretch a small piece between your fingers — if it forms a thin, translucent membrane without tearing, you’re done.',
      },
      {
        number: 4,
        title: 'First rise.',
        content:
          'Shape the dough into a ball and place it in a lightly oiled bowl, turning it once to coat. Cover with plastic wrap or a damp towel. Let rise in a warm spot for 1.5 hours, until doubled in size.',
        tip: 'A warm oven with just the light on is ideal. Don’t rush this step — enriched doughs need the full rise time to develop the airy, tender crumb.',
      },
    ],
  },
  {
    phase: 2,
    title: 'Shape the Coils',
    steps: [
      {
        number: 5,
        title: 'Divide the dough.',
        content:
          'Punch down the risen dough and turn it out onto a lightly floured surface. Divide it into 8–10 equal pieces (about 3.5–4 oz / 100–115g each if you’re weighing). Cover the pieces with a towel while you work.',
      },
      {
        number: 6,
        title: 'Roll into ropes.',
        content:
          'Take one piece and roll it with both hands into a long, even rope — about 18 inches long and ½ inch thick. Don’t rush. If the dough resists, let it rest for a minute and come back to it.',
        tip: 'Give each rope a quick knead before shaping to work out any air bubbles. This keeps the coil tight and even.',
      },
      {
        number: 7,
        title: 'Coil from the center out.',
        content:
          'Starting from one end, coil the rope into a spiral — like a snail shell — working from the center outward. Don’t pull it tight; let it coil loosely. Tuck the end underneath when you reach the outer edge. Repeat with remaining pieces.',
        tip: 'The secret to a light, airy roll is a loose coil. If you wind it too tight, the dough can’t expand during the final rise and bake. Give it room to breathe.',
      },
      {
        number: 8,
        title: 'Brush with butter and rest.',
        content:
          'Place the coiled rolls on a parchment-lined baking sheet, about 2 inches apart. Brush each one generously with melted butter. Cover loosely with plastic wrap and let rise for 1 hour, until puffed and nearly touching.',
        tip: 'Don’t skip the final rise. This is what creates the signature light, pillowy texture. An hour is not optional.',
      },
    ],
  },
  {
    phase: 3,
    title: 'Bake and Finish',
    steps: [
      {
        number: 9,
        title: 'Preheat to 350°F (175°C).',
        content:
          'Place a rack in the center of the oven. Let it come to full temperature — no shortcuts here.',
      },
      {
        number: 10,
        title: 'Bake until golden.',
        content:
          'Bake for 20–25 minutes, until the tops are golden brown and the rolls sound hollow when tapped. They should be deeply golden, not pale. An extra minute or two gives you better color and structure.',
      },
      {
        number: 11,
        title: 'Cool slightly and dust with powdered sugar.',
        content:
          'Transfer the rolls to a wire rack and let them cool for 5–10 minutes. While they’re still warm, use a fine-mesh sieve to dust them generously with powdered sugar. Don’t be shy — the sugar is part of the experience.',
        tip: 'The crumb should be light, soft, and pillowy when you tear into one. If it’s dense, you either added too much flour during kneading or didn’t give it the full rise time.',
      },
    ],
  },
];

const tips = [
  {
    title: 'Enriched dough is sticky',
    content:
      'Don’t add too much flour during kneading. The dough should feel soft and tacky — that’s what keeps the rolls tender. Add flour only when it’s actually sticking to your hands.',
  },
  {
    title: 'The coil should be loose',
    content:
      'Don’t pull the rope tight when coiling. A loose spiral gives the dough room to expand and creates that light, airy structure.',
  },
  {
    title: 'Perfect with café con leche',
    content:
      'These are traditionally served alongside strong, sweet Puerto Rican coffee. The pairing is ideal — the powdered sugar plays off the bitterness beautifully.',
  },
  {
    title: 'Try a filling',
    content:
      'Before coiling, you can spread the rope with cream cheese or guava paste for a sweeter, richer variation. Just don’t overfill — the coil still needs to hold together.',
  },
  {
    title: 'Freezes well',
    content:
      'Cool completely, then freeze in an airtight container for up to 3 months. Thaw at room temp and warm at 300°F for 5 minutes before dusting with fresh powdered sugar.',
  },
];


// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PanDeMallorcaRecipePage() {
  const fullUrl = 'https://blog.earthyblissco.com/blog/pan-de-mallorca-recipe';
  const bannerImage =
    '/images/blog/pan-de-mallorca-recipe.png';

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Banner */}
        <BannerImage
          src={bannerImage}
          alt="Golden Pan de Mallorca sweet rolls dusted with powdered sugar"
        />

        {/* Article meta */}
        <ArticleMeta
          category="Recipes"
          title="Pan de Mallorca: Soft Puerto Rican Sweet Rolls (Step by Step)"
          author={{ name: 'Earthy Bliss Team' }}
          publishedDate="2026-02-07"
          readTime={10}
        />

        {/* Social share */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-8">
          <SocialShare
            title="Pan de Mallorca: Soft Puerto Rican Sweet Rolls"
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
              The first time you pull a Pan de Mallorca out of the oven, you
              understand why every Puerto Rican bakery sells out by noon. The
              coil shape isn&rsquo;t just aesthetic &mdash; it&rsquo;s
              engineering. Each layer catches butter and creates pockets of air
              that turn the crumb impossibly light. The powdered sugar melts
              just slightly into the warm dough, turning every bite into
              something that feels both indulgent and comforting.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
              These aren&rsquo;t complicated. They just take time — and a
              willingness to trust the process. The dough is sticky. The coil
              looks loose. The final rise feels too long. But every step has a
              reason, and when you bite into one, still warm from the oven, you
              taste exactly why.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8]">
              This recipe makes 8&ndash;10 rolls in about 3 hours (mostly hands
              off). You don&rsquo;t need a stand mixer or any special
              equipment. Just flour, butter, a little patience, and your hands.
            </p>
          </div>
        </div>

        {/* Video */}
        <RecipeVideo
          src="https://cdn.shopify.com/videos/c/o/v/b20ac297b61041a098e1b95c703566f2.mp4"
          title="How to shape Pan de Mallorca coils"
          caption="The coil technique that creates the signature light, flaky texture"
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
              The coil isn&rsquo;t decoration. It&rsquo;s what makes the crumb
              light, soft, and impossibly tender.
            </p>
          </blockquote>
        </div>

        {/* Shaping note */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-4">
            The Secret: Shaping is Everything
          </h2>
          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-2">
            <strong>Why the coil matters.</strong> When you roll the dough into
            a rope and coil it loosely, you&rsquo;re creating dozens of layers
            that expand in the oven. Each layer separates slightly, forming
            air pockets that give the roll its light, flaky structure.
            It&rsquo;s the same principle as laminated dough, but without the
            fuss of folding and chilling.
          </p>
          <p className="text-[16px] text-[#3E3E3E] leading-[1.8]">
            The most common mistake? Winding the coil too tight. If
            there&rsquo;s no room for the dough to expand, you end up with a
            dense roll instead of a pillowy one. Keep it loose. Trust it.
          </p>
        </div>

        {/* Recipe card */}
        <RecipeCard
          title="Pan de Mallorca (Puerto Rican Sweet Rolls)"
          recipeYield="8-10 rolls"
          prepTime="30 min"
          riseTime="2 hr 30 min"
          bakeTime="20-25 min"
          totalTime="~3 hrs"
          difficulty="Intermediate"
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
            The Final Dusting
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            That&rsquo;s it. Flour, butter, yeast, eggs, and a little sugar.
            The coil shape does the rest.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            These rolls aren&rsquo;t fussy. They don&rsquo;t require precision
            or technique you need to practice for months. They just ask you to
            slow down. Let the dough rise. Give the coil room to breathe. And
            when you pull them from the oven, dust them generously — the
            powdered sugar is half the experience.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-10">
            If you&rsquo;re baking these, you already know that good bread
            comes from good tools. A scale that doesn&rsquo;t drift. A dough
            scraper that actually scrapes. A bench that doesn&rsquo;t stick.
            None of it makes you a better baker &mdash; but it makes the work
            feel the way it should: smooth, intentional, and worth the time.
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
        <ProductCallout slug="pan-de-mallorca-recipe" />

        {/* Related articles */}
        <RelatedArticles slug="pan-de-mallorca-recipe" />
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
            name: 'Pan de Mallorca (Puerto Rican Sweet Rolls)',
            description:
              'Soft, buttery Puerto Rican sweet rolls with a signature coil shape and generous powdered sugar dusting. Light, pillowy texture with an airy crumb.',
            image: [
              '/images/blog/pan-de-mallorca-recipe.png',
            ],
            author: {
              '@type': 'Organization',
              name: 'Earthy Bliss Co.',
            },
            datePublished: '2026-02-07',
            prepTime: 'PT30M',
            cookTime: 'PT25M',
            totalTime: 'PT3H',
            recipeYield: '8-10 rolls',
            recipeCategory: 'Bread',
            recipeCuisine: 'Puerto Rican',
            keywords:
              'pan de mallorca, mallorca bread, Puerto Rican sweet rolls, mallorcas recipe, sweet bread rolls',
            recipeIngredient: [
              '4 cups bread flour',
              '1 packet active dry yeast (2 ¼ tsp)',
              '¾ cup warm milk (110°F)',
              '½ cup unsalted butter, softened',
              '⅓ cup granulated sugar',
              '3 large eggs',
              '1 tsp salt',
              '2 tbsp melted butter for brushing',
              'Powdered sugar for dusting',
            ],
            recipeInstructions: [
              {
                '@type': 'HowToSection',
                name: 'Make the Enriched Dough',
                itemListElement: [
                  {
                    '@type': 'HowToStep',
                    text: 'Activate the yeast: Combine warm milk, 1 tablespoon sugar, and yeast. Let sit 5-8 minutes until foamy.',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Build the dough: Add remaining sugar, eggs, softened butter, salt, and flour. Stir until shaggy.',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Knead for 10-12 minutes until smooth, elastic, and tacky (not dry).',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'First rise: Place in oiled bowl, cover, and let rise 1.5 hours until doubled.',
                  },
                ],
              },
              {
                '@type': 'HowToSection',
                name: 'Shape the Coils',
                itemListElement: [
                  {
                    '@type': 'HowToStep',
                    text: 'Divide dough into 8-10 equal pieces (about 3.5-4 oz each).',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Roll each piece into an 18-inch rope, about ½ inch thick.',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Coil loosely from center outward like a snail shell. Tuck end underneath.',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Place on baking sheet, brush with melted butter, cover, and let rise 1 hour.',
                  },
                ],
              },
              {
                '@type': 'HowToSection',
                name: 'Bake and Finish',
                itemListElement: [
                  {
                    '@type': 'HowToStep',
                    text: 'Preheat oven to 350°F (175°C).',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Bake 20-25 minutes until golden brown.',
                  },
                  {
                    '@type': 'HowToStep',
                    text: 'Cool 5-10 minutes, then dust generously with powdered sugar while still warm.',
                  },
                ],
              },
            ],
            video: {
              '@type': 'VideoObject',
              name: 'How to Shape Pan de Mallorca Coils',
              description:
                'Learn the coil shaping technique that creates light, flaky Pan de Mallorca sweet rolls.',
              thumbnailUrl:
                '/images/blog/pan-de-mallorca-recipe.png',
              contentUrl:
                'https://cdn.shopify.com/videos/c/o/v/b20ac297b61041a098e1b95c703566f2.mp4',
              uploadDate: '2026-02-07',
            },
          }),
        }}
      />
    </>
  );
}
