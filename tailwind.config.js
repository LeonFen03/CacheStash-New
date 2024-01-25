/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': {'max': '760px'},
        'mxsm': {'max': '820px'}
      },
    }
  },
  plugins: [],
}
