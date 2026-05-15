/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#0A0A0A',
        'accent-orange': '#FF4500',
        'accent-red': '#CC0000',
        'military-olive': '#4A5240',
        'text-primary': '#E8E8E8',
        'grid-dim': '#1A1A1A',
        'grid-line': '#222222',
      },
      fontFamily: {
        display: ['"Black Ops One"', 'cursive'],
        mono: ['"Share Tech Mono"', '"Roboto Mono"', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'pulse-red': 'pulse-red 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pulse-red': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
