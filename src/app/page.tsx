import Link from "next/link";
import CTA from "@/components/CTA";
import { hero, process, services, site, testimonials } from "@/lib/content";

const featuredTestimonial =
  testimonials.find((t) => t.featured) ?? testimonials[0];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-ink-900/10 bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-ink-900 sm:text-6xl">
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-500 sm:text-xl">{hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={hero.primaryCta.href}
              className="rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="rounded-lg border border-ink-900/15 bg-white px-6 py-3 text-base font-semibold text-ink-900 transition-colors hover:border-ink-900/30"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
          <p className="mt-10 text-sm italic text-ink-500">“{site.tagline}”</p>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink-900">
              What we do
            </h2>
            <p className="mt-2 max-w-xl text-ink-500">
              Everything your website needs — from first pixel to ongoing care.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden shrink-0 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:block"
          >
            All services →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-ink-900/10 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.blurb}</p>
            </div>
          ))}
        </div>
        <Link
          href="/services"
          className="mt-8 block text-sm font-semibold text-brand-600 hover:text-brand-700 sm:hidden"
        >
          All services →
        </Link>
      </section>

      {/* Process */}
      <section className="border-y border-ink-900/10 bg-brand-50/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink-900">
            How it works
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {process.map((p) => (
              <div key={p.step}>
                <span className="font-mono text-sm font-semibold text-accent-600">
                  {p.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial highlight */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote className="text-xl font-medium leading-relaxed text-ink-900 sm:text-2xl">
            “{featuredTestimonial.quote}”
          </blockquote>
          <figcaption className="mt-6 text-sm text-ink-500">
            {featuredTestimonial.name} · {featuredTestimonial.company}
          </figcaption>
          <Link
            href="/testimonials"
            className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            More testimonials →
          </Link>
        </figure>
      </section>

      <CTA />
    </>
  );
}
