module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        camelcase: 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
        'no-plusplus': 'off',
        'no-restricted-globals': 'off',
        'import/no-unresolved': 'off',
        'import/order': 'off',
        'import/no-cycle': 'off',
        'no-undef': 'off',
        'no-underscore-dangle': 'off',
        'no-await-in-loop': 'off',
        'no-shadow': 'off',
    },
};
