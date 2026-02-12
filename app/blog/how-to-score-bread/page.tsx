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
  title: 'How to Score Bread: Patterns, Tools, and Why It Matters | Earthy Bliss Co.',
  description:
    'Learn how to score bread with a lame or razor blade — depth, angle, patterns, and why it matters for oven spring. Turn every loaf into something beautiful.',
  openGraph: {
    title: 'How to Score Bread: Patterns, Tools, and Why It Matters',
    description:
      'Learn how to score bread with a lame or razor blade — depth, angle, patterns, and why it matters for oven spring. Turn every loaf into something beautiful.',
    images: [
      '/images/blog/how-to-score-bread.png',
    ],
    type: 'article',
    publishedTime: '2026-01-15',
    authors: ['Earthy Bliss Team'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Score Bread: Patterns, Tools, and Why It Matters',
    description:
      'Master bread scoring techniques with a lame or razor blade. Depth, angle, patterns, and the science behind oven spring.',
    images: [
      '/images/blog/how-to-score-bread.png',
    ],
  },
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const recipePhases = [
  {
    phase: 1,
    title: 'The Basics',
    steps: [
      {
        number: 1,
        title: 'Score right before baking.',
        content:
          'Your dough should be cold — either straight from the refrigerator or at least firm to the touch. Cold dough holds its shape better and scores more cleanly without dragging or tearing. If your dough has been sitting at room temperature, pop it in the fridge for 20–30 minutes before scoring.',
        tip: 'Cold dough creates cleaner cuts and more dramatic ears (the lifted ridge along the score line). Room temperature dough tends to deflate when scored.',
      },
      {
        number: 2,
        title: 'Hold your blade at a 30–45° angle.',
        content:
          'Don\'t cut straight down into the dough like you\'re slicing a loaf. Instead, hold your blade at a shallow angle to the surface — imagine you\'re shaving the top layer off, not stabbing into it. This angle is what creates the "ear," the lifted flap of crust that opens beautifully in the oven.',
      },
      {
        number: 3,
        title: 'Cut ¼" to ½" deep in one confident motion.',
        content:
          'No hesitation. No sawing back and forth. Place your blade at the starting point, apply firm, steady pressure, and draw it through in one smooth stroke. If you saw or pause mid-cut, the dough can deflate or the edge can tear. Confidence is everything.',
        tip: 'Think of it like signing your name with a pen — deliberate, fluid, and decisive. The blade should glide through the dough, not drag.',
      },
      {
        number: 4,
        title: 'Start simple.',
        content:
          'For a round boule, try a single slash straight down the center. For an oval batard, three diagonal slashes running the length of the loaf. These classic patterns look professional, control oven spring effectively, and give you room to practice your technique before moving to complex designs.',
      },
    ],
  },
  {
    phase: 2,
    title: 'Common Patterns',
    steps: [
      {
        number: 5,
        title: 'The Cross',
        content:
          'Two perpendicular cuts forming an X or + on top of a round boule. This is the most beginner-friendly pattern — it creates four even quadrants and allows the loaf to expand uniformly. Each cut should run about two-thirds of the way across the loaf, not edge to edge.',
      },
      {
        number: 6,
        title: 'The Chevron',
        content:
          'Angled slashes running diagonally down the length of an oval loaf, like herringbone or a row of arrows. Start at the top, make a cut at a 45° angle, then overlap the next cut slightly (about ⅓ of the way into the previous cut). This creates dramatic, layered ears and gives the loaf a professional bakery look.',
        tip: 'The overlapping is key — it prevents gaps and creates that signature cascading effect.',
      },
      {
        number: 7,
        title: 'The Square',
        content:
          'Four cuts forming a square or diamond shape on top of a round loaf. Start about an inch in from the edge and cut straight lines to form the perimeter. The center square will rise higher than the outer crust, creating a beautiful layered effect. This pattern works especially well for enriched doughs like brioche.',
      },
      {
        number: 8,
        title: 'The Wheat Stalk',
        content:
          'Instead of a blade, use kitchen scissors. Cut a straight line down the center of the loaf, then make diagonal snips on either side, angling outward like the leaves of a wheat stalk. Tilt each snip slightly as you cut so the flaps open upward during baking. This technique is decorative, impressive, and surprisingly forgiving for beginners.',
        tip: 'Wet your scissors lightly between cuts to prevent sticking. This pattern is perfect for rolls and smaller loaves.',
      },
    ],
  },
];

const tips = [
  {
    title: 'Cold dough scores better',
    content:
      'If your dough has been rising at room temperature, chill it in the fridge for 20–30 minutes before scoring. The firmer surface cuts cleanly and holds the pattern better.',
  },
  {
    title: 'Wet your blade for cleaner cuts',
    content:
      'Dip your blade or lame in water before each cut. The moisture helps it glide through sticky dough without dragging. Shake off any excess — you want it damp, not dripping.',
  },
  {
    title: 'Don\'t score enriched doughs too deep',
    content:
      'Brioche, challah, and other butter- or egg-rich doughs are softer and more delicate. Keep your cuts shallow (closer to ¼") or they may collapse. These doughs also don\'t develop ears the same way lean doughs do.',
  },
  {
    title: 'Scoring patterns affect how the bread opens',
    content:
      'A single slash creates one dramatic opening. Multiple slashes distribute the expansion across the loaf. Experiment with different patterns to see how your dough responds — every recipe behaves slightly differently.',
  },
  {
    title: 'Practice on less precious loaves first',
    content:
      'If you\'re nervous about scoring your beautiful sourdough, practice on a basic white loaf or even a batch of rolls. Muscle memory builds fast, and a few practice runs will make you much more confident when it counts.',
  },
];


// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HowToScoreBreadPage() {
  const fullUrl = 'https://blog.earthyblissco.com/blog/how-to-score-bread';
  const bannerImage =
    '/images/blog/how-to-score-bread.png';

  return (
    <>
      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Score Bread',
            description:
              'Learn how to score bread dough with proper technique, tools, and patterns for beautiful oven spring.',
            image: bannerImage,
            totalTime: 'PT5M',
            estimatedCost: {
              '@type': 'MonetaryAmount',
              currency: 'USD',
              value: '0',
            },
            tool: [
              {
                '@type': 'HowToTool',
                name: 'Bread lame or razor blade',
              },
              {
                '@type': 'HowToTool',
                name: 'Kitchen scissors (optional)',
              },
            ],
            step: [
              {
                '@type': 'HowToStep',
                name: 'Score right before baking',
                text: 'Use cold dough straight from the refrigerator or chill room temperature dough for 20-30 minutes. Cold dough holds its shape and scores more cleanly.',
                url: '${fullUrl}#step-1',
              },
              {
                '@type': 'HowToStep',
                name: 'Hold blade at 30-45° angle',
                text: 'Hold your blade at a shallow angle to the surface, not straight down. This creates the ear (lifted ridge) along the score line.',
                url: '${fullUrl}#step-2',
              },
              {
                '@type': 'HowToStep',
                name: 'Cut ¼" to ½" deep in one motion',
                text: 'Make one confident, smooth stroke without sawing back and forth. Apply firm, steady pressure.',
                url: '${fullUrl}#step-3',
              },
              {
                '@type': 'HowToStep',
                name: 'Start with simple patterns',
                text: 'Try a single slash down the center of a boule, or three diagonal slashes on an oval loaf.',
                url: '${fullUrl}#step-4',
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
          alt="Freshly scored artisan bread loaf with dramatic ear before baking"
        />

        {/* Article meta */}
        <ArticleMeta
          category="Baking"
          title="How to Score Bread: Patterns, Tools, and Why It Matters"
          author={{ name: 'Earthy Bliss Team' }}
          publishedDate="2026-01-15"
          readTime={9}
        />

        {/* Social share */}
        <div className="w-full max-w-[720px] mx-auto px-4 mb-8">
          <SocialShare
            title="How to Score Bread: Patterns, Tools, and Why It Matters"
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
              The moment your bread hits the heat of the oven, everything
              changes. Gases trapped inside the dough expand rapidly in a process
              bakers call oven spring. It&rsquo;s what transforms a dense lump of
              dough into an airy, risen loaf. But here&rsquo;s the thing: without
              scoring, all that energy has nowhere to go.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
              The dough will still rise. But it&rsquo;ll do it chaotically &mdash;
              tearing in random spots, opening unevenly, creating dense pockets
              where the crumb should be light. Scoring isn&rsquo;t decorative
              first. It&rsquo;s functional. You&rsquo;re giving the dough
              permission to expand exactly where you want it to.
            </p>

            <p className="text-[16px] text-[#2D150B] leading-[1.8]">
              The patterns come later. First, you learn the cut.
            </p>
          </div>
        </div>

        {/* Video */}
        <RecipeVideo
          src="https://cdn.shopify.com/videos/c/o/v/aa1b9f5b78cd4ef89e23718eb210971c.mp4"
          title="How scoring helps your homemade bread rise evenly"
          caption="Watch how a single confident cut controls oven spring"
        />

        {/* Why It Matters section */}
        <div className="w-full max-w-[720px] mx-auto px-4 my-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-6">
            Why Score Bread?
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            When dough enters a hot oven, the yeast goes into overdrive. The
            heat causes carbon dioxide and steam trapped in the dough to expand
            violently. This is oven spring &mdash; the final burst of rise that
            happens in the first 10&ndash;15 minutes of baking.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            Without a score, the outer crust sets quickly, trapping all that
            pressure inside. Eventually, the weakest point gives way &mdash;
            usually somewhere on the side or bottom. The result is an uneven
            rise, a lopsided loaf, and a crumb structure that&rsquo;s dense in
            some areas and gaping in others.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            <strong>Scoring does two critical things:</strong>
          </p>

          <ul className="list-none space-y-3 mb-6 pl-6">
            <li className="text-[16px] text-[#2D150B] leading-[1.8] relative before:content-['•'] before:absolute before:left-[-1.25rem] before:text-[#BD2B2D] before:font-bold">
              <strong>Controls expansion.</strong> It tells the dough exactly
              where to open, so the loaf rises evenly and predictably.
            </li>
            <li className="text-[16px] text-[#2D150B] leading-[1.8] relative before:content-['•'] before:absolute before:left-[-1.25rem] before:text-[#BD2B2D] before:font-bold">
              <strong>Creates pattern and structure.</strong> The way you score
              affects how the loaf looks, yes, but also how the crumb develops
              inside. A single deep slash creates one dramatic opening. Multiple
              shallow cuts distribute the rise across the surface.
            </li>
          </ul>

          <p className="text-[16px] text-[#2D150B] leading-[1.8]">
            It&rsquo;s functional first. But when you nail the technique, the
            result is also beautiful &mdash; that lifted ear of crust, the crisp
            edges where the score opened, the way light and shadow play across
            the pattern you carved into the surface.
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
              You&rsquo;re not just cutting dough. You&rsquo;re directing where
              the loaf will open, how it will rise, and what it will become.
            </p>
          </blockquote>
        </div>

        {/* Tools section */}
        <div className="w-full max-w-[720px] mx-auto px-4 my-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-6">
            The Right Tool for the Job
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-8">
            You don&rsquo;t need much. But the tool you use makes a real
            difference in how clean the cut is, how easily it glides through the
            dough, and whether you can achieve that signature ear.
          </p>

          {/* Tools grid */}
          <div className="space-y-6 mb-6">
            {/* Bread Lame */}
            <div className="bg-[#FFEFD2] rounded-sm p-6">
              <h3 className="font-serif text-xl font-bold text-[#2D150B] mb-3">
                Bread Lame (Best)
              </h3>
              <p className="text-[15px] text-[#2D150B] leading-[1.8] mb-3">
                A lame (pronounced &ldquo;lahm&rdquo;) is a curved razor blade
                mounted on a handle. It&rsquo;s specifically designed for
                scoring bread. The curved blade makes it easy to cut at the
                shallow angle needed to create ears &mdash; that dramatic lifted
                ridge along the score line.
              </p>
              <p className="text-[15px] text-[#2D150B] leading-[1.8]">
                <strong>Why it works:</strong> The curve does the work for you.
                You hold it naturally, and the blade sits at the right angle
                without you having to think about it. Clean cuts, minimal drag,
                professional results.
              </p>
            </div>

            {/* Razor Blade */}
            <div className="bg-[#FFEFD2] rounded-sm p-6">
              <h3 className="font-serif text-xl font-bold text-[#2D150B] mb-3">
                Razor Blade
              </h3>
              <p className="text-[15px] text-[#2D150B] leading-[1.8] mb-3">
                A simple single-edge razor blade works beautifully. Hold it at
                an angle between your thumb and forefinger, or tape one edge for
                grip. It&rsquo;s cheap, sharp, and effective &mdash; many
                professional bakers still prefer a bare blade over a lame.
              </p>
              <p className="text-[15px] text-[#2D150B] leading-[1.8]">
                <strong>Why it works:</strong> Ultimate control and precision.
                You can adjust the angle mid-cut, make tight curves, and score
                intricate patterns. The downside? You have to provide the angle
                yourself, which takes practice.
              </p>
            </div>

            {/* Sharp Knife */}
            <div className="bg-[#FFEFD2] rounded-sm p-6">
              <h3 className="font-serif text-xl font-bold text-[#2D150B] mb-3">
                Sharp Knife (In a Pinch)
              </h3>
              <p className="text-[15px] text-[#2D150B] leading-[1.8] mb-3">
                A very sharp paring knife or chef&rsquo;s knife will work if
                that&rsquo;s what you have. The key word is <em>very sharp</em>.
                A dull knife drags, deflates the dough, and creates ragged edges
                instead of clean cuts.
              </p>
              <p className="text-[15px] text-[#2D150B] leading-[1.8]">
                <strong>The catch:</strong> Even a sharp knife has more surface
                area than a razor blade, so it tends to drag more. Serrated
                knives don&rsquo;t work well &mdash; they tear rather than
                slice.
              </p>
            </div>

            {/* Kitchen Scissors */}
            <div className="bg-[#FFEFD2] rounded-sm p-6">
              <h3 className="font-serif text-xl font-bold text-[#2D150B] mb-3">
                Kitchen Scissors (For Patterns)
              </h3>
              <p className="text-[15px] text-[#2D150B] leading-[1.8] mb-3">
                For certain decorative patterns &mdash; like the wheat stalk
                design &mdash; kitchen scissors are actually the best tool.
                You&rsquo;re not slicing; you&rsquo;re snipping at an angle,
                creating flaps that lift during baking.
              </p>
              <p className="text-[15px] text-[#2D150B] leading-[1.8]">
                <strong>Best for:</strong> Rolls, focaccia, or any loaf where
                you want a rustic, textured look. Wet the blades lightly to
                prevent sticking.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <RecipeSteps phases={recipePhases} />

        {/* Tips */}
        <TipsCallout tips={tips} />

        {/* Closing */}
        <div className="w-full max-w-[720px] mx-auto px-4 my-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-6">
            Practice Makes Pattern
          </h2>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            The first few times you score bread, it might feel clumsy. The blade
            might drag. The cuts might not open the way you imagined. That&rsquo;s
            normal.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-6">
            But muscle memory builds faster than you think. Five loaves in,
            you&rsquo;ll start to feel the difference between dough that&rsquo;s
            too warm and dough that&rsquo;s perfectly chilled. Ten loaves in,
            your hand will know the right angle without you thinking about it.
            Twenty loaves in, you&rsquo;ll be experimenting with patterns
            you&rsquo;ve never tried before.
          </p>

          <p className="text-[16px] text-[#2D150B] leading-[1.8] mb-10">
            Scoring is the moment where craft meets art. The blade in your hand,
            the dough on the counter, and one confident cut that transforms both.
          </p>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#2D150B] text-[#FFFDF9] hover:bg-[#2D150B]/90 px-10 py-6 text-base font-semibold rounded-sm"
            >
              <Link href="https://earthyblissco.com/collections/bread-making-essentials">
                Shop Bread Lames &amp; Tools &rarr;
              </Link>
            </Button>
          </div>
        </div>

        {/* Product callout (collection mode) */}
        <ProductCallout slug="how-to-score-bread" />

        {/* Related articles */}
        <RelatedArticles slug="how-to-score-bread" />
      </main>

      <Footer />
      <Toaster />
    </>
  );
}
