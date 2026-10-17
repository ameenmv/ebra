/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['"Clash Grotesk"', '"IBM Plex Sans Arabic"', 'sans-serif'],
        arabic: ['"IBM Plex Sans Arabic"', 'sans-serif'],
        sans: ['"Clash Grotesk"', '"IBM Plex Sans Arabic"', 'sans-serif'],
        display: ['"Clash Grotesk"', '"IBM Plex Sans Arabic"', 'sans-serif']
      },
      colors: {
        'ebra-yellow': '#fbed35',
        'ebra-dark': '#050505',
        'ebra-surface': '#0a0a0a',
        ebra: {
          yellow: '#fbed35',
          dark: '#050505',
          surface: '#0a0a0a'
        }
      }
    }
  },
  plugins: []
}
