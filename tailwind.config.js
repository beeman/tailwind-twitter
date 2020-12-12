module.exports = (isProd) => ({
  prefix: '',
  purge: {
    enabled: isProd,
    content: ['**/*.html', '**/*.ts'],
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
})
