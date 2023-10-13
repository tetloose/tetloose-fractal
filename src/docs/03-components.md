---
title: Components / Partials
---

# Partials / Components

Each Partial / Component has a default context called **component**.

## Context

```
"component": {
    "module": "ObjectName",
    "animation": "fade-in",
    "duration": 400,
    "modifier": "u-modifier-1 u-modifier-2 u-modifier-3",
    "styles": "moduleName"
}
```

### component.module

This is the Module name for the Partial / Component. this is passed to `src/config/modules.config.ts`. The intersection observer will dynamically import scripts and styles once a Partial / Component hits the intersection.

### component.animation

This is the animation when the Partial / Component is loaded. Refer to `src/styles/utils/animate.scss` for animation values or to add new ones.

### component.duration

This is the animation duration default is 400.

### component.modifier

This is a class name or a utility class, generated via `src/styles/app.scss` and loaded globally, usually prefixed with `u-`.

### component.styles

This relates to the scss module `*.module.scss` within the Partial / Component. Types are auto generated `*.module.scss.d.ts`, refer to this file for extra style attributes.

- [GENERATION >>](/docs/generation)
