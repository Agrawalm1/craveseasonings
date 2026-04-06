import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#2B161B",
        color: "#F7F3F5",
      }}
      className="mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-4">
              <span
                style={{ color: "#EF4D48", lineHeight: 1 }}
                className="text-2xl font-black tracking-tight"
              >
                CRAVE
              </span>
              <span
                style={{ color: "#F7F3F5", lineHeight: 1, opacity: 0.7 }}
                className="text-[9px] font-semibold tracking-[0.25em] uppercase mt-0.5"
              >
                SEASONINGS
              </span>
            </div>
            <p
              style={{ color: "#F7F3F5", opacity: 0.6 }}
              className="text-sm leading-relaxed"
            >
              Treat For Your Tastebuds. Premium bulk food ingredients shipped
              from Houston, TX.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3
              style={{ color: "#F7F3F5" }}
              className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-50"
            >
              Products
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/products"
                  style={{ color: "#F7F3F5", opacity: 0.75 }}
                  className="text-sm hover:opacity-100 transition-opacity"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=salts-cures"
                  style={{ color: "#F7F3F5", opacity: 0.75 }}
                  className="text-sm hover:opacity-100 transition-opacity"
                >
                  Salts &amp; Cures
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=thickeners"
                  style={{ color: "#F7F3F5", opacity: 0.75 }}
                  className="text-sm hover:opacity-100 transition-opacity"
                >
                  Thickeners &amp; Binders
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=plant-based"
                  style={{ color: "#F7F3F5", opacity: 0.75 }}
                  className="text-sm hover:opacity-100 transition-opacity"
                >
                  Plant-Based Protein
                </Link>
              </li>
            </ul>
          </div>

          {/* Recipes */}
          <div>
            <h3
              style={{ color: "#F7F3F5" }}
              className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-50"
            >
              Recipes
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/recipes/classic-soft-pretzels"
                  style={{ color: "#F7F3F5", opacity: 0.75 }}
                  className="text-sm hover:opacity-100 transition-opacity"
                >
                  Classic Soft Pretzels
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes/home-cured-bacon"
                  style={{ color: "#F7F3F5", opacity: 0.75 }}
                  className="text-sm hover:opacity-100 transition-opacity"
                >
                  Home-Cured Bacon
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes/tvp-vegan-tacos"
                  style={{ color: "#F7F3F5", opacity: 0.75 }}
                  className="text-sm hover:opacity-100 transition-opacity"
                >
                  TVP Vegan Tacos
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes"
                  style={{ color: "#EF4D48" }}
                  className="text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  View All Recipes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              style={{ color: "#F7F3F5" }}
              className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-50"
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  style={{ color: "#F7F3F5", opacity: 0.75 }}
                  className="text-sm hover:opacity-100 transition-opacity"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  style={{ color: "#F7F3F5", opacity: 0.75 }}
                  className="text-sm hover:opacity-100 transition-opacity"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  style={{ color: "#F7F3F5", opacity: 0.75 }}
                  className="text-sm hover:opacity-100 transition-opacity"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/s?srs=119868661011&rh=p_89:Crave%2BSeasonings"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#F7F3F5", opacity: 0.75 }}
                  className="text-sm hover:opacity-100 transition-opacity"
                >
                  Amazon Store
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{ color: "#F7F3F5" }}
              className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-50"
            >
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <p
                  style={{ color: "#F7F3F5", opacity: 0.75 }}
                  className="text-sm leading-relaxed"
                >
                  2600 S Loop W, Suite 300
                  <br />
                  Houston, Texas 77054
                </p>
              </li>
              <li>
                <a
                  href="mailto:hpncap@gmail.com"
                  style={{ color: "#EF4D48" }}
                  className="text-sm hover:opacity-80 transition-opacity"
                >
                  hpncap@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{ borderTop: "1px solid rgba(247,243,245,0.1)" }}
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p style={{ color: "#F7F3F5", opacity: 0.4 }} className="text-xs">
            &copy; {new Date().getFullYear()} Crave Seasonings. All rights
            reserved.
          </p>
          <p style={{ color: "#F7F3F5", opacity: 0.4 }} className="text-xs">
            Houston, Texas — Made in USA
          </p>
        </div>
      </div>
    </footer>
  );
}
