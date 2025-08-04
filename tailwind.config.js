const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.html"],
  // content: [
  //   "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
  // ],
  theme: {
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
