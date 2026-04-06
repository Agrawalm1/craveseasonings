import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://craveseasonings.com"),
  title: {
    default: "Crave Seasonings — Premium Bulk Food Ingredients",
    template: "%s | Crave Seasonings",
  },
  description:
    "Premium bulk food ingredients shipped from Houston, TX. Non-GMO pretzel salt, Clear Jel, pink curing salt, TVP, xanthan gum and more. Treat For Your Tastebuds.",
  keywords: [
    "pretzel salt",
    "clear jel powder",
    "pink curing salt",
    "prague powder",
    "textured vegetable protein",
    "xanthan gum",
    "bulk food ingredients",
    "Houston Texas",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://craveseasonings.com",
    siteName: "Crave Seasonings",
    title: "Crave Seasonings — Premium Bulk Food Ingredients",
    description:
      "Premium bulk food ingredients shipped from Houston, TX. Non-GMO, food-grade quality. Treat For Your Tastebuds.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crave Seasonings — Premium Bulk Food Ingredients",
    description:
      "Premium bulk food ingredients shipped from Houston, TX. Non-GMO, food-grade quality.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
