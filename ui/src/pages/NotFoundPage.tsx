import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-heading text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        <Link to="/" className="underline underline-offset-4">
          Back home
        </Link>
      </p>
    </main>
  )
}
