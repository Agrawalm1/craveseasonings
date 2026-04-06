import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import recipes from "@/data/recipes.json";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

const categoryColors: Record<string, { bg: string; text: string; placeholder: string }> = {
  "salts-cures": { bg: "rgba(192,48,48,0.12)", text: "#C03030", placeholder: "rgba(192,48,48,0.08)" },
  thickeners: { bg: "rgba(217,119,6,0.12)", text: "#B45309", placeholder: "rgba(217,119,6,0.08)" },
  "plant-based": { bg: "rgba(5,150,105,0.12)", text: "#059669", placeholder: "rgba(5,150,105,0.08)" },
};

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const catColor = categoryColors[product.category] ?? {
    bg: "rgba(107,114,128,0.12)", text: "#6B7280", placeholder: "rgba(107,114,128,0.08)",
  };
  const isComingSoon = product.badge === "Coming Soon";

  // Related recipes
  const relatedRecipes = recipes.filter((r) => r.productIds.includes(product.id));

  // Other sizes (same product name, different id)
  const otherSizes = products.filter(
    (p) => p.name === product.name && p.id !== product.id && p.badge !== "Coming Soon"
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs mb-8" aria-label="Breadcrumb">
        <Link href="/" style={{ color: "#1A1A1A", opacity: 0.4 }} className="hover:opacity-70 transition-opacity">Home</Link>
        <span style={{ color: "#1A1A1A", opacity: 0.3 }}>/</span>
        <Link href="/products" style={{ color: "#1A1A1A", opacity: 0.4 }} className="hover:opacity-70 transition-opacity">Products</Link>
        <span style={{ color: "#1A1A1A", opacity: 0.3 }}>/</span>
        <span style={{ color: "#1A1A1A", opacity: 0.6 }}>{product.name}</span>
      </nav>

      {/* Product hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Image */}
        <div
          style={{
            background: product.image ? "#fff" : catColor.placeholder,
            borderRadius: "24px",
            overflow: "hidden",
            minHeight: "380px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {product.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "100%", objectFit: "contain", padding: "32px" }}
            />
          ) : (
            <span style={{ fontSize: "80px", opacity: 0.35 }} aria-hidden="true">
              {product.category === "salts-cures" ? "🧂" : product.category === "plant-based" ? "🌿" : "🧪"}
            </span>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="mb-3">
            <span style={{ background: catColor.bg, color: catColor.text }} className="text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide">
              {product.categoryLabel}
            </span>
            {product.badge && !isComingSoon && (
              <span style={{ background: "rgba(192,48,48,0.1)", color: "#C03030" }} className="text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase ml-2">
                {product.badge}
              </span>
            )}
          </div>

          <h1 style={{ color: "#1A1A1A" }} className="text-3xl sm:text-4xl font-black leading-tight mb-2">
            {product.name}
          </h1>
          <p style={{ color: "#1A1A1A", opacity: 0.5 }} className="text-sm mb-4">{product.size}</p>

          <p style={{ color: "#1A1A1A", opacity: 0.72 }} className="text-base leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.features.map((f) => (
              <span key={f} style={{ background: "rgba(26,26,26,0.06)", color: "#1A1A1A" }} className="text-xs font-medium px-3 py-1 rounded-full">
                {f}
              </span>
            ))}
          </div>

          {/* CTA */}
          {isComingSoon ? (
            <div
              style={{
                background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(255,255,255,0.8)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
              }}
              className="rounded-2xl p-6"
            >
              <p style={{ color: "#1A1A1A" }} className="text-sm font-black mb-1">Coming Soon</p>
              <p style={{ color: "#1A1A1A", opacity: 0.55 }} className="text-xs mb-4">
                Enter your email and we&apos;ll notify you when {product.name} is available.
              </p>
              <form
                action="https://formspree.io/f/mreoazqz"
                method="POST"
                className="flex gap-2"
              >
                <input type="hidden" name="product" value={product.name} />
                <input type="hidden" name="_subject" value={`Notify me: ${product.name}`} />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  style={{ border: "1px solid rgba(26,26,26,0.15)", color: "#1A1A1A" }}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none bg-white"
                />
                <button
                  type="submit"
                  style={{ background: "#C03030" }}
                  className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>
            </div>
          ) : (
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#C03030" }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold hover:opacity-90 transition-opacity text-base"
            >
              Buy on Amazon
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}

          {/* Other sizes */}
          {otherSizes.length > 0 && (
            <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(26,26,26,0.07)" }}>
              <p style={{ color: "#1A1A1A", opacity: 0.45 }} className="text-xs font-semibold uppercase tracking-widest mb-3">
                Also Available
              </p>
              <div className="flex flex-wrap gap-2">
                {otherSizes.map((s) => (
                  <Link
                    key={s.id}
                    href={`/products/${s.id}`}
                    style={{ border: "1.5px solid rgba(192,48,48,0.4)", color: "#C03030" }}
                    className="text-xs font-semibold px-3 py-1.5 rounded-xl hover:bg-red-50 transition-colors"
                  >
                    {s.size}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Usage tips */}
      {product.usageTips.length > 0 && (
        <div className="mb-16">
          <h2 style={{ color: "#1A1A1A" }} className="text-xl font-black mb-5">How to Use</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.usageTips.map((tip, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.8)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.04)",
                }}
                className="rounded-2xl px-5 py-4 flex items-start gap-3"
              >
                <span style={{ color: "#C03030", flexShrink: 0 }} className="text-sm font-black mt-0.5">
                  {i + 1}.
                </span>
                <p style={{ color: "#1A1A1A", opacity: 0.75 }} className="text-sm leading-relaxed">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related recipes */}
      {relatedRecipes.length > 0 && (
        <div className="mb-16">
          <h2 style={{ color: "#1A1A1A" }} className="text-xl font-black mb-5">Recipes Using This Product</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedRecipes.map((recipe) => (
              <Link key={recipe.slug} href={`/recipes/${recipe.slug}`} className="block group">
                <div
                  style={{
                    background: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.8)",
                    boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
                  }}
                  className="rounded-3xl p-5 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 style={{ color: "#1A1A1A" }} className="text-base font-bold mb-1 group-hover:opacity-60 transition-opacity">
                    {recipe.title}
                  </h3>
                  <p style={{ color: "#1A1A1A", opacity: 0.55 }} className="text-xs mb-3">{recipe.prepTime} · {recipe.difficulty}</p>
                  <span style={{ color: "#C03030" }} className="text-xs font-semibold">View Recipe →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
