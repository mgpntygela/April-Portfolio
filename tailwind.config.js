/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#C873CF",
        secondary: "#D9D9D9",
        tertiary: "#BFBFBF",
        "black-100": "#707070",
        "black-200": "#444444",
        "black-300": "#000000",
        "white-100": "#F5F5F5",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #D9D9D9",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-bg2.svg')",
      },
    },
  },
  plugins: [],
};