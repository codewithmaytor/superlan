import Link from 'next/link'
export default function NotFound() {
  return <section className="max-w-[800px] mx-auto px-6 py-24 text-center">
    <p className="text-sm font-bold text-on-secondary-container mb-4">404</p>
    <h1 className="text-4xl font-bold text-primary mb-5">Page not found</h1>
    <p className="text-lg text-on-surface-variant mb-8">The page may have moved, or the address may be incomplete.</p>
    <Link href="/" className="inline-flex min-h-12 items-center px-6 py-3 rounded-large bg-primary text-white">Back to home</Link>
  </section>
}
