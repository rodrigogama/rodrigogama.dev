module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  env: {
    es2020: true,
    browser: true, // Enables browser globals like window and document
    node: true, // Enables Node.js global variables and Node.js scoping.
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  plugins: ['react', 'react-hooks', 'prettier', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // Packages. `react` related packages come first.
            '^react',
            '^@?\\w',
            // Internal packages.
            '^(components|modules|utils)(/.*|$)',
            // Side effect imports.
            '^\\u0000',
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            // Style imports.
            '^.+\\.s?css$',
          ],
        ],
      },
    ],
    'import/newline-after-import': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'prettier/prettier': [
      'error',
      { singleQuote: true },
      { usePrettierrc: true },
    ], // Use our .prettierrc file as source
  },
};
