import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { contact, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your project — we'll get back to you within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" heading={contact.heading} sub={contact.sub} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="max-w-2xl">
            <ContactForm />
          </div>
          <aside className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
                Email
              </h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block font-medium text-brand-600 hover:text-brand-700"
              >
                {site.email}
              </a>
            </div>
            {site.phone && (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
                  Phone
                </h2>
                <a
                  href={`tel:${site.phone}`}
                  className="mt-1 block font-medium text-brand-600 hover:text-brand-700"
                >
                  {site.phone}
                </a>
              </div>
            )}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
                Location
              </h2>
              <p className="mt-1 text-ink-700">{site.location}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
                Response time
              </h2>
              <p className="mt-1 text-ink-700">Within one business day.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
