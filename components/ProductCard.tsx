import Link from "next/link";

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
  image: string | null;
}

interface ProductCardProps {
  product: Product;
}

const categoryColors: Record<string, { bg: string; text: string; placeholder: string }> = {
  "salts-cures": { bg: "rgba(192,48,48,0.12)", text: "#C03030", placeholder: "rgba(192,48,48,0.08)" },
  thickeners: { bg: "rgba(217,119,6,0.12)", text: "#B45309", placeholder: "rgba(217,119,6,0.08)" },
  "plant-based": { bg: "rgba(5,150,105,0.12)", text: "#059669", placeholder: "rgba(5,150,105,0.08)" },
};

export default function ProductCard({ product }: ProductCardProps) {
  const catColor = categoryColors[product.category] ?? {
    bg: "rgba(107,114,128,0.12)",
    text: "#6B7280",
    placeholder: "rgba(107,114,128,0.08)",
  };
  const isComingSoon = product.badge === "Coming Soon";
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
      className="rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Product image — links to detail page */}
      <Link href={`/products/${product.id}`} className="block">
        <div
          style={{
            background: product.image ? "#fff" : catColor.placeholder,
            height: "130px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {product.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "100%", objectFit: "contain", padding: "12px" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: catColor.text,
                opacity: 0.4,
                fontSize: "48px",
              }}
            >
              {product.category === "salts-cures" ? "🧂" : product.category === "plant-based" ? "🌿" : "🧪"}
            </div>
          )}

          {/* Badge top-right */}
          {product.badge && (
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "rgba(255,255,255,0.9)",
                color: isComingSoon ? "#6B7280" : product.badge === "Amazon's Choice" ? "#B45309" : "#C03030",
                backdropFilter: "blur(8px)",
              }}
              className="text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase shadow-sm"
            >
              {product.badge}
            </div>
          )}
        </div>
      </Link>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category badge */}
        <div className="mb-2">
          <span
            style={{ background: catColor.bg, color: catColor.text }}
            className="text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide"
          >
            {product.categoryLabel}
          </span>
        </div>

        {/* Name — links to detail page */}
        <Link href={`/products/${product.id}`} className="block mb-1 hover:opacity-70 transition-opacity">
          <h3 style={{ color: "#1A1A1A" }} className="text-base font-bold leading-snug">
            {product.name}
          </h3>
        </Link>

        {/* Tagline */}
        <p style={{ color: "#1A1A1A", opacity: 0.65 }} className="text-sm mb-3 leading-relaxed flex-1">
          {product.tagline}
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {displayFeatures.map((feature) => (
            <span
              key={feature}
              style={{ background: "rgba(26,26,26,0.06)", color: "#1A1A1A" }}
              className="text-[11px] font-medium px-2 py-0.5 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        {isComingSoon ? (
          <Link
            href={`/products/${product.id}`}
            style={{ border: "1.5px solid #C03030", color: "#C03030" }}
            className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-2xl text-sm font-semibold hover:bg-red-50 transition-colors"
          >
            Notify Me When Available
          </Link>
        ) : (
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#C03030" }}
            className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-2xl text-white text-sm font-semibold hover:opacity-85 transition-opacity"
          >
            Buy on Amazon
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
