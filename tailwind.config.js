/* eslint-disable sonarjs/no-duplicate-string */
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
            'h1, h2, h3, h4, h5, h6, strong, blockquote, figure figcaption, table thead, table hr': {
              color: 'inherit',
            },
            'a, ol > li::before': {
              color: theme('colors.brand.teal'),
            },
            'ol > li::before': {
              color: theme('colors.brand.teal'),
              fontWeight: theme('fontWeight.semibold'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.brand.teal'),
            },
          },
        },
      }),
      maxWidth: {
        'screen-2xl': '48rem',
        'screen-3xl': '56rem',
        'screen-4xl': '64rem',
        'screen-5xl': '72rem',
        'screen-7xl': '80rem',
        'screen-8xl': '88rem',
        'screen-9xl': '96rem',
        'screen-10xl': '104rem',
        'screen-11xl': '112rem',
        'screen-12xl': '120rem',
      },
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
