interface ArticleBodyProps {
  content: string;
}

export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="w-full max-w-[720px] mx-auto px-4">
      <article 
        className="prose prose-lg max-w-none
          prose-headings:font-serif prose-headings:text-foreground prose-headings:font-bold
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground prose-strong:font-semibold
          prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
          prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
          prose-li:text-foreground prose-li:mb-2
          prose-blockquote:border-l-4 prose-blockquote:border-secondary 
          prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground
          prose-img:rounded-lg prose-img:my-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
