module.exports = {
    rules: {
        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
        }],
        'no-cond-assign': ['error', 'always'],
        'no-console': 'warn',
        'no-undef': 'warn',
        'no-debugger': 'warn',
        'no-alert': 'warn',
        'no-constant-condition': 'warn',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': ['error', {
            'allowEmptyCatch': true,
        }],
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'off',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'error',
        'no-sparse-arrays': 'error',
        'no-unreachable': 'error',
        'use-isnan': 'error',
        'block-scoped-var': 'error',
    },
};
