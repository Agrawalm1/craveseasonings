import type { Metadata } from "next";
import RecipeCard from "@/components/RecipeCard";
import recipes from "@/data/recipes.json";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Recipes using Crave Seasonings products — pretzels, home-cured bacon, jerky, canning, TVP tacos, keto sauces, and more.",
};

export default function RecipesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Header */}
      <div className="mb-10">
        <p
          style={{ color: "#EF4D48" }}
          className="text-xs font-bold tracking-widest uppercase mb-2"
        >
          Inspired Cooking
        </p>
        <h1
          style={{ color: "#2B161B" }}
          className="text-3xl sm:text-4xl font-black mb-3"
        >
          Recipes
        </h1>
        <p
          style={{ color: "#2B161B", opacity: 0.65 }}
          className="text-base max-w-xl"
        >
          From soft pretzels to home-cured bacon, these recipes show you exactly
          how to put Crave products to work in your kitchen.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
