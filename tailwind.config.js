/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  // content: [
  //   "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
  // ],
  theme: {
    screens: {
      "2xl": { max: "1980px" },
      "xl": { max: "1680px" },
      "lg": { max: "1440px" },
      "md": { max: "1024px" },
      "sm": { max: "769px" },
      "xs": { max: "480px" },
      "xxs": { max: "379px" }
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1140px',
          xl: '1140px',
          lg: '960px',
          md: '720px',
          sm: '540px',
          xs: '100%',
          xxs: '100%',
        },
      },
      colors: {
        primary: '#4444DD',
        secondary: '#595CFF',
        black: '#40404A',
      },
      height: {
        screen: "100vh",
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        bebasNeue: ["BebasNeue", "sans-serif"],
        cabinetGrotesk: ["CabinetGrotesk", "sans-serif"],
        clashDisplay: ["ClashDisplay", "sans-serif"],
        familjenGrotesk: ["FamiljenGrotesk", "sans-serif"],
        switzer: ["Switzer", "sans-serif"],
      },
    },
  },
  plugins: [],
}
