# Конфигурация ESLint

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pacific-agency/eslint-config?colorA=18181B&colorB=AAC811&label=%D0%A0%D0%B5%D0%BB%D0%B8%D0%B7)

## Установка

```bash
pnpm i -D @pacific-agency/eslint-config
```

```bash
npm i -D @pacific-agency/eslint-config
```

```bash
yarn add -D @pacific-agency/eslint-config
```

## Использование

Для использования нужно создать файл `.eslintrc` с содержимым:

```json
{
  "extends": "@pacific-agency"
}
```

Добавить в файл `.vscode/settings.json`:

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "json",
    "vue",
    "typescript",
    "typescriptreact"
  ],
}
```

## Проект с i18n

Для использования плагина с `i18n` необходимо добавить в файл `.eslintrc`:

```json
{
  "rules": {
    "@intlify/vue-i18n/no-raw-text": "error",
    "@intlify/vue-i18n/no-unused-keys": [
      "error",
      {
        "enableFix": true
      }
    ]
  }
}
```
