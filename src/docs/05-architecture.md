---
title: Architecture
---

In the context of coding and component-based architecture, the terms "atom," "partial,", "component" and "layout" are often used to describe different levels of abstraction and reusability within a webpage / web app.

## Atom:

Is the smallest and most basic building block in a design system or component library.
It represents a simple and often reusable UI element, like a button, input field, or icon.

Atoms are typically not composed of other UI elements.

A button, a text input, or an icon can be considered atoms.

## Partial:

Also known as a molecule or compound component, is a medium-level building block that combines multiple atoms together to create a more complex UI element.

It represents a group of related atoms or other partials that work together to perform a specific function.

Partials are more complex than atoms and may have their own internal structure and behavior.

In the absence of a strict definition, a partial could be a UI element that is composed of multiple atoms but doesn't have the full functionality or complexity of a component.

## Component:

Is a high-level, self-contained building block that encapsulates a specific functionality or feature.

Components can be composed of atoms, partials, and other components, forming a hierarchy of abstraction.
They are often reusable and modular, making it easy to maintain and scale a codebase.

A form component that includes text inputs (atoms), buttons (atoms), and labels (atoms) could be considered a component.

## Layout:

A layout is the arrangement and positioning of components within a specific section of a user interface or an entire page.

It defines the overall structure and organisation of the UI.

A page layout might include a header component, a sidebar component, and a main content component arranged in a specific way to create the overall structure of a webpage / web app.

## Container:

This is specific to Handlebars. Containers are partial-block components, see [partial-blocks](https://handlebarsjs.com/guide/partials.html#partial-blocks) for more info. You can create re-usable wrappers and pass components into them e.g.

### Content Container

<pre>
&lt;div class=&quot;u-content&quot;&gt;
    &lbrace;&lbrace;#&gt;@partial-block&rbrace;&lbrace;&lbrace;/@partial-block &rbrace;
&lt;/div&gt;
</pre>

### A Component

<pre>
&lbrace;&lbrace;#&gt; @content &rbrace;
    &lt;p&gt;This is a paragraph&lt;/p&gt;
&lbrace;&lbrace;/@content&rbrace;
</pre>

### Returns

<pre>
&lt;div class=&quot;u-content&quot;&gt;
    &lt;p&gt;This is a paragraph&lt;/p&gt;
&lt;/div&gt;
</pre>

[COMPONENTS >>](/docs/components)
