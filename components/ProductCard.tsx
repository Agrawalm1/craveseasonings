interface Product {
  id: string;
  name: string;
  size: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  description: string;
  features: string[];
  amazonUrl: string;
  bestseller: boolean;
  badge: string | null;
}

interface ProductCardProps {
  product: Product;
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  "salts-cures": { bg: "rgba(239,77,72,0.12)", text: "#EF4D48" },
  thickeners: { bg: "rgba(217,119,6,0.12)", text: "#B45309" },
  "plant-based": { bg: "rgba(5,150,105,0.12)", text: "#059669" },
};

export default function ProductCard({ product }: ProductCardProps) {
  const catColor = categoryColors[product.category] ?? {
    bg: "rgba(107,114,128,0.12)",
    text: "#6B7280",
  };
  const displayFeatures = product.features.slice(0, 3);

  return (
    <div
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
      className="rounded-3xl p-5 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Badge top-right */}
      {product.badge && (
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            background:
              product.badge === "Coming Soon"
                ? "rgba(107,114,128,0.12)"
                : product.badge === "Amazon's Choice"
                ? "rgba(245,158,11,0.15)"
                : "rgba(239,77,72,0.12)",
            color:
              product.badge === "Coming Soon"
                ? "#6B7280"
                : product.badge === "Amazon's Choice"
                ? "#B45309"
                : "#EF4D48",
          }}
          className="text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase"
        >
          {product.badge}
        </div>
      )}

      {/* Category badge */}
      <div className="mb-3">
        <span
          style={{ background: catColor.bg, color: catColor.text }}
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide"
        >
          {product.categoryLabel}
        </span>
      </div>

      {/* Name + size */}
      <h3
        style={{ color: "#2B161B" }}
        className="text-base font-bold leading-snug mb-1"
      >
        {product.name}
        <span className="font-normal opacity-60 ml-1.5 text-sm">
          — {product.size}
        </span>
      </h3>

      {/* Tagline */}
      <p style={{ color: "#2B161B", opacity: 0.65 }} className="text-sm mb-3 leading-relaxed flex-1">
        {product.tagline}
      </p>

      {/* Feature pills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {displayFeatures.map((feature) => (
          <span
            key={feature}
            style={{
              background: "rgba(43,22,27,0.06)",
              color: "#2B161B",
            }}
            className="text-[11px] font-medium px-2 py-0.5 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href={product.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: product.size === "Coming Soon" ? "transparent" : "#EF4D48",
          border: product.size === "Coming Soon" ? "1.5px solid #EF4D48" : "none",
          color: product.size === "Coming Soon" ? "#EF4D48" : "#ffffff",
        }}
        className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-2xl text-sm font-semibold hover:opacity-85 transition-opacity"
      >
        {product.size === "Coming Soon" ? (
          "Notify Me"
        ) : (
          <>
            Buy on Amazon
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
          </>
        )}
      </a>
    </div>
  );
}
