/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'london': "url('/src/img/bg-london.jpg')",
        'talking': "url('/src/img/people-talking.jpg')",
        'bridge': "url('/src/img/tower-bridge.jpg')"
      },
      fontFamily: {
        'lato': 'Lato'
      }
    },
  },
  plugins: [],
}

