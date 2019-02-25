module.exports = {
    extends: [
        './rules/strict',
        './rules/es6',
        './rules/variables',
        './rules/errors',
        './rules/best-practices',
        './rules/style',
    ].map(require.resolve),
    parser: 'babel-eslint',
    plugins: ['compat', 'json'],
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    rules: {},
};
