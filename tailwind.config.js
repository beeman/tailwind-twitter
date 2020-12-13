const colors = require('tailwindcss/colors')

module.exports = (isProd) => ({
  prefix: '',
  purge: {
    enabled: isProd,
    content: ['**/*.html', '**/*.ts'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: colors.lightBlue,
      },
      gridColumn: {
        'span-19': 'span 19 / span 19',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
        24: 'repeat(24, minmax(0, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
})
