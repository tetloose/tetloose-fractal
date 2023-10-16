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
    '@components': resolve(__dirname, 'src/components'),
    '@patterns': resolve(__dirname, 'src/patterns'),
    '@elements': resolve(__dirname, 'src/elements'),
    '@utilities': resolve(__dirname, 'src/utilities'),
    '@config': resolve(__dirname, 'src/config')
}
```

- [STYLES >>](/docs/styles)
