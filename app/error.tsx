'use client'
import Link from 'next/link'
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="max-w-[800px] mx-auto px-6 py-24 text-center">
    <h1 className="text-4xl font-bold text-primary mb-5">We couldn’t load this page</h1>
    <p className="text-lg text-on-surface-variant mb-8">Please try again, or contact our team for assistance.</p>
    <div className="flex flex-wrap gap-4 justify-center">
      <button type="button" onClick={reset} className="min-h-12 px-6 py-3 rounded-large bg-primary text-white">Try again</button>
      <Link href="/contact" className="inline-flex min-h-12 items-center px-6 py-3 text-primary underline">Contact us</Link>
    </div>
  </section>
}
