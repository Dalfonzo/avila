/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      mont: ['Montserrat'],
      ws: ['Work Sans'],
      cal: ['Calibri'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: {
          300: '#E2081E',
        },
        secondary: {
          100: '#DAD6D3',
          200: '#C8C2BE',
          500: '#867D77',
          600: '#68605B',
        },
        text: {
          black: '#333333',
          white: '#FEFEFE',
        },
        neutral: {
          600: '#5F5F5F',
        },
        background: {
          200: '#FCFCFC',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tw-elements/dist/plugin'),
    require('tailwindcss-animate'),
  ],
};
