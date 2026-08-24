import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/10 bg-ink-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Image
              src="/buildmypage-logo.png"
              alt={site.name}
              width={600}
              height={200}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-3 text-sm italic text-white/70">{site.tagline}</p>
            <p className="mt-4 text-sm text-white/70">{site.description}</p>
          </div>
          <div className="flex gap-16">
            <nav className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
                Pages
              </p>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
                Contact
              </p>
              <a href={`mailto:${site.email}`} className="text-sm text-white/80 hover:text-white">
                {site.email}
              </a>
              {site.phone && (
                <a href={`tel:${site.phone}`} className="text-sm text-white/80 hover:text-white">
                  {site.phone}
                </a>
              )}
              <p className="text-sm text-white/60">{site.location}</p>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
