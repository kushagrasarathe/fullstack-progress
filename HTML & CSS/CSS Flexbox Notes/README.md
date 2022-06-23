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
```