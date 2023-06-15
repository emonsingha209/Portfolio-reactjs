/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        navColor: '#4949a7',
        fullBg: '#1b1b32',
        pen: '#1c1e21',
        card: '#2196F3',
      },
      height: {
        128: '43rem',
        120: '36rem',
      },
      screens: {
        mobile: '340px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
