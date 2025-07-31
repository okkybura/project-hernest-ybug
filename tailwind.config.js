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
      padding: {
        'custom-1': 'calc(5 / 1500 * 100vw)',
        'custom-2': 'calc(10 / 1500 * 100vw)',
        'custom-3': 'calc(15 / 1500 * 100vw)',
        'custom-4': 'calc(20 / 1500 * 100vw)',
        'custom-5': 'calc(35 / 1500 * 100vw)',
      },
      margin: {
        'custom-1': 'calc(5 / 1500 * 100vw)',
        'custom-2': 'calc(10 / 1500 * 100vw)',
        'custom-3': 'calc(15 / 1500 * 100vw)',
        'custom-4': 'calc(20 / 1500 * 100vw)',
        'custom-5': 'calc(35 / 1500 * 100vw)',
      },

      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'title-primary': ['calc(55 / 1500 * 100vw)', { lineHeight: '1.1', letterSpacing: '-0.05em'}],
        'subtitle-primary': ['calc(21 / 1500 * 100vw)', { lineHeight: '1.65'}],
        'subtitle-secondary': ['calc(28 / 1500 * 100vw)', { lineHeight: '1.65'}],
        'description-primary': ['calc(16 / 1500 * 100vw)', { lineHeight: '1.75'}],
        'button-primary': ['calc(19 / 1500 * 100vw)', { lineHeight: '1.25'}],
      },
      
      colors: {
        primary: '#4444DD',
        secondary: '#595CFF',
        black: '#40404A',
      },

      borderRadius: {
        'custom-medium': 'calc(10 / 1500 * 100vw)',
      }
    },
  },
  plugins: [],
}
