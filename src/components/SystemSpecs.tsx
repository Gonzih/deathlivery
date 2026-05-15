const specs = [
  {
    code: 'PLT-01',
    label: 'PLATFORM',
    value: 'D3-GS Tractor Base',
    detail: 'Armored, all-terrain treads. Low-profile chassis rated for direct-fire survivability. 14-ton combat weight.',
    icon: '⬡',
  },
  {
    code: 'ARM-02',
    label: 'ARMAMENT',
    value: 'Dual M134 Minigun Config',
    detail: '6,000 RPM each. Independently traversing turrets. 360° coverage radius. Autonomous target acquisition.',
    icon: '⊕',
  },
  {
    code: 'DEP-03',
    label: 'DEPLOYMENT',
    value: 'ISO Container Pack',
    detail: '3–4 units per standard 20ft ISO container. Compatible with all cargo aircraft. Zero-footprint logistics.',
    icon: '◫',
  },
  {
    code: 'AIR-04',
    label: 'AIR-DROP',
    value: 'Autonomous Parachute System',
    detail: 'Each unit deploys independent parachute from container breach. Auto-orient, terrain-aware landing sequence.',
    icon: '▽',
  },
  {
    code: 'RCN-05',
    label: 'RECON',
    value: 'Micro-UAV Swarm',
    detail: 'Integrated 8-unit autonomous drone swarm. Terrain mapping, target designation, perimeter surveillance.',
    icon: '◈',
  },
  {
    code: 'COV-06',
    label: 'COMBAT RADIUS',
    value: 'Grid-Pattern Coverage',
    detail: 'Coordinated multi-unit fire suppression. Algorithmic grid sweep. Zero autonomous fire gap in coverage zone.',
    icon: '▦',
  },
]

export default function SystemSpecs() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 px-8">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF4500] to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="font-mono-tactical text-[#FF4500] text-xs tracking-[0.5em] mb-3 uppercase">
            DOCUMENT REF: D3-GS/TECH/001-A
          </div>
          <h2 className="font-display text-5xl text-[#E8E8E8] tracking-widest uppercase mb-4">
            System Specifications
          </h2>
          <div className="h-px w-48 bg-[#FF4500]" />
        </div>

        {/* Spec grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specs.map((spec) => (
            <div
              key={spec.code}
              className="relative border border-[#1A1A1A] bg-[#0D0D0D] p-6 group hover:border-[#FF4500] transition-colors duration-300"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-px bg-[#FF4500] opacity-30 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Code */}
              <div className="font-mono-tactical text-[#4A5240] text-xs tracking-[0.4em] mb-4">
                {spec.code}
              </div>

              {/* Icon + label */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#FF4500] text-2xl font-mono">{spec.icon}</span>
                <span className="font-mono-tactical text-[#FF4500] text-xs tracking-[0.3em] uppercase">
                  {spec.label}
                </span>
              </div>

              {/* Value */}
              <div className="font-display text-xl text-[#E8E8E8] tracking-wide mb-3 uppercase">
                {spec.value}
              </div>

              {/* Detail */}
              <p className="font-mono-tactical text-[#4A5240] text-xs leading-relaxed tracking-wider">
                {spec.detail}
              </p>

              {/* Corner bracket */}
              <div className="absolute bottom-3 right-3 w-4 h-4 hud-bracket-br text-[#1A1A1A] group-hover:text-[#FF4500] transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Classification bar */}
        <div className="mt-12 border border-[#CC0000] border-opacity-30 px-6 py-3 flex items-center justify-between">
          <span className="font-mono-tactical text-[#CC0000] text-xs tracking-widest">
            ⚠ TECHNICAL DATA — EXPORT CONTROLLED — ITAR/EAR RESTRICTED
          </span>
          <span className="font-mono-tactical text-[#4A5240] text-xs tracking-widest">
            REV: 2.4.1
          </span>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A1A1A] to-transparent" />
    </section>
  )
}
