# Usage

&lbrace;&lbrace;> @video data &rbrace;&rbrace;

## Context

```
"data": {
    "styles": "",
    "modifier": "",
    "ratio": "16x9",
    "ariaLabels": {
        "play": "Play",
        "pause": "Pause"
    },
    "video": {
        "styles": "",
        "modifier": "js-video",
        "youtube": false,
        "vimeo": false,
        "autoPlay": true,
        "muted": true,
        "controls": true,
        "loop": true,
        "poster": "/images/desktop.jpg",
        "title": "Video title",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    }
}
```

### data.styles

SCSS Modules styles `./video.module.scss`. You can pass extra SCSS Modules styles when this is added to a component.

### data.modifier

This is a class name or a utility class, generated via `src/styles/app.scss` and loaded globally.

### data.ratio

Image ratio set globally see: `src/styles/utils/ratio.scss`.

### data.ariaLabels

These are the aria labels used for the play / paused states.

### data.video.styles

SCSS Modules styles `./video.module.scss`. You can pass extra SCSS Modules styles when this is added to a component.

### data.video.modifier

This is a class name or a utility class, generated via `src/styles/app.scss` and loaded globally.

### data.video.youtube

`data.video.url` will use the YouTube iFrame.

### data.video.vimeo

`data.video.url` will use the Vimeo iFrame.

### data.video.autoPlay

Auto play video.

### data.video.controls

Show or hide MP4 Video Controls.

### data.video.loop

Loop video.

### data.video.poster

Poster image for MP4 video.

### data.video.title

Video title.

### data.video.url

For Vimeo & YouTube videos, pass the video id here. For MP4 videos pass the url of the video.
