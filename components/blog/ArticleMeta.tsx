import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ArticleMetaProps {
  category: string;
  title: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedDate: string;
  readTime: number;
}

export function ArticleMeta({ category, title, author, publishedDate, readTime }: ArticleMetaProps) {
  return (
    <div className="w-full max-w-[720px] mx-auto px-4 py-8 md:py-12">
      <Badge variant="secondary" className="mb-4 bg-secondary text-primary uppercase text-xs font-semibold tracking-wide">
        {category}
      </Badge>
      
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
        {title}
      </h1>
      
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{author.name}</span>
        <span>·</span>
        <time dateTime={publishedDate}>{new Date(publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <span>·</span>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{readTime} min read</span>
        </div>
      </div>
    </div>
  );
}
