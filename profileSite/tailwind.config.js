module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#ED452B',
        'hot-pink': '#F47CB9',
        'pink': '#FFAEC7',
        'baby-pink': '#FDDCE6',
        'light-pink': '#F9E7E5',
      },
      fontFamily: {
        primary: "GaretHeavy",
        secondary: 'Garet'
      },
      height: {
        '30r': '30rem',
        '20r': '20rem'

      },
      width: {
        '30r': '30rem',
        '15r': '15rem'
      }
    },
  },
  plugins: [],
}