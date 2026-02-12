import { notFound } from 'next/navigation';
import { blogRegistry } from '@/lib/blog-registry';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // Check if this slug has a dedicated page folder.
  // If it's in the registry, the dedicated folder handles it (Next.js priority).
  // If it's NOT in the registry, it's an unknown slug — 404.
  const exists = blogRegistry.some((p) => p.slug === slug);
  if (!exists) {
    notFound();
  }

  // This code is unreachable for registered slugs (their folders take priority),
  // but satisfies TypeScript. Any new post added to the registry without its own
  // folder would need a proper render here.
  notFound();
}
