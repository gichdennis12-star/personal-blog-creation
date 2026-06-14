import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How this website collects, uses, and protects your information.',
}

const sections = [
  {
    heading: 'Overview',
    paragraphs: [
      'This privacy policy explains how this website ("the site") handles information when you visit. The site is a personal blog operated by Dennis Gitau. I aim to collect as little data as possible and to be transparent about what is collected.',
    ],
  },
  {
    heading: 'Information collected',
    paragraphs: [
      'The site does not require you to create an account or submit personal information to read its content. If you contact me by email, I receive whatever information you choose to include in your message.',
      'Like most websites, basic technical information such as your browser type, device, and referring page may be recorded by aggregate analytics. This data is not used to identify you personally.',
    ],
  },
  {
    heading: 'Analytics',
    paragraphs: [
      'The site uses privacy-respecting, aggregate analytics to understand which articles are read and how the site performs. These analytics do not use invasive tracking cookies and do not build advertising profiles about you.',
    ],
  },
  {
    heading: 'Cookies',
    paragraphs: [
      'The site uses minimal cookies or local storage, primarily to remember your preferred color theme (light or dark mode). No advertising or third-party tracking cookies are set.',
    ],
  },
  {
    heading: 'Third-party links',
    paragraphs: [
      'Articles may link to external websites that are not operated by me. I am not responsible for the privacy practices of those sites and encourage you to review their policies.',
    ],
  },
  {
    heading: 'Your choices',
    paragraphs: [
      'You can block or delete cookies through your browser settings at any time. You may also reach out by email to ask any questions about how your information is handled.',
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      'If you have any questions about this privacy policy, you can reach me at hello@dennisgitau.dev.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16 sm:py-20">
      <header className="border-b border-border/60 pb-8">
        <h1 className="font-heading text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: June 13, 2026
        </p>
      </header>

      <div className="mt-10 flex flex-col gap-10">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-heading text-xl font-semibold tracking-tight">
              {section.heading}
            </h2>
            <div className="mt-3 flex flex-col gap-4">
              {section.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className="text-pretty leading-[1.8] text-foreground/90"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
