module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // Enforce the use of const for variables that are never reassigned
    'prefer-const': 'error',

    // Enforce consistent use of double quotes
    'quotes': ['error', 'double'],

    // Enforce semicolons
    'semi': ['error', 'always'],

    // Enforce consistent indentation (2 spaces)
    'indent': ['error', 2],

    // Enforce consistent naming conventions
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'variable',
        'format': ['camelCase', 'UPPER_CASE']
      },
      {
        'selector': 'function',
        'format': ['camelCase']
      },
      {
        'selector': 'class',
        'format': ['PascalCase']
      }
    ],

    // Enforce the use of === and !==
    'eqeqeq': ['error', 'always'],

    // Disallow the use of console.log (use a logger instead)
    'no-console': 'warn',

    // Enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always'],

    // Enforce consistent spacing before and after keywords
    'keyword-spacing': ['error', { 'before': true, 'after': true }],

    // Enforce consistent spacing before function parenthesis
    'space-before-function-paren': ['error', 'always'],

    // Enforce consistent comma style
    'comma-style': ['error', 'last'],

    // Enforce consistent brace style for all control statements
    'curly': ['error', 'all'],

    // React specific rules
    'react/prop-types': 'off', // We're using TypeScript, so prop-types aren't necessary
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+

    // Enforce the use of PascalCase for React components
    'react/jsx-pascal-case': 'error',

    // Enforce consistent spacing in JSX attributes
    'react/jsx-curly-spacing': ['error', { 'when': 'never', 'children': true }],

    // Enforce consistent spacing around equal signs in JSX attributes
    'react/jsx-equals-spacing': ['error', 'never'],

    // Enforce consistent use of destructuring assignment of props, state, and context
    'react/destructuring-assignment': ['error', 'always'],

    // TypeScript specific rules
    '@typescript-eslint/explicit-function-return-type': 'off', // TypeScript can infer return types
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Enforce consistent type assertions
    '@typescript-eslint/consistent-type-assertions': 'error',

    // Disallow unnecessary constructors
    '@typescript-eslint/no-useless-constructor': 'error',

    // Disallow non-null assertions
    '@typescript-eslint/no-non-null-assertion': 'warn'
  }
};