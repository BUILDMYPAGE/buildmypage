"use client";

import { useState } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full rounded-lg border border-ink-900/15 bg-white px-4 py-2.5 text-base text-ink-900 placeholder:text-ink-500/60 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  // Until a Web3Forms key is set in src/lib/content.ts, show a mailto fallback
  // so the site never has a dead form.
  if (!site.web3formsKey) {
    return (
      <div className="rounded-xl border border-ink-900/10 bg-brand-50/50 p-6">
        <p className="text-ink-700">
          Email us at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-brand-600 hover:text-brand-700"
          >
            {site.email}
          </a>{" "}
          and we&apos;ll get back to you within one business day.
        </p>
        <p className="mt-3 text-xs text-ink-500">
          (Site owner: add a free Web3Forms access key in{" "}
          <code className="font-mono">src/lib/content.ts</code> to enable this
          contact form.)
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    // FormData (not JSON) — a JSON post triggers a CORS preflight that
    // Web3Forms' API doesn't answer.
    const data = new FormData(form);
    data.append("access_key", site.web3formsKey);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || `Request failed: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-brand-200 bg-brand-50 p-6">
        <p className="font-semibold text-ink-900">Thanks — message received!</p>
        <p className="mt-1 text-sm text-ink-700">
          We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700">
            Name
          </label>
          <input id="name" name="name" required className={inputClasses} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink-700">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          className={inputClasses}
          placeholder="What's this about?"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700">
          Your message <span className="text-ink-500">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClasses}
          placeholder="Tell us about your project, or what's not working with your current site…"
        />
      </div>
      {/* Honeypot for bots */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please email us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
