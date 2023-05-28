/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "p-cyan": "hsl(180, 66%, 49%)",
        "light-cyan-hover": "hsl(180, 100%, 80%)",
        "p-dark-violet": "hsl(257, 27%, 26%)",
        "p-gray": "hsl(0, 0%, 75%)",
        "p-grayish-violet": "hsl(257, 7%, 63%)",
        "p-very-dark-blue": "Blue: hsl(255, 11%, 22%)",
        "p-very-dark-violet": "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "p-default": "18px",
      },
      screens: {
        "1000px": "1000px",
        "big-tablet": "970px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
