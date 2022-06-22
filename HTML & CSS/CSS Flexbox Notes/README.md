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

We can pass `flex-grow` property directly to flex-items and specify the rate at which we want the flex-items to grow.

```css
.flex-item {
    background: aqua;
    flex-grow: 1;
}
```