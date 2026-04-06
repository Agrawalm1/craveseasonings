import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export const metadata = {
  title: "Products",
  description:
    "Browse all Crave Seasonings products — pretzel salt, Clear Jel, pink curing salt, TVP, xanthan gum, and more. Food-grade quality.",
};

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div
            style={{ color: "#1A1A1A", opacity: 0.4 }}
            className="text-center py-20 text-base"
          >
            Loading products…
          </div>
        </div>
      }
    >
      <ProductsClient />
    </Suspense>
  );
}
