# Colors

Styles: `src/styles/settings/colors.scss`.

The initial color value is stored as a variable, then passed into a scss deep map object. We list all the available colors by name above the deep map object then alter the values inside the object i.e. If we need to change **primary** to lime we update the value `primary: $hotpink` to `primary: $lime`.

```
$dark: #000;
$light: #fff;
$hotpink: #ff69b4;
$lavender: #7669ff;
$lime: #69ffb4;
$purple: #7d11f9;
$colors: (
	default: (
		dark: $dark,
		light: $light,
		primary: $hotpink,
		secondary: $lavender,
		tertiary: $lime,
		quaternary: $purple
	),
	skeleton: (
		to: $lavender,
		from: $hotpink
	)
);
```

You can then access these color variables in scss `colors(default, primary)`.

## Color utilities

- Color: `src/styles/utils/color.scss`
- Background: `src/styles/utils/bg.scss`
- Border: `src/styles/utils/border.scss`
