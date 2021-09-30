
const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          gray: colors.coolGray,
          blue: colors.sky,
          red: colors.rose,
          pink: colors.fuchsia,
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }