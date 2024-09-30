module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: ['.json'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['#', './types'],
          ['msw/browser', './node_modules/msw/browser']
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'unused-imports',
  ],
  rules: {
    semi: ['error', 'always'],
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-case-declarations': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'space-before-function-paren': 'off',
    'class-methods-use-this': 'off',

    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',

    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          ['sibling', 'index'],
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
          {
            pattern: '#/**',
            group: 'type',
          },
          {
            pattern: '*.{scss,css,less,styl,stylus}',
            group: 'parent',
          },
          {
            pattern: '*.{js,jsx,ts,tsx}',
            group: 'sibling',
          },
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['sibling', 'index'],
        warnOnUnassignedImports: true,
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    'unused-imports/no-unused-imports-ts': 'warn',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],

    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
