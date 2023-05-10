import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Playground',
  description: 'A playground for testing new features',
}

export default function PlaygroundPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Playground</h1>
      {/* <p className="my-5 text-neutral-800 dark:text-neutral-200">Stuff</p> */}
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>Multiplayer forms</p>
      </div>
    </section>
  )
}
