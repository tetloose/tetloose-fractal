module.exports = {
    'env': {
        'browser': true,
        'node': true
    },
    'globals': {},
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint'
    ],
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 8,
        'sourceType': 'module'
    },
    'ignorePatterns': [
        'public',
        'build',
        'node_modules',
        '*.scss.d.ts',
        'fractal.config.js'
    ],
    'rules': {
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'indent': 'off',
        '@typescript-eslint/indent': ['error'],
        'no-multi-spaces': [
            'error'
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1,
                'maxEOF': 1
            }
        ],
        'comma-dangle': [
            'error',
            'never'
        ],
        'no-console': 'warn',
        'no-debugger': 'warn',
        'space-in-parens': [
            'error',
            'never'
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'space-before-function-paren': [
            'error', {
                'anonymous': 'never',
                'named': 'never',
                'asyncArrow': 'always'
            }
        ]
    }
}
