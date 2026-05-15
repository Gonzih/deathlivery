# PLAN: DEATHLIVERY — Military Sci-Fi Concept Site

## Task Understanding
Build a single-page military-industrial sci-fi concept site for DEATHLIVERY (D3-GS autonomous ground combat system) using Vite + React + TypeScript + Tailwind. Also produce a 45-second HyperFrames intro video. Site should evoke ED-209/Terminator aesthetics — dark, brutal, tactical.

## Approaches Considered

### Approach A: Vite + React + Tailwind (Chosen)
- Matches requested tech stack exactly
- TypeScript for type safety
- Tailwind for rapid dark/military styling
- Pro: Fast to scaffold, good component structure
- Con: Slightly more setup overhead

### Approach B: Static HTML/CSS
- Simpler, no build step
- Pro: Zero dependencies
- Con: Not what was requested

### Approach C: Next.js
- More heavyweight
- Con: Overkill for a single-page concept site

## Approach: A (Vite + React + TypeScript + Tailwind)

## Files to Touch
- `vite.config.ts` — Vite config
- `tailwind.config.js` — Tailwind with custom palette
- `src/App.tsx` — Main app with all sections
- `src/index.css` — Global styles, custom fonts, scanline animation
- `index.html` — Font imports
- `public/deathlivery-intro.mp4` — HyperFrames render output
- `deathlivery-video/index.html` — HyperFrames composition

## Risks
- HyperFrames init requires empty directory — need subdirectory
- Google Fonts load in render: hyperframes uses --docker mode for font determinism; we'll use @import with display=block
- Tailwind v4 has different config from v3 — use v3 compatible approach
- npm audit must pass before install
