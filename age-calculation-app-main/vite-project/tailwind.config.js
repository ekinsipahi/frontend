/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        ProjectPurple: "hsl(259, 100%, 65%)",
        ProjectLightRed: "hsl(0, 100%, 67%)",
        ProjectWhite: "hsl(0, 0%, 100%)",
        ProjectOffWhite: "hsl(0, 0%, 94%)",
        ProjectLightGray: "hsl(0, 0%, 86%)",
        ProjectSmokeGray: "hsl(0, 1%, 44%)",
        ProjectOffBlack: "hsl(0, 1%, 44%)",
      },
    },
  },
  plugins: [],
};
