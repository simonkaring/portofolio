import type { Metadata } from 'next'
import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
} from 'components/icons'

export const metadata: Metadata = {
  title: 'Playground',
  description: 'VP of Developer Experience at Vercel.',
}

export default function PlaygroundPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Playground</h1>
    </section>
  )
}
