import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getRelatedArticles } from '@/lib/blog-registry';

interface RelatedArticlesProps {
  slug: string;
}

export function RelatedArticles({ slug }: RelatedArticlesProps) {
  const articles = getRelatedArticles(slug);
  return (
    <div className="w-full bg-muted/30 py-16 mt-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group"
            >
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4 bg-background">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <Badge variant="secondary" className="mb-2 bg-secondary text-primary uppercase text-xs">
                {article.category}
              </Badge>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {article.title}
              </h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock size={14} />
                <span>{article.readTime} min read</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
