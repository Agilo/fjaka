# Fjaka

Fjaka is a SASS-based frontend framework for building extensive, scalable, responsive, mobile-first web projects with a solid architectural baseline.

| Read HTML & CSS Conventions document!                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Before using Fjaka, please read our [HTML & CSS Conventions document](https://handbook.agilo.co/s/696e2347-d8b9-4957-8d6f-30ec5e61c2e2). That document will guide you through the whole process of frontend development, including structuring, naming conventions, style guides, etc. |

## Usage

### Via `web-starter`

Fjaka is already included in the [web-starter](https://github.com/Agilo/web-starter) project we use for every new project.

### Via npm

You can use Fjaka in other projects by installing it using the NPM package manager:


```bash
npm install fjaka --save
```


After you install the package in your project, you should be able to import Fjaka source files from `/node_modules` directory.

## Compatibility

Learn about the browsers and devices, from modern to old, that Fjaka supports.

### Desktop Browsers

Fjaka supports the latest, stable releases of all major browsers and platforms. We support Internet Explorer 10, 11, and Microsoft Edge on Windows.


Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform’s web view API, are not explicitly supported. However, Fjaka should (in most cases) display and function correctly in these browsers.

|                   | Mac OS    | Windows            |
| ----------------- | --------- | ------------------ |
| Chrome            | Supported | Supported          |
| Firefox           | Supported | Supported          |
| Internet Explorer | N/A       | Supported (IE 10+) |
| Microsoft Edge    | N/A       | Supported          |
| Opera             | Supported | Supported          |
| Safari            | Supported | Not supported      |

### Mobile Devices

Generally speaking, Fjaka supports the latest versions of each major platform’s default browsers. Note that proxy browsers (such as Opera Mini, Opera Mobile’s Turbo mode, UC Browser Mini, and Amazon Silk) are not supported.

|                           | Android                   | iOS       | Windows 10 mobile |
| ------------------------- | ------------------------- | --------- | ----------------- |
| Chrome                    | Supported                 | Supported | N/A               |
| Firefox                   | Supported                 | Supported | N/A               |
| Safari                    | N/A                       | Supported | N/A               |
| Android Browser & WebView | Supported (Android v5.0+) | N/A       | N/A               |
| Microsoft Edge            | N/A                       | N/A       | Supported         |

# Layout


---

## Responsive Breakpoints

| We use Bootstrap responsive breakpoints                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| We use Bootstrap responsive breakpoints and its mixins. If you're looking for original documentation, you can find it [here](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints). |


Since Fjaka is developed to be mobile first, we use a handful of media queries to create sensible breakpoints for our layouts and interfaces. These breakpoints are mainly based on minimum viewport widths and allow us to scale up elements as the viewport changes.


Fjaka primarily uses the following media query ranges—or breakpoints—in our source SASS files for our layout, grid system, and components.


```scss
/**
 * Extra small devices (portrait phones, less than 576px)
 * No media query since this is the default in fjaka
 */

/**
 * Small devices (landscape phones, 576px and up)
 */
@media ( min-width: 576px ) { ... }

/**
 * Medium devices (tablets, 768px and up)
 */
@media ( min-width: 768px ) { ... }

/**
 * Large devices (desktops, 992px and up)
 */
@media ( min-width: 992px ) { ... }

/**
 * Extra large devices (large desktops, 1200px and up)
 */
@media ( min-width: 1200px ) { ... }
```


Since we write our source CSS in SASS, all our media queries are available via SASS mixins:


```scss
@include media-breakpoint-up( xs ) { ... }
@include media-breakpoint-up( sm ) { ... }
@include media-breakpoint-up( md ) { ... }
@include media-breakpoint-up( lg ) { ... }
@include media-breakpoint-up( xl ) { ... }

/**
 * Example usage:
 */
@include media-breakpoint-up( sm ) {
    .some-class { display: block; }
}
```


We occasionally use media queries that go in the other direction (the given screen size or smaller):


```scss
/**
 * Extra small devices (portrait phones, less than 576px)
 */
@media ( max-width: 575px ) { ... }

/**
 * Small devices (landscape phones, less than 768px)
 */
@media ( max-width: 767px ) { ... }

/**
 * Medium devices (tablets, less than 992px)
 */
@media ( max-width: 991px ) { ... }

/**
 * Large devices (desktops, less than 1200px)
 */
@media ( max-width: 1199px ) { ... }

/**
 * Extra large devices (large desktops)
 * No media query since the extra-large breakpoint has no upper bound on its width
 */
```


Once again, these media queries are also available via SASS mixins:


```scss
@include media-breakpoint-down( xs ) { ... }
@include media-breakpoint-down( sm ) { ... }
@include media-breakpoint-down( md ) { ... }
@include media-breakpoint-down( lg ) { ... }
```


There are also media queries and mixins that are used for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.


```scss
/**
 * Extra small devices (portrait phones, less than 576px)
 */
@media ( max-width: 575px ) { ... }

/**
 * Small devices (landscape phones, 576px and up)
 */
@media ( min-width: 576px ) and ( max-width: 767px ) { ... }

/**
 * Medium devices (tablets, 768px and up)
 */
@media ( min-width: 768px ) and ( max-width: 991px ) { ... }

/**
 * Large devices (desktops, 992px and up)
 */
@media ( min-width: 992px ) and ( max-width: 1199px ) { ... }

/**
 * Extra large devices (large desktops, 1200px and up)
 */
@media ( min-width: 1200px ) { ... }
```


These media queries are also available via SASS mixins:


```scss
@include media-breakpoint-only( xs ) { ... }
@include media-breakpoint-only( sm ) { ... }
@include media-breakpoint-only( md ) { ... }
@include media-breakpoint-only( lg ) { ... }
@include media-breakpoint-only( xl ) { ... }
```


Similarly, media queries may span multiple breakpoint widths:


```scss
/**
 * Example
 *
 * Apply styles starting from medium devices and up to extra large devices
 */
@media ( min-width: 768px ) and ( max-width: 1199px ) { ... }
```


The SASS mixin for targeting the same screen size range would be:


```scss
@include media-breakpoint-between( md, xl ) { ... }
```

## Grid

We use a mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve-column system, five default responsive tiers, SASS variables, etc.


Our grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

| New to or unfamiliar with flexbox?                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Read this CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for background, terminology, guidelines, and code snippets. |



| Flexbox bugs and limitations                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Be aware of the limitations and [bugs around flexbox](https://github.com/philipwalton/flexbugs), like the [inability to use some HTML elements as flex containers](https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers). |


Let’s take a look at the table with all information about our grid:

| Number of columns | **12**                                 |
| ----------------- | -------------------------------------- |
| **Gutter width**  | 30px *(15px on each side of a column)* |
| **Nestable**      | Yes                                    |



| Size        | Max container width | Class prefix         |
| ----------- | ------------------- | -------------------- |
| Extra Small | None *(auto)*       | `.o-col-<number>`    |
| Small       | 546px               | `.o-col-<number>@sm` |
| Medium      | 738px               | `.o-col-<number>@md` |
| Large       | 962px               | `.o-col-<number>@lg` |
| Extra Large | 1200px              | `.o-col-<number>@xl` |

### Containers

Containers are the most basic layout element in Fjaka and are required when using our default grid system.


Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).


```html
<!-- Fixed-width container -->
<div class="o-container">
...
</div>

<!-- Fluid-width container -->
<div class="o-container-fluid">
...
</div>
```

### Rows

Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.


Rows should always be placed inside `.o-container`.


```html
<div class="o-container">
    <div class="o-row">
    ...
    </div>

    <div class="o-row">
    ...
    </div>
</div>
```

### Columns

In a grid layout, content must be placed within columns, and only columns may be immediate children of rows.


Thanks to flexbox, grid columns without a specified width will automatically layout as equal-width columns. For example, four instances of `.o-col@sm` will each automatically be 25% wide from the small breakpoint and up.


```html
<div class="o-container">
    <div class="o-row">
        <div class="o-col@sm"></div>
        <div class="o-col@sm"></div>
        <div class="o-col@sm"></div>
    </div>
</div>
```


Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use `.o-col-4`.


```html
<div class="o-container">
    <div class="o-row">
        <div class="o-col-4"></div>
        <div class="o-col-4"></div>
        <div class="o-col-4"></div>
    </div>
</div>
```


Column widths are set in percentages, so they’re always fluid and sized relative to their parent element.

#### Without gutter

Columns have horizontal padding to create the gutters between individual columns. However, you can remove the margin from rows and padding from columns with `.o-row--no-gutters` on the `.o-row`.


```html
<div class="o-container">
    <div class="o-row o-row--no-gutters">
         <div class="o-col-4"></div>
         <div class="o-col-4"></div>
         <div class="o-col-4"></div>
    </div>
</div>
```

#### Breakpoints

To make the grid responsive, there are five grid breakpoints, one for each responsive breakpoint: all breakpoints (extra small), small, medium, large, and extra large.


Grid breakpoints are based on minimum width media queries, meaning they apply to that one breakpoint and all those above it (e.g., `.o-col-4@sm` applies to small, medium, large, and extra large devices, but not the first xs breakpoint).


```html
<div class="o-container">
    <div class="o-row">
        <div class="o-col-4@sm"></div>
        <div class="o-col-4@sm"></div>
        <div class="o-col-4@sm"></div>
    </div>
</div>
```

#### Offsetting

You can offset grid columns in two ways: responsive `.o-offset-` grid classes and margin utilities. Grid classes are sized to match columns, while margins are more useful for quick layouts where the width of the offset is variable.


**Offset Classes**

Move columns to the right using `.o-offset-<number>@md` classes. These classes increase the left margin of a column by `<number>` columns. For example, `.o-offset-4@md` moves `.o-col-4@md` over four columns.


```html
<div class="o-container">
    <div class="o-row">
        <div class="o-col-4@md">.o-col-4@md</div>
        <div class="o-col-4@md o-offset-4@md">.o-col-4@md .o-offset-4@md</div>
    </div>

    <div class="o-row">
        <div class="o-col-3@md o-offset-3@md">.o-col-3@md .o-offset-3@md</div>
        <div class="o-col-3@md o-offset-3@md">.o-col-3@md .o-offset-3@md</div>
    </div>

    <div class="o-row">
        <div class="o-col-6@md o-offset-3@md">.o-col-6@md .o-offset-3@md</div>
    </div>
</div>
```


**Margin Utilities**

You can use margin utilities like `.u-mr-auto` to force sibling columns away from one another.


```html
<div class="o-container">
    <div class="o-row">
        <div class="o-col-4@md">.o-col-4@md</div>
        <div class="o-col-4@md u-ml-auto">.o-col-4@md .u-ml-auto</div>
    </div>

    <div class="o-row">
        <div class="o-col-3@md u-ml-auto@md">.o-col-3@md .u-ml-auto@md</div>
        <div class="o-col-3@md u-ml-auto@md">.o-col-3@md .u-ml-auto@md</div>
    </div>

    <div class="o-row">
        <div class="o-col u-mr-auto">.o-col .u-mr-auto</div>
        <div class="o-col">.o-col</div>
    </div>
</div>
```

### Nesting

To nest your content with the default grid, add a new `.o-row` and set of `.o-col-<number>@sm` columns within an existing `.o-col-<number>@sm` column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required to use all 12 available columns).


```html
<div class="o-row">
    <div class="o-col">
        Level 1: .o-col

        <div class="o-row">
            <div class="o-col-8 o-col-6@sm">
                Level 2: .o-col-8 .o-col-6@sm
            </div>

            <div class="o-col-4 o-col-6@sm">
                Level 2: .o-col-4 .o-col-6@sm
            </div>
        </div>
    </div>
</div>
```

## List Objects

### List bare

Strip list-like appearance from lists by removing their bullets and any indentation.

| You don't need item-class everywhere                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------- |
| Declaring the item-class might not be necessary everywhere, but it is, for example, in `<dl>` lists for the `<dd>` childs. |

```html
<ul class="o-list-bare">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```


```html
<ul class="o-list-bare">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

### List inline

The list-inline object displays a list of items in one line.


```html
<ul class="o-list-inline">
    <li class="o-list-inline__item">Item 1</li>
    <li class="o-list-inline__item">Item 2</li>
    <li class="o-list-inline__item">Item 3</li>
</ul>
```


```scss
.list {
    @extend .o-list-inline;
}

.list__item {
    @extend .o-list-inline__item;
}
```

# Content


---

## Reset

Reset is a collection of element-specific CSS changes to provide an elegant, consistent, and simple baseline to build upon.

| Normalize.css                                                                             |
| ----------------------------------------------------------------------------------------- |
| We build our reset styles upon [normalize.css](https://necolas.github.io/normalize.css/). |

### Approach

Here are our guidelines and reasons for choosing what to override in our reset files:

* Update some browser default values to use `rem` instead of `em` for scalable component spacing.
* Avoid `margin-top`. Vertical margins can collapse, yielding unexpected results. More importantly, though, a single direction of margin is a simpler mental model.
* For easier scaling across device sizes, block elements should use `rem` for margins.
* Keep declarations of font-related properties to a minimum, using `inherit` whenever possible.

### Page Defaults

The `<body>` element is updated to provide better page-wide defaults. More specifically:

* The `box-sizing` is globally set on every element, including `*::before` and `*::after`, to `border-box`. This ensures that the declared width of the element is never exceeded due to padding or border.
* Base `font-size` is declared on the `<html>` element, `16px` on desktop and `14px` for devices below `768px`. We recommend using `rem` values on other elements for easier responsive type-scaling via media queries while respecting user preferences and ensuring a more accessible approach.
* The `<html>` also sets a global `font-family` and `line-height`. This is inherited later by some elements to prevent font inconsistencies.
* We use a “native font stack” for optimum text rendering on every device and OS. Read more about native font stacks in this [Smashing Magazine article](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/).

### Spacing

We avoid using `margin-top`. Vertical margins can collapse, yielding unexpected results. More importantly though, a single direction of margin is a simpler mental model.


```scss
address,
h1, h2, h3, h4, h5, h6,
blockquote, p, pre,
dl, ol, ul,
figure,
hr,
table,
fieldset {
    margin-bottom: $spacer-base;
}
```


A lot of elements have their `margin-bottom` inherited from `settings/_spacing.scss`. Change `$spacer-base` variable to updated base value.


```scss
$spacer-base: 1.25rem;
```

## Typography

Documentation and examples for Fjaka typography, including global settings, headings, body text, and more.

### Native Font Stack

We use a “native font stack” for optimum text rendering on every device and OS. Read more about native font stacks in this [Smashing Magazine article](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/).


```scss
$font-family-base:
    /* Safari for OS X and iOS (San Francisco) */
    -apple-system,
    /* Chrome < 56 for OS X (San Francisco) */
    'BlinkMacSystemFont',
    /* Windows */
    'Segoe UI',
    /* Android */
    'Roboto',
    /* Basic web fallback */
    'Helvetica Neue','Arial', sans-serif,
    /* Emoji fonts */
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !default;
```


This `font-family` is applied to the `<html>` and automatically inherited globally throughout Fjaka. To switch the global `font-family`, update `$font-family-base` in `settings/_typography.scss`.

### Responsive Typography

Responsive typography refers to scaling text and components by simply adjusting the root element’s `font-size` within a series of media queries. Fjaka doesn't do this for you, but it’s pretty easy to add breakpoints if you need them.


Here’s an example of it in practice. Choose whatever `font-size` and media queries you wish.


```scss
html {
    font-size: 14px;

    @include media-breakpoint-up( md ) {
        font-size: 16px;
    }

    @include media-breakpoint-up( lg ) {
        font-size: 20px;
    }
}
```

### Headings and Paragraphs

All heading elements (`<h1>` - `<h6>`) and `<p>` are reset to have their `margin-top` removed. Headings and paragraphs have `margin-bottom` added for easier spacing.

You can change the heading `font-size` in `settings/_typography.scss`. Look for the `$font-sizes-headings` map.


```scss
$font-sizes-headings: (
    h1: 2.25rem,
    h2: 1.75rem,
    h3: 1.5rem,
    h4: 1.25rem,
    h5: 1.125rem,
    h6: 1rem,
) !default;
```

## Images

Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements).

Images in Fjaka are made responsive by default. `max-width: 100%;` is applied to the image so that it scales with the parent element.


```scss
img,
svg {
    max-width: 100%;
    vertical-align: middle;
}
```

# Components


---

The component is a concrete, implementation-specific piece of UI. All of the changes you make to its styles should be detectable in your current context.

## Hamburger Icon

The hamburger is a button component placed typically in a top corner of a website. You can use it as an offcanvas toggle or as a toggle for something else.

### HTML

```html
<button class="c-hamburger-icon c-hamburger-icon--slider js-hamburger-icon" type="button">
    <span class="c-hamburger-icon__box">
        <span class="c-hamburger-icon__inner"></span>
    </span>
</button>
```

| JavaScript hook and variation class needed                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.js-hamburger-icon` hook make our icon interactive. Furthermore, we want to make our icon extendible. To make that possible, we always need to add some variation class next to `.c-hamburger-icon`. |

### Variations

By default, there’s only one variation (modifier class) available:

| Name   | Class                       |
| ------ | --------------------------- |
| Slider | `.c-hamburger-icon--slider` |

Feel free to add more variations; all you need to do is to duplicate `--slider` variation and create a new one with a new name.

## Offcanvas

Offcanvas panels are positioned outside of the viewport and slide in when activated. Setting up an offcanvas layout in Fjaka is super easy.

### HTML

```html
<div class="c-offcanvas">
    <div class="c-offcanvas__inner">
        <!-- Your content goes here -->
    </div>
</div>

<button class="js-offcanvas-toggle" type="button">Toggle</button>
```

| Add offcanvas HTML markup below the opening `<body>` tag                                    |
| ------------------------------------------------------------------------------------------- |
| We strongly recommend you add offcanvas HTML markup immediately after opening `<body>` tag. |



| Add JavaScript hook to toggle offcanvas                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| You have to add `.js-offcanvas-toggle` hook on any element you want to toggle your offcanvas. We recommend using the hamburger icon component with offcanvas. The offcanvas toggle can be placed anywhere on your page. |

# Utilities


---

Utility classes have a specific role (often providing only one declaration) and should not be bound to or changed. They can be reused and are not tied to any particular UI piece.

## Layout

### Display

Utilities for controlling the display box type of an element.

| Class          | Properties               |
| -------------- | ------------------------ |
| u-block        | `display: block;`        |
| u-inline-block | `display: inline-block;` |
| u-inline       | `display: inline;`       |
| u-hidden       | `display: none;`         |
| u-flex         | `display: flex;`         |
| u-inline-flex  | `display: inline-flex;`  |



| Display classes are responsive                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fjaka uses an intuitive `@<breakpoint>` (e.g. `@lg`) suffix that makes it easy to notice responsive classes in your markup while keeping the original class name recognizable and intact.For example, if you want to apply `.u-block` on large screens, breakpoint, and up, you'll use this class: `.u-block@lg`. |

### Floats

Utilities for controlling the wrapping of content around an element.

| Class         | Properties      |
| ------------- | --------------- |
| u-float-right | `float: right;` |
| u-float-left  | `float: left;`  |
| u-float-none  | `float: none;`  |



| Float classes are responsive                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fjaka uses an intuitive `@<breakpoint>` (e.g. `@lg`) suffix that makes it easy to notice responsive classes in your markup while keeping the original class name recognizable and intact.For example, if you want to apply `.u-float-right` on large screens, breakpoint, and up, you'll use this class: `.u-float-right@lg`. |

### Overflow

Utilities for controlling how an element handles content that is too large for the container.

| Class               | Properties            |
| ------------------- | --------------------- |
| u-overflow-auto     | `overflow: auto;`     |
| u-overflow-hidden   | `overflow: hidden;`   |
| u-overflow-visible  | `overflow: visible;`  |
| u-overflow-scroll   | `overflow: scroll;`   |
| u-overflow-x-scroll | `overflow-x: scroll;` |
| u-overflow-y-scroll | `overflow-y: scroll;` |

### Position

Utilities for controlling how an element is positioned in the DOM.

| Class      | Properties            |
| ---------- | --------------------- |
| u-static   | `position: static;`   |
| u-fixed    | `position: fixed;`    |
| u-absolute | `position: absolute;` |
| u-relative | `position: relative;` |
| u-sticky   | `position: sticky;`   |
| u-pin-t    | `top: 0;`             |
| u-pin-r    | `right: 0;`           |
| u-pin-b    | `bottom: 0;`          |
| u-pin-l    | `left: 0;`            |

## Typography

### Text Color

Utilities for controlling the text color of an element.

| Class            | Properties                        |
| ---------------- | --------------------------------- |
| u-text-primary   | `color: color( primary );`        |
| u-text-secondary | `color: color( secondary );`      |
| u-text-black     | `color: color( extra, black );`   |
| u-text-white     | `color: color( extra, white );`   |
| u-text-links     | `color: color( extra, white );`   |
| u-text-success   | `color: color( extra, success );` |
| u-text-info      | `color: color( extra, info );`    |
| u-text-warning   | `color: color( extra, warning );` |
| u-text-error     | `color: color( extra, error );`   |



| Text color classes are customizable                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Text color utilities are auto-generated; you can modify and add or remove colors in `$color-primary`, `$color-secondary` and `$color-extra` maps inside `settings/_colors.scss` file. |

### Font Size

Utilities for controlling the font size of an element.

| Class       | Properties             |
| ----------- | ---------------------- |
| u-h1        | `font-size: 2.25rem;`  |
| u-h2        | `font-size: 1.75rem;`  |
| u-h3        | `font-size: 1.5rem;`   |
| u-h4        | `font-size: 1.25rem;`  |
| u-h5        | `font-size: 1.125rem;` |
| u-h6        | `font-size: 1rem;`     |
| u-text-xs   | `font-size: .75rem;`   |
| u-text-sm   | `font-size: .875rem;`  |
| u-text-base | `font-size: 1rem;`     |

### Style and Decoration

Utilities for controlling the style of text.

| Class       | Properties                   |
| ----------- | ---------------------------- |
| u-italic    | `font-style: italic;`        |
| u-roman     | `font-style: normal;`        |
| u-uppercase | `text-transform: uppercase;` |

### Text Alignment

Utilities for controlling the alignment of text.

| Class         | Properties            |
| ------------- | --------------------- |
| u-text-left   | `text-align: left;`   |
| u-text-center | `text-align: center;` |
| u-text-right  | `text-align: right;`  |



| Text alignment classes are responsive                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fjaka uses an intuitive `@<breakpoint>` (e.g. `@lg`) suffix that makes it easy to notice responsive classes in your markup while keeping the original class name recognizable and intact.For example, if you want to apply `.u-text-center` on large screens, breakpoint, and up, you'll use this class: `.u-text-center@lg`. |

## Backgrounds

### Background Color

Utilities for controlling an element's background color.

| Class          | Properties                                   |
| -------------- | -------------------------------------------- |
| u-bg-primary   | `background-color: color( primary );`        |
| u-bg-secondary | `background-color: color( secondary );`      |
| u-bg-black     | `background-color: color( extra, black );`   |
| u-bg-white     | `background-color: color( extra, white );`   |
| u-bg-links     | `background-color: color( extra, links );`   |
| u-bg-success   | `background-color: color( extra, success );` |
| u-bg-info      | `background-color: color( extra, info );`    |
| u-bg-warning   | `background-color: color( extra, warning );` |
| u-bg-error     | `background-color: color( extra, error );`   |



| Background color classes are customizable                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Background color utilities are auto-generated; you can modify and add or remove colors in `$color-primary`, `$color-secondary `and `$color-extra` maps inside `settings/_colors.scss` file. |

### Background Position

Utilities for controlling the position of an element's background image.

| Class             | Properties                           |
| ----------------- | ------------------------------------ |
| u-bg-bottom       | `background-position: bottom;`       |
| u-bg-center       | `background-position: center;`       |
| u-bg-left         | `background-position: left;`         |
| u-bg-left-bottom  | `background-position: left bottom;`  |
| u-bg-left-top     | `background-position: left top;`     |
| u-bg-right        | `background-position: right;`        |
| u-bg-right-bottom | `background-position: right bottom;` |
| u-bg-right-top    | `background-position: right top;`    |
| u-bg-top          | `background-position: top;`          |

## Flexbox

### Align Items

Utilities for controlling how flex items are positioned along a container's cross-axis.

| Class            | Properties                 |
| ---------------- | -------------------------- |
| u-items-stretch  | `align-items: stretch;`    |
| u-items-start    | `align-items: flex-start;` |
| u-items-center   | `align-items: center;`     |
| u-items-end      | `align-items: flex-end;`   |
| u-items-baseline | `align-items: baseline;`   |

### Align Content

Utilities for controlling how lines are positioned in multi-line flex containers.

| Class             | Properties                      |
| ----------------- | ------------------------------- |
| u-content-start   | `align-content: flex-start;`    |
| u-content-center  | `align-content: center;`        |
| u-content-end     | `align-content: flex-end;`      |
| u-content-between | `align-content: space-between;` |
| u-content-around  | `align-content: space-around;`  |

### Justify Content

Utilities for controlling flex items are positioned along a container's main axis.

| Class             | Properties                        |
| ----------------- | --------------------------------- |
| u-justify-start   | `justify-content: flex-start;`    |
| u-justify-center  | `justify-content: center;`        |
| u-justify-end     | `justify-content: flex-end;`      |
| u-justify-between | `justify-content: space-between;` |
| u-justify-around  | `justify-content: space-around;`  |

### Order

Utilities for controlling how flex items are ordered in a container.

| Class      | Properties   |
| ---------- | ------------ |
| u-order-1  | `order: 1;`  |
| u-order-2  | `order: 2;`  |
| u-order-3  | `order: 3;`  |
| u-order-4  | `order: 4;`  |
| u-order-5  | `order: 5;`  |
| u-order-6  | `order: 6;`  |
| u-order-7  | `order: 7;`  |
| u-order-8  | `order: 8;`  |
| u-order-9  | `order: 9;`  |
| u-order-10 | `order: 10;` |
| u-order-11 | `order: 11;` |
| u-order-12 | `order: 12;` |

## Spacing

### Margin and Padding

Utilities for controlling an element's padding and margin.


Control an element's padding and margin using the `.u-p{side?}-{size}`, `.u-m{side?}-{size}`, and `.u-m{side?}-neg-{size}` utilities.


For example, `.u-pt-2` would add `1.25rem` of padding to the top of the element, `.u-mx-0` would make the horizontal margin zero, and `.u-mb-neg-6` would add a `3.75rem` negative margin to the bottom of an element.

| Class                     | Side (Optional)                                                                                   | Space (Optional)                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| p — Padding<br>m — Margin | All (Default)<br>t — Top<br>r — Right<br>b — Bottom<br>l — Left<br>x — Horizontal<br>y — Vertical | 0 — 0<br>1 — .625rem (10px)<br>2 — 1.25rem (20px)<br>3 — 1.875rem (30px)<br>...<br>auto — auto (Margins only) |



| Spacing classes are customizable                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| Spacing utilities are auto-generated; you can modify and add or remove sizes in `$spacers` map inside `settings/_spacing.scss` file. |

## Other

### SVG

Utilities for styling SVG elements.

| Class            | Properties              |
| ---------------- | ----------------------- |
| u-fill-current   | `fill: currentColor;`   |
| u-stroke-current | `stroke: currentColor;` |


