module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'import',
    'eslint-plugin-no-inline-styles',
  ],
  rules: {
    indent: [0, 2, { SwitchCase: 1 }],
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/export': 'error',
    'import/first': 'error',
    'import/no-cycle': 'error',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'warn',
    'import/no-unused-modules': 'warn',
    'import/no-useless-path-segments': 'warn',
    'no-console': 'error',
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [{ group: 'internal', pattern: '~assets/**', position: 'after' }],
        pathGroupsExcludedImportTypes: ['builtin', 'object'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-inline-styles/no-inline-styles': 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'linebreak-style': 0,
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': 2,
        'import/export': 'error',
        'import/first': 'error',
        'import/no-cycle': 'error',
        'import/no-deprecated': 'warn',
        'import/no-duplicates': 'error',
        'import/no-extraneous-dependencies': 'off',
        'import/no-mutable-exports': 'warn',
        'import/no-unused-modules': 'warn',
        'import/no-useless-path-segments': 'warn',
        'no-console': 'error',
        'import/order': [
          'warn',
          {
            alphabetize: {
              caseInsensitive: true,
              order: 'asc',
            },
            groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
            pathGroups: [{ group: 'internal', pattern: '~assets/**', position: 'after' }],
            pathGroupsExcludedImportTypes: ['builtin', 'object'],
          },
        ],
        'import/prefer-default-export': 'off',
        'no-inline-styles/no-inline-styles': 1,
      },
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
  ],
};