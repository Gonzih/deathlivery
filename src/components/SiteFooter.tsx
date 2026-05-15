export default function SiteFooter() {
  return (
    <footer className="relative bg-[#060606] border-t border-[#1A1A1A] py-12 px-8">
      {/* Grid overlay */}
      <div className="absolute inset-0 tactical-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: branding */}
          <div>
            <div className="font-display text-2xl text-[#E8E8E8] tracking-widest uppercase mb-1">
              DEATHLIVERY SYSTEMS
            </div>
            <div className="font-mono-tactical text-[#4A5240] text-xs tracking-[0.4em] uppercase">
              D3-GS PROGRAM — CLASSIFIED
            </div>
          </div>

          {/* Center: classification */}
          <div className="text-center">
            <div className="font-mono-tactical text-[#CC0000] text-xs tracking-widest animate-pulse-red">
              ██ TOP SECRET // SCI // NOFORN ██
            </div>
            <div className="font-mono-tactical text-[#1A1A1A] text-xs tracking-widest mt-1" style={{ color: '#333' }}>
              © {new Date().getFullYear()} DEATHLIVERY SYSTEMS INC. ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* Right: GitHub link */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono-tactical text-xs tracking-widest text-[#4A5240] hover:text-[#FF4500] transition-colors duration-200 border border-[#1A1A1A] hover:border-[#FF4500] px-4 py-2"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              SOURCE
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-[#1A1A1A] flex flex-wrap justify-center gap-8 font-mono-tactical text-xs tracking-widest text-[#333]">
          <span>FICTIONAL CONCEPT — FOR ENTERTAINMENT PURPOSES ONLY</span>
          <span>·</span>
          <span>NO ACTUAL WEAPONS SYSTEMS DEPICTED</span>
          <span>·</span>
          <span>D3-GS IS SCIENCE FICTION</span>
        </div>
      </div>
    </footer>
  )
}
