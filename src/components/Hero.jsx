export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 hero-stagger">
        {/* Photo */}
        <div className="flex justify-center">
          <div
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden"
            style={{
              border: '2px solid rgba(139, 111, 217, 0.3)',
              boxShadow: '0 0 24px rgba(139, 111, 217, 0.15)',
            }}
          >
            <img
              src="/finley.jpg"
              alt="Finley Stephenson"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Status badge */}
        <div className="mt-6">
          <div className="status-badge">
            <span className="status-dot" />
            <span>17 years old. Founder of Expanza.</span>
          </div>
        </div>

        {/* Name */}
        <h1
          className="font-display font-[800] mt-6 mb-6"
          style={{
            fontSize: 'clamp(42px, 5vw, 72px)',
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            color: '#f5f5f5',
          }}
        >
          Finley Stephenson
        </h1>

        {/* One-liner */}
        <p
          className="text-[17px] leading-[1.7] max-w-xl mx-auto"
          style={{ color: '#a3a3a3' }}
        >
          I build AI systems that get businesses more clients.
        </p>

        {/* Location */}
        <p
          className="font-mono text-[12px] mt-6 uppercase tracking-[0.08em]"
          style={{ color: '#666' }}
        >
          Penrith, Cumbria, England
        </p>

        {/* Scroll hint */}
        <div
          className="mt-16"
          style={{ animation: 'scrollHint 2.5s ease-in-out infinite' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 4v12M4 12l6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  )
}
