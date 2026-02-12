"use client";

import Image from "next/image";

const STORE_URL = "https://earthyblissco.com";

const products = [
  {
    title: "Breadly\u2122 Share the Craft Set",
    price: "69.00",
    pricePrefix: "From",
    href: `${STORE_URL}/products/share-the-craft-set`,
    image:
      "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/imgi_121_d215e880-eee4-48de-8b70-933b4fb5be17.jpg?v=1769666560",
  },
  {
    title: "Everything Sourdough Baking Gift Set",
    price: "99.00",
    pricePrefix: "",
    href: `${STORE_URL}/products/everythingsourdough-baking-set`,
    image:
      "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/SourDoughKit_209.jpg?v=1762459267",
  },
];

function formatPrice(price: string, prefix: string) {
  const num = parseFloat(price);
  const formatted = num % 1 === 0 ? `$${num.toFixed(0)}.00` : `$${num}`;
  return prefix ? `${prefix} ${formatted}` : formatted;
}

export function FeaturedProducts() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#FFEFD2", padding: "56px 24px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <p
          style={{
            fontFamily: "'Source Sans Pro', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "#CBAC96",
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          Gift-Worthy Picks
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.8rem",
            fontWeight: 600,
            color: "#2D150B",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          Give the Gift of Baking
        </h2>
        <p
          style={{
            fontFamily: "'Source Sans Pro', sans-serif",
            fontSize: "0.95rem",
            color: "#3E3E3E",
            textAlign: "center",
            maxWidth: 480,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          Know someone who loves baking? These curated sets make the perfect gift for any occasion.
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 mx-auto"
          style={{ maxWidth: 720, gap: 32 }}
        >
          {products.map((product) => (
            <a
              key={product.title}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              style={{
                backgroundColor: "#fff",
                borderRadius: 12,
                overflow: "hidden",
                textDecoration: "none",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(45, 21, 11, 0.12)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "1 / 1" }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div style={{ padding: "20px 20px 24px" }}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "#2D150B",
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {product.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#2D150B",
                    marginBottom: 16,
                  }}
                >
                  {formatPrice(product.price, product.pricePrefix)}
                </p>
                <span
                  className="inline-block text-center"
                  style={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#fff",
                    backgroundColor: "#BD2B2D",
                    borderRadius: 8,
                    padding: "10px 28px",
                    letterSpacing: "0.02em",
                  }}
                >
                  Shop Now &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
