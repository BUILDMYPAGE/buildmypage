import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import { testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What clients say about working with BUILDMYPAGE.",
  alternates: { canonical: "/testimonials/" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        heading="Don't take our word for it."
        sub="Please take a moment to review what others have said about the work and their experience with BUILDMYPAGE."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-ink-900/10 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
                {t.title}
              </p>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-ink-500">
                <span className="font-semibold text-ink-700">{t.name}</span> · {t.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CTA
        heading="Be our next success story."
        sub="Let's talk about what your project could become."
      />
    </>
  );
}
