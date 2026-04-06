import type { Metadata } from "next";
import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";
import products from "@/data/products.json";
import recipes from "@/data/recipes.json";

export const metadata: Metadata = {
  title: "Crave Seasonings — Premium Bulk Food Ingredients",
  description:
    "Premium bulk food ingredients for home bakers, curers, and canners. Pretzel salt, Clear Jel, pink curing salt, TVP, xanthan gum, and more. Treat For Your Tastebuds.",
};

const TRUST_ITEMS = [
  { label: "All Natural", icon: "✓" },
  { label: "Food Grade Quality", icon: "★" },
  { label: "Fast Delivery", icon: "📦" },
  { label: "Amazon Fulfilled", icon: "✓" },
];

const FEATURED_IDS = ["pretzel-salt-1-5lb", "tvp-2-2lb", "pink-curing-salt-2lb"];

const categoryColors: Record<string, { bg: string; text: string }> = {
  "salts-cures": { bg: "rgba(239,77,72,0.12)", text: "#C03030" },
  thickeners: { bg: "rgba(217,119,6,0.12)", text: "#B45309" },
  "plant-based": { bg: "rgba(5,150,105,0.12)", text: "#059669" },
};

export default function HomePage() {
  const featuredProducts = FEATURED_IDS.map((id) =>
    products.find((p) => p.id === id)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  const featuredRecipes = recipes.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark overlay so text is readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 relative">
          <div className="max-w-2xl">
            <div
              style={{
                background: "rgba(192,48,48,0.85)",
                color: "#fff",
                display: "inline-flex",
              }}
              className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
            >
              Premium Bulk Food Ingredients
            </div>
            <h1
              style={{ color: "#ffffff" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5"
            >
              Treat For Your
              <span style={{ color: "#f87171" }}> Tastebuds</span>
            </h1>
            <p
              style={{ color: "rgba(255,255,255,0.8)" }}
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Professional-grade bulk food ingredients for home bakers, curers,
              and canners. Food-grade quality, shipped right to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/products"
                style={{ background: "#C03030" }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold hover:opacity-90 transition-opacity text-base"
              >
                Shop Products
              </Link>
              <Link
                href="/recipes"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.7)",
                  color: "#ffffff",
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold hover:bg-white/10 transition-colors text-base"
              >
                Browse Recipes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div
          style={{
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
          }}
          className="rounded-3xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span
                style={{ color: "#C03030" }}
                className="text-2xl select-none"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span
                style={{ color: "#1A1A1A" }}
                className="text-sm font-semibold"
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p
              style={{ color: "#C03030" }}
              className="text-xs font-bold tracking-widest uppercase mb-1.5"
            >
              Our Bestsellers
            </p>
            <h2
              style={{ color: "#1A1A1A" }}
              className="text-2xl sm:text-3xl font-black"
            >
              Customer Favorites
            </h2>
          </div>
          <Link
            href="/products"
            style={{ color: "#C03030" }}
            className="text-sm font-semibold hover:opacity-70 transition-opacity hidden sm:block"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProducts.map((product) => {
            const catColor = categoryColors[product.category] ?? {
              bg: "rgba(107,114,128,0.12)",
              text: "#6B7280",
            };
            return (
              <div
                key={product.id}
                style={{
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.8)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product image */}
                {product.image && (
                  <div style={{ height: "130px", background: "#fff", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "100%", height: "100%", objectFit: "contain", padding: "12px" }}
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                {product.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "14px",
                      background: "rgba(239,77,72,0.12)",
                      color: "#C03030",
                    }}
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase"
                  >
                    {product.badge}
                  </div>
                )}
                <div className="mb-3">
                  <span
                    style={{ background: catColor.bg, color: catColor.text }}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide"
                  >
                    {product.categoryLabel}
                  </span>
                </div>
                <h3
                  style={{ color: "#1A1A1A" }}
                  className="text-base font-bold leading-snug mb-1"
                >
                  {product.name}
                </h3>
                <p
                  style={{ color: "#1A1A1A", opacity: 0.65 }}
                  className="text-sm mb-4 leading-relaxed flex-1"
                >
                  {product.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.features.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      style={{
                        background: "rgba(43,22,27,0.06)",
                        color: "#1A1A1A",
                      }}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: "#C03030" }}
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-2xl text-white text-sm font-semibold hover:opacity-85 transition-opacity"
                >
                  Buy on Amazon →
                </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/products"
            style={{ color: "#C03030", border: "1.5px solid #C03030" }}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-2xl text-sm font-semibold hover:bg-red-50 transition-colors"
          >
            View All Products →
          </Link>
        </div>
      </section>

      {/* Recipes teaser */}
      <section
        style={{ background: "rgba(43,22,27,0.03)" }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p
                style={{ color: "#C03030" }}
                className="text-xs font-bold tracking-widest uppercase mb-1.5"
              >
                Recipe Ideas
              </p>
              <h2
                style={{ color: "#1A1A1A" }}
                className="text-2xl sm:text-3xl font-black"
              >
                Cook Something Great
              </h2>
            </div>
            <Link
              href="/recipes"
              style={{ color: "#C03030" }}
              className="text-sm font-semibold hover:opacity-70 transition-opacity hidden sm:block"
            >
              All Recipes →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/recipes"
              style={{ color: "#C03030", border: "1.5px solid #C03030" }}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-2xl text-sm font-semibold hover:bg-red-50 transition-colors"
            >
              All Recipes →
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              style={{ color: "#C03030" }}
              className="text-xs font-bold tracking-widest uppercase mb-2"
            >
              Our Story
            </p>
            <h2
              style={{ color: "#1A1A1A" }}
              className="text-2xl sm:text-3xl font-black mb-5"
            >
              Who We Are
            </h2>
            <p
              style={{ color: "#1A1A1A", opacity: 0.7 }}
              className="text-base leading-relaxed mb-4"
            >
              Crave Seasonings started with a simple idea: home cooks and bakers
              deserve access to the same professional-grade ingredients that
              commercial kitchens use every day. Not watered-down versions. Not
              mystery blends. The real stuff.
            </p>
            <p
              style={{ color: "#1A1A1A", opacity: 0.7 }}
              className="text-base leading-relaxed mb-4"
            >
              We source and pack every product with food-grade standards,
              resealable packaging, and honest labeling.
              Whether you&apos;re curing your first batch of bacon, canning
              peach preserves, or perfecting your soft pretzel recipe, we&apos;ve
              got the ingredient that makes it work.
            </p>
            <p
              style={{ color: "#1A1A1A", opacity: 0.7 }}
              className="text-base leading-relaxed"
            >
              We ship directly on Amazon so your ingredients arrive fresh and
              fast — no middleman, no markup.
            </p>
            <div className="mt-7">
              <Link
                href="/about"
                style={{ color: "#C03030", border: "1.5px solid #C03030" }}
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-red-50 transition-colors"
              >
                Learn More About Us →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "Food Grade", label: "Quality Standard" },
              { stat: "All Natural", label: "Ingredients" },
              { stat: "Amazon", label: "Sold & Fulfilled" },
              { stat: "4.5★", label: "Amazon Rating" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.8)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
                }}
                className="rounded-3xl p-6 flex flex-col items-center text-center"
              >
                <span
                  style={{ color: "#C03030" }}
                  className="text-2xl font-black mb-1"
                >
                  {item.stat}
                </span>
                <span
                  style={{ color: "#1A1A1A", opacity: 0.6 }}
                  className="text-sm"
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section
        style={{ background: "#1A1A1A" }}
        className="py-16"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p
            style={{ color: "#C03030" }}
            className="text-xs font-bold tracking-widest uppercase mb-2"
          >
            Stay in the Loop
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Recipes, New Products &amp; Deals
          </h2>
          <p
            style={{ color: "#F7F3F5", opacity: 0.6 }}
            className="text-base mb-8"
          >
            Join our list for seasonal recipes, new product launches, and
            exclusive discounts for home cooks and food enthusiasts.
          </p>
          <form
            action="https://formspree.io/f/mreoazqz"
            method="POST"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#F7F3F5",
              }}
              className="flex-1 px-4 py-3 rounded-2xl text-sm outline-none"
            />
            <button
              type="submit"
              style={{ background: "#C03030" }}
              className="px-6 py-3 rounded-2xl text-white text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
