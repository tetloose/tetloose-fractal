# YouTube Video

This partial can be shared to any component &lbrace;&lbrace;> @youtube youtube &rbrace;&rbrace;

## Context

```
    "youtube": {
        "styles": "",
        "modifier": "",
        "videoId": "WuHSBSLK3_A",
        "ratio": "4x3",
        "autoPlay": true,
        "title": "Video title"
    }
```

### youtube.styles

This relates to scss module, when this partial is shared to a component, you can style it by passing arguments here.

### youtube.modifier

This is a class name or a utility class thats loaded globally.

### youtube.videoId

This is the id of the video e.g, `https://www.youtube.com/watch?v=WuHSBSLK3_A` videoId = `WuHSBSLK3_A`.

### youtube.ratio

This is the video aspect ratio, refer to `src/styles/utils/media.scss` for options. The partial automatically prefixes the ratio `is-`.

- 21x9
- 16x9
- 4x6
- 4x3

### youtube.autoPlay

This will auto play the video, YouTube requires the video to be muted on auto play.

### youtube.title

This is the title of the video.
