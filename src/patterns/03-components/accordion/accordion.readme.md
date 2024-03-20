## Accordion

This partial can be shared to any component &lbrace;&lbrace;> @accordion accordion &rbrace;&rbrace;

## Context

```
    "accordion": {
        "component": {
            "animation": "fade-in",
            "duration": 400,
            "modifier": "",
            "styles": ""
        },
        "accordionDuration": 200,
        "ariaLabelledBy": "accordion",
        "items": [
            {
                "question": "Question 1",
                "answer": "<p>this is a paragraph answer</p>"
            },
            ...
        ]
    }
```

### component.animation

This is the animation effect for loading the accordion, you can see the styles here `src/styles/utils/animate.scss`. Animations are automatically named `u-load-` so you only need to supply the last part of the argument.

### component.duration

This is the speed of the animation.

### component.styles

This relates to the scss module `accordion.module.scss`. The default value is `accordion`, this can't be changed, but if it's shared to a component you can add a new style name here, it will take the styles from accordion and the new component.

### component.modifier

This is a class name or a utility class thats loaded globally.

### accordionDuration

This is the speed of the open and close animation, make sure it matches the transition speed in `accordion.module.scss`.

### ariaLabelledBy

Defines the accessible name for the region element. References the accordion button that expands and collapses the region. Region elements are required to have an accessible name to be identified as a landmark.

### items

```
"items": [
    {
        "question": "Question 1",
        "answer": "<p>this is a paragraph answer</p>"
    },
    ...
]
```

Used to display questions and answers, **items.question** relates to `accordion__trigger` **item.answer** relates to `accordion__reveal`.
