import type { Metadata } from 'next'
import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
} from 'components/icons'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects I have worked on',
}

export default function ProjectPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Projects</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        This page is a showcase of projects I have worked on, both personal and
        from school.
      </p>
    </section>
  )
}
