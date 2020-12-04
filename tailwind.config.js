const defaultTheme = require('tailwindcss/defaultTheme');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const lineClamp = require('tailwindcss-line-clamp');
const typography = require('@tailwindcss/typography');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
    },
    extend: {
      colors: {
        brand: {
          blue: '#2b338c',
          teal: '#00b4aa',
        },
      },
      fontFamily: {
        sans: ['Avenir', 'Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-aspect-ratio#readme
    aspectRatio,
    // https://github.com/JamesHRowe/tailwindcss-line-clamp#readme
    lineClamp,
    // See https://github.com/tailwindlabs/tailwindcss-typography for details
    typography,
  ],
};
