"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(239,77,72,0.12)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              style={{ color: "#EF4D48", lineHeight: 1 }}
              className="text-2xl font-black tracking-tight group-hover:opacity-80 transition-opacity"
            >
              CRAVE
            </span>
            <span
              style={{ color: "#2B161B", lineHeight: 1 }}
              className="text-[9px] font-semibold tracking-[0.25em] uppercase mt-0.5"
            >
              SEASONINGS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="/products"
              style={{ color: "#2B161B" }}
              className="text-sm font-medium hover:opacity-60 transition-opacity"
            >
              Products
            </Link>
            <Link
              href="/recipes"
              style={{ color: "#2B161B" }}
              className="text-sm font-medium hover:opacity-60 transition-opacity"
            >
              Recipes
            </Link>
            <Link
              href="/about"
              style={{ color: "#2B161B" }}
              className="text-sm font-medium hover:opacity-60 transition-opacity"
            >
              About
            </Link>
            <Link
              href="/contact"
              style={{ color: "#2B161B" }}
              className="text-sm font-medium hover:opacity-60 transition-opacity"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.amazon.com/s?srs=119868661011&rh=p_89:Crave%2BSeasonings"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#EF4D48" }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Shop Amazon
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
            style={{ color: "#2B161B" }}
          >
            {mobileOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden pb-4 pt-2 flex flex-col gap-1"
            style={{ borderTop: "1px solid rgba(239,77,72,0.1)" }}
          >
            <Link
              href="/products"
              onClick={() => setMobileOpen(false)}
              style={{ color: "#2B161B" }}
              className="px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-black/5 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/recipes"
              onClick={() => setMobileOpen(false)}
              style={{ color: "#2B161B" }}
              className="px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-black/5 transition-colors"
            >
              Recipes
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              style={{ color: "#2B161B" }}
              className="px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-black/5 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              style={{ color: "#2B161B" }}
              className="px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-black/5 transition-colors"
            >
              Contact
            </Link>
            <div className="pt-2 px-1">
              <a
                href="https://www.amazon.com/s?srs=119868661011&rh=p_89:Crave%2BSeasonings"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#EF4D48" }}
                className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-2xl text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Shop Amazon
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
