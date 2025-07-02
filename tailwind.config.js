/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        blob:{
          '0%':{ transform: 'scale(1)'},
          '33%':{ transform: 'scale(1.2)'},
          '66%':{ transform: 'scale(0.8)'},
          '100%':{ transform: 'scale(1)'},
        },
      },
      animations:{
        blob:'blob 10s infinite'
      }
    },
  },
  plugins: [],
}