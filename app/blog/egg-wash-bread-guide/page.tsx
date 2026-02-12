import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/blog/Navbar';
import { BannerImage } from '@/components/blog/BannerImage';
import { ArticleMeta } from '@/components/blog/ArticleMeta';
import { SocialShare } from '@/components/blog/SocialShare';
import { RecipeVideo } from '@/components/blog/RecipeVideo';
import { TipsCallout } from '@/components/blog/TipsCallout';
import { ProductCallout } from '@/components/blog/ProductCallout';
import { RelatedArticles } from '@/components/blog/RelatedArticles';
import { Footer } from '@/components/blog/Footer';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Egg Wash vs. Milk Wash vs. Butter: The Complete Bread Wash Guide | Earthy Bliss Co.',
  description:
    'Egg wash, milk wash, butter, or water? Learn which bread wash gives you the crust you want — glossy, golden, soft, or crispy. A side-by-side comparison guide.',
  openGraph: {
    title: 'Egg Wash vs. Milk Wash vs. Butter: The Complete Bread Wash Guide',
    description:
      'Egg wash, milk wash, butter, or water? Learn which bread wash gives you the crust you want — glossy, golden, soft, or crispy.',
    images: [
      '/images/blog/egg-wash-bread-guide.png',
    ],
    type: 'article',
    publishedTime: '2026-01-28',
    authors: ['Earthy Bliss Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Complete Bread Wash Guide: Egg, Milk, Butter & More',
    description:
      'Stop guessing. Learn which bread wash creates the perfect crust for every type of bread.',
    images: [
      '/images/blog/egg-wash-bread-guide.png',
    ],
  },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const washTypes = [
  {
    name: 'Whole Egg Wash',
    ratio: '1 whole egg + 1 tbsp water',
    result: 'Deep golden color with a glossy, professional-looking finish',
    texture: 'Smooth, shiny surface with moderate browning',
    bestFor: [
      'Enriched breads (challah, brioche)',
      'Dinner rolls',
      'Burger buns',
      'Sandwich loaves',
      'Any bread where you want that bakery-quality shine',
    ],
    howToApply: 'Beat the egg and water together until smooth. Apply gently with a pastry brush just before baking. Use light, even strokes — don\'t let it pool in cracks or score marks.',
    whenToApply: 'Right before the bread goes into the oven',
    proTip: 'This is the most versatile wash. It\'s the one professional bakeries use for that signature golden glow.',
  },
  {
    name: 'Egg Yolk Wash',
    ratio: '1 egg yolk + 1–2 tbsp heavy cream (or milk)',
    result: 'The richest, deepest golden-brown color with maximum shine',
    texture: 'Glossy, almost lacquered finish with intense browning',
    bestFor: [
      'Pastries (croissants, danishes)',
      'Challah',
      'Brioche',
      'Holiday breads',
      'Anything where appearance is critical',
    ],
    howToApply: 'Whisk the yolk and cream together until completely smooth. Brush on gently in a thin, even layer. Too much will create a thick, eggy film that can taste unpleasant.',
    whenToApply: 'Just before baking',
    proTip: 'Use this when you want dramatic color and shine. The fat from the yolk and cream creates an almost varnish-like finish.',
  },
  {
    name: 'Egg White Wash',
    ratio: '1 egg white + 1 tsp water',
    result: 'Subtle shine without added color or browning',
    texture: 'Light gloss, crisp surface',
    bestFor: [
      'Lean breads (baguettes, ciabatta)',
      'Sourdough',
      'Rye bread',
      'Any bread where you want shine but not extra browning',
    ],
    howToApply: 'Whisk the egg white and water until frothy. Brush on lightly just before baking. This dries faster than whole egg, so work quickly.',
    whenToApply: 'Right before baking',
    proTip: 'Perfect for breads that already brown well on their own. It adds sheen without interfering with the natural crust color.',
  },
  {
    name: 'Milk or Cream Wash',
    ratio: 'Whole milk or heavy cream (no dilution needed)',
    result: 'Soft golden-brown color with a slight sweetness',
    texture: 'Tender, matte to semi-gloss finish',
    bestFor: [
      'Soft dinner rolls',
      'Biscuits',
      'Scones',
      'Sandwich bread',
      'Anything where you want a tender, not-too-shiny crust',
    ],
    howToApply: 'Brush milk or cream directly onto the dough surface. No need to thin it. Apply just before baking for best results.',
    whenToApply: 'Just before baking',
    proTip: 'The natural sugars in milk caramelize as they bake, giving you a soft golden finish and a hint of sweetness. Cream produces a richer result than milk.',
  },
  {
    name: 'Butter Wash',
    ratio: 'Melted unsalted butter',
    result: 'Soft, tender crust with a rich, buttery flavor',
    texture: 'Matte finish, very soft and pliable crust',
    bestFor: [
      'Dinner rolls',
      'Biscuits',
      'Garlic bread',
      'Focaccia',
      'Any bread where you want maximum softness and flavor',
    ],
    howToApply: 'Brush melted butter over the bread immediately after it comes out of the oven, while it\'s still hot. The heat allows the butter to soak in slightly. You can also brush it on before baking for extra richness.',
    whenToApply: 'After baking (or before for double butter richness)',
    proTip: 'Butter wash is the secret to those impossibly soft, pull-apart dinner rolls. It keeps the crust tender and adds a luxurious mouthfeel.',
  },
  {
    name: 'Water or Steam',
    ratio: 'Plain water, sprayed or brushed on',
    result: 'Crispy, crackly, deeply browned crust with no added richness',
    texture: 'Crunchy, thin crust with an open, airy crumb inside',
    bestFor: [
      'Baguettes',
      'Sourdough boules',
      'Artisan loaves',
      'Any lean bread where you want maximum crust crunch',
    ],
    howToApply: 'Spray or brush water on the surface right before baking. For even better results, add steam to your oven by placing a pan of water on the bottom rack or tossing ice cubes onto a preheated pan.',
    whenToApply: 'Just before baking, and optionally during the first few minutes of baking',
    proTip: 'Water and steam delay crust formation, allowing the bread to expand fully in the oven (called "oven spring"). The result is a thinner, crispier crust and a lighter interior.',
  },
  {
    name: 'Olive Oil Wash',
    ratio: 'Extra virgin olive oil',
    result: 'Light golden color with a slight crunch and herbal undertone',
    texture: 'Semi-crisp, slightly chewy crust',
    bestFor: [
      'Focaccia',
      'Ciabatta',
      'Flatbreads',
      'Italian-style breads',
    ],
    howToApply: 'Brush olive oil generously over the surface before baking. You can also drizzle it on after baking for extra flavor and shine.',
    whenToApply: 'Before baking, or after for a flavor boost',
    proTip: 'Use a high-quality olive oil — you\'ll taste it. This wash adds flavor, not just appearance. It\'s traditional for Mediterranean breads and pairs beautifully with herbs like rosemary or sea salt.',
  },
];

const tips = [
  {
    title: 'Always use a pastry brush, not a paper towel',
    content:
      'A soft-bristle pastry brush gives you control and even coverage. Paper towels absorb too much of the wash and can tear delicate dough.',
  },
  {
    title: 'Use gentle strokes',
    content:
      'Dough is fragile after its final rise. Brush lightly to avoid deflating it. If you\'re too rough, you\'ll lose oven spring and end up with a flatter loaf.',
  },
  {
    title: 'Apply right before baking (except butter)',
    content:
      'Most washes should go on just before the bread enters the oven. If you apply too early, the wash can dry out or get reabsorbed into the dough. Butter is the exception — it works best after baking.',
  },
  {
    title: 'Don\'t let egg wash pool in score marks',
    content:
      'If you\'re scoring your bread, be careful not to let egg wash settle into the cuts. It can glue them shut and prevent the bread from expanding properly.',
  },
  {
    title: 'You can combine washes for layered effects',
    content:
      'For example: egg wash for color and shine, then butter after baking for extra softness. Or water for steam, then a light milk wash halfway through baking for color.',
  },
  {
    title: 'Washes with fat (egg, milk, butter, oil) brown faster',
    content:
      'Keep an eye on your bread. If it\'s browning too quickly, tent it loosely with foil for the last few minutes of baking.',
  },
];


// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function EggWashBreadGuidePage() {
  const fullUrl = 'https://blog.earthyblissco.com/blog/egg-wash-bread-guide';
  const bannerImage =
    '/images/blog/egg-wash-bread-guide.png';

  return (
    <>
      <Navbar />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Egg Wash vs. Milk Wash vs. Butter: The Complete Bread Wash Guide',
            description:
              'Egg wash, milk wash, butter, or water? Learn which bread wash gives you the crust you want — glossy, golden, soft, or crispy. A comprehensive side-by-side comparison guide.',
            image: '/images/blog/egg-wash-bread-guide.png',
            author: {
              '@type': 'Organization',
              name: 'Earthy Bliss Team',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Earthy Bliss Co.',
              logo: {
                '@type': 'ImageObject',
                url: 'https://earthyblissco.com/logo.png',
              },
            },
            datePublished: '2026-01-28',
            dateModified: '2026-01-28',
          }),
        }}
      />

      <main className="min-h-screen">
        {/* Banner */}
        <BannerImage
          src={bannerImage}
          alt="Golden bread loaf with a glossy egg wash crust cooling on a wire rack"
        />

        {/* Article meta */}
        <ArticleMeta
          category="Baking"
          title="Stop Guessing: The Right Wash for a Shiny Crust"
          author={{ name: 'Earthy Bliss Team' }}
          publishedDate="2026-01-28"
          readTime={10}
        />

        {/* Social share */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-8">
          <SocialShare
            title="Egg Wash vs. Milk Wash vs. Butter: The Complete Bread Wash Guide"
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
              You can bake the perfect loaf — airy crumb, beautiful rise,
              flawless flavor — and still end up with a crust that looks dull,
              pale, or just plain wrong. Not because you did anything wrong in
              the dough, but because you skipped the wash. Or used the wrong
              one.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
              A bread wash is the final step before baking. It&rsquo;s what
              gives your bread its color, its shine, and sometimes its texture.
              Egg wash creates that deep, glossy finish you see on brioche and
              burger buns. Milk wash gives you a softer, more subtle glow.
              Water makes the crust crisp and crackly. Butter keeps it tender.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
              Each one does something different. And knowing which to use —
              and when — is the difference between bread that looks homemade
              and bread that looks like it came from a bakery.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8]">
              This guide breaks down every type of wash: what it does, when to
              use it, and how to apply it properly. No more guessing. No more
              pale loaves or sticky, over-brushed surfaces. Just the right
              finish, every time.
            </p>
          </div>
        </div>

        {/* Video */}
        <RecipeVideo
          src="https://cdn.shopify.com/videos/c/o/v/dfde95ea204d4f80826e924448ce3f2b.mp4"
          title="Bread wash techniques comparison"
          caption="See the difference between egg wash, milk wash, and water in real time"
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
              The wash you choose is as important as the dough itself. It
              defines the first impression — and the final bite.
            </p>
          </blockquote>
        </div>

        {/* ========== WASH TYPES COMPARISON ========== */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-8">
            The Complete Bread Wash Breakdown
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-12">
            Here&rsquo;s everything you need to know about the seven most
            common bread washes — what they do, how to use them, and which
            breads they work best with.
          </p>

          {washTypes.map((wash, index) => (
            <div
              key={index}
              className="mb-10 pb-10 border-b border-[#CBAC96]/30 last:border-0"
            >
              {/* Wash name & ratio */}
              <div className="mb-4">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#2D150B] mb-2">
                  {wash.name}
                </h3>
                <p className="text-sm md:text-base text-[#2D150B]/70 font-medium">
                  {wash.ratio}
                </p>
              </div>

              {/* Result & texture */}
              <div className="bg-[#FFEFD2] border-l-4 border-[#CBAC96] p-4 md:p-5 mb-4 rounded-r-sm">
                <p className="text-[15px] text-[#2D150B] leading-[1.7] mb-2">
                  <strong>The Result:</strong> {wash.result}
                </p>
                <p className="text-[15px] text-[#2D150B] leading-[1.7]">
                  <strong>Texture:</strong> {wash.texture}
                </p>
              </div>

              {/* Best for */}
              <div className="mb-4">
                <p className="text-[15px] font-semibold text-[#2D150B] mb-2">
                  Best For:
                </p>
                <ul className="space-y-1.5 pl-5">
                  {wash.bestFor.map((item, i) => (
                    <li
                      key={i}
                      className="text-[15px] text-[#2D150B] leading-[1.7] list-disc"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to apply */}
              <div className="mb-4">
                <p className="text-[15px] font-semibold text-[#2D150B] mb-2">
                  How to Apply:
                </p>
                <p className="text-[15px] text-[#2D150B] leading-[1.7]">
                  {wash.howToApply}
                </p>
              </div>

              {/* When to apply */}
              <div className="mb-4">
                <p className="text-[15px] font-semibold text-[#2D150B] mb-2">
                  When to Apply:
                </p>
                <p className="text-[15px] text-[#2D150B] leading-[1.7]">
                  {wash.whenToApply}
                </p>
              </div>

              {/* Pro tip */}
              <div className="bg-[#FFFDF9] border border-[#CBAC96]/40 p-4 rounded-sm">
                <p className="text-[14px] text-[#2D150B] leading-[1.7]">
                  <span className="font-semibold text-[#BD2B2D]">
                    Pro Tip:
                  </span>{' '}
                  {wash.proTip}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========== QUICK REFERENCE CHEAT SHEET ========== */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-6">
            Quick Reference: Which Wash Should I Use?
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-8">
            Not sure which wash to reach for? Use this cheat sheet to match
            your bread type to the right finish.
          </p>

          <div className="bg-[#FFEFD2] border-2 border-[#CBAC96] rounded-sm p-6 md:p-8">
            <div className="space-y-5">
              <div className="pb-4 border-b border-[#CBAC96]/40">
                <p className="text-[15px] md:text-[16px] font-bold text-[#2D150B] mb-2">
                  I want a glossy, professional-looking finish
                </p>
                <p className="text-[15px] text-[#2D150B] leading-[1.7]">
                  → <strong>Whole egg wash</strong> (egg + water)
                </p>
              </div>

              <div className="pb-4 border-b border-[#CBAC96]/40">
                <p className="text-[15px] md:text-[16px] font-bold text-[#2D150B] mb-2">
                  I want the deepest, richest golden color
                </p>
                <p className="text-[15px] text-[#2D150B] leading-[1.7]">
                  → <strong>Egg yolk wash</strong> (yolk + cream)
                </p>
              </div>

              <div className="pb-4 border-b border-[#CBAC96]/40">
                <p className="text-[15px] md:text-[16px] font-bold text-[#2D150B] mb-2">
                  I want shine without extra browning
                </p>
                <p className="text-[15px] text-[#2D150B] leading-[1.7]">
                  → <strong>Egg white wash</strong> (white + water)
                </p>
              </div>

              <div className="pb-4 border-b border-[#CBAC96]/40">
                <p className="text-[15px] md:text-[16px] font-bold text-[#2D150B] mb-2">
                  I want a soft, tender crust
                </p>
                <p className="text-[15px] text-[#2D150B] leading-[1.7]">
                  → <strong>Milk or cream wash</strong>, or{' '}
                  <strong>butter wash after baking</strong>
                </p>
              </div>

              <div className="pb-4 border-b border-[#CBAC96]/40">
                <p className="text-[15px] md:text-[16px] font-bold text-[#2D150B] mb-2">
                  I want a crispy, crackly, artisan-style crust
                </p>
                <p className="text-[15px] text-[#2D150B] leading-[1.7]">
                  → <strong>Water or steam</strong>
                </p>
              </div>

              <div className="pb-4 border-b border-[#CBAC96]/40">
                <p className="text-[15px] md:text-[16px] font-bold text-[#2D150B] mb-2">
                  I want to add flavor, not just appearance
                </p>
                <p className="text-[15px] text-[#2D150B] leading-[1.7]">
                  → <strong>Olive oil wash</strong> or{' '}
                  <strong>butter wash</strong>
                </p>
              </div>

              <div>
                <p className="text-[15px] md:text-[16px] font-bold text-[#2D150B] mb-2">
                  I’m baking soft rolls or biscuits
                </p>
                <p className="text-[15px] text-[#2D150B] leading-[1.7]">
                  → <strong>Milk wash before baking</strong>, then{' '}
                  <strong>butter wash after</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========== COMMON MISTAKES ========== */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-6">
            Common Wash Mistakes (and How to Avoid Them)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2D150B] mb-2">
                Mistake #1: Using a paper towel instead of a pastry brush
              </h3>
              <p className="text-[16px] text-[#2D150B] leading-[1.8]">
                Paper towels absorb most of the wash and can tear fragile dough.
                A soft-bristle pastry brush gives you control, even coverage,
                and doesn&rsquo;t waste your wash. Silicone brushes are easy to
                clean and last forever.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2D150B] mb-2">
                Mistake #2: Applying the wash too early
              </h3>
              <p className="text-[16px] text-[#2D150B] leading-[1.8]">
                If you brush on the wash and let the dough sit for too long, it
                can dry out or get reabsorbed. Apply the wash right before the
                bread goes into the oven. The only exception is butter, which
                works best after baking.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2D150B] mb-2">
                Mistake #3: Brushing too hard
              </h3>
              <p className="text-[16px] text-[#2D150B] leading-[1.8]">
                Dough is delicate after its final rise. If you press too hard
                with the brush, you&rsquo;ll deflate it and lose oven spring.
                Use light, gentle strokes. Think of it like painting, not
                scrubbing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2D150B] mb-2">
                Mistake #4: Letting egg wash pool in score marks
              </h3>
              <p className="text-[16px] text-[#2D150B] leading-[1.8]">
                If you&rsquo;re scoring your bread, be careful not to let egg
                wash settle into the cuts. It can glue them shut and prevent
                the bread from expanding properly. Brush lightly and avoid
                over-saturating scored areas.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2D150B] mb-2">
                Mistake #5: Using too much wash
              </h3>
              <p className="text-[16px] text-[#2D150B] leading-[1.8]">
                A thin, even layer is all you need. Too much wash creates a
                thick, uneven film that can taste eggy or look blotchy. One
                light coat is enough. Two coats can work for extra shine, but
                let the first coat dry slightly before applying the second.
              </p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <TipsCallout tips={tips} />

        {/* Closing */}
        <div className="w-full max-w-[720px] mx-auto px-4 my-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-6">
            The Final Brush
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            The wash is the last thing you do before your bread goes into the
            oven. It&rsquo;s a small step, but it&rsquo;s the one that defines
            how your bread looks — and often how it tastes.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            Egg wash for shine and color. Milk for softness. Water for crunch.
            Butter for tenderness. Each one has a purpose. And now you know
            exactly which to use, when to use it, and how to apply it properly.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-10">
            No more guessing. No more pale loaves or sticky, over-brushed
            surfaces. Just the right finish, every time. And if you&rsquo;re
            serious about your bread, the right tools make all the difference.
            A good pastry brush. A reliable dough scraper. A sharp lame for
            clean scores. They won&rsquo;t make you a better baker overnight,
            but they&rsquo;ll make the process smoother — and the results
            more consistent.
          </p>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#2D150B] text-[#FFFDF9] hover:bg-[#2D150B]/90 px-10 py-6 text-base font-semibold rounded-sm"
            >
              <Link href="https://earthyblissco.com/collections/bread-making-essentials">
                Shop Bread-Making Tools &rarr;
              </Link>
            </Button>
          </div>
        </div>

        {/* Product callout (collection mode) */}
        <ProductCallout slug="egg-wash-bread-guide" />

        {/* Related articles */}
        <RelatedArticles slug="egg-wash-bread-guide" />
      </main>

      <Footer />
      <Toaster />
    </>
  );
}
