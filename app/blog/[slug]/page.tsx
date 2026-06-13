import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { formatDate, getPostBySlug, getRecentPosts, posts } from '@/lib/posts'
import { PostCard } from '@/components/post-card'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [{ url: post.cover }],
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const more = getRecentPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)

  return (
    <article className="mx-auto max-w-2xl px-5 py-12 sm:py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        All posts
      </Link>

      <header className="mt-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="font-medium text-primary">{post.category}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-3 text-balance font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
      </header>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg border border-border/60 bg-muted">
        <Image
          src={post.cover || '/placeholder.svg'}
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 672px"
          className="object-cover"
        />
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {post.content.map((block, i) => {
          if (block.type === 'h2') {
            return (
              <h2
                key={i}
                className="mt-4 font-heading text-2xl font-semibold tracking-tight"
              >
                {block.text}
              </h2>
            )
          }
          if (block.type === 'quote') {
            return (
              <blockquote
                key={i}
                className="border-l-2 border-primary pl-5 font-heading text-xl italic leading-relaxed text-foreground"
              >
                {block.text}
              </blockquote>
            )
          }
          return (
            <p key={i} className="text-pretty leading-[1.8] text-foreground/90">
              {block.text}
            </p>
          )
        })}
      </div>

      <div className="mt-14 border-t border-border/60 pt-8">
        <div className="flex items-center gap-4">
          <Image
            src="/dennis-portrait.png"
            alt="Dennis Gitau"
            width={48}
            height={48}
            className="size-12 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">Written by Dennis Gitau</p>
            <p className="text-sm text-muted-foreground">
              Developer, writer, and lifelong learner.
            </p>
          </div>
        </div>
      </div>

      {more.length > 0 && (
        <section className="mt-16">
          <h2 className="font-heading text-lg font-semibold tracking-tight">
            Keep reading
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
