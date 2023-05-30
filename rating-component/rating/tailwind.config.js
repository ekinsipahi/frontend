/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "project-orange": "hsl(25, 97%, 53%)",
        "project-light-gray": "hsl(217, 12%, 63%)",
        "project-medium-gray": "hsl(216, 12%, 54%)",
        "project-light-blue": "hsl(213, 19%, 24%)",
        "project-dark-blue": "hsl(213, 19%, 18%)",
        "project-very-dark-blue": "hsl(216, 12%, 8%)",
      },
      fontSize: {
        "project-default": "15px",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
