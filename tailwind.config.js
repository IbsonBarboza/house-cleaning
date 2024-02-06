/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgColor: '#f5f5f5',
        bgNav: '#e0e0e0',
        textColor: '#333333',
        buttColor: '#4cb5f5',
        highlightText: '#66cc99',
        bgButtons: '#d8f3e5',
      },
    },
  },
  plugins: [],
}