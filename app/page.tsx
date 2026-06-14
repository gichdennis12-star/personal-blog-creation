import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getRecentPosts } from '@/lib/posts'
import { PostCard } from '@/components/post-card'

export default function HomePage() {
  const recent = getRecentPosts()
  const [featured, ...rest] = recent

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-5 pb-12 pt-16 sm:pt-24">
        <p className="font-mono text-sm text-primary">Hi, I&apos;m Dennis</p>
        <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          I write about building for the web and growing as a person.
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          A developer based in Nairobi exploring the intersection of clean code,
          thoughtful design, and a deliberate life. This is where I think out
          loud.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Read the blog
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            More about me
          </Link>
        </div>
      </section>

      {/* Recent posts */}
      <section className="mx-auto max-w-3xl px-5">
        <div className="flex items-end justify-between border-b border-border/60 pb-4">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            Recent writing
          </h2>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {featured && (
            <div className="sm:col-span-2">
              <PostCard post={featured} />
            </div>
          )}
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  )
}
