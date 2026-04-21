# NadanPure

Preservative-free Kerala organic produce storefront built with Next.js. Includes a landing page, product grid, and Supabase-powered authentication (login / sign up / profile).

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui (Radix UI)
- Supabase Auth (`@supabase/ssr`, `@supabase/supabase-js`)

## Getting started

1. Install dependencies:

```bash
pnpm install
# or: npm install
```

2. Create your local env file:

```bash
cp .env.example .env.local
```

3. Fill in `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL` (optional; defaults to your local origin)

4. Run the dev server:

```bash
pnpm dev
# or: npm run dev
```

Open `http://localhost:3000`.

## Supabase notes

- Auth pages live under `app/auth/*`.
- Profile page (`app/profile/page.tsx`) expects a `profiles` table (or an equivalent view/trigger) with fields like `full_name`, `phone`, `address`, `city`, `pincode`, plus an `updated_at` timestamp. Make sure your RLS policies allow the signed-in user to read/update their own row.

## Scripts

- `pnpm dev` / `npm run dev` — start dev server
- `pnpm build` / `npm run build` — production build
- `pnpm start` / `npm run start` — start production server
- `pnpm lint` / `npm run lint` — run ESLint
