/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': {'max': '760px'},
        '3xs': {'max': '560px'},
        '2xs': {'max': '670px'},
        'mxsm': {'max': '820px'}
      },
    }
  },
  plugins: [],
}
