/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "almost-white": "#fafafa",
        "medium-gray": "#696969",
        "almost-black": "#141414",
      },
      fontFamily: {
        sans: ['Epilogue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

