/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        defaultFontSize: "16px",
        md: "14px",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      colors: {
        cyan: "hsl(179, 62%, 43%)",
        cyanTone: "hsla(179, 62%, 43%, 0.6)",
        brightYellow: "hsl(71, 73%, 54%)",
        lightGray: "hsl(204, 43%, 93%)",
        grayBlue: "hsl(218, 22%, 67%)",
      },
      screens: {
        "3xl": "1630px",
      }
    },
  },
  plugins: [],
};
