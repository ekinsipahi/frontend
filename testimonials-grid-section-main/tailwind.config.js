/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
      colors: {
        "mod-violet": "#7541c8",
        "dark-grayish-blue": "#48556a",
        "dark-blackish-blue": "#19212e",
        "ligth-grayish-blue": "#ecf2f8",
        "light-gray": "#cfcfcf",
      },
    },
  },
  plugins: [],
};
