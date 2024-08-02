module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'import', 'react', 'jsx-a11y', 'prettier'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'error',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
};
