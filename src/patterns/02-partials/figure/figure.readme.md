# Figure

This partial can be shared to any component `> @figure image`

## Context

```
"image": {
    "modifier": "",
    "styles": "",
    "alt": "Image from unsplash.it",
    "desktop": "https://unsplash.it/1024",
    "tablet": "https://unsplash.it/768",
    "mobile": "https://unsplash.it/480"
}
```

### image.modifier

This is a class name or a utility class, generated via `src/styles/app.scss` and loaded globally, usually prefixed with `u-`.

### image.styles

This relates to the scss module `figure.module.scss` within the Partial / Component. Types are auto generated `figure.module.scss.d.ts`, refer to this file for extra style attributes i.e. `is-contain is-left-top` this will dynamically import the styles relating to those module names.

### image.alt

The alt text for the image.

### image.desktop

Desktop image visible from 768vw.

### image.tablet

Tablet image visible from 480vw to 768vw.

### image.mobile

Mobile image visible from 0vw to 480vw.
