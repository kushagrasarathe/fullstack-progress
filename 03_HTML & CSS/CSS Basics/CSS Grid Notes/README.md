# CSS Grid Notes

## Basics

Defining a css grid layout:

```css
.container {
  padding: 30px;

  /*  defines display layout as grid */
  display: grid;

  /* defines col width: 1st-col 2nd-col */
  grid-template-columns: 100px auto;

  /* defines row height: 1st-row 2nd 3rd */
  grid-template-rows: 50px 50px 100px;

  /* gap: row col */
  gap: 5px 3px;
}
```

Using fraction units for responsive-ness

```css
.container {
  padding: 30px;

  /*  defines display layout as grid */
  display: grid;

  /* defines col width: 1st-col 2nd-col */
  grid-template-columns: 1fr 1fr 1fr;

  /* defines row height: 1st-row 2nd 3rd */
  grid-template-rows: 1fr 2fr;

  /* gap: row col */
  gap: 5px 3px;
}
```

or we can also use repeat function:

```css
.container {
  /* repeat(3, 2fr) means 3 cols of 1 fraction unit each */
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
```

we can also get exact same result by using `grid-template` shorthand method:

```css
.container {
  /* row / col */
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
}
```

## Positioning items in grid

**Note:** When we have two coulmns, we have 3 coulmn lines

```css
.header {
  /* col start line */
  grid-column-start: 1;
  /* col end line */
  grid-column-end: 3;

  /* using shorthand for same */
  grid-column: 1 / 3;

  /* another way of acheiving that */
  grid-column: 1 / span 2;

  /* this will target the last coulumn line */
  grid-column: 1 / -1;
}

.menu {
  grid-row: 1/ 3;
}
```

## Template areas

The grid-template-areas property specifies areas within the grid layout. You can name grid items by using the grid-area property, and then reference to the name in the grid-template-areas property.

```css
.cointainer {
  grid-template-areas:
    "h h h h h h h h h h h h"
    "m c c c c c c c c c c c"
    "f f f f f f f f f f f f";
}

.header {
  grid-area: h;
}

.menu {
  grid-area: m;
}

.content {
  grid-area: c;
}

.footer {
  grid-area: f;
}
```
