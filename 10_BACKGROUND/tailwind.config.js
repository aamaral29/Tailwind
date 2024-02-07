/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cidade': 'url(../img/bg_cidade.jpg)',
        'cidade-noite': 'url(../img/city.jpg)'
      })
    },
  },
  plugins: [],
}

