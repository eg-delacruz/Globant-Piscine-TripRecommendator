/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}', // include TS and TSX files
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0da6f2',
        'background-light': '#f5f7f8',
        'background-dark': '#101c22',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Space Grotesk', 'sans-serif'], // Also set as default
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
