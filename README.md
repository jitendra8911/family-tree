# Family Tree

A personal family tree web app. Monorepo with the UI app in [`ui/`](./ui).

The UI is a minimal, working skeleton: routing, providers, styling and tests are
set up, but the pages are yours to build.

## Stack

| Layer | Choice |
| --- | --- |
| Build | Vite 8 |
| UI | React 19 + TypeScript 7 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Routing | React Router 8 |
| Server state | TanStack Query 5 |
| Client state | Zustand 5 |
| Forms | react-hook-form + Zod |
| Search | Fuse.js |
| Tests | Vitest 5 + Testing Library |
| Lint / format | oxlint + Prettier |
| Package manager | pnpm workspaces |

## Prerequisites

- Node.js 24 LTS (at least 22.12)
- pnpm 12 — `npm install -g pnpm` or
  [the standalone installer](https://pnpm.io/installation)

## Getting started

```bash
pnpm install
cp ui/.env.example ui/.env   # optional until Supabase is wired up
pnpm dev
```

The app runs at http://localhost:5173.

## Scripts

Run these from the repo root:

| Script | What it does |
| --- | --- |
| `pnpm dev` | Start the UI dev server |
| `pnpm build` | Typecheck and build the UI |
| `pnpm preview` | Serve the production build |
| `pnpm lint` | Lint the UI with oxlint |
| `pnpm format` | Format with Prettier |
| `pnpm format:check` | Check formatting |
| `pnpm typecheck` | Run the TypeScript compiler |
| `pnpm test` | Run unit tests once |
| `pnpm test:watch` | Run unit tests in watch mode |

To target the app directly, use `pnpm --filter @family-tree/ui <script>`.

## Project layout

```
family-tree/
├── ui/                     # Vite React SPA
│   ├── src/
│   │   ├── app/            # router, providers, root layout
│   │   ├── components/ui/  # shadcn/ui primitives
│   │   ├── lib/            # shared utilities
│   │   ├── pages/          # routed pages + colocated *.module.css
│   │   ├── styles/         # single global stylesheet and tokens
│   │   └── test/           # Vitest setup
│   ├── components.json     # shadcn configuration
│   └── vite.config.ts      # Vite + Vitest config
└── pnpm-workspace.yaml
```

Imports use the `@/` alias for `ui/src`.

## CSS conventions

Styling is Tailwind 4 (CSS-first) plus CSS Modules for page/component styles.

- `src/styles/index.css` is the single global entry: Tailwind import, design
  tokens (`@theme`, `:root`, `.dark`), and base element styles.
- Co-locate bespoke styles as `Page.module.css` next to the page.
- Use CSS variables in module files (`var(--color-muted)`, `var(--spacing)`) rather
  than raw hex values or one-off pixels.
- Prefer React components over repeating long utility strings; avoid `@apply`
  outside small design-system primitives.
- Custom single-purpose utilities belong in `@utility` if you need variants.

```css
/* src/pages/PeoplePage.module.css */
.page {
  max-width: var(--container-5xl);
  margin-inline: auto;
  padding: calc(var(--spacing) * 6);
  color: var(--color-foreground);
}
```

Tailwind classes are sorted automatically by `prettier-plugin-tailwindcss`.

## Adding a page

1. Create the component in `ui/src/pages`.
2. Register a route in `ui/src/app/router.tsx`.

```tsx
// ui/src/pages/PeoplePage.tsx
export function PeoplePage() {
  return <main className="p-6">People</main>
}
```

```tsx
// ui/src/app/router.tsx
{ path: 'people', element: <PeoplePage /> }
```

Add shadcn components from `ui/`:

```bash
cd ui && pnpm dlx shadcn@latest add dialog
```

## Environment

Variables are read by Vite at build time and must be prefixed with `VITE_`.
Copy `ui/.env.example` to `ui/.env` and fill in the values when Supabase is
wired up:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## Tooling note

The `create-vite` template ships with **oxlint**, and it is kept here rather than
ESLint: `typescript-eslint` still caps its peer range below TypeScript 7.
Prettier handles formatting. Revisit ESLint once TypeScript 7 support lands.


