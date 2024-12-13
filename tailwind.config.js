/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1.5s ease-in-out ",
       linkk : 'linkk 2s ease-in-out ',
       Righttoleft:"right 2s ease-in-out"
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translatey(-100%)'},
          '100%': { transform: 'translatey(0%)'}, 
        },
        linkk: {
          '0%': { transform: 'translatex(100%)'},
          '100%': { transform: 'translatex(0%)'},
        },
        right: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0%)'},
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
