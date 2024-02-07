const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        rose: colors.rose,
      }
    },
  },
  plugins: [require('@tailwindcss/forms')], // instalação -> npm install @tailwindcss/forms
}

