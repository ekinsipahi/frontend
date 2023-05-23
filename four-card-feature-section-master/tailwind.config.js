/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        default: "15px",
      },
      colors: {
        "dark-blue": "hsl(234, 12%, 34%)",
        "gray-blue": "hsl(229, 6%, 66%)",
        "light-gray": "hsl(0, 0%, 98%)",
        "project-red": "hsl(0, 78%, 62%)",
        "project-cyan": "hsl(180, 62%, 55%)",
        "project-orange": "hsl(34, 97%, 64%)",
        "project-blue": "hsl(212, 86%, 64%)",
      },
      width: {
        twentyeight: "28%",
        sixty: "60%",
        seventy: "70%",
        eighty: "80%",
      },
      screens: {
        tablet: "818px",
      },
    },
  },
  plugins: [],
};
