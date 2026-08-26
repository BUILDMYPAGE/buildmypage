import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A look at our recent work — government dashboards, business platforms, and native mobile apps, from AnidaPro and the USDA FEMS dashboard to The Nation's Report Card.",
};

const websites = projects.filter((p) => p.kind === "Website");
const mobileApps = projects.filter((p) => p.kind === "Mobile App");

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-ink-900/10 bg-white shadow-sm">
      <Image
        src={project.image}
        alt={`Screenshot of ${project.name}`}
        width={1920}
        height={1200}
        className="aspect-[8/5] w-full border-b border-ink-900/10 object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink-900">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{project.blurb}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        heading="Recent projects we're proud of."
        sub="From federal dashboards serving the nation to platforms powering local businesses — websites and mobile apps we've designed, built, and shipped."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-ink-900">Websites</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {websites.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </section>

      <section className="border-t border-ink-900/10 bg-brand-50/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink-900">Mobile Apps</h2>
          <p className="mt-2 max-w-2xl text-ink-500">
            Live on the App Store and Google Play.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mobileApps.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading="Have a project like these?"
        sub="Tell us what you're building — we'll show you how we'd approach it."
      />
    </>
  );
}
