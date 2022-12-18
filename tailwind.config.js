/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '1/4': '25%',
        '1/3': '33%',
        '1/2': '50%',
      }
    },
  },
  plugins: [],
}
