"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xjgpjlyz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <p
          style={{ color: "#C03030" }}
          className="text-xs font-bold tracking-widest uppercase mb-2"
        >
          Get In Touch
        </p>
        <h1
          style={{ color: "#1A1A1A" }}
          className="text-3xl sm:text-4xl font-black mb-3"
        >
          Contact Us
        </h1>
        <p
          style={{ color: "#1A1A1A", opacity: 0.65 }}
          className="text-base"
        >
          Have a question about one of our products, need help with a recipe, or
          want to place a bulk order? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
            }}
            className="rounded-3xl p-8"
          >
            {status === "sent" ? (
              <div className="text-center py-8">
                <div
                  style={{ color: "#C03030" }}
                  className="text-5xl mb-4 select-none"
                  aria-hidden="true"
                >
                  ✓
                </div>
                <h2
                  style={{ color: "#1A1A1A" }}
                  className="text-xl font-black mb-2"
                >
                  Message Sent!
                </h2>
                <p
                  style={{ color: "#1A1A1A", opacity: 0.65 }}
                  className="text-base"
                >
                  Thanks for reaching out. We&apos;ll get back to you within 1–2
                  business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      style={{ color: "#1A1A1A" }}
                      className="block text-sm font-semibold mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      style={{
                        border: "1.5px solid rgba(26,26,26,0.15)",
                        color: "#1A1A1A",
                        background: "rgba(255,255,255,0.8)",
                      }}
                      className="w-full px-4 py-3 rounded-2xl text-sm outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      style={{ color: "#1A1A1A" }}
                      className="block text-sm font-semibold mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      style={{
                        border: "1.5px solid rgba(26,26,26,0.15)",
                        color: "#1A1A1A",
                        background: "rgba(255,255,255,0.8)",
                      }}
                      className="w-full px-4 py-3 rounded-2xl text-sm outline-none focus:border-red-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    style={{ color: "#1A1A1A" }}
                    className="block text-sm font-semibold mb-1.5"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    style={{
                      border: "1.5px solid rgba(26,26,26,0.15)",
                      color: "#1A1A1A",
                      background: "rgba(255,255,255,0.8)",
                    }}
                    className="w-full px-4 py-3 rounded-2xl text-sm outline-none focus:border-red-400 transition-colors"
                  >
                    <option value="">Select a topic…</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Recipe Help">Recipe Help</option>
                    <option value="Bulk Order">Bulk Order Inquiry</option>
                    <option value="Order Issue">Order Issue</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{ color: "#1A1A1A" }}
                    className="block text-sm font-semibold mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us how we can help…"
                    style={{
                      border: "1.5px solid rgba(26,26,26,0.15)",
                      color: "#1A1A1A",
                      background: "rgba(255,255,255,0.8)",
                      resize: "vertical",
                    }}
                    className="w-full px-4 py-3 rounded-2xl text-sm outline-none focus:border-red-400 transition-colors"
                  />
                </div>

                {status === "error" && (
                  <p
                    style={{ color: "#C03030" }}
                    className="text-sm font-medium"
                  >
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{ background: "#C03030" }}
                  className="w-full py-3.5 rounded-2xl text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-5">
          <div
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
            }}
            className="rounded-3xl p-7"
          >
            <div
              style={{ color: "#C03030" }}
              className="text-2xl mb-3 select-none"
              aria-hidden="true"
            >
              ✉️
            </div>
            <h3
              style={{ color: "#1A1A1A" }}
              className="text-base font-black mb-1"
            >
              Email
            </h3>
            <a
              href="mailto:hpncap@gmail.com"
              style={{ color: "#C03030" }}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              hpncap@gmail.com
            </a>
            <p
              style={{ color: "#1A1A1A", opacity: 0.5 }}
              className="text-xs mt-1"
            >
              We respond within 1–2 business days
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
            className="rounded-3xl p-7"
          >
            <div
              style={{ color: "#C03030" }}
              className="text-2xl mb-3 select-none"
              aria-hidden="true"
            >
              🛒
            </div>
            <h3
              style={{ color: "#1A1A1A" }}
              className="text-base font-black mb-1"
            >
              Order Questions?
            </h3>
            <p
              style={{ color: "#1A1A1A", opacity: 0.7 }}
              className="text-sm leading-relaxed mb-3"
            >
              For order issues, shipping questions, or returns, please use
              Amazon&apos;s messaging system for the fastest response.
            </p>
            <a
              href="https://www.amazon.com/s?srs=119868661011&rh=p_89:Crave%2BSeasonings"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1.5px solid #C03030",
                color: "#C03030",
              }}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-red-50 transition-colors"
            >
              Visit Amazon Store →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
