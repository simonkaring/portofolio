import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Playground',
  description: 'A playground for testing new features',
}

export default function PlaygroundPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Playground</h1>
    </section>
  )
}
