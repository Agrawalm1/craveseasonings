import Link from "next/link";

interface Recipe {
  id: number;
  slug: string;
  title: string;
  description: string;
  prepTime: string;
  difficulty: string;
  servings: number;
  productIds: string[];
  gradientFrom: string;
  gradientTo: string;
}

interface RecipeCardProps {
  recipe: Recipe;
  featuredProductNames?: Record<string, string>;
}

const difficultyColor: Record<string, { bg: string; text: string }> = {
  Easy: { bg: "rgba(5,150,105,0.12)", text: "#059669" },
  Medium: { bg: "rgba(217,119,6,0.12)", text: "#B45309" },
  Hard: { bg: "rgba(192,48,48,0.12)", text: "#C03030" },
};

export default function RecipeCard({ recipe, featuredProductNames = {} }: RecipeCardProps) {
  const diffColor = difficultyColor[recipe.difficulty] ?? difficultyColor.Easy;
  const truncated =
    recipe.description.length > 110
      ? recipe.description.slice(0, 110).trim() + "…"
      : recipe.description;

  return (
    <Link href={`/recipes/${recipe.slug}`} className="block group">
      <div
        style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.8)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
          overflow: "hidden",
        }}
        className="rounded-3xl hover:shadow-xl transition-shadow duration-300"
      >
        {/* Gradient image area */}
        <div
          style={{
            background: `linear-gradient(135deg, ${recipe.gradientFrom} 0%, ${recipe.gradientTo} 100%)`,
            height: "140px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <span
            style={{ color: "rgba(26,26,26,0.75)" }}
            className="text-4xl select-none"
            aria-hidden="true"
          >
            {getRecipeEmoji(recipe.slug)}
          </span>
          {/* Overlay title on hover */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.0)",
              transition: "background 0.2s",
            }}
            className="group-hover:!bg-black/10 rounded-t-3xl"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3
            style={{ color: "#1A1A1A" }}
            className="font-bold text-base leading-snug mb-2 group-hover:opacity-75 transition-opacity"
          >
            {recipe.title}
          </h3>
          <p
            style={{ color: "#1A1A1A", opacity: 0.6 }}
            className="text-sm leading-relaxed mb-4"
          >
            {truncated}
          </p>

          {/* Meta row */}
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span
              style={{ background: "rgba(26,26,26,0.07)", color: "#1A1A1A" }}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1"
            >
              <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
              </svg>
              {recipe.prepTime}
            </span>
            <span
              style={{ background: diffColor.bg, color: diffColor.text }}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
            >
              {recipe.difficulty}
            </span>
          </div>

          {/* Products used */}
          {recipe.productIds.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {recipe.productIds.slice(0, 2).map((pid) => (
                <span
                  key={pid}
                  style={{
                    background: "rgba(192,48,48,0.1)",
                    color: "#C03030",
                  }}
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                >
                  {featuredProductNames[pid] ?? formatProductId(pid)}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

function formatProductId(id: string): string {
  return id
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\d+(\.\d+)?lb/gi, (m) => m.toUpperCase())
    .replace(/\d+oz/gi, (m) => m.toUpperCase());
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
