import type { Metadata } from "next";
import Link from "next/link";
import blog from "@/data/blog.json";
import products from "@/data/products.json";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, guides, and recipes for home bakers, curers, and canners. Learn how to use pink curing salt, Clear Jel, xanthan gum, pretzel salt, and more.",
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Curing & Preservation": { bg: "rgba(192,48,48,0.1)", text: "#C03030" },
  "Canning & Preserving": { bg: "rgba(217,119,6,0.12)", text: "#B45309" },
  "Baking & Thickening": { bg: "rgba(5,150,105,0.12)", text: "#059669" },
  "Baking": { bg: "rgba(217,119,6,0.12)", text: "#B45309" },
};

function getProductName(id: string) {
  return products.find((p) => p.id === id)?.name ?? id;
}

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-12">
        <p style={{ color: "#C03030" }} className="text-xs font-bold tracking-widest uppercase mb-2">
          Tips & Guides
        </p>
        <h1 style={{ color: "#1A1A1A" }} className="text-3xl sm:text-4xl font-black mb-4">
          The Crave Blog
        </h1>
        <p style={{ color: "#1A1A1A", opacity: 0.65 }} className="text-base max-w-xl leading-relaxed">
          In-depth guides for home bakers, curers, and canners. Learn how to get
          the most out of every ingredient.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {blog.map((post) => {
          const catColor = categoryColors[post.category] ?? { bg: "rgba(107,114,128,0.12)", text: "#6B7280" };
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div
                style={{
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.8)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
                }}
                className="rounded-3xl p-7 h-full flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    style={{ background: catColor.bg, color: catColor.text }}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide"
                  >
                    {post.category}
                  </span>
                  <span style={{ color: "#1A1A1A", opacity: 0.4 }} className="text-[11px]">
                    {post.readTime}
                  </span>
                </div>

                <h2
                  style={{ color: "#1A1A1A" }}
                  className="text-lg font-black leading-snug mb-3 group-hover:opacity-75 transition-opacity"
                >
                  {post.title}
                </h2>

                <p
                  style={{ color: "#1A1A1A", opacity: 0.65 }}
                  className="text-sm leading-relaxed flex-1 mb-5"
                >
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5 flex-wrap">
                    {post.productIds.slice(0, 2).map((pid) => (
                      <span
                        key={pid}
                        style={{ background: "rgba(192,48,48,0.1)", color: "#C03030" }}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      >
                        {getProductName(pid)}
                      </span>
                    ))}
                  </div>
                  <span style={{ color: "#C03030" }} className="text-sm font-semibold group-hover:opacity-75 transition-opacity whitespace-nowrap">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
