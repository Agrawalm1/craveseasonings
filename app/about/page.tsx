import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Crave Seasonings — dedicated to bringing professional-grade bulk food ingredients to home cooks and bakers.",
};

const VALUES = [
  {
    icon: "✓",
    title: "Quality First",
    desc: "Every product is food-grade and packed to professional standards. We don't cut corners on ingredients.",
  },
  {
    icon: "📦",
    title: "Honest Labeling",
    desc: "No mystery blends. No fillers. What's on the label is exactly what's in the bag — clearly stated, accurately measured.",
  },
  {
    icon: "★",
    title: "Food Grade Standards",
    desc: "We pack every product to food-grade standards with honest labeling — no mystery ingredients, no fillers.",
  },
  {
    icon: "⚡",
    title: "Ships Fast",
    desc: "Fulfilled through Amazon's network, your ingredients arrive quickly so you can cook, bake, and preserve without delay.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Hero */}
      <div className="max-w-3xl mb-16">
        <p
          style={{ color: "#C03030" }}
          className="text-xs font-bold tracking-widest uppercase mb-2"
        >
          Our Story
        </p>
        <h1
          style={{ color: "#1A1A1A" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6"
        >
          Built for Home Cooks Who
          <span style={{ color: "#C03030" }}> Demand More</span>
        </h1>
        <p
          style={{ color: "#1A1A1A", opacity: 0.7 }}
          className="text-lg leading-relaxed"
        >
          Crave Seasonings was founded on a straightforward frustration: the
          ingredients that professional bakers, charcuterie makers, and home
          canners actually need were hard to find — and when you did find them,
          they were often low-quality, mislabeled, or massively overpriced.
        </p>
      </div>

      {/* Story sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        <div className="space-y-6">
          <div
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
            }}
            className="rounded-3xl p-8"
          >
            <h2
              style={{ color: "#1A1A1A" }}
              className="text-xl font-black mb-4"
            >
              Our Roots
            </h2>
            <p
              style={{ color: "#1A1A1A", opacity: 0.7 }}
              className="text-base leading-relaxed mb-4"
            >
              Crave Seasonings grew out of a love for real food made the right
              way. We know what it means to care deeply about what you&apos;re
              cooking — and the difference that the right ingredient makes.
            </p>
            <p
              style={{ color: "#1A1A1A", opacity: 0.7 }}
              className="text-base leading-relaxed"
            >
              We pack and ship every order with the same attention to detail
              that a good home cook brings to their kitchen.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
            }}
            className="rounded-3xl p-8"
          >
            <h2
              style={{ color: "#1A1A1A" }}
              className="text-xl font-black mb-4"
            >
              Our Mission
            </h2>
            <p
              style={{ color: "#1A1A1A", opacity: 0.7 }}
              className="text-base leading-relaxed mb-4"
            >
              We exist to close the gap between what professional kitchens have
              access to and what home cooks can actually buy. That means
              stocking the real, food-grade ingredients that make a genuine
              difference in your results — and pricing them fairly.
            </p>
            <p
              style={{ color: "#1A1A1A", opacity: 0.7 }}
              className="text-base leading-relaxed"
            >
              When you bake with our Coarse Pretzel Salt, the crunch is real.
              When you cure meat with our Pink Curing Salt, the results are
              authentic. That&apos;s what Treat For Your Tastebuds actually means.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
            }}
            className="rounded-3xl p-8"
          >
            <h2
              style={{ color: "#1A1A1A" }}
              className="text-xl font-black mb-4"
            >
              Quality Commitment
            </h2>
            <p
              style={{ color: "#1A1A1A", opacity: 0.7 }}
              className="text-base leading-relaxed mb-4"
            >
              Every Crave product is food-grade. We won&apos;t sell you industrial or
              technical-grade materials at food prices. Our curing salts are
              properly formulated at 6.25% sodium nitrite — the industry
              standard. Our Clear Jel is the genuine cook-type that&apos;s safe for
              canning.
            </p>
            <p
              style={{ color: "#1A1A1A", opacity: 0.7 }}
              className="text-base leading-relaxed"
            >
              We pack in resealable bags and jars so your ingredients stay fresh
              between uses. Because a half-open paper bag of curing salt left in
              a drawer isn&apos;t a recipe for success.
            </p>
          </div>

          <div
            style={{
              background: "rgba(192,48,48,0.06)",
              border: "1px solid rgba(192,48,48,0.2)",
            }}
            className="rounded-3xl p-8"
          >
            <h2
              style={{ color: "#1A1A1A" }}
              className="text-xl font-black mb-4"
            >
              The Amazon Partnership
            </h2>
            <p
              style={{ color: "#1A1A1A", opacity: 0.7 }}
              className="text-base leading-relaxed mb-4"
            >
              We sell through Amazon because that&apos;s where our customers shop.
              Fast, reliable shipping. Easy returns. Genuine customer reviews
              from real cooks. We have hundreds of verified reviews from home
              bakers, hunters making jerky, and canners preserving summer
              harvests.
            </p>
            <a
              href="https://www.amazon.com/s?srs=119868661011&rh=p_89:Crave%2BSeasonings"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#C03030" }}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-white text-sm font-semibold hover:opacity-85 transition-opacity"
            >
              Visit Our Amazon Store →
            </a>
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="mb-16">
        <h2
          style={{ color: "#1A1A1A" }}
          className="text-2xl font-black mb-7 text-center"
        >
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v) => (
            <div
              key={v.title}
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.8)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
              }}
              className="rounded-3xl p-6"
            >
              <div
                style={{ color: "#C03030" }}
                className="text-2xl mb-3 select-none"
                aria-hidden="true"
              >
                {v.icon}
              </div>
              <h3
                style={{ color: "#1A1A1A" }}
                className="text-base font-black mb-2"
              >
                {v.title}
              </h3>
              <p
                style={{ color: "#1A1A1A", opacity: 0.65 }}
                className="text-sm leading-relaxed"
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div
        style={{ background: "#1A1A1A" }}
        className="rounded-3xl p-10 text-center"
      >
        <h2 className="text-2xl font-black text-white mb-3">
          Ready to Stock Your Pantry?
        </h2>
        <p
          style={{ color: "#F7F3F5", opacity: 0.65 }}
          className="text-base mb-7 max-w-lg mx-auto"
        >
          Browse all our products and find the ingredient that takes your next
          recipe to the next level.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/products"
            style={{ background: "#C03030" }}
            className="inline-flex items-center justify-center gap-1.5 px-7 py-3.5 rounded-2xl text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Shop All Products →
          </Link>
          <Link
            href="/recipes"
            style={{
              border: "1.5px solid rgba(247,243,245,0.3)",
              color: "#F7F3F5",
            }}
            className="inline-flex items-center justify-center gap-1.5 px-7 py-3.5 rounded-2xl font-semibold hover:bg-white/10 transition-colors"
          >
            Browse Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
