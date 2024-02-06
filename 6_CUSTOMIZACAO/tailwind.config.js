const { colors } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    // Mexendo nos colors, todas as cores do tailwind são apagados (só as cores que estão em colors ficaram) -> 
    // se apagar e dar build volta todo o tailwind
    // colors: {
    //   black: '#010101',
    //   red: '#A83246'
    // },
    // screens: {
    //   'tablet': '640px',
    //   'cel': {'max': '400px'} // Quando menor que 400 irá trocar a cor do cel
    // },
    extend: { //  Utilizando o extends
      colors: {
        'new-blue': '#243C5A', // Aquiestá criando uma nova cor (não apaga o restante das cores)
        red: '#fff', // Dessa forma todos os vermelhos passam a ser branco (restante das cores se mantem)
        gray: {
          ...colors.gray, // todas as propriedade de color gray que tem no tailwind (Na verdade não precisa dessa linha -> utilizando só a linha abaixo já funciona -> mantendo todos os cinzas e mudando o 900 apenas)
          '900': '#A83246' // E aqui está alterando o 900 por #999 (podendo ser qualquer cor)
        }
      }
    },
    // O spacing é apenas uma valor que altera a escala para classes que necessitam de números para dar escala a algo
    // spacing: {
    //   '50': '20rem', // da para colocar o número que quiser
    // },
  },
  plugins: [],
}