---
title: Styles
---

## Entry

- `./src/app.scss`: Global styles (required)
- `./src/print.scss`: Global print styles (optional)
- `./src/fractal.scss`: Global Fractal styles (required)

### Reset (optional)

These styles handle project normalizing.

`src/styles/reset`

### Settings (required)

These styles handle project colors, typography and variables.

`src/styles/settings`

### Global (optional)

These styles handle html / body styles and font importing.

`src/styles/global`

### Layout (optional)

These styles handle layout.

### Mixins (required)

`src/styles/mixins`

### Utilities

`src/styles/utils`

### Fractal styles (required)

`src/styles/fractal`

## Importing settings.

When working with `*.module.scss` you can import **settings** and **mixins** with `@import '@styles/settings';`.

[PRODUCTION >>](/docs/production)
