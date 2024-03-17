/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#ffb132'
      },
      fontFamily: {
        sans: ['inherit'],
        sans: ['roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

