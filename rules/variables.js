module.exports = {
    rules: {
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-unused-vars': ['warn', {
            'vars': 'local',
            'args': 'after-used',
        }],
        'no-use-before-define': 'error',
    },
};
