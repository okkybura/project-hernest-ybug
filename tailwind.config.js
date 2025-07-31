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

      spacing: {
        'custom-gap-1': 'calc(5 / 1600 * 100vw)',
        'custom-gap-2': 'calc(10 / 1600 * 100vw)',
        'custom-gap-3': 'calc(15 / 1600 * 100vw)',
        'custom-gap-4': 'calc(25 / 1600 * 100vw)',
        'custom-gap-5': 'calc(30 / 1600 * 100vw)',
        'custom-gap-6': 'calc(35 / 1600 * 100vw)',
      },

      height: {
        screen: "100vh",
      },
      padding: {
        'custom-1': 'calc(5 / 1600 * 100vw)',
        'custom-2': 'calc(10 / 1600 * 100vw)',
        'custom-3': 'calc(15 / 1600 * 100vw)',
        'custom-4': 'calc(25 / 1600 * 100vw)',
        'custom-5': 'calc(30 / 1600 * 100vw)',
        'custom-6': 'calc(35 / 1600 * 100vw)',
        'custom-7': 'calc(40 / 1600 * 100vw)',
        'custom-8': 'calc(45 / 1600 * 100vw)',
        'custom-9': 'calc(50 / 1600 * 100vw)',
        'custom-10': 'calc(100 / 1600 * 100vw)',
        'custom-15': 'calc(150 / 1600 * 100vw)',
      },
      margin: {
        'custom-1': 'calc(5 / 1600 * 100vw)',
        'custom-2': 'calc(10 / 1600 * 100vw)',
        'custom-3': 'calc(15 / 1600 * 100vw)',
        'custom-4': 'calc(25 / 1600 * 100vw)',
        'custom-5': 'calc(30 / 1600 * 100vw)',
        'custom-6': 'calc(35 / 1600 * 100vw)',
        'custom-7': 'calc(40 / 1600 * 100vw)',
        'custom-8': 'calc(45 / 1600 * 100vw)',
        'custom-9': 'calc(50 / 1600 * 100vw)',
        'custom-10': 'calc(100 / 1600 * 100vw)',
        'custom-15': 'calc(150 / 1600 * 100vw)',
      },

      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'size-custom-title-primary': ['calc(55 / 1600 * 100vw)', { lineHeight: '1.1', letterSpacing: '-0.05em'}],
        'size-custom-title-secondary': ['calc(36 / 1600 * 100vw)', { lineHeight: '1.1', letterSpacing: '-0.05em'}],

        'size-custom-subtitle-primary': ['calc(21 / 1600 * 100vw)', { lineHeight: '1.65'}],
        'size-custom-subtitle-secondary': ['calc(28 / 1600 * 100vw)', { lineHeight: '1.65'}],

        'size-custom-description-primary': ['calc(16 / 1600 * 100vw)', { lineHeight: '1.75'}],
        'size-custom-description-secondary': ['calc(17 / 1600 * 100vw)', { lineHeight: '1.75'}],

        'size-custom-button-primary': ['calc(19 / 1600 * 100vw)', { lineHeight: '1.25'}],
        'size-custom-button-secondary': ['calc(16 / 1600 * 100vw)', { lineHeight: '1.25'}],

        'size-custom-number-primary': ['calc(55 / 1600 * 100vw)', { lineHeight: '1.1', letterSpacing: '-0.05em'}],
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
