# CSS FLexbox Notes

CSS flexbox is a display type that helps build responsive layouts easier.

## Flex Containers

1. Apply display type `flex` to parent container and every element inside parent element becomes a `flex-item`.

2. Now we can apply different flex properties to directly to `flex-items` or `parent` container to style different elements.

Example:

```css
.flex-container {
    display: flex;
}
```

<hr/>

## Flex Grow

The `flex-grow` property allows to grow a `flex-item`.

Example:

We can pass `flex-grow` property directly to flex-items and specify the rate at which we want the flex-items to grow. We have a total of 12 coulmns just like grid system.

```css
.flex-item {
    background: aqua;
    flex-grow: 1;
}
```

<hr/>

## Flex Shrink

The `flex-shrink` property allows to shrink a `flex-item`.

Example:

We can pass `flex-shrink` to flex-items and specify the rate at which it will shrink as the screen size decreases. The larger the rate, the more the flex-item would shrink relative to previous flex-item when screen size decreases.

```css
.flex-item {
    background: aqua;
    flex-shrink: 1;
}
```

<hr/>

## Flex Wrap

THe `flex-wrap` property specifies if the `flex-items` should wrap or not when the screen size is decreased.

Example:

This would wrap the item to next line.

```css
.flex-container {
    display: flex;
    background: rgb(35, 36, 36);
    flex-wrap: wrap;
}
```

`flex-wrap`property has different values like:

```
    wrap : this wraps the flex item in new line
    wrap-reverse : this does same thing as wrap but in reverse manner
    no-wrap : this is the default behaviour
```

<hr/>

## Flex Basis

`flex-basis` defines starting width/height of each element

```css
.box {
    height: 100px;
    flex-basis: 100px;
}

/* or */

one {
    flex-basis: 100px;
}

two {
    flex-basis: 200px;
}

``` 

Difference b/w `min-width` and `flex-basis`:
`min-width` adds a horizontal scroll bar if the minimum width defined for an element is more than the screen width whereas `flex-basis` shrinks the elements to screen width instead of adding a horizontal scroll.

For all of the above flexbox properties we can use css shorthnad like:

```css
.flex-container {
    /* flex: flex-grow-val-here flex-shrink-val-here flex-basis-val-here */
    flex: 1 0 200px;

    /* or */
    flex : 1; /* this defines that the flex-grow is one, flex-shrink is 1 and flex-basis is zero */
}
```

<hr/>



