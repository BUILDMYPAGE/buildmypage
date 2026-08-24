import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import { services, skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Angular, React, and AI development, responsive design, SEO, e-commerce, mobile apps, and more — everything your project needs under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        heading="Everything your project needs, under one roof."
        sub="From modern front-end frameworks to AI, SEO, and e-commerce — pick what you need now, and add more as you grow."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-xl border border-ink-900/10 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-ink-900">{s.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                {s.blurb}
              </p>
              {s.points && (
                <ul className="mt-4 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-ink-700">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="shrink-0 text-brand-600"
                      >
                        <path
                          d="M3 8.5L6.5 12L13 4.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Professional overview */}
      <section className="border-t border-ink-900/10 bg-brand-50/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink-900">
            Professional Overview
          </h2>
          <p className="mt-2 max-w-2xl text-ink-500">
            A snapshot of the tools, frameworks, and practices behind the work.
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {skills.map((skill) => (
              <li key={skill} className="flex items-start gap-2.5 text-sm text-ink-700">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-0.5 shrink-0 text-brand-600"
                >
                  <path
                    d="M3 8.5L6.5 12L13 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        heading="Not sure what you need?"
        sub="Tell us where your project is stuck — we'll recommend the simplest path forward."
      />
    </>
  );
}
