module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off',
    'no-console': 'warn',
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    'jsx-quotes': [
      'error',
      'prefer-double'
    ]
  },
}
