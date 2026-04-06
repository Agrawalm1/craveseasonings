import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Crave Seasonings — how we handle your data.",
};

export default function PrivacyPage() {
  const lastUpdated = "April 5, 2026";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-10">
        <p
          style={{ color: "#C03030" }}
          className="text-xs font-bold tracking-widest uppercase mb-2"
        >
          Legal
        </p>
        <h1
          style={{ color: "#1A1A1A" }}
          className="text-3xl sm:text-4xl font-black mb-2"
        >
          Privacy Policy
        </h1>
        <p style={{ color: "#1A1A1A", opacity: 0.5 }} className="text-sm">
          Last updated: {lastUpdated}
        </p>
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.8)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
        }}
        className="rounded-3xl p-8 space-y-8"
      >
        {[
          {
            title: "1. Information We Collect",
            content: `When you use this website or contact us, we may collect certain personal information including your name, email address, and message content submitted through our contact form. We do not collect payment information — all purchases are handled directly through Amazon's secure checkout system.`,
          },
          {
            title: "2. How We Use Your Information",
            content: `We use the information you provide solely to respond to your inquiries, send newsletters you have opted into, and improve our website. We do not sell, trade, or rent your personal information to third parties.`,
          },
          {
            title: "3. Contact Form (Formspree)",
            content: `Our contact form and email signup are powered by Formspree. When you submit a form, your data is processed by Formspree in accordance with their privacy policy (formspree.io/legal/privacy-policy). We receive your submission via email and use it only to respond to your request.`,
          },
          {
            title: "4. Amazon",
            content: `All product purchases are completed on Amazon's platform. When you click "Buy on Amazon," you are directed to Amazon.com and are subject to Amazon's privacy policy and terms of service. We do not receive or store your Amazon account information or payment details.`,
          },
          {
            title: "5. Cookies & Analytics",
            content: `This website may use standard web analytics tools to understand how visitors interact with our content. These tools may use cookies or similar tracking technologies. No personally identifiable information is collected through these tools. You can disable cookies in your browser settings at any time.`,
          },
          {
            title: "6. Email Communications",
            content: `If you sign up for our email list, you consent to receiving occasional emails about new products, recipes, and promotions. You can unsubscribe at any time by clicking the unsubscribe link in any email we send you.`,
          },
          {
            title: "7. Data Security",
            content: `We take reasonable measures to protect any information you share with us. However, no method of internet transmission or electronic storage is 100% secure. We cannot guarantee absolute security.`,
          },
          {
            title: "8. Children's Privacy",
            content: `This website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.`,
          },
          {
            title: "9. Changes to This Policy",
            content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of this website after any changes constitutes your acceptance of the new policy.`,
          },
          {
            title: "10. Contact Us",
            content: `If you have any questions about this Privacy Policy or how we handle your data, please contact us at hpncap@gmail.com.`,
          },
        ].map((section) => (
          <div key={section.title}>
            <h2
              style={{ color: "#1A1A1A" }}
              className="text-base font-black mb-2"
            >
              {section.title}
            </h2>
            <p
              style={{ color: "#1A1A1A", opacity: 0.7 }}
              className="text-sm leading-relaxed"
            >
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
