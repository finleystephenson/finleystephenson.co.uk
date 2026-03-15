const milestones = [
  {
    date: '2024',
    title: 'Started learning',
    description: 'Got into AI, automation, and business while doing GCSEs. Spent every spare hour developing skills and figuring out how things actually work.',
  },
  {
    date: 'Early 2025',
    title: 'Founded Expanza',
    description: 'Started offering AI automation to local businesses in Cumbria. First conversations, first mistakes, first lessons in selling.',
  },
  {
    date: 'May 2025',
    title: 'Signed first client',
    description: 'PrecisionHR. A secure client portal with an AI-powered HR chatbot trained on 200+ legal sources. Still live, still growing.',
  },
  {
    date: 'Late 2025',
    title: 'Built ExpanzaOS',
    description: 'Built my own AI sales operating system to run Expanza. Prospecting, outreach, pipeline, accountability. Then realised this is the product.',
  },
  {
    date: 'Mar 2026',
    title: 'Repositioned around client acquisition',
    description: '"I build AI systems that get you more clients." Bundled pricing, live demo site, and a clear offer. Pipeline growing, calls booked, deals in progress.',
  },
  {
    date: 'Now',
    title: 'Learning by doing',
    description: '17, running a business, sitting A-levels, and figuring it out one conversation at a time. Every call teaches me something no textbook could.',
    current: true,
  },
]

export default function Timeline() {
  return (
    <section className="relative z-10 max-w-2xl mx-auto px-6 py-24">
      <div className="section-label">The story so far</div>

      <div className="space-y-0">
        {milestones.map((milestone, i) => (
          <div key={i} className="relative flex gap-5">
            {/* Vertical line + dot */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                style={{
                  background: milestone.current ? '#8b6fd9' : '#333',
                  boxShadow: milestone.current ? '0 0 10px rgba(139, 111, 217, 0.4)' : 'none',
                }}
              />
              {i < milestones.length - 1 && (
                <div
                  className="w-px flex-1 my-1"
                  style={{ background: 'rgba(255, 255, 255, 0.06)' }}
                />
              )}
            </div>

            {/* Content */}
            <div className="pb-8">
              <span
                className="font-mono text-[11px] uppercase tracking-[0.08em]"
                style={{ color: milestone.current ? '#8b6fd9' : '#666' }}
              >
                {milestone.date}
              </span>
              <h3
                className="font-display font-[600] text-[16px] mt-1 mb-1.5"
                style={{ color: '#f5f5f5' }}
              >
                {milestone.title}
              </h3>
              <p className="text-[14px] leading-[1.7]" style={{ color: '#a3a3a3' }}>
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
