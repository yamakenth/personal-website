const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "4rem"
      }
    },
    screens: {
      "xxs": "375px",
      "xs": "425px",
      "1.5xl": "1440px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
