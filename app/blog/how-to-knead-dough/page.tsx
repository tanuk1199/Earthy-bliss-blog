import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/blog/Navbar';
import { BannerImage } from '@/components/blog/BannerImage';
import { ArticleMeta } from '@/components/blog/ArticleMeta';
import { SocialShare } from '@/components/blog/SocialShare';
import { RecipeVideo } from '@/components/blog/RecipeVideo';
import { RecipeSteps } from '@/components/blog/RecipeSteps';
import { TipsCallout } from '@/components/blog/TipsCallout';
import { ProductCallout } from '@/components/blog/ProductCallout';
import { RelatedArticles } from '@/components/blog/RelatedArticles';
import { Footer } from '@/components/blog/Footer';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'How to Knead Bread Dough by Hand (With the Windowpane Test) | Earthy Bliss Co.',
  description:
    'Learn how to knead bread dough by hand with proper technique, timing, and the windowpane test. The single skill that separates dense loaves from airy ones.',
  openGraph: {
    title: 'How to Knead Bread Dough by Hand (With the Windowpane Test)',
    description:
      'Master the single most important skill in bread baking. Learn the push-fold-rotate rhythm, timing, and windowpane test.',
    images: [
      '/images/blog/how-to-knead-dough.png',
    ],
    type: 'article',
    publishedTime: '2025-12-10',
    authors: ['Earthy Bliss Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Knead Bread Dough by Hand (With the Windowpane Test)',
    description:
      'The single skill that separates dense loaves from airy ones. Master kneading technique in 8-12 minutes.',
    images: [
      '/images/blog/how-to-knead-dough.png',
    ],
  },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const recipePhases = [
  {
    phase: 1,
    title: 'The Technique',
    steps: [
      {
        number: 1,
        title: 'Flour your surface lightly.',
        content:
          'Dust your work surface with just enough flour to prevent sticking — a tablespoon or two. Less is more here. Too much flour gets incorporated into the dough as you knead, which dries it out and makes the final loaf dense and tight. If the dough sticks a little at first, that’s fine. It’ll firm up as gluten develops.',
        tip: 'Use a bench scraper to keep your surface clean instead of adding more flour. It’s a game-changer for sticky doughs.',
      },
      {
        number: 2,
        title: 'Push and fold: the core motion.',
        content:
          'Place the dough on your work surface. Push the dough away from you with the heel of your hand, stretching it forward. Then fold the top half of the dough back toward you, like you’re folding a letter. Rotate the dough 90 degrees. Repeat. That’s the rhythm: push, fold, rotate. Push, fold, rotate. Your weight does the work, not your arm strength.',
      },
      {
        number: 3,
        title: 'Find your rhythm: 8-10 minutes for most breads.',
        content:
          'Keep that push-fold-rotate motion going steadily for 8 to 10 minutes. You’ll feel the dough change under your hands. It starts rough and shaggy. After a few minutes, it becomes smoother. By the 8-minute mark, it should feel elastic, alive, and slightly springy. Don’t rush it. The gluten network takes time to develop. If your dough fights back and snaps instead of stretching, give it a 5-minute rest, then continue.',
        tip: 'Set a timer. Beginner bakers tend to under-knead because their arms get tired. 8 minutes feels longer than you think.',
      },
      {
        number: 4,
        title: 'Adjust as you go.',
        content:
          'If the dough is still sticky after 3-4 minutes of kneading, sprinkle in flour — one teaspoon at a time — and knead it in. Wait 30 seconds before adding more. If the dough feels dry and stiff, wet your hands slightly with water and continue kneading. The moisture from your hands will hydrate the dough without making it soupy.',
      },
    ],
  },
  {
    phase: 2,
    title: 'Know When It’s Done',
    steps: [
      {
        number: 5,
        title: 'The poke test.',
        content:
          'Press your finger into the dough about half an inch deep. If it springs back slowly and leaves just a faint indent, it’s ready. If your finger leaves a deep dent that doesn’t spring back at all, keep kneading — the gluten isn’t developed yet.',
      },
      {
        number: 6,
        title: 'The windowpane test.',
        content:
          'Pinch off a small piece of dough (about the size of a walnut). Gently stretch it between your fingers, working it thinner and thinner. If you can stretch it thin enough to see light through it without the dough tearing, the gluten is fully developed. If it tears before you can see through it, knead for another 2-3 minutes and test again. This is the gold standard for perfectly kneaded dough.',
        tip: 'The windowpane test works for all yeast breads. It’s especially important for high-hydration doughs like ciabatta or focaccia.',
      },
      {
        number: 7,
        title: 'The feel: trust your hands.',
        content:
          'Properly kneaded dough is smooth on the surface, slightly tacky to the touch (not sticky), and feels elastic and alive when you handle it. It should spring back when you poke it and hold its shape when you form it into a ball. If it slumps and spreads like pancake batter, it needs more kneading. If it’s stiff and tears when you try to shape it, you may have added too much flour.',
      },
    ],
  },
];

const tips = [
  {
    title: 'Don’t add too much flour',
    content:
      'This is the single biggest mistake beginner bakers make. A slightly sticky dough is easier to fix than a dry one. You can always add flour, but you can’t take it out. When in doubt, knead a little longer before adding more.',
  },
  {
    title: 'Rest the dough if it fights back',
    content:
      'If your dough is elastic but tears easily or snaps back aggressively when you try to stretch it, it’s tight. Cover it with a towel and let it rest for 5 minutes. The gluten will relax, and it’ll be much easier to work with.',
  },
  {
    title: 'Wet doughs benefit from stretch-and-fold',
    content:
      'High-hydration doughs like ciabatta, focaccia, and some sourdoughs are too sticky to knead the traditional way. Instead, use the stretch-and-fold method: wet your hands, grab one edge of the dough, stretch it up, and fold it over itself. Rotate the bowl 90 degrees and repeat. Do this every 30 minutes during the bulk rise.',
  },
  {
    title: 'A dough scraper keeps your surface clean',
    content:
      'Instead of scraping sticky dough off your counter with your hands (and then adding more flour to clean them), use a bench scraper to lift and fold the dough. It gives you better control and prevents you from over-flouring.',
  },
];


// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HowToKneadDoughPage() {
  const fullUrl = 'https://blog.earthyblissco.com/blog/how-to-knead-dough';
  const bannerImage =
    '/images/blog/how-to-knead-dough.png';

  return (
    <>
      {/* HowTo Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Knead Bread Dough by Hand',
            description:
              'Learn how to knead bread dough by hand with proper technique, timing, and the windowpane test.',
            image: bannerImage,
            totalTime: 'PT10M',
            step: [
              {
                '@type': 'HowToStep',
                name: 'Flour your surface lightly',
                text: 'Dust your work surface with just enough flour to prevent sticking — a tablespoon or two. Less is more here.',
                url: fullUrl + '#step-1',
              },
              {
                '@type': 'HowToStep',
                name: 'Push and fold: the core motion',
                text: 'Push the dough away from you with the heel of your hand, stretching it forward. Then fold the top half back toward you. Rotate 90 degrees. Repeat.',
                url: fullUrl + '#step-2',
              },
              {
                '@type': 'HowToStep',
                name: 'Find your rhythm: 8-10 minutes',
                text: 'Keep that push-fold-rotate motion going steadily for 8 to 10 minutes. The dough will become smoother and more elastic.',
                url: fullUrl + '#step-3',
              },
              {
                '@type': 'HowToStep',
                name: 'Adjust as you go',
                text: 'If the dough is sticky, add flour one teaspoon at a time. If it’s dry, wet your hands slightly and continue kneading.',
                url: fullUrl + '#step-4',
              },
              {
                '@type': 'HowToStep',
                name: 'The poke test',
                text: 'Press your finger into the dough. If it springs back slowly and leaves just a faint indent, it’s ready.',
                url: fullUrl + '#step-5',
              },
              {
                '@type': 'HowToStep',
                name: 'The windowpane test',
                text: 'Stretch a small piece of dough thin enough to see light through it. If it doesn’t tear, the gluten is fully developed.',
                url: fullUrl + '#step-6',
              },
              {
                '@type': 'HowToStep',
                name: 'The feel: trust your hands',
                text: 'Properly kneaded dough is smooth, slightly tacky, elastic, and springs back when poked.',
                url: fullUrl + '#step-7',
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
          alt="Hands kneading bread dough on a floured surface"
        />

        {/* Article meta */}
        <ArticleMeta
          category="Baking"
          title="How to Knead Bread Dough by Hand (With the Windowpane Test)"
          author={{ name: 'Earthy Bliss Team' }}
          publishedDate="2025-12-10"
          readTime={10}
        />

        {/* Social share */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-8">
          <SocialShare
            title="How to Knead Bread Dough by Hand (With the Windowpane Test)"
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
              If there’s one skill that separates a dense, crumbly loaf from a
              light, airy one, it’s kneading. You can follow a recipe to the
              letter — measure your flour, proof your yeast, get the water
              temperature just right — but if you don’t knead the dough
              properly, none of it matters. The bread won’t rise the way it
              should. The crumb will be tight and uneven. The crust won’t have
              that satisfying chew.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
              Kneading isn’t complicated. It’s rhythmic, repetitive, and
              surprisingly therapeutic once you get the hang of it. But
              most beginner bakers either don’t knead long enough, add too much
              flour in the process, or simply don’t know what properly kneaded
              dough should feel like.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8]">
              This guide will walk you through the exact technique, the timing,
              and the three tests that tell you when your dough is ready. By the
              end, you’ll know exactly what good dough feels like — and
              you’ll never second-guess yourself again.
            </p>
          </div>
        </div>

        {/* Section: Why Kneading Matters */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-6">
            Why Kneading Matters: The Science of Structure
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            When you mix flour and water, two proteins — glutenin and
            gliadin — combine to form gluten. Kneading develops that gluten
            into an elastic network of strands that trap the carbon dioxide
            produced by yeast. That’s what makes bread rise. That’s what
            gives it structure, chew, and an open, airy crumb.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            <strong>Under-kneaded dough</strong> doesn’t have enough gluten
            development. The result is a loaf that doesn’t rise well, has a
            dense and crumbly texture, and falls apart when you slice it. The
            crumb will be tight and uneven, with small, irregular holes.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            <strong>Over-kneaded dough</strong> is possible with a stand mixer
            (the motor can overwork the gluten), but it’s extremely rare when
            kneading by hand. You’d have to knead for 20-30 minutes straight,
            and your arms would give out long before the dough does. If it does
            happen, the dough becomes stiff, tears easily, and bakes into a
            tight, tough loaf.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8]">
            The sweet spot is elastic, smooth, and slightly tacky dough that
            springs back when you poke it and stretches thin without tearing.
            That’s what we’re aiming for.
          </p>
        </div>

        {/* Video */}
        <RecipeVideo
          src="https://cdn.shopify.com/videos/c/o/v/a73906a0ea4b4b94b1dfc724d579c665.mp4"
          title="How to knead bread dough by hand"
          caption="See the push-fold-rotate technique in action"
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
              Kneading is the single most transformative step in bread baking.
              Get this right, and everything else falls into place.
            </p>
          </blockquote>
        </div>

        {/* Steps */}
        <RecipeSteps phases={recipePhases} />

        {/* Section: Hand vs. Stand Mixer */}
        <div className="w-full max-w-[720px] mx-auto px-4 my-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-6">
            Hand Kneading vs. Stand Mixer: What’s the Difference?
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            Both methods work. Both develop gluten. The difference is in timing,
            control, and feel.
          </p>

          <div className="bg-[#FFEFD2] border-l-4 border-[#BD2B2D] p-6 mb-6">
            <h3 className="font-semibold text-[#2D150B] mb-3 text-lg">
              By Hand (8-12 minutes)
            </h3>
            <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-3">
              You have complete control over the dough. You feel it change under
              your hands — from rough and shaggy to smooth and elastic. It’s
              slower, but it builds intuition. You learn what good dough feels
              like, which makes you a better baker in the long run.
            </p>
            <p className="text-[16px] text-[#3E3E3E] leading-[1.8]">
              It’s also surprisingly meditative. The repetitive motion, the
              rhythm, the smell of the dough — there’s something deeply
              satisfying about it.
            </p>
          </div>

          <div className="bg-[#FFEFD2] border-l-4 border-[#CBAC96] p-6 mb-6">
            <h3 className="font-semibold text-[#2D150B] mb-3 text-lg">
              Stand Mixer with Dough Hook (5-7 minutes)
            </h3>
            <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-3">
              Faster and less physically demanding. Set the mixer to medium-low
              speed and let it run. Watch for the dough to pull away from the
              sides of the bowl and climb up the hook. When it does, it’s
              almost ready. Give it another minute, then check with the
              windowpane test.
            </p>
            <p className="text-[16px] text-[#3E3E3E] leading-[1.8]">
              The risk with a mixer is over-kneading. If you let it run too
              long, the gluten can break down, and the dough will become sticky
              and slack. Pay attention.
            </p>
          </div>

          <p className="text-[16px] text-[#2D150B] leading-[1.8]">
            Either method works. If you’re new to bread baking, start by hand.
            It takes a little longer, but you’ll build the kind of intuition
            that makes you confident with any dough.
          </p>
        </div>

        {/* Tips */}
        <TipsCallout tips={tips} />

        {/* Closing */}
        <div className="w-full max-w-[720px] mx-auto px-4 my-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-6">
            The Single Skill That Changes Everything
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            Kneading isn’t glamorous. It doesn’t have the drama of pulling a
            golden loaf out of the oven or the satisfaction of slicing into a
            perfect crumb. But it’s the step that makes all of that possible.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            Once you learn what properly kneaded dough feels like — smooth,
            elastic, alive under your hands — you stop second-guessing
            yourself. You stop wondering if you kneaded long enough. You just
            know.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-10">
            And that’s when bread baking stops feeling like a mystery and starts
            feeling like muscle memory. The kind of skill that stays with you
            forever.
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
        <ProductCallout slug="how-to-knead-dough" />

        {/* Related articles */}
        <RelatedArticles slug="how-to-knead-dough" />
      </main>

      <Footer />
      <Toaster />
    </>
  );
}
