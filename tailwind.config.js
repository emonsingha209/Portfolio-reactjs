/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'navColor': '#4949a7',
        'fullBg' : '#1b1b32',
        'pen': '#1c1e21',
      },
      screens: {
        'mobile': '340px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

