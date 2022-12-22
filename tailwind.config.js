/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: {
        DEFAULT: '#000000',
        '14-opacity': 'rgba(0, 0, 0, 0.14)',
      },
      grey: {
        100: '#EFEEEE',
        200: '#EDEDED',
        300: '#E5E5E5',
        400: '#DBDBDB',
        500: '#C5C5C5',
        800: '#5C5F62',
      },
      blue: {
        light: '#EEE9FD',
        purple: '#6F47EB',
      },
    },
    spacing: {
      4: '4px',
      16: '16px',
      18: '18px',
      80: '80px',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      height: {
        36: '36px',
        68: '68px',
      },
      width: {
        36: '36px',
      },
      backgroundImage: {
        'purple-gradient':
          'linear-gradient(235.14deg, #D882FA 41.45%, #9969FF 92.71%)',
      },
      fontSize: {
        base: '14px',
        15: '15px',
      },
      lineHeight: {
        36: '36px',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
    },
  },
  plugins: [],
};
