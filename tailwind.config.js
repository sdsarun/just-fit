/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-pink' : '#FF4878',
        'main-purple' : '#6f36BC',
        "main-dark-purple": "#35174D",
        "main-light-purple": "#F3EFFE",
        "black-backdrop": "rgba(77, 77, 77, .9)"
      },
      spacing: {
        "400": "400px"
      }
    },
  },
  plugins: [],
}

