/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        splitflap: ['VT323', 'monospace'],
      },
      colors: {
        teal: {
          300: '#5EEAD4',
          400: '#2dd4bf',
          500: '#14B8A6',
          600: '#0d9488',
          700: '#0F766E',
        },
      },
      animation: {
        'spin-reverse': 'spin-reverse 1s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};
