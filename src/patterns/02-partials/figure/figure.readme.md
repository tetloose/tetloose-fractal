# Usage

<pre>&lbrace;&lbrace;> @figure figure &rbrace;&rbrace;</pre>

The partial initially loads a placeholder image, a super low rez blurred version of the image, with a loading animation over the top. When this partial is visible in the viewport it will load the images in, replacing the blurred version.

## Context

```
"context": {
    "duration": 400,
    "animation": "skeleton",
    "styles": "",
    "modifier": "",
    "ratio": "",
    "image": {
        "styles": "",
        "modifier": "",
        "alt": "Image from unsplash.it",
        "placeholder": "/images/placeholder.png",
        "desktop": "/images/desktop.jpg",
        "tablet": "/images/tablet.jpg",
        "mobile": "/images/mobile.jpg"
    }
}
```

### duration

This is the speed of the animation, make sure the speed matches the image fade in animation `src/styles/utils/animate.scss`.

### animation

This is the animation effect for the image load, it's default is **skeleton**, you can see the styles here `src/styles/utils/animate.scss`. Animations are automatically named `u-animate-` so you only need to supply the last part of the argument.

### styles

SCSS Modules styles `./figure.module.scss`. You can pass extra SCSS Modules styles when this is added to a component.

### modifier

This is a class name or a utility class, generated via `src/styles/app.scss` and loaded globally.

### ratio

Image ratio set globally see: `src/styles/utils/ratio.scss`.

### image.modifier

This is a class name or a utility class, generated via `src/styles/app.scss` and loaded globally, usually prefixed with `u-`.

### image.styles

SCSS Modules styles for the image `./figure.module.scss`. You can pass extra SCSS Modules styles when this is added to a component.

### image.alt

Image Alt text.

### image.placeholder

This is a low rez blurred version of the image for initial load.

### image.desktop

Desktop image url, visible from 768vw.

### image.tablet

Tablet image url, visible from 480vw to 768vw.

### image.mobile

Mobile image url, visible from 0vw to 480vw.
