/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      scale: {
        '-100': '-1',
      },
      colors: {
        "grey-light-1": "#dbdbdb",
        "grey-light-2": "#eeeeee",
        "grey-light": "#e0e0e0",
        blue: "#5030E5",
        "pure-black": "#000000",
        "dusky-white": "#f5f5f5",
        black: "#0d062d",
        grey: "#787486",
        white: "#ffffff",
        "dusky-black": "#625f6d",
        "yellow-light": "#dfa874",
        "yellow": "#d58d49",
        "red": "#d8727d",
        "green": "#68B266",
        "green-light": "#83c29d",
        "lamp-yellow": "#fcd64a"
      },
    }
  },
  plugins: [],
}

