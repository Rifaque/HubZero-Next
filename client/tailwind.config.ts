/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables .dark class-based toggling
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
  require('@tailwindcss/line-clamp'),
  require('tailwind-scrollbar'),
  ],

};
