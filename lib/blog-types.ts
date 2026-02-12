export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedDate: string;
  readTime: number;
  bannerImage: string;
  bannerAlt: string;
  videoEmbed?: {
    url: string;
    title: string;
  };
  content: string;
  productCallout: ProductCallout;
  relatedArticles: RelatedArticle[];
}

export interface ProductCallout {
  mode: 'single' | 'collection';
  insertAtPercentage?: number;
  single?: {
    productSlug: string;
    title: string;
    image: string;
    price: string;
    description: string;
  };
  collection?: {
    collectionSlug: string;
    title: string;
    products: Array<{
      productSlug: string;
      title: string;
      image: string;
      price: string;
    }>;
  };
}

export interface RelatedArticle {
  slug: string;
  title: string;
  category: string;
  image: string;
  readTime: number;
}
