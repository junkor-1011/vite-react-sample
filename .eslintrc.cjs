module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'testing-library', '@emotion'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.ts', 'tsx'],
      },
    ],
    'react/require-default-props': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'import/extensions': [
      2,
      {
        // js: 'never',
        // jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'always',
      },
    ],
    // @emotion/react
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
  overrides: [
    {
      files: [
        '**/*.test.ts',
        '**/*.test.tsx',
        // '**/*.test.js',
        // '**/*.test.jsx',
        '**/__tests__/**/*.ts',
        '**/__tests__/**/*.tsx',
        // '**/__tests__/**/*.js',
        // '**/__tests__/**/*.jsx',
      ],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
    },
    {
      files: [
        '**/*.stories.ts',
        '**/*.stories.tsx',
        // '**/*.stories.js',
        // '**/*.stories.jsx'
      ],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@emotion/jsx-import': 'error',
      },
    },
  ],
};
