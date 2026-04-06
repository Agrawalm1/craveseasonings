import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import recipes from "@/data/recipes.json";
import products from "@/data/products.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return { title: "Recipe Not Found" };
  return {
    title: recipe.title,
    description: recipe.description,
  };
}

const difficultyColor: Record<string, { bg: string; text: string }> = {
  Easy: { bg: "rgba(5,150,105,0.12)", text: "#059669" },
  Medium: { bg: "rgba(217,119,6,0.12)", text: "#B45309" },
  Hard: { bg: "rgba(239,77,72,0.12)", text: "#EF4D48" },
};

export default async function RecipeSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) notFound();

  const usedProducts = recipe.productIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const diffColor = difficultyColor[recipe.difficulty] ?? difficultyColor.Easy;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
        <Link
          href="/recipes"
          style={{ color: "#EF4D48" }}
          className="font-medium hover:opacity-70 transition-opacity"
        >
          Recipes
        </Link>
        <span style={{ color: "#2B161B", opacity: 0.3 }}>/</span>
        <span style={{ color: "#2B161B", opacity: 0.6 }}>{recipe.title}</span>
      </nav>

      {/* Hero card */}
      <div
        style={{
          background: `linear-gradient(135deg, ${recipe.gradientFrom} 0%, ${recipe.gradientTo} 100%)`,
          borderRadius: "24px",
        }}
        className="w-full h-48 sm:h-64 flex items-center justify-center mb-8"
        aria-hidden="true"
      >
        <span className="text-6xl sm:text-8xl select-none">
          {getRecipeEmoji(recipe.slug)}
        </span>
      </div>

      {/* Title & Meta */}
      <div className="mb-8">
        <h1
          style={{ color: "#2B161B" }}
          className="text-3xl sm:text-4xl font-black leading-tight mb-4"
        >
          {recipe.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            style={{ background: "rgba(43,22,27,0.07)", color: "#2B161B" }}
            className="text-sm font-medium px-3 py-1.5 rounded-full"
          >
            ⏱ {recipe.prepTime}
          </span>
          <span
            style={{ background: diffColor.bg, color: diffColor.text }}
            className="text-sm font-semibold px-3 py-1.5 rounded-full"
          >
            {recipe.difficulty}
          </span>
          <span
            style={{ background: "rgba(43,22,27,0.07)", color: "#2B161B" }}
            className="text-sm font-medium px-3 py-1.5 rounded-full"
          >
            Serves {recipe.servings}
          </span>
        </div>
        <p
          style={{ color: "#2B161B", opacity: 0.7 }}
          className="text-base sm:text-lg leading-relaxed"
        >
          {recipe.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Ingredients column */}
        <div className="md:col-span-1">
          <div
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
            }}
            className="rounded-3xl p-6 sticky top-24"
          >
            <h2
              style={{ color: "#2B161B" }}
              className="text-lg font-black mb-4"
            >
              Ingredients
            </h2>
            <ul className="space-y-2.5">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    style={{ color: "#EF4D48", flexShrink: 0 }}
                    className="text-xs font-bold mt-1"
                  >
                    •
                  </span>
                  <span
                    style={{ color: "#2B161B", opacity: 0.8 }}
                    className="text-sm leading-relaxed"
                  >
                    {ing}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions */}
        <div className="md:col-span-2 space-y-6">
          <div
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
            }}
            className="rounded-3xl p-6"
          >
            <h2
              style={{ color: "#2B161B" }}
              className="text-lg font-black mb-5"
            >
              Instructions
            </h2>
            <ol className="space-y-5">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    style={{
                      background: "#EF4D48",
                      color: "#ffffff",
                      flexShrink: 0,
                      width: "28px",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      fontSize: "12px",
                      fontWeight: 800,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{ color: "#2B161B", opacity: 0.8 }}
                    className="text-sm leading-relaxed pt-1"
                  >
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Pro tip */}
          <div
            style={{
              background: "rgba(239,77,72,0.06)",
              border: "1px solid rgba(239,77,72,0.2)",
            }}
            className="rounded-3xl p-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <span style={{ color: "#EF4D48" }} className="text-lg">
                💡
              </span>
              <h3
                style={{ color: "#EF4D48" }}
                className="text-sm font-black tracking-wide uppercase"
              >
                Pro Tip
              </h3>
            </div>
            <p
              style={{ color: "#2B161B", opacity: 0.75 }}
              className="text-sm leading-relaxed"
            >
              {recipe.tip}
            </p>
          </div>
        </div>
      </div>

      {/* Products used */}
      {usedProducts.length > 0 && (
        <section className="mt-12">
          <h2
            style={{ color: "#2B161B" }}
            className="text-xl font-black mb-5"
          >
            Products Used in This Recipe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {usedProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.8)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
                }}
                className="rounded-3xl p-5 flex items-center justify-between gap-4"
              >
                <div>
                  <p
                    style={{ color: "#2B161B" }}
                    className="text-sm font-bold mb-0.5"
                  >
                    {product.name}
                  </p>
                  <p
                    style={{ color: "#2B161B", opacity: 0.55 }}
                    className="text-xs"
                  >
                    {product.size} — {product.categoryLabel}
                  </p>
                </div>
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: "#EF4D48", flexShrink: 0 }}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-2xl text-white text-xs font-semibold hover:opacity-85 transition-opacity"
                >
                  Buy →
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(43,22,27,0.08)" }}>
        <Link
          href="/recipes"
          style={{ color: "#EF4D48" }}
          className="text-sm font-semibold hover:opacity-70 transition-opacity"
        >
          ← Back to All Recipes
        </Link>
      </div>
    </div>
  );
}

function getRecipeEmoji(slug: string): string {
  const map: Record<string, string> = {
    "classic-soft-pretzels": "🥨",
    "homemade-apple-pie-filling": "🥧",
    "home-cured-bacon": "🥓",
    "homemade-beef-jerky": "🍖",
    "pretzel-bagels": "🥯",
    "tvp-vegan-tacos": "🌮",
    "keto-cream-sauce": "🍶",
    "peach-preserves": "🍑",
  };
  return map[slug] ?? "🍽️";
}
