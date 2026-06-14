import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Dennis Gitau is a developer and writer based in Nairobi, writing about the web, technology, and personal growth.',
}

const focusAreas = [
  {
    title: 'Web Development',
    body: 'Building fast, accessible interfaces with React, TypeScript, and the modern web platform.',
  },
  {
    title: 'Technology',
    body: 'Following the tools and ideas reshaping how we build software, and separating signal from hype.',
  },
  {
    title: 'Personal Growth',
    body: 'Thinking out loud about focus, habits, and doing meaningful work over the long term.',
  },
]

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16 sm:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <Image
          src="/dennis-portrait.png"
          alt="Dennis Gitau"
          width={96}
          height={96}
          className="size-24 rounded-full border border-border object-cover"
          priority
        />
        <div>
          <h1 className="font-heading text-4xl font-semibold tracking-tight">
            About Dennis
          </h1>
          <p className="mt-2 text-muted-foreground">
            Developer & writer, Nairobi, Kenya
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-5 text-pretty leading-[1.8] text-foreground/90">
        <p>
          I&apos;m Dennis Gitau, a software developer who has spent the better
          part of a decade building things for the web. I care about software
          that feels fast, looks honest, and respects the people using it.
        </p>
        <p>
          My day-to-day revolves around front-end engineering — React,
          TypeScript, and the design systems that hold products together. But
          I&apos;ve always believed the best engineers are also clear writers,
          which is what pulled me toward keeping this blog.
        </p>
        <p>
          Outside of code, I&apos;m endlessly curious about how people do their
          best work: the habits, the focus, and the small systems that compound
          over years. A fair amount of what I write here lives at that
          intersection of craft and life.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="font-heading text-xl font-semibold tracking-tight">
          What I write about
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-lg border border-border/60 bg-card p-5"
            >
              <h3 className="font-heading text-base font-semibold">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {area.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-lg border border-border/60 bg-secondary/40 p-6">
        <h2 className="font-heading text-lg font-semibold tracking-tight">
          Let&apos;s connect
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          I&apos;m always happy to hear from readers — whether you have a
          question, a disagreement, or just want to say hi.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="mailto:hello@dennisgitau.dev"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Send an email
          </a>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Read the blog
          </Link>
        </div>
      </div>
    </section>
  )
}
