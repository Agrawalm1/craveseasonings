"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(192,48,48,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Crave Seasonings"
              style={{ height: "44px", width: "auto", objectFit: "contain" }}
              className="group-hover:opacity-85 transition-opacity"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {[
              { href: "/products", label: "Products" },
              { href: "/recipes", label: "Recipes" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: "#1A1A1A" }}
                className="text-sm font-medium hover:opacity-50 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://www.amazon.com/s?srs=119868661011&rh=p_89:Crave%2BSeasonings"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#C03030" }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Shop Amazon
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
            style={{ color: "#1A1A1A" }}
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 flex flex-col gap-1" style={{ borderTop: "1px solid rgba(192,48,48,0.1)" }}>
            {[
              { href: "/products", label: "Products" },
              { href: "/recipes", label: "Recipes" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ color: "#1A1A1A" }}
                className="px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-black/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-1">
              <a
                href="https://www.amazon.com/s?srs=119868661011&rh=p_89:Crave%2BSeasonings"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#C03030" }}
                className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-2xl text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Shop Amazon
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
