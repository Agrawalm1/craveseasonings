import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1A1A1A", color: "#F7F3F5" }} className="mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Crave Seasonings"
              style={{ height: "48px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", marginBottom: "16px" }}
            />
            <p style={{ color: "#F7F3F5", opacity: 0.6 }} className="text-sm leading-relaxed">
              Treat For Your Tastebuds. Premium bulk food ingredients, available on Amazon.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 style={{ color: "#F7F3F5" }} className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-50">
              Products
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/products", label: "All Products" },
                { href: "/products?category=salts-cures", label: "Salts & Cures" },
                { href: "/products?category=thickeners", label: "Thickeners & Binders" },
                { href: "/products?category=plant-based", label: "Plant-Based Protein" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: "#F7F3F5", opacity: 0.75 }} className="text-sm hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recipes */}
          <div>
            <h3 style={{ color: "#F7F3F5" }} className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-50">
              Recipes
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/recipes/classic-soft-pretzels", label: "Classic Soft Pretzels" },
                { href: "/recipes/home-cured-bacon", label: "Home-Cured Bacon" },
                { href: "/recipes/tvp-vegan-tacos", label: "TVP Vegan Tacos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: "#F7F3F5", opacity: 0.75 }} className="text-sm hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/recipes" style={{ color: "#C03030" }} className="text-sm font-medium hover:opacity-80 transition-opacity">
                  View All Recipes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ color: "#F7F3F5" }} className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-50">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/blog", label: "Blog" },
                { href: "/faq", label: "FAQ" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: "#F7F3F5", opacity: 0.75 }} className="text-sm hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://www.amazon.com/s?srs=119868661011&rh=p_89:Crave%2BSeasonings" target="_blank" rel="noopener noreferrer" style={{ color: "#F7F3F5", opacity: 0.75 }} className="text-sm hover:opacity-100 transition-opacity">
                  Amazon Store
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: "#F7F3F5" }} className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-50">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hpncap@gmail.com" style={{ color: "#C03030" }} className="text-sm hover:opacity-80 transition-opacity">
                  hpncap@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(247,243,245,0.1)" }} className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ color: "#F7F3F5", opacity: 0.4 }} className="text-xs">
            &copy; {new Date().getFullYear()} Crave Seasonings. All rights reserved.
          </p>
          <p style={{ color: "#F7F3F5", opacity: 0.4 }} className="text-xs">
            For informational purposes only. Not medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
