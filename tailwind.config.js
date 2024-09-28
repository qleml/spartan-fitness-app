/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./app.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ], 
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#f9e8d2',
          200: '#f3d1a6',
          300: '#ecb97a',
          400: '#e6a24e',
          500: '#c38d3a',
          600: '#9b6f2e',
          700: '#735122',
          800: '#4b3416',
          900: '#24170a',
        },
        'spartan-red': {
          100: '#f4d4d8',
          200: '#e9a9b1',
          300: '#df7d8a',
          400: '#d45263',
          500: '#892628',
          600: '#6b1e20',
          700: '#4d1618',
          800: '#2f0f10',
          900: '#100708',
        },
        'spartan-grey': {
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#b2b2b2',
          400: '#999999',
          500: '#212121',
          600: '#1a1a1a',
          700: '#141414',
          800: '#0d0d0d',
          900: '#070707',
        },
      },
    },
  },
  plugins: [],
}

