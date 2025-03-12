/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EFF4FA',
        'secondary': '#1BBF00',
        'third': '#141135',
        'fourth': '#726E9E',

      },
      fontFamily: {
        'san': ['Open Sans'],
        'paprika': ['Paprika'],
      }
    },
  },
  plugins: [],
}

