# Vimeo Video

This partial can be shared to any component &lbrace;&lbrace;> @vimeo vimeo &rbrace;&rbrace;

## Context

```
    "vimeo": {
        "styles": "",
        "modifier": "",
        "videoId": "WuHSBSLK3_A",
        "ratio": "4x3",
        "autoPlay": true,
        "title": "Video title"
    }
```

### vimeo.styles

This relates to scss module, when this partial is shared to a component, you can style it by passing arguments here.

### vimeo.modifier

This is a class name or a utility class thats loaded globally.

### vimeo.videoId

This is the id of the video e.g, `https://vimeo.com/103364828` videoId = `103364828`.

### vimeo.ratio

This is the video aspect ratio, refer to `src/styles/utils/media.scss` for options. The partial automatically prefixes the ratio `is-`.

- 21x9
- 16x9
- 4x6
- 4x3

### vimeo.autoPlay

This will auto play the video.

### vimeo.title

This is the title of the video.
