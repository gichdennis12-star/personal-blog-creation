export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  category: 'Web Development' | 'Technology' | 'Personal Growth'
  cover: string
  /** Array of paragraphs and headings that make up the body. */
  content: { type: 'p' | 'h2' | 'quote'; text: string }[]
}

export const posts: Post[] = [
  {
    slug: 'building-fast-websites-in-2026',
    title: 'Building Genuinely Fast Websites in 2026',
    excerpt:
      'Performance is a feature. Here is how I think about speed budgets, the network, and the small decisions that compound into a fast experience.',
    date: '2026-05-28',
    readingTime: '8 min read',
    category: 'Web Development',
    cover: '/posts/web-performance.png',
    content: [
      {
        type: 'p',
        text: 'Every year the web gets heavier, and every year users get less patient. The two trends are on a collision course, and the only way out is to treat performance as a first-class feature rather than an afterthought you sprinkle on at the end of a project.',
      },
      {
        type: 'h2',
        text: 'Start with a budget, not a benchmark',
      },
      {
        type: 'p',
        text: 'Before writing a line of code, I decide what "fast" means for the project. A marketing page and a data-heavy dashboard have wildly different constraints. I set a budget for total JavaScript, largest contentful paint, and interaction latency, then hold every feature against it. A budget turns vague aspirations into a number you can defend in a code review.',
      },
      {
        type: 'quote',
        text: 'Speed is the result of a thousand small decisions, not one heroic optimization at the end.',
      },
      {
        type: 'h2',
        text: 'Ship less JavaScript',
      },
      {
        type: 'p',
        text: 'The cheapest request is the one you never make. Server components, static rendering, and progressive enhancement let me send markup that is useful before any script runs. When I do need interactivity, I reach for it surgically rather than hydrating the entire page by default.',
      },
      {
        type: 'p',
        text: 'The web platform has quietly grown powerful enough that many things we once reached for libraries to do — dialogs, lazy loading, smooth scrolling — are now native. Leaning on the platform keeps bundles small and behavior predictable.',
      },
      {
        type: 'h2',
        text: 'Measure on real devices',
      },
      {
        type: 'p',
        text: 'Your laptop on office wifi is a fantasy. I test on a mid-range phone over a throttled connection, because that is where most of the world actually lives. The gap between a synthetic lab score and the experience of a real user is where good intentions quietly go to die.',
      },
    ],
  },
  {
    slug: 'react-patterns-that-aged-well',
    title: 'React Patterns That Aged Well',
    excerpt:
      'After years of churn, a handful of component patterns have proven durable. These are the ones I still reach for on every project.',
    date: '2026-04-15',
    readingTime: '7 min read',
    category: 'Web Development',
    cover: '/posts/react-patterns.png',
    content: [
      {
        type: 'p',
        text: 'React has gone through more paradigm shifts than almost any tool I use. Mixins, higher-order components, render props, hooks, server components — the landscape never stops moving. But underneath the churn, a few patterns have proven genuinely durable.',
      },
      {
        type: 'h2',
        text: 'Composition over configuration',
      },
      {
        type: 'p',
        text: 'The components I am happiest with years later are the ones that accept children rather than a dozen boolean props. A flexible layout that composes small pieces will outlive a rigid component with a sprawling configuration API every single time.',
      },
      {
        type: 'h2',
        text: 'Keep state close to where it is used',
      },
      {
        type: 'p',
        text: 'Premature global state is one of the most common sources of complexity I encounter. Lifting state only as far as it genuinely needs to go keeps components easy to reason about and easy to delete. Deletability is an underrated quality in software.',
      },
      {
        type: 'quote',
        text: 'The best abstraction is often the one you did not write.',
      },
      {
        type: 'p',
        text: 'Whenever I feel the urge to build a clever generic abstraction, I wait until I have three real use cases. More often than not, the duplication I was so eager to eliminate turns out to be three subtly different things that should never have shared code in the first place.',
      },
    ],
  },
  {
    slug: 'the-quiet-power-of-deep-work',
    title: 'The Quiet Power of Deep Work',
    excerpt:
      'In a world optimized for interruption, the ability to concentrate has become a rare and valuable skill. Here is how I protect mine.',
    date: '2026-03-02',
    readingTime: '6 min read',
    category: 'Personal Growth',
    cover: '/posts/deep-work.png',
    content: [
      {
        type: 'p',
        text: 'The most meaningful work I have ever done happened in long, uninterrupted stretches of focus. Yet almost everything about modern work seems engineered to make those stretches impossible. Reclaiming them has become one of the most important habits in my life.',
      },
      {
        type: 'h2',
        text: 'Attention is a finite resource',
      },
      {
        type: 'p',
        text: 'I used to treat my attention as infinite and my calendar as the scarce thing. I had it backwards. Time is renewable in a way that focus is not. A fragmented day full of meetings can leave me more drained than a long day of hard, continuous thinking.',
      },
      {
        type: 'quote',
        text: 'You do not rise to the level of your goals; you fall to the level of your systems.',
      },
      {
        type: 'h2',
        text: 'Make focus the default',
      },
      {
        type: 'p',
        text: 'Willpower is unreliable, so I changed my environment instead. Notifications off by default. Phone in another room. A specific block on the calendar that everyone knows is sacred. The goal is to make the focused choice the easy one and the distracted choice require effort.',
      },
      {
        type: 'p',
        text: 'None of this is about productivity for its own sake. Deep work is how I do the things I am proud of, and protecting it is really about protecting the part of my life that feels most like mine.',
      },
    ],
  },
  {
    slug: 'why-i-still-bet-on-typescript',
    title: 'Why I Still Bet on TypeScript',
    excerpt:
      'Types are not bureaucracy. They are a conversation with your future self. A practical case for typing your code.',
    date: '2026-02-10',
    readingTime: '5 min read',
    category: 'Technology',
    cover: '/posts/typescript.png',
    content: [
      {
        type: 'p',
        text: 'There is a recurring argument that types slow you down, that they are ceremony standing between you and shipping. I understand the appeal of that idea, and I think it is mostly wrong. Types are not bureaucracy. They are a conversation with your future self.',
      },
      {
        type: 'h2',
        text: 'Errors you never have to debug',
      },
      {
        type: 'p',
        text: 'The bugs a type system catches are the ones that never make it to production, never wake you up at night, and never cost a user their trust. A red squiggle in your editor is infinitely cheaper than an incident report.',
      },
      {
        type: 'quote',
        text: 'Good types document intent in a way comments never can, because they cannot drift out of date.',
      },
      {
        type: 'h2',
        text: 'Types as design tool',
      },
      {
        type: 'p',
        text: 'I increasingly model a problem in types before I write any logic. Describing the shape of valid states forces me to confront edge cases early, while they are cheap to handle. By the time the implementation arrives, half the hard thinking is already done.',
      },
      {
        type: 'p',
        text: 'Used well, TypeScript fades into the background. It is not there to impress anyone. It is there so that six months from now, a tired version of me can change the code with confidence.',
      },
    ],
  },
  {
    slug: 'learning-in-public',
    title: 'Learning in Public, One Year Later',
    excerpt:
      'Sharing unfinished work felt terrifying. A year of doing it anyway taught me more than any course ever did.',
    date: '2026-01-18',
    readingTime: '6 min read',
    category: 'Personal Growth',
    cover: '/posts/learning.png',
    content: [
      {
        type: 'p',
        text: 'A year ago I made a quiet commitment to share what I was learning before I felt ready. Half-finished projects, rough notes, things I had gotten wrong. It felt deeply uncomfortable, and it turned out to be one of the best decisions I have made for my growth.',
      },
      {
        type: 'h2',
        text: 'Perfectionism is procrastination in a nicer outfit',
      },
      {
        type: 'p',
        text: 'For years I told myself I would publish once things were polished. That day never came, because "polished" is a moving target that retreats every time you approach it. Shipping rough work broke the spell. The feedback I got was kinder and more useful than the criticism I had imagined.',
      },
      {
        type: 'quote',
        text: 'The work you are slightly embarrassed by today is the work that teaches you the most.',
      },
      {
        type: 'h2',
        text: 'Teaching is the fastest way to learn',
      },
      {
        type: 'p',
        text: 'Explaining an idea to someone else ruthlessly exposes the parts you only think you understand. Every post I wrote forced me to close gaps I would otherwise have stepped around. The audience, however small, was really a tool for finding the holes in my own thinking.',
      },
      {
        type: 'p',
        text: 'If you are waiting until you are an expert to share anything, you will wait forever. Start now, in public, slightly underprepared. That is where the learning actually happens.',
      },
    ],
  },
]

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}

export function getRecentPosts(count?: number) {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
  return typeof count === 'number' ? sorted.slice(0, count) : sorted
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
