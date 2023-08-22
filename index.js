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
    "plugin:jsonc/recommended-with-json",
    "plugin:jsonc/prettier",
    "@nuxt/eslint-config",
    "prettier",
  ],
  ignorePatterns: ["package.json"],
  overrides: [
    {
      files: "*.json",
      parser: "jsonc-eslint-parser",
    },
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
    "@typescript-eslint/consistent-type-imports": "error",
    "jsdoc/check-indentation": "warn",
    "jsdoc/require-param-type": "off",
    "jsdoc/require-returns-type": "off",
    "jsdoc/sort-tags": "warn",
    "jsdoc/tag-lines": [
      "warn",
      "any",
      {
        startLines: 1,
      },
    ],
    "jsonc/sort-keys": ["error", "asc"],
    "sort-keys-fix/sort-keys-fix": "error",
    "tsdoc/syntax": "error",
    "vue/attributes-order": [
      "error",
      {
        alphabetical: true,
      },
    ],
    "vue/block-order": [
      "error",
      {
        order: ["script", "template", "style"],
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
