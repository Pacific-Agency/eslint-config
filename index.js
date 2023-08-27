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
    "plugin:@intlify/vue-i18n/recommended",
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
    "sort-destructure-keys",
    "sort-keys-fix",
    "typescript-sort-keys",
    "jsdoc",
    "vue",
  ],
  root: true,
  rules: {
    "@intlify/vue-i18n/no-duplicate-keys-in-locale": "error",
    "@intlify/vue-i18n/no-missing-keys-in-other-locales": "error",
    "@intlify/vue-i18n/no-raw-text": "off",
    "@intlify/vue-i18n/no-unknown-locale": "error",
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
    "sort-destructure-keys/sort-destructure-keys": "error",
    "sort-keys-fix/sort-keys-fix": "error",
    "tsdoc/syntax": "error",
    "vue/attributes-order": [
      "error",
      {
        alphabetical: true,
      },
    ],
    "vue/block-lang": [
      "error",
      {
        script: {
          lang: "ts",
        },
      },
    ],
    "vue/block-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
    "vue/multi-word-component-names": "off",
    "vue/no-unused-properties": "error",
    "vue/require-prop-comment": [
      "error",
      {
        type: "JSDoc",
      },
    ],
  },
  settings: {
    "vue-i18n": {
      localeDir: "./assets/lang/*.json",
      messageSyntaxVersion: "^9.0.0",
    },
  },
}
