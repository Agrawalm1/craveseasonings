import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import blog from "@/data/blog.json";
import products from "@/data/products.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blog.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.find((b) => b.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Curing & Preservation": { bg: "rgba(192,48,48,0.1)", text: "#C03030" },
  "Canning & Preserving": { bg: "rgba(217,119,6,0.12)", text: "#B45309" },
  "Baking & Thickening": { bg: "rgba(5,150,105,0.12)", text: "#059669" },
  "Baking": { bg: "rgba(217,119,6,0.12)", text: "#B45309" },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blog.find((b) => b.slug === slug);
  if (!post) notFound();

  const catColor = categoryColors[post.category] ?? { bg: "rgba(107,114,128,0.12)", text: "#6B7280" };
  const relatedProducts = products.filter((p) => post.productIds.includes(p.id));
  const otherPosts = blog.filter((b) => b.slug !== slug).slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs mb-8" aria-label="Breadcrumb">
        <Link href="/" style={{ color: "#1A1A1A", opacity: 0.4 }} className="hover:opacity-70 transition-opacity">Home</Link>
        <span style={{ color: "#1A1A1A", opacity: 0.3 }}>/</span>
        <Link href="/blog" style={{ color: "#1A1A1A", opacity: 0.4 }} className="hover:opacity-70 transition-opacity">Blog</Link>
        <span style={{ color: "#1A1A1A", opacity: 0.3 }}>/</span>
        <span style={{ color: "#1A1A1A", opacity: 0.6 }}>{post.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span style={{ background: catColor.bg, color: catColor.text }} className="text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide">
              {post.category}
            </span>
            <span style={{ color: "#1A1A1A", opacity: 0.4 }} className="text-[11px]">{post.readTime}</span>
          </div>

          <h1 style={{ color: "#1A1A1A" }} className="text-3xl sm:text-4xl font-black leading-tight mb-5">
            {post.title}
          </h1>

          <p style={{ color: "#1A1A1A", opacity: 0.65, borderBottom: "1px solid rgba(26,26,26,0.08)" }} className="text-lg leading-relaxed mb-10 pb-10">
            {post.excerpt}
          </p>

          <div className="space-y-8">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2 style={{ color: "#1A1A1A" }} className="text-xl font-black mb-3">
                  {section.heading}
                </h2>
                <div className="space-y-3">
                  {section.body.split("\n\n").map((para, i) => (
                    <p key={i} style={{ color: "#1A1A1A", opacity: 0.72 }} className="text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Related products */}
          {relatedProducts.length > 0 && (
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
              <h3 style={{ color: "#1A1A1A" }} className="text-sm font-black mb-4">
                Products Used
              </h3>
              <div className="space-y-3">
                {relatedProducts.map((product) => (
                  <div key={product.id}>
                    <Link href={`/products/${product.id}`} style={{ color: "#1A1A1A" }} className="text-sm font-semibold hover:opacity-60 transition-opacity block mb-1">
                      {product.name}
                    </Link>
                    <p style={{ color: "#1A1A1A", opacity: 0.55 }} className="text-xs leading-relaxed mb-2">
                      {product.tagline}
                    </p>
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ background: "#C03030" }}
                      className="inline-flex items-center justify-center w-full py-2 rounded-xl text-white text-xs font-semibold hover:opacity-85 transition-opacity"
                    >
                      Buy on Amazon →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* More posts */}
          {otherPosts.length > 0 && (
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
              <h3 style={{ color: "#1A1A1A" }} className="text-sm font-black mb-4">
                More Articles
              </h3>
              <div className="space-y-4">
                {otherPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                    <p style={{ color: "#1A1A1A" }} className="text-sm font-semibold leading-snug mb-1 group-hover:opacity-60 transition-opacity">
                      {p.title}
                    </p>
                    <p style={{ color: "#1A1A1A", opacity: 0.45 }} className="text-xs">{p.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ link */}
          <div style={{ background: "#1A1A1A" }} className="rounded-3xl p-6 text-center">
            <p className="text-white text-sm font-black mb-2">Have more questions?</p>
            <p style={{ color: "rgba(247,243,245,0.6)" }} className="text-xs mb-4">Browse our full FAQ for answers about every product.</p>
            <Link href="/faq" style={{ background: "#C03030" }} className="inline-flex items-center justify-center w-full py-2.5 rounded-xl text-white text-xs font-semibold hover:opacity-90 transition-opacity">
              View FAQ →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
