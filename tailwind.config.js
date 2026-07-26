/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        bg: '#080a0f',
        surface: '#0e1117',
        surface2: '#161b24',
        accent: '#4fffb0',
        accent2: '#00c9ff',
        security: '#e8a020',
        // Light-console palette (Software section only) — see DESIGN.md "The Powered-On Rule"
        paper: '#f5f7f4',
        paperDeep: '#e8ece7',
        ink: '#0b120e',
        inkSoft: '#4a564e',
        mintDeep: '#0c6640',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'blink': 'blink 1.1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
