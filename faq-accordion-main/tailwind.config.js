/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,ts,js}"],
  theme: {
    extend: {
      colors: {
        ProjectWhite: "hsl(0, 0%, 100%)",
        ProjectPink: "hsl(275, 100%, 97%)",
        ProjectGrayPurple: "hsl(292, 16%, 49%)",
        ProjectDarkPurple: "hsl(292, 42%, 14%)",
      },
      backgroundImage:{
        'desktop': 'url("./assets/images/background-pattern-desktop.svg")'
      },
    },
  },
  plugins: [],
};
