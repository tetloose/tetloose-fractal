# Spacing

Utility classes: `src/styles/utils/spacing.scss`.

When applying padding or margin use the scss mixin `spacing(NUMBER)` e.g. `padding-top: rem(spacing(2));`.

Spacing mixin: `src/styles/mixins/spacing.scss`.

```
@function spacing($size) {
	@return calc(vars(layout, spacing) * $size);
}
```

This mixin takes a single argument `$size`. It returns the spacing variable `calc(vars(layout, spacing)` multiply by the size.

### Examples

- `spacing(.5)` returns **8**
- `spacing(1)` returns **16**
- `spacing(1.2)` returns **19.2**
- `spacing(2)` returns **32**.

Spacing multiplier is found in **variables** `src/styles/settings/variables.scss` within the deep map object **layout** -> **spacing**.

```
layout: (
    max-width: 1024px,
    gutter: 20px,
    browser-context: 16px,
    spacing: 16px
)
```

Updating this **variable** will alter all the spacing throughout the project.
