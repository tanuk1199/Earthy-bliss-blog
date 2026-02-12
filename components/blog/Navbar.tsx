'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const STORE_URL = 'https://earthyblissco.com';

const navLinks = [
  { label: 'Latest', href: '/blog' },
  { label: 'Recipes', href: '/blog?category=recipes' },
  { label: 'Techniques', href: '/blog?category=techniques' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-serif text-2xl font-bold text-foreground">
            Earthy Bliss Co.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:text-primary transition-colors"
            >
              Shop
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
