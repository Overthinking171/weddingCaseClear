/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        island: ["Island Moments", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        poppins: ["Poppins", "cursive"],
        outfit: ["Outfit", "cursive"],
        parisienne: ["Parisienne", "cursive"],
        marck: ["Marck Script", "cursive"],
        montserrat: ["Montserrat", "cursive"],
        inter:["Inter", "cursive"]
      },
      backgroundImage:{
        'background': "url('/src/assets/bg4.png')",
        'vector': "url('/src/assets/vector.png')",
      },
      screens: {
        sm: '340px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}