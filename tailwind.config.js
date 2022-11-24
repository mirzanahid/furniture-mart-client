/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '540px',
      'md': '720px',
      'lg': '960px',
      'xl': '1140px',
      '2xl': '1320px',
      '3xl': '1440px',
    },
    container: {
      center: true,
      padding: '15px'
    },
    maxWidth: {
      '1400px': 'container',
    },


  },
  plugins: [require("daisyui")],
}
