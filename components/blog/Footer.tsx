"use client";

import { useState } from "react";

const STORE_URL = "https://earthyblissco.com";

const quickLinks = [
  { label: "Breadly\u2122 Series", href: `${STORE_URL}/collections/breadly-series` },
  { label: "Track Your Order", href: `${STORE_URL}/apps/17TRACK` },
  { label: "About Us", href: `${STORE_URL}/pages/about-us` },
  { label: "Contact Us", href: `${STORE_URL}/pages/contact-us` },
  { label: "FAQ", href: `${STORE_URL}/pages/faqs` },
];

const policyLinks = [
  { label: "Terms of Service", href: `${STORE_URL}/policies/terms-of-service` },
  { label: "Returns & Refund Policy", href: `${STORE_URL}/pages/refund-policy` },
  { label: "Privacy Policy", href: `${STORE_URL}/policies/privacy-policy` },
  { label: "Shipping Policy", href: `${STORE_URL}/pages/shipping-policy` },
  { label: "Payment Policy", href: `${STORE_URL}/pages/payment-policy` },
];

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.12v-3.5a6.37 6.37 0 00-.82-.05A6.34 6.34 0 003.15 15.4a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.26a8.33 8.33 0 004.84 1.54V7.35a4.84 4.84 0 01-1.08-.66z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ backgroundColor: "#2D150B" }}>
      {/* Newsletter */}
      <div className="text-center" style={{ padding: "48px 24px 40px" }}>
        <div className="mx-auto" style={{ maxWidth: 480 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.6rem",
              fontWeight: 600,
              color: "#FFEFD2",
              letterSpacing: "-0.01em",
              marginBottom: 8,
            }}
          >
            Join the Earthy Bliss community
          </h2>
          <p
            style={{
              fontFamily: "'Source Sans Pro', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(255, 239, 210, 0.45)",
              lineHeight: 1.5,
              marginBottom: 24,
            }}
          >
            Get exclusive deals, early access to new products, and baking tips
            delivered to your inbox.
          </p>
          <div
            className="flex mx-auto overflow-hidden"
            style={{
              maxWidth: 400,
              border: "1px solid rgba(203, 172, 150, 0.25)",
              borderRadius: 4,
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 outline-none"
              style={{
                fontFamily: "'Source Sans Pro', sans-serif",
                fontSize: "0.85rem",
                padding: "13px 16px",
                border: "none",
                backgroundColor: "transparent",
                color: "#FFEFD2",
              }}
            />
            <button
              aria-label="Subscribe"
              className="flex items-center transition-colors duration-250"
              style={{
                padding: "13px 16px",
                background: "transparent",
                border: "none",
                color: "#CBAC96",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFEFD2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#CBAC96")}
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Two Columns */}
      <div style={{ padding: "0 24px 48px" }}>
        <div
          className="mx-auto grid grid-cols-2"
          style={{ maxWidth: 480, gap: 40 }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Source Sans Pro', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#CBAC96",
                marginBottom: 20,
              }}
            >
              Quick Links
            </h3>
            <ul className="list-none p-0 m-0">
              {quickLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: 12 }}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline transition-colors duration-250"
                    style={{
                      fontFamily: "'Source Sans Pro', sans-serif",
                      fontSize: "0.88rem",
                      color: "rgba(255, 239, 210, 0.45)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFEFD2")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        "rgba(255, 239, 210, 0.45)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              style={{
                fontFamily: "'Source Sans Pro', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#CBAC96",
                marginBottom: 20,
              }}
            >
              Policies
            </h3>
            <ul className="list-none p-0 m-0">
              {policyLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: 12 }}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline transition-colors duration-250"
                    style={{
                      fontFamily: "'Source Sans Pro', sans-serif",
                      fontSize: "0.88rem",
                      color: "rgba(255, 239, 210, 0.45)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFEFD2")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        "rgba(255, 239, 210, 0.45)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(203, 172, 150, 0.1)",
          padding: "24px",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between flex-wrap"
          style={{ maxWidth: 480, gap: 16 }}
        >
          <span
            style={{
              fontFamily: "'Source Sans Pro', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(255, 239, 210, 0.25)",
            }}
          >
            &copy; {new Date().getFullYear()} Earthy Bliss Co.
          </span>
          <div className="flex items-center" style={{ gap: 14 }}>
            {[
              { icon: <FacebookIcon />, label: "Facebook", href: "https://facebook.com/earthyblissco" },
              { icon: <InstagramIcon />, label: "Instagram", href: "https://instagram.com/earthyblissco" },
              { icon: <TikTokIcon />, label: "TikTok", href: "https://tiktok.com/@earthyblissco" },
              { icon: <YouTubeIcon />, label: "YouTube", href: "https://youtube.com/@earthyblissco" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex no-underline transition-colors duration-250"
                style={{ color: "rgba(255, 239, 210, 0.3)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#FFEFD2")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255, 239, 210, 0.3)")
                }
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
