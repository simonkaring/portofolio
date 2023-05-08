import type { Metadata } from 'next'
import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
} from 'components/icons'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Software Engineer with a passion for web evelopment and design.',
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I'm Simon. Most folks know me as <b>duq</b> online.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm a software engineer with a bachelors degree from the University of
          Southern Denmark. I'm currently searching for a full-time position,
          where I can use my skills to help build great products.
        </p>
        <hr />
        <p>
          I'm passionate about many creative pursuits, including music, building
          computers, making delicious coffee, and of course, coding. This
          combination of interests is what ultimately led me to my current role
          in building developer communities.
        </p>
        <p>
          I <b>love</b> building for the web. From something as simple as a
          single HTML file – all the way to Next.js applications and mobile
          applications.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/simonkaring"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
