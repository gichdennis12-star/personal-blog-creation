import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/lib/posts'
import { formatDate } from '@/lib/posts'

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border/60 bg-muted">
          <Image
            src={post.cover || '/placeholder.svg'}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-medium text-primary">{post.category}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h3 className="mt-2 text-balance font-heading text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            {post.readingTime}
          </p>
        </div>
      </Link>
    </article>
  )
}
