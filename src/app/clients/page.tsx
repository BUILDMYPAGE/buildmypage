import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import { clients } from "@/lib/content";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Project work for USPS, the Departments of Education, Agriculture, and Homeland Security, Lockheed Martin, General Dynamics, Halliburton, and more.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Clients"
        heading="Trusted by federal agencies and enterprise teams."
        sub="From government dashboards to Fortune 500 platforms — a look at where the work has taken us."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="space-y-6">
          {clients.map((c) => (
            <article
              key={c.name}
              className="rounded-xl border border-ink-900/10 bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                {c.industry}
              </p>
              <h2 className="mt-1.5 text-xl font-semibold text-ink-900">{c.name}</h2>
              {c.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-ink-500">
                  {p}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>
      <CTA
        heading="Want your project on this list?"
        sub="Every engagement starts with a short, no-pressure conversation."
      />
    </>
  );
}
