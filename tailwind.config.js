/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinRed: 'rgb(230, 0, 35)',
        btn_grey:'rgb(239, 239, 239)'
      },
    },
  },
  plugins: [],
}

