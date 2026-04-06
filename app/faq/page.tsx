import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about pink curing salt, Clear Jel, xanthan gum, pretzel salt, TVP, and how to use Crave Seasonings products.",
};

const FAQS = [
  {
    category: "Pink Curing Salt",
    items: [
      {
        q: "What is the difference between Prague Powder #1 and Prague Powder #2?",
        a: "Prague Powder #1 (what we sell) contains sodium nitrite (6.25%) and is used for short-cure meats that will be cooked before eating — bacon, ham, sausage, and jerky. Prague Powder #2 contains both sodium nitrite and sodium nitrate and is used for long-cure, air-dried meats like salami and prosciutto that are aged for weeks or months without cooking. Do not substitute one for the other.",
      },
      {
        q: "How much pink curing salt do I use per pound of meat?",
        a: "The standard ratio for Prague Powder #1 is 1 teaspoon (about 6.25g) per 5 lbs of meat. Do not exceed this amount — measure precisely with a kitchen scale. Too little is unsafe; too much makes the meat taste bitter and can be harmful.",
      },
      {
        q: "Why is pink curing salt pink?",
        a: "The pink color is added intentionally as a safety measure to prevent it from being confused with regular table salt. The color has no effect on flavor or the curing process.",
      },
      {
        q: "Can I cure bacon without pink curing salt?",
        a: "You can salt-pack pork without curing salt, but the result is not technically bacon — it won't have the characteristic pink color, savory cured flavor, or the same level of protection against botulism. For safe, proper home-cured bacon, pink curing salt is essential.",
      },
    ],
  },
  {
    category: "Clear Jel",
    items: [
      {
        q: "Why can't I use cornstarch for canning?",
        a: "Cornstarch breaks down under the high heat of the canning process, resulting in a watery, separated filling. The USDA's National Center for Home Food Preservation recommends Clear Jel as the only approved thickener for canned pie fillings because it remains stable through heat processing.",
      },
      {
        q: "How much Clear Jel do I use per quart of pie filling?",
        a: "The standard ratio is 7 tablespoons per quart for most fruits (peaches, apples, berries). For naturally thicker fruits like cherries, use 5–6 tablespoons. Always mix Clear Jel with sugar before adding to fruit to prevent lumping.",
      },
      {
        q: "What is the difference between cook type and instant Clear Jel?",
        a: "Cook type (what we sell) must be heated to activate — it's the correct choice for canning, baked pies, and stovetop fillings. Instant Clear Jel thickens without heat, used for cold applications like no-bake cheesecake or refrigerator pudding. Do not substitute one for the other in recipes.",
      },
      {
        q: "Can I use Clear Jel to thicken gravy or sauce?",
        a: "Yes — Clear Jel works well in gravies and sauces, especially when you need the sauce to hold up on a buffet, reheat cleanly, or freeze without separating. It produces a glossy, clear finish that cornstarch can't match.",
      },
    ],
  },
  {
    category: "Pretzel Salt",
    items: [
      {
        q: "What makes pretzel salt different from kosher salt?",
        a: "Pretzel salt has large, flat crystals that are specifically designed to not absorb moisture from the dough. This keeps the crystals intact and white through high-heat baking. Kosher salt has a different crystal structure that tends to dissolve or discolor on the surface of baked goods.",
      },
      {
        q: "At what temperature is your pretzel salt rated?",
        a: "Our Coarse Pretzel Salt is heat resistant up to 400°F and stays white and crisp through the bake. Standard pretzel and bread baking temperatures fall well within this range.",
      },
      {
        q: "When should I apply the pretzel salt?",
        a: "Apply immediately after the baking soda bath, before the surface of the dough dries. Press gently so the crystals stick. If using an egg wash, apply the salt right after brushing. Be generous — the large crystal size means a heavy hand won't make the pretzel taste overpoweringly salty.",
      },
    ],
  },
  {
    category: "Xanthan Gum",
    items: [
      {
        q: "How much xanthan gum do I use in gluten-free baking?",
        a: "General guidelines: cakes and muffins — 1/4 tsp per cup of flour; cookies — 1/2 tsp per cup; bread and pizza dough — 1/2 to 1 tsp per cup. For sauces and dressings, start with 1/8 tsp per cup of liquid. Always start at the lower end — too much creates a gummy texture.",
      },
      {
        q: "Why does my xanthan gum clump when I add it to liquid?",
        a: "Xanthan gum hydrates instantly on contact with liquid, causing clumps before it can disperse. Always mix xanthan gum with your dry ingredients first before adding any liquid. If adding to a dressing or sauce, whisk it into oil first, then add liquid gradually.",
      },
      {
        q: "Is xanthan gum keto-friendly?",
        a: "Yes. Xanthan gum is commonly used in keto cooking because it has essentially zero net carbs and provides the binding and thickening that's otherwise missing when baking without flour.",
      },
    ],
  },
  {
    category: "Textured Vegetable Protein (TVP)",
    items: [
      {
        q: "How do I rehydrate TVP?",
        a: "Pour boiling water or hot broth over the TVP at a 1:1 ratio by volume. Let it soak for 10 minutes, then drain any excess liquid and use as you would ground meat. For more flavor, use broth instead of water and add a splash of soy sauce or Worcestershire.",
      },
      {
        q: "Is your TVP gluten-free?",
        a: "Our TVP is made from soy and is gluten-free. However, if you have a severe gluten allergy, always check the current product label as manufacturing environments can vary.",
      },
      {
        q: "How do I make TVP taste like meat?",
        a: "TVP has a neutral flavor that takes on whatever you season it with. Season aggressively — cumin, chili powder, garlic, onion, smoked paprika, and soy sauce all work well. Browning in a hot skillet after rehydrating (drain well first) gives it a better texture and meatier flavor.",
      },
    ],
  },
  {
    category: "Ordering & Shipping",
    items: [
      {
        q: "Where are your products sold?",
        a: "All Crave Seasonings products are sold through Amazon. Click any 'Buy on Amazon' button on the site to go directly to the listing.",
      },
      {
        q: "How long does shipping take?",
        a: "Orders are fulfilled through Amazon's network. Prime members typically receive orders within 1–2 days. Standard shipping times apply for non-Prime orders.",
      },
      {
        q: "What if I have a problem with my order?",
        a: "For order issues, Amazon's customer service is the fastest path to resolution. For product questions or feedback, you can also reach us directly at hpncap@gmail.com.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-12">
        <p style={{ color: "#C03030" }} className="text-xs font-bold tracking-widest uppercase mb-2">
          Help Center
        </p>
        <h1 style={{ color: "#1A1A1A" }} className="text-3xl sm:text-4xl font-black mb-4">
          Frequently Asked Questions
        </h1>
        <p style={{ color: "#1A1A1A", opacity: 0.65 }} className="text-base leading-relaxed">
          Everything you need to know about our products and how to use them.
          Can&apos;t find an answer?{" "}
          <Link href="/contact" style={{ color: "#C03030" }} className="font-semibold hover:opacity-75 transition-opacity">
            Contact us
          </Link>
          .
        </p>
      </div>

      <div className="space-y-12">
        {FAQS.map((section) => (
          <div key={section.category}>
            <h2
              style={{ color: "#C03030" }}
              className="text-xs font-bold tracking-widest uppercase mb-5 pb-3"
            >
              {section.category}
            </h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <details
                  key={item.q}
                  style={{
                    background: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.8)",
                    boxShadow: "0 4px 30px rgba(0,0,0,0.04)",
                  }}
                  className="rounded-2xl overflow-hidden group"
                >
                  <summary
                    style={{ color: "#1A1A1A" }}
                    className="px-6 py-4 font-semibold text-sm cursor-pointer select-none list-none flex items-center justify-between gap-4 hover:opacity-75 transition-opacity"
                  >
                    {item.q}
                    <svg
                      className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p
                    style={{ color: "#1A1A1A", opacity: 0.7, borderTop: "1px solid rgba(26,26,26,0.07)" }}
                    className="px-6 py-4 text-sm leading-relaxed"
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{ background: "#1A1A1A" }}
        className="mt-16 rounded-3xl p-8 text-center"
      >
        <p style={{ color: "#C03030" }} className="text-xs font-bold tracking-widest uppercase mb-2">
          Still have questions?
        </p>
        <h2 className="text-xl font-black text-white mb-3">We&apos;re happy to help</h2>
        <p style={{ color: "rgba(247,243,245,0.6)" }} className="text-sm mb-6">
          Send us a message and we&apos;ll get back to you within 1–2 business days.
        </p>
        <Link
          href="/contact"
          style={{ background: "#C03030" }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
