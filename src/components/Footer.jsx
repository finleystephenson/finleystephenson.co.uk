export default function Footer() {
  return (
    <footer className="relative z-10 max-w-2xl mx-auto px-6 py-16">
      <div
        className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px]"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          color: '#666',
        }}
      >
        <span className="font-mono">
          Built with{' '}
          <a
            href="https://claude.ai/code"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: '#8b6fd9' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#8b6fd9'}
          >
            Claude Code
          </a>
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://expanza.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: '#666' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a3a3a3'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
          >
            expanza.co.uk
          </a>
          <a
            href="https://demo.expanza.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: '#666' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a3a3a3'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
          >
            Demo
          </a>
          <a
            href="https://lab.expanza.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: '#666' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a3a3a3'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
          >
            AI Lab
          </a>
        </div>
        <span>&copy; {new Date().getFullYear()} Finley Stephenson</span>
      </div>
    </footer>
  )
}
