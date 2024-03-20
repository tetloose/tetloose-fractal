---
title: Scripts
---

## Entry

`./src/app.ts`: project entry and handles the module loading.

## Config

`./src/config`: project configs.

## Utilities

`./src/utilities`: these are script utilities.

## Elements

`./src/elements`: these are utilities for creating elements for the dom.

### Alias

```
alias: {
    '@': resolve(__dirname, 'src'),
    '@styles': resolve(__dirname, 'src/styles'),
    '@patterns': resolve(__dirname, 'src/patterns'),
    '@atoms': resolve(__dirname, 'src/patterns/01-atoms'),
    '@partials': resolve(__dirname, 'src/patterns/02-partials'),
    '@components': resolve(__dirname, 'src/patterns/03-components'),
    '@containers': resolve(__dirname, 'src/patterns/04-containers'),
    '@layouts': resolve(__dirname, 'src/patterns/05-layouts'),
    '@elements': resolve(__dirname, 'src/elements'),
    '@utilities': resolve(__dirname, 'src/utilities'),
    '@config': resolve(__dirname, 'src/config')
}
```

[STYLES >>](/docs/styles)
