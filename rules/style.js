module.exports = {
    rules: {
        'indent': ['error', 4, {
            'SwitchCase': 1,
        }],
        'brace-style': ['error', '1tbs', {
            'allowSingleLine': true,
        }],
        'quotes': [
            'error',
            'single',
            'avoid-escape',
        ],
        'camelcase': ['error', {
            'properties': 'always',
        }],
        'comma-spacing': ['error', {
            'before': false,
            'after': true,
        }],
        'comma-style': ['error', 'last'],
        'eol-last': 'error',
        'key-spacing': ['error', {
            'beforeColon': false,
            'afterColon': true,
        }],
        'new-cap': ['error', {
            'newIsCap': true,
        }],
        'no-multiple-empty-lines': ['error', {
            'max': 2,
        }],
        'no-multi-spaces': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-spaced-func': 'error',
        'no-trailing-spaces': 'error',
        'no-extra-parens': ['error', 'functions'],
        'no-underscore-dangle': 'off',
        'one-var': ['error', 'never'],
        'padded-blocks': ['error', 'never'],
        'semi': ['error', 'always'],
        'semi-spacing': ['error', {
            'before': false,
            'after': true,
        }],
        'keyword-spacing': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', 'never'],
        'space-infix-ops': 'error',
        'switch-colon-spacing': ['error', {
            'after': true,
            'before': false,
        }],
        'object-curly-newline': ['error', {
            'consistent': true,
        }],
        'object-curly-spacing': ['error', 'always', {
            'objectsInObjects': false,
        }],
    },
};
