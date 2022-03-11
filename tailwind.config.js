const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem"
    },
    screens: {
      "xxs": "375px",
      "xs": "425px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
