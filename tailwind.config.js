/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      colors: {
        'back': '#fffdfa',
        'teal-first': '#468189',
        'teal-dark': '#031926',
        'orange-primary': '#ff6e37',
        'navbar': '#031926'
      }
    },
  },
  plugins: [],
}
