import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import { ai, hero, oneStop, process, projects, services, stats, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const featuredTestimonial =
  testimonials.find((t) => t.featured) ?? testimonials[0];

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

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
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-ink-900/10 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold tracking-tight text-brand-600 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-ink-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* One-stop shop */}
      <section className="border-b border-ink-900/10 bg-brand-50/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
              {oneStop.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              {oneStop.heading}
            </h2>
            <p className="mt-4 text-ink-500">{oneStop.sub}</p>
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {oneStop.pillars.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-brand-600/20 bg-white px-4 py-1.5 text-sm font-medium text-brand-700"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
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

      {/* Featured work */}
      <section className="border-t border-ink-900/10 bg-brand-50/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-ink-900">
                Recent work
              </h2>
              <p className="mt-2 max-w-xl text-ink-500">
                Federal dashboards, business platforms, and mobile apps — designed, built,
                and shipped by our team.
              </p>
            </div>
            <Link
              href="/work"
              className="hidden shrink-0 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:block"
            >
              All work →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p) => (
              <Link
                key={p.name}
                href="/work"
                className="group overflow-hidden rounded-xl border border-ink-900/10 bg-white shadow-sm"
              >
                <Image
                  src={p.image}
                  alt={`Screenshot of ${p.name}`}
                  width={1920}
                  height={1200}
                  className="aspect-[8/5] w-full border-b border-ink-900/10 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-ink-900 group-hover:text-brand-700">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/work"
            className="mt-8 block text-sm font-semibold text-brand-600 hover:text-brand-700 sm:hidden"
          >
            All work →
          </Link>
        </div>
      </section>

      {/* AI */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
            {ai.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            {ai.heading}
          </h2>
          <p className="mt-4 text-ink-500">{ai.sub}</p>
          <Link
            href="/ai"
            className="mt-6 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            How we use AI →
          </Link>
        </div>
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
