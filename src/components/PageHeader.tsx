export default function PageHeader({
  eyebrow,
  heading,
  sub,
}: {
  eyebrow: string;
  heading: string;
  sub?: string;
}) {
  return (
    <section className="border-b border-ink-900/10 bg-gradient-to-b from-brand-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          {heading}
        </h1>
        {sub && <p className="mt-4 max-w-2xl text-lg text-ink-500">{sub}</p>}
      </div>
    </section>
  );
}
