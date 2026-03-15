const links = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/finley-stephenson/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    primary: true,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/finleystephenson',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:finley@expanza.co.uk',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M22 7l-10 7L2 7"/>
      </svg>
    ),
  },
  {
    name: 'Expanza',
    url: 'https://expanza.co.uk',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
]

export default function Links() {
  return (
    <section className="relative z-10 max-w-2xl mx-auto px-6 py-24">
      <div className="section-label">Connect</div>

      <div className="stagger flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith('mailto') ? undefined : '_blank'}
            rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border transition-all duration-200"
            style={{
              background: link.primary ? 'rgba(139, 111, 217, 0.1)' : '#0a0a0a',
              borderColor: link.primary ? 'rgba(139, 111, 217, 0.2)' : 'rgba(255, 255, 255, 0.06)',
              color: link.primary ? '#c4b5fd' : '#a3a3a3',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(139, 111, 217, 0.3)'
              e.currentTarget.style.boxShadow = '0 0 16px rgba(139, 111, 217, 0.08)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = link.primary ? 'rgba(139, 111, 217, 0.2)' : 'rgba(255, 255, 255, 0.06)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'none'
            }}
          >
            <span style={{ color: link.primary ? '#8b6fd9' : '#666' }}>
              {link.icon}
            </span>
            <span className="text-[14px] font-[500]">{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
