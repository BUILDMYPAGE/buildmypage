import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import { ai } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Engineering",
  description:
    "How we use AI: frontier LLMs, agentic workflows, MCP servers, and RAG — with every line of AI-generated code reviewed, tested, and 508-validated by senior engineers.",
};

export default function AIPage() {
  return (
    <>
      <PageHeader eyebrow={ai.eyebrow} heading={ai.heading} sub={ai.sub} />

      {/* Metrics */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {ai.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-ink-900/10 bg-white p-6 text-center shadow-sm"
            >
              <p className="text-4xl font-bold tracking-tight text-brand-600">{m.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we work with AI */}
      <section className="border-y border-ink-900/10 bg-brand-50/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink-900">
            How we put AI to work
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {ai.practices.map((p) => (
              <div key={p.title}>
                <h3 className="text-lg font-semibold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-ink-900">The toolkit</h2>
        <p className="mt-2 max-w-2xl text-ink-500">
          The models and techniques we bring to AI-assisted development and the AI-powered
          features we build into client projects.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {ai.toolkit.map((item) => (
            <li
              key={item}
              className="rounded-full border border-ink-900/10 bg-white px-4 py-1.5 text-sm font-medium text-ink-700 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <CTA
        heading="Curious what AI could do for your business?"
        sub="From intelligent features to automated workflows — let's talk about what's practical for you."
      />
    </>
  );
}
