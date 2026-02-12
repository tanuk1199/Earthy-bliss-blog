import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/blog/Navbar';
import { Footer } from '@/components/blog/Footer';
import { getAllPosts, type BlogEntry } from '@/lib/blog-registry';
import { FeaturedProducts } from '@/components/blog/FeaturedProducts';

export const metadata: Metadata = {
  title: 'Blog | Earthy Bliss Co.',
  description:
    'Recipes, baking techniques, and kitchen guides from Earthy Bliss Co. Learn to bake bread, score dough, proof like a pro, and more.',
  openGraph: {
    title: 'Blog | Earthy Bliss Co.',
    description:
      'Recipes, baking techniques, and kitchen guides from Earthy Bliss Co.',
    type: 'website',
  },
};

function FeaturedPost({ post }: { post: BlogEntry }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-[#FFEFD2]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
        <div>
          <Badge
            variant="secondary"
            className="mb-4 bg-[#FFEFD2] text-[#2D150B] uppercase text-xs font-semibold tracking-wide"
          >
            {post.category}
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D150B] mb-4 leading-tight group-hover:text-[#BD2B2D] transition-colors">
            {post.title}
          </h2>
          <p className="text-[#3E3E3E] leading-relaxed mb-4">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-[#3E3E3E]">
            <span className="font-medium text-[#2D150B]">{post.author}</span>
            <span>&middot;</span>
            <time dateTime={post.publishedDate}>
              {new Date(post.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&middot;</span>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: BlogEntry }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4 bg-[#FFEFD2]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <Badge
        variant="secondary"
        className="mb-2 bg-[#FFEFD2] text-[#2D150B] uppercase text-xs font-semibold tracking-wide"
      >
        {post.category}
      </Badge>
      <h3 className="font-serif text-xl font-bold text-[#2D150B] mb-2 group-hover:text-[#BD2B2D] transition-colors leading-snug line-clamp-2">
        {post.title}
      </h3>
      <p className="text-sm text-[#3E3E3E] mb-3 line-clamp-2">{post.description}</p>
      <div className="flex items-center gap-1 text-sm text-[#3E3E3E]">
        <Clock size={14} />
        <span>{post.readTime} min read</span>
      </div>
    </Link>
  );
}

type CategoryFilter = 'recipes' | 'techniques' | null;

function filterPosts(posts: BlogEntry[], category: CategoryFilter) {
  if (!category) return null; // no filter — use default grouped layout
  if (category === 'recipes') {
    return posts.filter((p) => p.category === 'Recipes');
  }
  // "techniques" includes Techniques and Guides
  return posts.filter((p) => p.category === 'Techniques' || p.category === 'Guides');
}

const filterLabels: Record<string, string> = {
  recipes: 'Recipes',
  techniques: 'Techniques & Guides',
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: rawCategory } = await searchParams;
  const category = (rawCategory === 'recipes' || rawCategory === 'techniques')
    ? rawCategory
    : null;

  const posts = getAllPosts();
  const filtered = filterPosts(posts, category);

  // Filtered view
  if (filtered !== null) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#FFFDF9]">
          <div className="w-full bg-[#2D150B] py-16 md:py-20">
            <div className="max-w-[1200px] mx-auto px-4 text-center">
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#CBAC96] font-semibold mb-4">
                From Our Kitchen
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFDF9] mb-4">
                {filterLabels[category!]}
              </h1>
              <p className="text-lg text-[#FFFDF9]/75 max-w-xl mx-auto">
                {category === 'recipes'
                  ? 'Tried-and-true recipes from our kitchen to yours — breads, buns, biscuits, and more.'
                  : 'Master the fundamentals — kneading, scoring, proofing, and everything in between.'}
              </p>
            </div>
          </div>

          <section className="max-w-[1200px] mx-auto px-4 py-16">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-center text-[#3E3E3E] py-16">
                No posts yet — check back soon!
              </p>
            )}
          </section>

          <FeaturedProducts />
        </main>
        <Footer />
      </>
    );
  }

  // Default view — all posts, grouped
  const [featured, ...rest] = posts;
  const recipes = rest.filter((p) => p.category === 'Recipes');
  const techniques = rest.filter(
    (p) => p.category === 'Techniques' || p.category === 'Guides'
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFFDF9]">
        {/* Header */}
        <div className="w-full bg-[#2D150B] py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-4 text-center">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#CBAC96] font-semibold mb-4">
              From Our Kitchen
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFDF9] mb-4">
              The Earthy Bliss Blog
            </h1>
            <p className="text-lg text-[#FFFDF9]/75 max-w-xl mx-auto">
              Recipes, techniques, and guides to help you bake better bread — by
              hand, from scratch, with love.
            </p>
          </div>
        </div>

        {/* Featured post */}
        {featured && (
          <section className="max-w-[1200px] mx-auto px-4 py-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#CBAC96] font-semibold mb-6">
              Latest
            </p>
            <FeaturedPost post={featured} />
          </section>
        )}

        {/* Divider */}
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="h-px bg-[#CBAC96]/40" />
        </div>

        {/* Recipes section */}
        {recipes.length > 0 && (
          <section className="max-w-[1200px] mx-auto px-4 py-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-10">
              Recipes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Techniques & Guides section */}
        {techniques.length > 0 && (
          <section className="max-w-[1200px] mx-auto px-4 pb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2D150B] mb-10">
              Techniques &amp; Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {techniques.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        <FeaturedProducts />
      </main>

      <Footer />
    </>
  );
}
