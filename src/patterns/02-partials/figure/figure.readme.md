# Figure

This partial can be shared to any component &lbrace;&lbrace;> @figure figure &rbrace;&rbrace;

The partial initially loads a placeholder image, a super low rez blurred version of the image, with a loading animation over the top. When this partial is visible in the viewport it will load the images in, replacing the blurred version.

## Context

```
    "figure" {
        "component": {
            "duration": 400,
            "animation": "skeleton",
            "styles": "",
            "modifier": ""
        },
        "image": {
            "modifier": "",
            "styles": "",
            "alt": "Image from unsplash.it",
            "placeholder": "/images/placeholder.png",
            "desktop": "/images/desktop.jpg",
            "tablet": "/images/tablet.jpg",
            "mobile": "/images/mobile.jpg"
        }
    }
```

### component.duration

This is the speed of the animation, make sure the speed matches the image fade in animation `src/styles/utils/animate.scss`.

### component.animation

This is the animation effect for the image load, it's default is **skeleton**, you can see the styles here `src/styles/utils/animate.scss`. Animations are automatically named `u-animate-` so you only need to supply the last part of the argument.

### component.styles

This relates to the scss module `figure.module.scss` within the Partial. The default value is `figure`, this can't be changed, but if it's shared to a component you can add a new style name here, it will take the styles from figure and the new component.

### component.modifier

This is a class name or a utility class thats loaded globally.

### image.modifier

This is a class name or a utility class, generated via `src/styles/app.scss` and loaded globally, usually prefixed with `u-`.

### image.styles

This relates to the scss module `figure.module.scss` within the Partial / Component. Types are auto generated `figure.module.scss.d.ts`, refer to this file for extra style attributes i.e. `is-contain is-left-top` this will dynamically import the styles relating to those module names.

### image.alt

The alt text for the image.

### image.placeholder

This is a low rez blurred version of the image for initial load.

### image.desktop

Desktop image visible from 768vw.

### image.tablet

Tablet image visible from 480vw to 768vw.

### image.mobile

Mobile image visible from 0vw to 480vw.
