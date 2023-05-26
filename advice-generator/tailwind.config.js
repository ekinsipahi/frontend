/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "plight-cyan": "hsl(193, 38%, 86%)",
        "pneon-green": "hsl(150, 100%, 66%)",
        "pgrayish-blue": "hsl(217, 19%, 38%)",
        "pdark-grayish-blue": "hsl(217, 19%, 24%)",
        "pdark-blue": "hsl(218, 23%, 16%)",
      },
      fontSize: {
        "pfont-size": "28px",
      },
    },
    container: {
      padding: "2rem",
      center: true,
    },
  },
  plugins: [],
};
