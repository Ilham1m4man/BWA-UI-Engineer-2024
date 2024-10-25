/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      blacks: {
        '100': 'rgba(var(--black), 1)',
        '80': 'rgba(var(--black), 0.8)',
        '60': 'rgba(var(--black), 0.6)',
        '40': 'rgba(var(--black), 0.4)',
        '20': 'rgba(var(--black), 0.2)',
        '10': 'rgba(var(--black), 0.1)',
        '5': 'rgba(var(--black), 0.05)',
      },
      whites: {
        '100': 'rgba(var(--white), 1)',
        '80': 'rgba(var(--white), 0.8)',
        '60': 'rgba(var(--white), 0.6)',
        '40': 'rgba(var(--white), 0.4)',
        '20': 'rgba(var(--white), 0.2)',
        '10': 'rgba(var(--white), 0.1)',
        '5': 'rgba(var(--white), 0.05)',
      },
      primary: {
        brand: '#F15757',
        light: '#F6F6F9',
        yellow: '#F88E12',
      },
      secondary: {
        blue: '#2B71FA',
        'blue-A': '#E1E1E9',
      },
      // ...
    },
    extend: {
      fontFamily: {
        'sans': ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}

