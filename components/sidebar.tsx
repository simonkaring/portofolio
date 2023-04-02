'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutGroup, motion } from 'framer-motion'

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/projects': {
    name: 'projects',
  },
  // "/blog": {
  //   name: "blog",
  // },
  // "/guestbook": {
  //   name: "guestbook",
  // },
}

{
  /* <svg width="97" height="48" viewBox="0 0 97 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.68 47.72C12.8133 47.72 10.84 47.4267 8.76 46.84C6.73333 46.3067 4.92 45.4 3.32 44.12C1.77333 42.84 0.733333 41.1333 0.2 39C0.146667 38.7333 0.0933334 38.44 0.0400002 38.12C0.0400002 37.8 0.0400002 37.48 0.0400002 37.16C0.0400002 35.5067 0.413333 33.9067 1.16 32.36C1.90667 30.8133 2.81333 29.64 3.88 28.84H3.96C4.06667 28.84 4.2 28.9733 4.36 29.24C4.57333 29.4533 4.57333 29.6133 4.36 29.72C3.82667 30.2533 3.42667 30.8667 3.16 31.56C2.94667 32.2 2.84 32.8933 2.84 33.64C2.84 34.6533 3 35.6933 3.32 36.76C3.69333 37.7733 4.14667 38.6533 4.68 39.4C6.01333 41.2667 7.85333 42.76 10.2 43.88C12.6 44.9467 14.9467 45.48 17.24 45.48C20.3867 45.48 22.8133 44.5467 24.52 42.68C26.28 40.8133 27.16 38.52 27.16 35.8C27.16 34.1467 26.84 32.4933 26.2 30.84C25.3467 28.5467 24.2 26.3067 22.76 24.12C21.3733 21.88 20.0933 19.6933 18.92 17.56C17.9067 15.64 17.4 13.6933 17.4 11.72C17.4 9.64 18.04 7.64 19.32 5.72C20.6 4.01333 22.28 2.65333 24.36 1.64C26.4933 0.57333 28.6533 0.0399971 30.84 0.0399971C32.3333 0.0399971 33.7733 0.306664 35.16 0.839996C36.5467 1.37333 37.8 2.25333 38.92 3.48C39.24 3.96 39.4 4.57333 39.4 5.32C39.4 6.38667 39.1867 7.21333 38.76 7.8C38.28 8.49333 37.7467 9.4 37.16 10.52C36.5733 11.64 36.2267 12.4133 36.12 12.84C36.0133 12.8933 35.7467 13 35.32 13.16C34.9467 13.2667 34.7067 13.24 34.6 13.08C34.8133 12.6533 35.1067 11.88 35.48 10.76C35.8533 9.64 36.04 8.62666 36.04 7.72C36.04 7.13333 36.0133 6.49333 35.96 5.8C35.96 5.05333 35.6133 4.41333 34.92 3.88C34.28 3.29333 33.4533 2.78666 32.44 2.36C31.4267 1.93333 30.2 1.72 28.76 1.72C25.8267 1.72 23.5867 2.57333 22.04 4.28C20.4933 5.98667 19.72 7.85333 19.72 9.88C19.72 10.8933 19.9333 11.9067 20.36 12.92C21.16 14.84 22.28 16.6533 23.72 18.36C25.16 20.0667 26.5733 21.8267 27.96 23.64C29.4 25.4 30.52 27.32 31.32 29.4C31.8533 30.7867 32.12 32.2 32.12 33.64C32.12 35.72 31.5867 37.6133 30.52 39.32C29.5067 41.0267 28.12 42.52 26.36 43.8C24.6533 45.0267 22.7867 45.9867 20.76 46.68C18.7333 47.3733 16.7067 47.72 14.68 47.72ZM33.5738 46.68C33.3604 46.68 33.2004 46.6267 33.0938 46.52C32.9337 46.4133 32.9071 46.3333 33.0137 46.28C34.2404 45.32 35.2538 44.36 36.0538 43.4C36.9071 42.44 37.7604 41.2133 38.6138 39.72L39.7338 37.8C40.8004 35.9867 42.0004 33.9067 43.3338 31.56C44.6671 29.2133 46.0004 26.84 47.3338 24.44C48.7204 22.04 49.9738 19.8267 51.0938 17.8C52.2671 15.7733 53.2004 14.1467 53.8938 12.92C54.5871 11.64 54.9338 11 54.9338 11C56.3738 8.49333 57.9471 6.6 59.6538 5.32C61.4138 3.98666 62.9604 3.13333 64.2938 2.76C60.4004 2.81333 56.9338 3.10667 53.8938 3.64C50.8538 4.17333 48.8004 5.42666 47.7338 7.4C47.5204 7.77333 47.3604 8.2 47.2538 8.68C47.2004 9.10667 47.1738 9.53333 47.1738 9.96C47.1738 11.3467 47.5471 12.3333 48.2938 12.92C48.3471 12.9733 48.3738 13.0267 48.3738 13.08C48.3738 13.1867 48.2671 13.2933 48.0538 13.4C47.8938 13.5067 47.7338 13.5333 47.5738 13.48C47.0938 13.2133 46.5071 12.5733 45.8138 11.56C45.1204 10.4933 44.6938 9.61333 44.5338 8.92C44.3738 8.28 44.2938 7.69333 44.2938 7.16C44.2938 5.72 44.8004 4.6 45.8138 3.8C46.8271 3 48.0538 2.44 49.4938 2.12C50.9871 1.8 52.5071 1.61333 54.0538 1.56C55.6004 1.50666 56.8804 1.48 57.8938 1.48H61.0938C62.1604 1.48 63.3071 1.48 64.5338 1.48C65.8138 1.42666 66.8804 1.32 67.7338 1.16H68.0538C68.3738 1.16 68.6138 1.26666 68.7738 1.48C68.9338 1.69333 69.0138 1.90667 69.0138 2.12C69.0138 2.54667 68.8271 2.76 68.4538 2.76C68.2404 2.76 68.0538 2.76 67.8938 2.76C67.7871 2.70666 67.6271 2.68 67.4138 2.68C64.9604 2.68 62.5071 4.81333 60.0538 9.08C60.0538 9.08 59.7604 9.56 59.1738 10.52C58.6404 11.4267 57.9471 12.6 57.0938 14.04C56.2938 15.48 55.4404 17 54.5338 18.6C53.6271 20.2 52.8271 21.64 52.1338 22.92C50.6938 25.5867 49.1471 28.4933 47.4938 31.64C45.8938 34.7333 44.2404 37.96 42.5338 41.32C42.1604 41.96 41.8404 42.7067 41.5738 43.56C41.3071 44.36 40.9071 44.76 40.3738 44.76C40.1604 44.76 39.8938 44.7333 39.5738 44.68C39.2538 44.6267 38.9071 44.6 38.5338 44.6C37.6271 44.6 36.8004 44.76 36.0538 45.08C35.3604 45.4 34.6404 45.9067 33.8938 46.6C33.8404 46.6533 33.7338 46.68 33.5738 46.68ZM68.4538 45.88C67.1204 45.88 65.7604 45.4533 64.3738 44.6C62.9871 43.6933 61.5738 42.3067 60.1338 40.44C58.4271 38.1467 56.9871 35.9333 55.8138 33.8C54.6404 31.6133 53.6804 29.72 52.9338 28.12C52.2404 26.52 51.7071 25.3733 51.3338 24.68C54.3204 21.9067 57.3871 19.4267 60.5338 17.24C63.7338 15.0533 66.9071 12.9733 70.0538 11C72.1871 9.72 74.4804 8.30666 76.9338 6.76C79.3871 5.16 81.8671 3.82667 84.3738 2.76C86.1338 2.01333 87.8404 1.64 89.4938 1.64C90.2404 1.64 90.9871 1.72 91.7338 1.88C92.4804 1.98667 93.2004 2.17333 93.8938 2.44C94.4271 2.6 95.0404 2.94666 95.7338 3.48C96.4271 3.96 96.7204 4.52 96.6138 5.16C96.6138 5.37333 96.5071 5.48 96.2938 5.48C96.0271 5.48 95.7871 5.32 95.5738 5C95.3604 4.68 95.0404 4.36 94.6138 4.04C94.1871 3.72 93.5204 3.56 92.6138 3.56C91.4404 3.56 90.1338 3.8 88.6938 4.28C87.3071 4.76 86.0804 5.21333 85.0138 5.64C82.8804 6.54667 80.6404 7.53333 78.2937 8.6C75.9471 9.66666 73.7338 10.7867 71.6538 11.96C69.7871 12.9733 67.8138 14.1467 65.7338 15.48C63.6538 16.8133 61.6271 18.1733 59.6538 19.56C57.7338 20.8933 56.0004 22.12 54.4538 23.24C54.7738 24.04 55.3071 25.24 56.0538 26.84C56.8004 28.44 57.7871 30.2533 59.0138 32.28C60.2404 34.2533 61.6804 36.2533 63.3338 38.28C64.5604 39.7733 65.7604 40.8667 66.9338 41.56C68.1604 42.2 69.3071 42.52 70.3738 42.52C71.8138 42.52 73.1471 42.12 74.3738 41.32C75.6538 40.4667 76.8538 39.4 77.9738 38.12C79.1471 36.84 80.2404 35.5333 81.2538 34.2C81.5204 33.88 81.7071 33.72 81.8138 33.72C82.0271 33.72 82.1338 33.8533 82.1338 34.12C82.1338 34.44 82.0004 34.76 81.7338 35.08C79.3871 38.3333 77.1204 40.9467 74.9338 42.92C72.8004 44.8933 70.6404 45.88 68.4538 45.88Z" fill="white"/>
</svg> */
}

function Logo() {
  return (
    <Link aria-label="Lee Robinson" href="/">
      <motion.svg
        className="text-black dark:text-white h-[25px] md:h-[37px]"
        width="25"
        height="37"
        viewBox="0 0 232 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M39 316V0"
          stroke="currentColor"
          strokeWidth={78}
        />
        <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M232 314.998H129.852L232 232.887V314.998Z"
          fill="currentColor"
        />
      </motion.svg>
    </Link>
  )
}

export default function Navbar() {
  let pathname = usePathname() || '/'
  if (pathname.includes('/blog/')) {
    pathname = '/blog'
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                )
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  )
}
