const featured = [
  {
    title: 'Expanza',
    description: 'AI client acquisition systems for UK businesses. Bespoke builds that find prospects, write outreach, and manage pipeline.',
    url: 'https://expanza.co.uk',
    label: 'Company',
  },
  {
    title: 'ExpanzaOS',
    description: '44-command AI sales operating system. Built it to run my own pipeline, now I build them for clients.',
    url: 'https://demo.expanza.co.uk',
    label: 'Live demo',
  },
  {
    title: 'AI Client Portal',
    description: 'Secure portals with AI chatbots trained on a client\'s own documents. Policy lookups, compliance queries, self-service for their customers.',
    label: 'Delivered',
  },
  {
    title: 'AI Interview Analyst',
    description: 'Turns meeting transcripts and CVs into structured candidate profiles. Built for a recruitment agency to cut hours of manual screening.',
    label: 'Delivered',
  },
  {
    title: 'Expanza AI Lab',
    description: 'Free AI tools for businesses. Outreach drafting, prompt testing, and AI readiness scoring.',
    url: 'https://lab.expanza.co.uk',
    label: 'Tools',
  },
]

const openSource = [
  {
    title: 'Lead X-Ray',
    description: 'Scan any website for tech stack, SEO health, contact info, and social links.',
    url: 'https://github.com/finleystephenson/lead-xray',
    label: 'Open source',
  },
  {
    title: 'Site Audit',
    description: 'Multi-page website audit. Tech stack, broken links, sitemap, robots.txt, and an overall score.',
    url: 'https://github.com/finleystephenson/site-audit',
    label: 'Open source',
  },
  {
    title: 'Cold Email Gen',
    description: 'Enter a company, what they do, and your offer. Get 3 cold emails with different angles.',
    url: 'https://github.com/finleystephenson/cold-email-gen',
    label: 'Open source',
  },
  {
    title: 'Meeting Notes',
    description: 'Paste or pipe meeting notes, get structured summary with decisions, actions, and follow-ups.',
    url: 'https://github.com/finleystephenson/meeting-notes',
    label: 'Open source',
  },
  {
    title: 'Tiny CRM',
    description: 'Dead-simple CRM in the terminal. Add contacts, log interactions, set follow-ups, view pipeline.',
    url: 'https://github.com/finleystephenson/tiny-crm',
    label: 'Open source',
  },
  {
    title: 'Gizmo',
    description: 'AI flashcard generator. Spaced repetition, progress tracking, and topic generation.',
    url: 'https://github.com/finleystephenson/gizmo-lite',
    label: 'Open source',
  },
]

function ProjectCard({ project }) {
  const Tag = project.url ? 'a' : 'div'
  const linkProps = project.url
    ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Tag
      {...linkProps}
      className="block p-6 rounded-xl border transition-all duration-200"
      style={{
        background: '#0a0a0a',
        borderColor: 'rgba(255, 255, 255, 0.06)',
        cursor: project.url ? 'pointer' : 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(139, 111, 217, 0.3)'
        e.currentTarget.style.boxShadow = '0 0 20px rgba(139, 111, 217, 0.08)'
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'none'
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-display font-[700] text-[18px] text-[#f5f5f5]">
              {project.title}
            </h3>
            <span
              className="font-mono text-[10px] uppercase tracking-[0.08em] px-2 py-0.5 rounded-full whitespace-nowrap"
              style={{
                color: '#8b6fd9',
                background: 'rgba(139, 111, 217, 0.1)',
                border: '1px solid rgba(139, 111, 217, 0.15)',
              }}
            >
              {project.label}
            </span>
          </div>
          <p className="text-[14px] leading-[1.7]" style={{ color: '#a3a3a3' }}>
            {project.description}
          </p>
        </div>
        {project.url && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="#666"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0 mt-1"
          >
            <path d="M4 12L12 4M12 4H6M12 4v6" />
          </svg>
        )}
      </div>
    </Tag>
  )
}

export default function Work() {
  return (
    <section className="relative z-10 max-w-2xl mx-auto px-6 py-24">
      <div className="section-label">What I've built</div>

      <div className="stagger space-y-4">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="section-label mt-16">Open source</div>

      <div className="stagger grid grid-cols-1 sm:grid-cols-2 gap-4">
        {openSource.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
