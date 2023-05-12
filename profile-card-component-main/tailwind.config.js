/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
      },
      fontSize: {
        default: "18px",
      },
      colors: {
        "dark-cyan": "hsl(185, 75%, 39%)",
        "desaturated-blue": "hsl(229, 23%, 23%)",
        "grayish-blue": "hsl(227, 10%, 46%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      width:{
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
      }
    },
  },
  plugins: [],
};
