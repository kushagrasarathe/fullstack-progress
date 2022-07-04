# CSS Basics

## Inline and Block Elements

Block level elements takes over the all horizontal space and vertical space equal to it's content height. Block elements always start form a new line.

Example of some block level elements are:

```
-   header
-   aside
-   heading
-   paragraph
-   list
```

Inline elements display within a horizontal line, side by side. These can be included inside block elements.

Example of some inline elements:

```
-   a tag
-   strong, em, b, i,q mark tags
-   span tag
```

## CSS Box Model

Every element is viewed by the browser as a rectangular box. The CSS box model describes how these boxes are generated for each HTML element.

Properties used to define box model:

```css
-   width: "specifies width of element"
-   height: "specifies height of element"
-   padding: "adds space within element"
-   margin: "adds or remove space around the element"
-   border: "border is added between margin and padding"
```

**NOTE: Inline elements ignore width and height properties**

## Display Property

This property is used to change the default display behaviors of elements in the normal flow.

```css
.html-element {
    display: block; /* this changes the display of element to block type */
    display: inline; /* this changes the display of element to inline type */
    display: inline-block; /* this  also changes the display to inline type but this allows to set width and height on the specified html element */
}
```

display property is also used to to initate the grid and flexbox layouts

```css
html {
    display: flex; /* this specifies the flexbox layout */
    display: grid; /* this specifies the grid layout */
}
```