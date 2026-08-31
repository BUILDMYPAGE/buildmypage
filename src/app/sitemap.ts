import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/content";

// Required for `output: "export"` — emits a plain sitemap.xml in `out/`.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map(({ href }) => ({
    url: `${site.url}${href === "/" ? "/" : `${href}/`}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
