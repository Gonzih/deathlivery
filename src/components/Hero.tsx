export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A0A0A]">
      {/* Tactical grid */}
      <div className="absolute inset-0 tactical-grid opacity-60" />

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-40 z-10" />

      {/* HUD corner brackets */}
      <div className="absolute top-6 left-6 w-12 h-12 hud-bracket-tl text-[#FF4500] z-20" />
      <div className="absolute top-6 right-6 w-12 h-12 hud-bracket-tr text-[#FF4500] z-20" />
      <div className="absolute bottom-6 left-6 w-12 h-12 hud-bracket-bl text-[#FF4500] z-20" />
      <div className="absolute bottom-6 right-6 w-12 h-12 hud-bracket-br text-[#FF4500] z-20" />

      {/* HUD coordinates */}
      <div className="absolute top-8 left-20 font-mono-tactical text-xs text-[#4A5240] z-20 tracking-widest">
        COORD: 34°01′N 118°24′W
      </div>
      <div className="absolute top-8 right-20 font-mono-tactical text-xs text-[#4A5240] z-20 tracking-widest text-right">
        SYS: ONLINE · ARMED
      </div>
      <div className="absolute bottom-8 left-20 font-mono-tactical text-xs text-[#4A5240] z-20 tracking-widest">
        UNIT-ID: D3-GS-001-004
      </div>
      <div className="absolute bottom-8 right-20 font-mono-tactical text-xs text-[#4A5240] z-20 tracking-widest text-right">
        STATUS: AUTONOMOUS
      </div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-1 px-8 py-24 text-center">
        {/* System designation */}
        <div className="font-mono-tactical text-[#FF4500] text-sm tracking-[0.4em] mb-6 uppercase">
          CLASSIFIED · LEVEL-5 CLEARANCE REQUIRED
        </div>

        {/* Main title */}
        <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-none tracking-wider text-[#E8E8E8] mb-4 uppercase">
          DEATHLIVERY
        </h1>

        {/* Cursor blink */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="font-mono-tactical text-[#FF4500] text-lg tracking-widest">
            D3-GS AUTONOMOUS GROUND COMBAT SYSTEM
          </span>
          <span className="inline-block w-3 h-5 bg-[#FF4500] animate-blink" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 font-mono-tactical text-xs tracking-[0.3em] text-[#4A5240]">
          <span className="border border-[#4A5240] px-4 py-1">AIR-DEPLOYABLE</span>
          <span className="border border-[#4A5240] px-4 py-1">AUTONOMOUS</span>
          <span className="border border-[#4A5240] px-4 py-1">OVERWHELMING FORCE</span>
        </div>

        {/* Video placeholder */}
        <div
          id="system-demo-video"
          className="relative w-full max-w-4xl border border-[#FF4500] border-opacity-40 bg-black overflow-hidden"
          style={{ aspectRatio: '16/9' }}
        >
          {/* Scanlines on video */}
          <div className="absolute inset-0 scanlines opacity-60 z-10" />

          {/* CLASSIFIED overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <div className="font-display text-[#CC0000] text-4xl tracking-widest mb-4">
              ██ CLASSIFIED ██
            </div>
            <div className="font-mono-tactical text-[#4A5240] text-xs tracking-widest mb-2">
              D3-GS COMBAT FOOTAGE — RESTRICTED ACCESS
            </div>
            <div className="font-mono-tactical text-[#4A5240] text-xs tracking-widest">
              AUTHORIZATION CODE REQUIRED FOR PLAYBACK
            </div>
            <div className="mt-6 border border-[#CC0000] border-opacity-50 px-6 py-2">
              <span className="font-mono-tactical text-[#CC0000] text-xs tracking-widest animate-pulse-red">
                ▶ SYSTEM DEMO — CLEARANCE PENDING
              </span>
            </div>
          </div>

          {/* Corner brackets inside video */}
          <div className="absolute top-3 left-3 w-8 h-8 hud-bracket-tl text-[#CC0000] opacity-60 z-20" />
          <div className="absolute top-3 right-3 w-8 h-8 hud-bracket-tr text-[#CC0000] opacity-60 z-20" />
          <div className="absolute bottom-3 left-3 w-8 h-8 hud-bracket-bl text-[#CC0000] opacity-60 z-20" />
          <div className="absolute bottom-3 right-3 w-8 h-8 hud-bracket-br text-[#CC0000] opacity-60 z-20" />

          {/* Background grid lines */}
          <div className="absolute inset-0 tactical-grid opacity-20" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF4500] to-transparent" />
    </section>
  )
}
