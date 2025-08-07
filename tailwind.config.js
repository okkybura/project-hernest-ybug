const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.html"],
  // content: [
  //   "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
  // ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1536px',
      '3xl': '1700px',
      '4xl': '1900px'
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },

      height: {
        screen: "100vh",
      },

      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
      },

      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '17px',
        'xl': '21px',
        '2xl': '27px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '54px',
        '7xl': '72px',
        '8xl': '96px',
        '9xl': '128px',
      },

      colors: {
        primary: '#4444DD',
        secondary: '#595CFF',
        tertiary: '#FF7B9C',
        quarter: '#E0E1FF',
        quinary: '#F5F6FF',
        white: '#FFFFFF',
        black: '#40404A',

        'color-custom-primary': '#4444DD',
        'color-custom-secondary': '#595CFF',
        'color-custom-tertiary': '#FF7B9C',
        'color-custom-quarter': '#E0E1FF',
        'color-custom-quinary': '#F5F6FF',
        'color-custom-white': '#FFFFFF',
        'color-custom-black': '#40404A',
      },

      borderRadius: {
        'custom-md': 'calc(10 / 1600 * 100vw)',
        'custom-lg': 'calc(20 / 1600 * 100vw)',
      }
    },
  },
  plugins: [],
}
