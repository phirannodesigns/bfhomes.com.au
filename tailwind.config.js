const defaultTheme = require('tailwindcss/defaultTheme');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const forms = require('@tailwindcss/forms');
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
      typography: () => ({
        DEFAULT: {
          css: {
            color: 'inherit',
            'h1, h2, h3, h4, h5, h6, li, a, blockquote, figure figcaption, table thead, table hr': {
              color: 'inherit',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-aspect-ratio#readme
    aspectRatio,
    // https://github.com/tailwindlabs/tailwindcss-forms#readme
    forms,
    // https://github.com/JamesHRowe/tailwindcss-line-clamp#readme
    lineClamp,
    // See https://github.com/tailwindlabs/tailwindcss-typography for details
    typography,
  ],
};
