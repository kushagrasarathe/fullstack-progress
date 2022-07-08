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

<hr/>

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

<hr/>

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

<hr/>

## Box-sizing Property

The intial `box-sizing` value is `content-box`, which means when padding and border styles are added, it increase the size of elements. The `border-box` value will push the content inward to include the padding and border-space to maintain the `height` and `width` property defined in css.

**NOTE:**

**- Margin is applied outside the element so it doesn't increase the size of the element**
**- Setting the left and right margin to auto would center the block level elements.**

## The Box Model Fix

```css
/* apply a natural box layout model to all elements, but allowing components to change */
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
```

Reference:

- https://www.paulirish.com/2012/box-sizing-border-box-ftw/
- https://css-tricks.com/international-box-sizing-awareness-day/
- https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/

<hr/>

## Float Property

Float property is used to implement simple layouts such as text wrapping around an image. The element is moved left or right of the container and removed from it's normal flow.

Values of `float` property:

```
- none: no float, default value
- left : floats the elemnt to left
- right: floats the elemnt to right
- inherit: it means that the value is inherited from parent element
```

### Clearing floats

The clear property is used to return elements to normal flow after and element has been floated.

To use the clear property we use one of the following property:

```
- left
- right
- both
```

### The Clearfix Hack

To fix the problem of elements around floating element flowing around it we use `clearfix` hack.

```css
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```

**NOTE: This class is applied to the parent of the floated element.**

Reference:

- https://www.w3schools.com/howto/howto_css_clearfix.asp

<hr/>

## Overflow Property

The overflow property is used to determine how to display the overflow of content, like adding scroll bar when the content is too big.

Overflow property values:

```
- hidden: clips the content
- auto: adds scroll bar only if the content is overflowing
- scroll: adds a scrollbar and it will always show on both x and y axis
- visible: default behaviour
```

- https://developer.mozilla.org/en-US/docs/Web/CSS/overflow

<hr/>

## Position Property

The position property is used to arrange elements relative to its current position, it's containing element or the browser viewport.

Position property values

```
- relative: placed acc to normal flow, then can be adjusted using top, left, bottom and right values
- absolute: element is removed from normal flow and then adjusted using top, left, bottom and right values
- static: placed acc to normal flow, top, left, bottom, right & z-index values have no effect on element
- sticky: the element is treated as relative until scroll location reaches specified value, then it takes position of fixed.
- fixed: element stays on sme position even if the page is scrolled
```

**NOTE: With position set to fixed or absolute if the block element doesn't have a width specified, then it will automatically adjust to the size of content the element **

Reference:

- https://developer.mozilla.org/en-US/docs/Web/CSS/position
- https://www.w3schools.com/css/css_positioning.asp
