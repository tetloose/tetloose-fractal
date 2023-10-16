# Content

Content is a [Container Component](https://fractal.build/guide/components/including-sub-components.html#container-components-via-partial-block) that applies padding and margin to html elements within it.

## Usage

<pre>
&lbrace;&lbrace;#> @content this.data &rbrace;&rbrace;
    &lbrace;&lbrace; render '@figure' &rbrace;&rbrace;
    &lbrace;&lbrace;&lbrace;content&rbrace;&rbrace;&rbrace;
    &lbrace;&lbrace; render '@button' &rbrace;&rbrace;
&lbrace;&lbrace;/@content&rbrace;&rbrace;
</pre>

When passing a new context to the container you must prefix the data with `this` e.g. `this.data`. You can pass any Object / Component into this Container. The above is an example showing a figure, basic content and a button.

## Context

```
"data": {
    "modifier": "",
    "styles": "",
    "content": "<h1>Intro</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, voluptas officiis illo modi rem quis provident praesentium sed facere odit blanditiis iste harum dolores ea excepturi itaque aliquid voluptates dolore.</p>"
}
```

### data.modifier

This is a class name or a utility class, generated via `src/styles/utils/content.scss` and loaded globally.

### data.styles

This allows you to pass SCSS Module styles to the container.

### data.content

This is the context for a **content** object passed into the container.
