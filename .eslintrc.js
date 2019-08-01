module.exports = {
  extends: 'airbnb',
  env: {
    browser: true
  },
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    semi: [2, 'never']
  },
  plugins: ['react']
}
