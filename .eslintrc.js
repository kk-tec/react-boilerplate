module.exports = {
    extends: 'airbnb',
    ecmaFeatures: {
        jsx: true,
        modules: true
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parser: 'babel-eslint',
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
    },
    plugins: ['react']
}
