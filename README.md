# Priscilla Prints

Priscilla Prints is a Next.js 16 directory for community print shops and small-run services. It keeps the structure, Open Sans type, deep slate and cyan palette, responsive behaviour, icon font and motion language of the supplied Insurance Press template while replacing its content and imagery.

## Stack

- Next.js 16.4.3 with App Router and React 19.3.1
- Tailwind CSS 4.3.3 through PostCSS, with template-faithful CSS tokens and components
- TypeScript 7 in strict mode
- Self-hosted Open Sans and original Themify `@font-face` assets
- Google reCAPTCHA v2 on public forms
- Vercel Functions pinned to `cdg1`

All dependency versions are pinned in `package.json` and the lockfile.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Build gate

```bash
npm run check
```

The gate runs ESLint, TypeScript, content compliance checks and the production build.

## Environment

Copy `.env.example` to `.env.local` and set production Google reCAPTCHA v2 keys. Without custom values, the app uses Google's documented test keys, suitable for local and preview checks only.

`NEXT_PUBLIC_SITE_URL` controls canonical and sitemap URLs.

## Product boundaries

Priscilla Prints is an independent directory. It does not print, take payment, guarantee turnaround or clear artwork rights. Sample profiles are visibly labelled and are not active businesses.

Light account features use browser storage only. They support saved shops and a user's listing without a dashboard or password flow.

## Images

All photos in `public/images` are real Pexels images. Attribution and source pages are in [credits.md](./credits.md). No generated imagery is used.

## Deployment

`vercel.json` selects `cdg1`. Security headers are maintained in `next.config.ts`, with additional deployment headers in `vercel.json`.
