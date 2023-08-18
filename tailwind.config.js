/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        greenColor: '#1B5B31',
        offWhite: '#F5F0EC',
        headerBg: '#DCC1AB'
      },
      width: {
          500: '500px', 
          489: '489.013px',
          298: '298px',
          700: '700px'
      }
    },
  },
  plugins: [],
}

