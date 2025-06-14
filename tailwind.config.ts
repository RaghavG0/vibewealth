/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#C0FDFB',
          DEFAULT: '#22D3EE', // turquoise-like primary color
          dark: '#0E7490',
        },
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
