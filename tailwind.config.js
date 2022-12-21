/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'black-14-opacity': 'rgba(0, 0, 0, 0.14)',
      grey: '#C5C5C5',
      'light-grey': '#EFEEEE',
      'dark-grey': '#5C5F62',
      'medium-grey': '#EDEDED',
      'light-blue': '#EEE9FD',
      'blue-purple': '#6F47EB',
    },
    spacing: {
      4: '4px',
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
    },
  },
  plugins: [],
};
