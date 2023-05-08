/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        bigShoulders: ["Big Shoulders Display", "cursive"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        brightOrange: "#e38826",
        darkCyan: "#006970",
        veryDarkCyan: "#004241",
        transparentWhite: "#ffffff",
        veryLightGray: "#f2f2f2",
      },
      fontSize: {
        xs: "15px",
      },
      width: {
        thirtypercent: '30%',
        fortypercent: "40%",
        fiftypercent: "50%",
        sixtypercent: "60%",
        seventypercent: '70%',
        eightypercent: '80%',
        ninetypercent: "90%",
      },
    },
  },
  plugins: [],
};
