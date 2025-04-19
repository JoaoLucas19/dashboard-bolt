/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-750': '#2D3748',
      },
      animation: {
        'dash': 'dash 1.5s ease-in-out forwards',
      },
      keyframes: {
        dash: {
          '0%': { strokeDashoffset: 100 },
          '100%': { strokeDashoffset: 0 },
        },
      },
    },
  },
  plugins: [],
};