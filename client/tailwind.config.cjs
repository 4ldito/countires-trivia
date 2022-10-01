/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    colors: {
      ...colors,
      dark: {
        100: '#CFCCE8',
        200: '#B4B3D0',
        300: '#7A7BA2',
        400: '#22d3ee',
        500: '#545774',
        600: '#44475C',
        700: '#343745',
        800: '#131417',
        900: '#0e0e0e'
      }
      // ...
    }
  },
  plugins: []
}
