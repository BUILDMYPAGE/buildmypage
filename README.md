# BUILDMYPAGE — buildmypage.com

The buildmypage.com website: modern web development trusted by federal agencies
and enterprise teams. Rebuilt off WordPress as a static Next.js site.

## Editing content

All copy lives in **`src/lib/content.ts`** — site name, tagline, contact info,
services, clients, testimonials, and hero text. Edit that file and redeploy;
you should rarely need to touch the page components.

- Colors: `src/app/globals.css` (`--color-brand-*` / `--color-accent-*` tokens, sampled from the logo)
- Layout/nav/footer: `src/components/`
- Pages: `src/app/{services,clients,testimonials,contact}/page.tsx` and `src/app/page.tsx`

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Building

```bash
npm run build    # outputs a fully static site to out/
```

The site uses `output: "export"`, so `out/` is plain HTML/CSS/JS and can be
hosted anywhere: GitHub Pages, Cloudflare Pages, Netlify, or Vercel.

## Contact form

The contact form sends through [Web3Forms](https://web3forms.com) (free tier,
250 submissions/month). The access key lives in `web3formsKey` in
`src/lib/content.ts`; rotate it at web3forms.com if it ever gets spammed.
