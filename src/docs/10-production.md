---
title: Production
---

`yarn build` will generate and bundle the project files ready for production see `./public/assets`.

## Markup

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/assets/css/app.css" rel="stylesheet"> <!-- required -->
        <link href="/assets/css/print.css" rel="stylesheet"> <!-- not required -->
    </head>
    <body>
        <!-- Add components here -->
        <script src="/assets/js/runtime.js"></script> <!-- required -->
        <script src="/assets/js/main.js"></script> <!-- required -->
    </body>
</html>
```

When components hit the intersection e.g. `accordion`, Webpack will dynamically load its assets relative to `/assets/js/main.js`.

This will pull in:

- `public/assets/css/accordion.css`
- `public/assets/js/accordion.js`

[HOME >>](/docs)
