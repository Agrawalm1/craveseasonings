import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
      <div
        style={{ color: "#C03030" }}
        className="text-7xl font-black mb-4 select-none"
      >
        404
      </div>
      <h1
        style={{ color: "#1A1A1A" }}
        className="text-2xl sm:text-3xl font-black mb-3"
      >
        Page Not Found
      </h1>
      <p
        style={{ color: "#1A1A1A", opacity: 0.6 }}
        className="text-base mb-8 max-w-sm"
      >
        Sorry, we couldn&apos;t find the page you were looking for. Maybe you were
        searching for one of these?
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/products"
          style={{ background: "#C03030" }}
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Shop Products
        </Link>
        <Link
          href="/recipes"
          style={{
            border: "1.5px solid #C03030",
            color: "#C03030",
          }}
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold text-sm hover:bg-red-50 transition-colors"
        >
          Browse Recipes
        </Link>
        <Link
          href="/"
          style={{ color: "#1A1A1A", opacity: 0.6 }}
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold text-sm hover:opacity-100 transition-opacity"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
