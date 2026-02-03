/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a',
        surface: '#171717',
        primary: '#3b82f6', // Indigo/Blue ish
        secondary: '#64748b',
      }
    },
  },
  plugins: [],
}
