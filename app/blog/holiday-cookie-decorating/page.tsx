import type { Metadata } from 'next';
import { Navbar } from '@/components/blog/Navbar';
import { BannerImage } from '@/components/blog/BannerImage';
import { ArticleMeta } from '@/components/blog/ArticleMeta';
import { ArticleBody } from '@/components/blog/ArticleBody';
import { ProductCallout } from '@/components/blog/ProductCallout';
import { RelatedArticles } from '@/components/blog/RelatedArticles';
import { Footer } from '@/components/blog/Footer';

export const metadata: Metadata = {
  title: 'Creative Cookie Decorating Ideas for the Holidays | Earthy Bliss Co. Blog',
  description: 'Learn creative techniques for decorating holiday cookies with professional results.',
};

const content = `
  <p>Cookie decorating is one of the most beloved holiday traditions. Whether you're making sugar cookies, gingerbread, or shortbread, the right tools and techniques can turn simple shapes into edible works of art.</p>
  <h2>Getting Started</h2>
  <p>The foundation of great cookie decorating starts with a smooth, firm cookie and the right consistency of icing. Royal icing is the gold standard for decorated cookies — it dries hard, holds its shape, and can be thinned for flooding or kept thick for piping details.</p>
`;

export default function HolidayCookieDecoratingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <BannerImage
          src="https://images.unsplash.com/photo-1513135065346-a098a63a71ee?w=1600&h=900&fit=crop"
          alt="Decorated holiday cookies"
        />
        <ArticleMeta
          category="Recipes"
          title="Creative Cookie Decorating Ideas for the Holidays"
          author={{ name: 'Earthy Bliss Team' }}
          publishedDate="2025-12-10"
          readTime={15}
        />
        <ArticleBody content={content} />
        <ProductCallout slug="holiday-cookie-decorating" />
        <RelatedArticles slug="holiday-cookie-decorating" />
      </main>
      <Footer />
    </>
  );
}
