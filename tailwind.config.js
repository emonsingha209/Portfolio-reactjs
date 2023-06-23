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
      width: {
        '120': '28rem',
      },
      height: {
        '120': '28rem',
      },
      screens: {
        mobile: '340px',
        tablet: '600px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        newFont: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
