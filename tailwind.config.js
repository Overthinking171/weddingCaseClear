/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        island: ["Island Moments", "cursive"],
        dancing: ["Dancing Script", "cursive"]
      },
      backgroundImage:{
        'carousel-1': "url('/src/assets/bg2.png)",
      }
    },
  },
  plugins: [],
}