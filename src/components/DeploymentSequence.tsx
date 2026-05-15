const steps = [
  {
    num: '01',
    phase: 'LOAD',
    title: 'Container Pack',
    desc: 'D3-GS units folded and secured inside standard 20ft ISO container. 3–4 units per container with onboard power cells charged.',
    status: 'READY',
  },
  {
    num: '02',
    phase: 'LIFT',
    title: 'Aircraft Transit',
    desc: 'Container loaded on any cargo aircraft — C-130, C-17, An-124. Units in standby mode. Self-diagnostics running at 30s intervals.',
    status: 'TRANSIT',
  },
  {
    num: '03',
    phase: 'DROP',
    title: 'Container Release',
    desc: 'Container released at designated target coordinates. Altitude: 2,000–8,000ft AGL. GNSS/INS guidance active.',
    status: 'FREEFALL',
  },
  {
    num: '04',
    phase: 'BREACH',
    title: 'Structural Separation',
    desc: 'Container shell fractures along pre-scored panels at programmed altitude. Units exposed to open air — 0.8s separation sequence.',
    status: 'BREACH',
  },
  {
    num: '05',
    phase: 'DEPLOY',
    title: 'Autonomous Descent',
    desc: 'Each unit autonomously deploys ballistic parachute. Independent descent trajectories calculated to prevent mid-air collision.',
    status: 'DESCENT',
  },
  {
    num: '06',
    phase: 'SCOUT',
    title: 'UAV Swarm Launch',
    desc: 'On touchdown, micro-UAV swarm deploys within 12 seconds. Terrain mapping, threat identification, perimeter establishment begins.',
    status: 'SCOUTING',
  },
  {
    num: '07',
    phase: 'ENGAGE',
    title: 'Combat Operations',
    desc: 'Units execute algorithmic grid-sweep pattern. Coordinated suppression fire. No human operator required for target engagement.',
    status: 'HOT',
  },
]

export default function DeploymentSequence() {
  return (
    <section className="relative bg-[#080808] py-24 px-8">
      {/* Tactical grid background */}
      <div className="absolute inset-0 tactical-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="font-mono-tactical text-[#FF4500] text-xs tracking-[0.5em] mb-3 uppercase">
            OPS REF: D3-GS/DEPLOY/007
          </div>
          <h2 className="font-display text-5xl text-[#E8E8E8] tracking-widest uppercase mb-4">
            Deployment Sequence
          </h2>
          <div className="h-px w-48 bg-[#FF4500]" />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[2.75rem] top-8 bottom-8 w-px bg-gradient-to-b from-[#FF4500] via-[#CC0000] to-[#4A5240] opacity-30 hidden md:block" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative flex gap-6 group"
              >
                {/* Step number circle */}
                <div className="flex-shrink-0 w-22 flex flex-col items-center">
                  <div className="w-14 h-14 border border-[#FF4500] border-opacity-50 flex items-center justify-center bg-[#0A0A0A] group-hover:border-opacity-100 transition-all duration-300 relative z-10">
                    <span className="font-display text-lg text-[#FF4500] tracking-wider">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 border border-[#1A1A1A] bg-[#0A0A0A] p-5 group-hover:border-[#FF4500] group-hover:border-opacity-40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <div className="flex items-center gap-4">
                      <span className="font-mono-tactical text-[#FF4500] text-xs tracking-[0.4em] uppercase">
                        PHASE {step.phase}
                      </span>
                      <span className="font-display text-xl text-[#E8E8E8] tracking-wide uppercase">
                        {step.title}
                      </span>
                    </div>
                    <span
                      className={`font-mono-tactical text-xs tracking-widest px-3 py-1 border ${
                        i === 6
                          ? 'border-[#CC0000] text-[#CC0000] animate-pulse-red'
                          : 'border-[#4A5240] text-[#4A5240]'
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>
                  <p className="font-mono-tactical text-[#4A5240] text-xs leading-relaxed tracking-wider">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engage warning */}
        <div className="mt-12 border border-[#CC0000] bg-[#CC0000] bg-opacity-5 p-6 flex items-center gap-6">
          <div className="text-[#CC0000] text-3xl font-mono">⚠</div>
          <div>
            <div className="font-display text-[#CC0000] text-lg tracking-widest uppercase mb-1">
              Autonomous Engagement Active
            </div>
            <div className="font-mono-tactical text-[#4A5240] text-xs tracking-wider">
              D3-GS units operate under autonomous Rules of Engagement. No human-in-the-loop required after ENGAGE phase activation. All engagements logged to encrypted black-box recorder.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
