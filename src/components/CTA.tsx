import Link from "next/link";

export default function CTA({
  heading = "Ready to get started?",
  sub = "Tell us about your project and we'll take it from there.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="bg-brand-600">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 text-brand-100">{sub}</p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
}
