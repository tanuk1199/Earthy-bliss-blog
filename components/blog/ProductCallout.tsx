import Image from 'next/image';
import { getRecommendedProducts, type ShopifyProduct } from '@/lib/product-catalog';

interface ProductCalloutProps {
  slug: string;
}

export function ProductCallout({ slug }: ProductCalloutProps) {
  const products = getRecommendedProducts(slug);

  if (products.length === 0) return null;

  return (
    <div className="w-full border-y border-border my-12 py-8" style={{ backgroundColor: '#FFEFD2' }}>
      <div className="max-w-[720px] mx-auto px-4">
        <div className="mb-6">
          <h3
            className="mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#2D150B',
            }}
          >
            Bread-Making Essentials
          </h3>
          <a
            href="https://earthyblissco.com/collections/bread-making-essentials"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
            style={{ color: '#BD2B2D' }}
          >
            View Collection &rarr;
          </a>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {products.map((product) => (
            <ProductCard key={product.handle} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: ShopifyProduct }) {
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-40 group no-underline"
    >
      <div className="aspect-square relative rounded-lg overflow-hidden mb-2 bg-white">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <h4
        className="mb-1 line-clamp-2"
        style={{
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: '0.85rem',
          fontWeight: 600,
          color: '#2D150B',
        }}
      >
        {product.title}
      </h4>
      <p
        style={{
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#BD2B2D',
        }}
      >
        {product.price}
      </p>
    </a>
  );
}
