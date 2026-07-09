/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'folio-dark': '#1a1a2e',
        'folio-purple': '#16213e',
        'folio-purple-light': '#2d2d5a',
        'folio-accent': '#6c5ce7',
        'folio-pink': '#fd79a8',
        'folio-orange': '#e17055',
        'folio-blue': '#0984e3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
