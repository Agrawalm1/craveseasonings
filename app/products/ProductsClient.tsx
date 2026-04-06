"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products.json";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "salts-cures", label: "Salts & Cures" },
  { id: "thickeners", label: "Thickeners & Binders" },
  { id: "plant-based", label: "Plant-Based Protein" },
];

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    const cat = searchParams.get("category") ?? "all";
    setActiveCategory(cat);
  }, [searchParams]);

  const filtered =
    activeCategory === "all"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Header */}
      <div className="mb-10">
        <p
          style={{ color: "#EF4D48" }}
          className="text-xs font-bold tracking-widest uppercase mb-2"
        >
          Crave Seasonings
        </p>
        <h1
          style={{ color: "#2B161B" }}
          className="text-3xl sm:text-4xl font-black mb-3"
        >
          All Products
        </h1>
        <p
          style={{ color: "#2B161B", opacity: 0.65 }}
          className="text-base max-w-xl"
        >
          Professional-grade, non-GMO bulk food ingredients for home bakers,
          curers, and canners. Every product ships from Houston, Texas.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={
              activeCategory === cat.id
                ? { background: "#EF4D48", color: "#ffffff" }
                : {
                    background: "rgba(255,255,255,0.75)",
                    color: "#2B161B",
                    border: "1px solid rgba(43,22,27,0.12)",
                  }
            }
            className="px-4 py-2 rounded-2xl text-sm font-semibold transition-all hover:opacity-85"
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product count */}
      <p
        style={{ color: "#2B161B", opacity: 0.5 }}
        className="text-sm mb-6"
      >
        {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        {activeCategory !== "all" && (
          <span>
            {" "}in{" "}
            {CATEGORIES.find((c) => c.id === activeCategory)?.label}
          </span>
        )}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p style={{ color: "#2B161B", opacity: 0.5 }} className="text-base">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
