# PrepMaster

Digital storefront for LSAT, NCLEX, CLEP and other exam prep study guides. Built with Next.js 16, Stripe Checkout, Vercel Blob for digital downloads, Upstash Redis for time-limited token delivery, and Resend for transactional email.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack) + React 19
- **Styling**: Tailwind CSS v4, shadcn/ui, Base UI
- **Payments**: Stripe Checkout + webhooks
- **Storage**: Vercel Blob (product files), Upstash Redis (download tokens + order cache)
- **Email**: Resend + React Email
- **Content**: MDX blog via `next-mdx-remote` + `gray-matter`

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in secrets
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See [`.env.example`](./.env.example) for the full list. Required for production:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (used for Stripe redirects and sitemaps) |
| `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` | Stripe Checkout + webhook signing |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Client-side Stripe |
| `RESEND_API_KEY` | Transactional email |
| `KV_REST_API_URL` / `KV_REST_API_TOKEN` | Upstash Redis for download tokens |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob read/write |

## Project layout

```
src/
├── app/              # App Router pages + API routes
│   └── api/
│       ├── download/[token]/    # signed download handler
│       ├── newsletter/          # newsletter signup
│       ├── order/[sessionId]/   # order lookup
│       └── stripe/              # checkout-session + webhook
├── components/       # home, layout, products, CRO, UI primitives
├── data/             # products.ts, reviews.ts (static catalog)
├── lib/              # redis, stripe, resend, blog, utils
emails/               # React Email templates
content/              # MDX blog posts
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |

## Deployment

Deploys to [Vercel](https://vercel.com). After linking the project, set the environment variables above in the Vercel dashboard and point the Stripe webhook at `https://<your-domain>/api/stripe/webhook`.
