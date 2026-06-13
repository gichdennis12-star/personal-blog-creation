import type { Metadata } from 'next'
import { getRecentPosts } from '@/lib/posts'
import { PostCard } from '@/components/post-card'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Essays and notes on web development, technology, and personal growth by Dennis Gitau.',
}

export default function BlogPage() {
  const posts = getRecentPosts()

  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <header className="border-b border-border/60 pb-8">
        <h1 className="font-heading text-4xl font-semibold tracking-tight">
          Blog
        </h1>
        <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {posts.length} essays on web development, technology, and personal
          growth. No newsletters, no fluff — just things I find worth writing
          down.
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
