# Family Tree — UI

React single-page app for the family tree. Vite + React 19 + TypeScript, styled
with Tailwind CSS 4 and shadcn/ui.

Run it from the repo root with `pnpm dev`, or from this folder with
`pnpm --filter @family-tree/ui dev`.

```bash
pnpm dev        # dev server with HMR
pnpm build      # typecheck + production build
pnpm test       # unit tests (Vitest)
pnpm lint       # oxlint
pnpm format     # Prettier
```

Source layout:

```
src/
  app/          # router, providers, root layout
  components/   # shadcn/ui primitives
  lib/          # shared utilities
  pages/        # routed pages + colocated *.module.css
  styles/       # single global stylesheet and tokens
  test/         # Vitest setup
```

Global styles and design tokens live in `src/styles/index.css`; page-specific
CSS belongs in a co-located CSS Module.

Add pages in `src/pages` and register them in `src/app/router.tsx`. Add shadcn
components from this folder:

```bash
pnpm dlx shadcn@latest add dialog
```

See the root `README.md` for the full project setup.
