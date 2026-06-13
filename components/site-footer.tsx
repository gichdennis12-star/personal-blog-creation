import Link from 'next/link'
import { Mail } from 'lucide-react'
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/components/brand-icons'

const socials = [
  { href: 'https://github.com/dennisgitau', label: 'GitHub', icon: GithubIcon },
  {
    href: 'https://twitter.com/dennisgitau',
    label: 'Twitter / X',
    icon: TwitterIcon,
  },
  {
    href: 'https://linkedin.com/in/dennisgitau',
    label: 'LinkedIn',
    icon: LinkedinIcon,
  },
  { href: 'mailto:hello@dennisgitau.dev', label: 'Email', icon: Mail },
]

const links = [
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/privacy', label: 'Privacy Policy' },
]

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-24 border-t border-border/60 bg-secondary/30"
    >
      <div className="mx-auto max-w-3xl px-5 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="font-heading text-base font-semibold">Dennis Gitau</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Writing about web development, technology, and the long game of
              personal growth. Have a question or just want to say hello?
            </p>
            <a
              href="mailto:hello@dennisgitau.dev"
              className="mt-3 inline-block text-sm text-primary underline-offset-4 hover:underline"
            >
              hello@dennisgitau.dev
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Explore
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dennis Gitau. All rights reserved.
          </p>
          <ul className="flex items-center gap-1">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}
