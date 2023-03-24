/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:typescript-sort-keys/recommended",
    "plugin:jsdoc/recommended",
    "@nuxt/eslint-config",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-tsdoc",
    "sort-keys-fix",
    "typescript-sort-keys",
    "jsdoc",
    "vue",
  ],
  root: true,
  rules: {
    "jsdoc/check-indentation": "warn",
    "jsdoc/require-param-type": "off",
    "jsdoc/require-returns-type": "off",
    "jsdoc/sort-tags": "warn",
    "sort-keys-fix/sort-keys-fix": "error",
    "tsdoc/syntax": "error",
    "vue/attributes-order": [
      "error",
      {
        alphabetical: true,
      },
    ],
    "vue/multi-word-component-names": "off",
    "vue/require-prop-comment": [
      "error",
      {
        type: "JSDoc",
      },
    ],
  },
}
