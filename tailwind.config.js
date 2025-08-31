/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'clouds': 'clouds 40s linear infinite',
        'clouds-slower': 'clouds-slower 60s linear infinite',
        'plane-fly': 'plane-fly 20s ease-in-out infinite',
        'smoke': 'smoke 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}