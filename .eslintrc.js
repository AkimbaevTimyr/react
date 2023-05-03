module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ["./tsconfig.json"]
  },
  plugins: [
    'react',
    "i18next"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/indent": [2, 4],
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "i18next/no-literal-string": ['error', {markupOnly: true}]
  },
  globals: {
      '__IS_DEV': true
  }
}
