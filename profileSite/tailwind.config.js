module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#be3c3c',
        'pink': '#FFAEC7',
        'light-pink': '#F9E7E5'
      },
      fontFamily: {
        primary: "GaretHeavy",
        secondary: 'Garet'
      },
      height: {
        '30r': '30rem',
        '20r': '20rem',
        '364px': '364px',
        '50px': '50px'

      },
      width: {
        '30r': '30rem',
        '15r': '15rem',
        '364px': '364px',
        '50px': '50px'
      }
    },
  },
  plugins: [],
}