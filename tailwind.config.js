/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    fontFamily: {
      Poppins: ['"Poppins"', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        ...colors,
        selfDark: '#12131F',
        selfDark2: '#17212D',
        selfLight: '#ECEFF1',
        selfLight2: '#CFD8DC',
        selfDark3: '#37474F',
      },
    },
  },
  plugins: [],
};
