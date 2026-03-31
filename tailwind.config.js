/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        accent: {
          50:  '#fff4f3',
          100: '#ffe8e6',
          200: '#ffd0cc',
          300: '#ffaa9e',
          400: '#ff8070',
          500: '#ff6f61',
          600: '#e85444',
          700: '#c73d2e',
          800: '#a33226',
          900: '#862b20',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [],
}
