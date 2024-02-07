/** @type {import('tailwindcss').Config} */
module.exports = {
  // INSERIDO PARA REDUZIR O CSS TAILWIND DEIXANDO MAIS LEVE
  purge: {
    enabled: true,
    content: ['./src/**/*.html'],
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

