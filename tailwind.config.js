/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Karla: [
          'Karla', "sans-serif"
        ]
      },
      colors: {
        'light-coffee': '#c89f94'
      },
      keyframes: {
        openmenu: {
          // initial position
          '0%': { transform: 'translateY(-100%)' },
          // final position
          '100%': { transform: 'translateY(0%)' }
        },
        closemenu: {
          // initial position
          '0%': { transform: 'translateY(0%)' },
          // final position
          '100%': { transform: 'translateY(-100%)' }
        },
      },
      animation: {
        openmenu: 'openmenu 0.4s ease-in-out',
        closemenu: 'closemenu 0.3s ease-in-out'
      }
    },
  },
  plugins: [],
}
