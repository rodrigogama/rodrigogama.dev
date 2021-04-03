export default `
/*! /* TABLE OF CONTENTS 1. External Library Includes - Normalize.css | http://normalize.css.github.io 2. Tachyons Modules 3. Variables - Media Queries - Colors 4. Debugging - Debug all - Debug children */
/* External Library Includes */
/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */
/* Document ========================================================================== */
/** 1. Correct the line height in all browsers. 2. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS. */
html { line-height: 1.15; /* 1 */ -ms-text-size-adjust: 100%; /* 2 */ -webkit-text-size-adjust: 100%; /* 2 */ }

/* Sections ========================================================================== */
/** Remove the margin in all browsers (opinionated). */
body { margin: 0; }

/** Add the correct display in IE 9-. */
article, aside, footer, header, nav, section { display: block; }

/** Correct the font size and margin on 'h1' elements within 'section' and 'article' contexts in Chrome, Firefox, and Safari. */
h1 { font-size: 2em; margin: .67em 0; }

/* Grouping content ========================================================================== */
/** Add the correct display in IE 9-. 1. Add the correct display in IE. */
figcaption, figure, main { /* 1 */ display: block; }

/** Add the correct margin in IE 8. */
figure { margin: 1em 40px; }

/** 1. Add the correct box sizing in Firefox. 2. Show the overflow in Edge and IE. */
hr { box-sizing: content-box; /* 1 */ height: 0; /* 1 */ overflow: visible; /* 2 */ }

/** 1. Correct the inheritance and scaling of font size in all browsers. 2. Correct the odd 'em' font sizing in all browsers. */
pre { font-family: monospace, monospace; /* 1 */ font-size: 1em; /* 2 */ }

/* Text-level semantics ========================================================================== */
/** 1. Remove the gray background on active links in IE 10. 2. Remove gaps in links underline in iOS 8+ and Safari 8+. */
a { background-color: transparent; /* 1 */ -webkit-text-decoration-skip: objects; /* 2 */ }

/** 1. Remove the bottom border in Chrome 57- and Firefox 39-. 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari. */
abbr[title] { border-bottom: none; /* 1 */ text-decoration: underline; /* 2 */ text-decoration: underline dotted; /* 2 */ }

/** Prevent the duplicate application of 'bolder' by the next rule in Safari 6. */
b, strong { font-weight: inherit; }

/** Add the correct font weight in Chrome, Edge, and Safari. */
b, strong { font-weight: bolder; }

/** 1. Correct the inheritance and scaling of font size in all browsers. 2. Correct the odd 'em' font sizing in all browsers. */
code, kbd, samp { font-family: monospace, monospace; /* 1 */ font-size: 1em; /* 2 */ }

/** Add the correct font style in Android 4.3-. */
dfn { font-style: italic; }

/** Add the correct background and color in IE 9-. */
mark { background-color: #ff0; color: #000; }

/** Add the correct font size in all browsers. */
small { font-size: 80%; }

/** Prevent 'sub' and 'sup' elements from affecting the line height in all browsers. */
sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }

sub { bottom: -0.25em; }

sup { top: -0.5em; }

/* Embedded content ========================================================================== */
/** Add the correct display in IE 9-. */
audio, video { display: inline-block; }

/** Add the correct display in iOS 4-7. */
audio:not([controls]) { display: none; height: 0; }

/** Remove the border on images inside links in IE 10-. */
img { border-style: none; }

/** Hide the overflow in IE. */
svg:not(:root) { overflow: hidden; }

/* Forms ========================================================================== */
/** 1. Change the font styles in all browsers (opinionated). 2. Remove the margin in Firefox and Safari. */
button, input, optgroup, select, textarea { font-family: sans-serif; /* 1 */ font-size: 100%; /* 1 */ line-height: 1.15; /* 1 */ margin: 0; /* 2 */ }

/** Show the overflow in IE. 1. Show the overflow in Edge. */
button, input { /* 1 */ overflow: visible; }

/** Remove the inheritance of text transform in Edge, Firefox, and IE. 1. Remove the inheritance of text transform in Firefox. */
button, select { /* 1 */ text-transform: none; }

/** 1. Prevent a WebKit bug where (2) destroys native 'audio' and 'video' controls in Android 4. 2. Correct the inability to style clickable types in iOS and Safari. */
button, html [type="button"], [type="reset"], [type="submit"] { -webkit-appearance: button; /* 2 */ }

/** Remove the inner border and padding in Firefox. */
button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner { border-style: none; padding: 0; }

/** Restore the focus styles unset by the previous rule. */
button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring { outline: 1px dotted ButtonText; }

/** Correct the padding in Firefox. */
fieldset { padding: .35em .75em .625em; }

/** 1. Correct the text wrapping in Edge and IE. 2. Correct the color inheritance from 'fieldset' elements in IE. 3. Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers. */
legend { box-sizing: border-box; /* 1 */ color: inherit; /* 2 */ display: table; /* 1 */ max-width: 100%; /* 1 */ padding: 0; /* 3 */ white-space: normal; /* 1 */ }

/** 1. Add the correct display in IE 9-. 2. Add the correct vertical alignment in Chrome, Firefox, and Opera. */
progress { display: inline-block; /* 1 */ vertical-align: baseline; /* 2 */ }

/** Remove the default vertical scrollbar in IE. */
textarea { overflow: auto; }

/** 1. Add the correct box sizing in IE 10-. 2. Remove the padding in IE 10-. */
[type="checkbox"], [type="radio"] { box-sizing: border-box; /* 1 */ padding: 0; /* 2 */ }

/** Correct the cursor style of increment and decrement buttons in Chrome. */
[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button { height: auto; }

/** 1. Correct the odd appearance in Chrome and Safari. 2. Correct the outline style in Safari. */
[type="search"] { -webkit-appearance: textfield; /* 1 */ outline-offset: -2px; /* 2 */ }

/** Remove the inner padding and cancel buttons in Chrome and Safari on macOS. */
[type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration { -webkit-appearance: none; }

/** 1. Correct the inability to style clickable types in iOS and Safari. 2. Change font properties to 'inherit' in Safari. */
::-webkit-file-upload-button { -webkit-appearance: button; /* 1 */ font: inherit; /* 2 */ }

/* Interactive ========================================================================== */
/* Add the correct display in IE 9-. 1. Add the correct display in Edge, IE, and Firefox. */
details, menu { display: block; }

/* Add the correct display in all browsers. */
summary { display: list-item; }

/* Scripting ========================================================================== */
/** Add the correct display in IE 9-. */
canvas { display: inline-block; }

/** Add the correct display in IE. */
template { display: none; }

/* Hidden ========================================================================== */
/** Add the correct display in IE 10-. */
[hidden] { display: none; }

/* Modules */
/*

  BOX SIZING

*/
html, body, div, article, aside, section, main, nav, footer, header, form, fieldset, legend, pre, code, a, h1, h2, h3, h4, h5, h6, p, ul, ol, li, dl, dt, dd, blockquote, figcaption, figure, textarea, table, td, th, tr, input[type="email"], input[type="number"], input[type="password"], input[type="tel"], input[type="text"], input[type="url"], .border-box { box-sizing: border-box; }

/*

   ASPECT RATIOS

*/
/* This is for fluid media that is embedded from third party sites like youtube, vimeo etc. Wrap the outer element in aspect-ratio and then extend it with the desired ratio i.e Make sure there are no height and width attributes on the embedded media. Adapted from: https://github.com/suitcss/components-flex-embed Example: <div class="aspect-ratio aspect-ratio--16x9"> <iframe class="aspect-ratio--object"></iframe> </div> */
.aspect-ratio { height: 0; position: relative; }

.aspect-ratio--16x9 { padding-bottom: 56.25%; }

.aspect-ratio--9x16 { padding-bottom: 177.77%; }

.aspect-ratio--4x3 { padding-bottom: 75%; }

.aspect-ratio--3x4 { padding-bottom: 133.33%; }

.aspect-ratio--6x4 { padding-bottom: 66.6%; }

.aspect-ratio--4x6 { padding-bottom: 150%; }

.aspect-ratio--8x5 { padding-bottom: 62.5%; }

.aspect-ratio--5x8 { padding-bottom: 160%; }

.aspect-ratio--7x5 { padding-bottom: 71.42%; }

.aspect-ratio--5x7 { padding-bottom: 140%; }

.aspect-ratio--1x1 { padding-bottom: 100%; }

.aspect-ratio--object { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }

/*

   IMAGES
   Docs: http://tachyons.io/docs/elements/images/

*/
/* Responsive images! */
img { max-width: 100%; }

/*

   BACKGROUND SIZE
   Docs: http://tachyons.io/docs/themes/background-size/

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
/* Often used in combination with background image set as an inline style on an html element. */
.cover { background-size: cover !important; }

.contain { background-size: contain !important; }

/* BACKGROUND POSITION Base: bg = background Modifiers: -center = center center -top = top center -right = center right -bottom = bottom center -left = center left Media Query Extensions: -ns = not-small -m  = medium -l  = large */
.bg-center { background-repeat: no-repeat; background-position: center center; }

.bg-top { background-repeat: no-repeat; background-position: top center; }

.bg-right { background-repeat: no-repeat; background-position: center right; }

.bg-bottom { background-repeat: no-repeat; background-position: bottom center; }

.bg-left { background-repeat: no-repeat; background-position: center left; }

/*

   OUTLINES

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.outline { outline: 1px solid; }

.outline-transparent { outline: 1px solid transparent; }

.outline-0 { outline: 0; }

/*

    BORDERS
    Docs: http://tachyons.io/docs/themes/borders/

    Base:
      b = border

    Modifiers:
      a = all
      t = top
      r = right
      b = bottom
      l = left
      n = none

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.ba { border-style: solid; border-width: 1px; }

.bt { border-top-style: solid; border-top-width: 1px; }

.br { border-right-style: solid; border-right-width: 1px; }

.bb { border-bottom-style: solid; border-bottom-width: 1px; }

.bl { border-left-style: solid; border-left-width: 1px; }

.bn { border-style: none; border-width: 0; }

/*

   BORDER COLORS
   Docs: http://tachyons.io/docs/themes/borders/

   Border colors can be used to extend the base
   border classes ba,bt,bb,br,bl found in the _borders.css file.

   The base border class by default will set the color of the border
   to that of the current text color. These classes are for the cases
   where you desire for the text and border colors to be different.

   Base:
     b = border

   Modifiers:
   --color-name = each color variable name is also a border color name

*/
.b--black { border-color: #000; }

.b--near-black { border-color: #111; }

.b--dark-gray { border-color: #333; }

.b--mid-gray { border-color: #555; }

.b--gray { border-color: #777; }

.b--silver { border-color: #999; }

.b--light-silver { border-color: #aaa; }

.b--moon-gray { border-color: #ccc; }

.b--light-gray { border-color: #eee; }

.b--near-white { border-color: #f4f4f4; }

.b--white { border-color: #fff; }

.b--white-90 { border-color: rgba(255, 255, 255, 0.9); }

.b--white-80 { border-color: rgba(255, 255, 255, 0.8); }

.b--white-70 { border-color: rgba(255, 255, 255, 0.7); }

.b--white-60 { border-color: rgba(255, 255, 255, 0.6); }

.b--white-50 { border-color: rgba(255, 255, 255, 0.5); }

.b--white-40 { border-color: rgba(255, 255, 255, 0.4); }

.b--white-30 { border-color: rgba(255, 255, 255, 0.3); }

.b--white-20 { border-color: rgba(255, 255, 255, 0.2); }

.b--white-10 { border-color: rgba(255, 255, 255, 0.1); }

.b--white-05 { border-color: rgba(255, 255, 255, 0.05); }

.b--white-025 { border-color: rgba(255, 255, 255, 0.025); }

.b--white-0125 { border-color: rgba(255, 255, 255, 0.0125); }

.b--black-90 { border-color: rgba(0, 0, 0, 0.9); }

.b--black-80 { border-color: rgba(0, 0, 0, 0.8); }

.b--black-70 { border-color: rgba(0, 0, 0, 0.7); }

.b--black-60 { border-color: rgba(0, 0, 0, 0.6); }

.b--black-50 { border-color: rgba(0, 0, 0, 0.5); }

.b--black-40 { border-color: rgba(0, 0, 0, 0.4); }

.b--black-30 { border-color: rgba(0, 0, 0, 0.3); }

.b--black-20 { border-color: rgba(0, 0, 0, 0.2); }

.b--black-10 { border-color: rgba(0, 0, 0, 0.1); }

.b--black-05 { border-color: rgba(0, 0, 0, 0.05); }

.b--black-025 { border-color: rgba(0, 0, 0, 0.025); }

.b--black-0125 { border-color: rgba(0, 0, 0, 0.0125); }

.b--dark-red { border-color: #e7040f; }

.b--red { border-color: #ff4136; }

.b--light-red { border-color: #ff725c; }

.b--orange { border-color: #ff6300; }

.b--gold { border-color: #ffb700; }

.b--yellow { border-color: #ffd700; }

.b--light-yellow { border-color: #fbf1a9; }

.b--purple { border-color: #5e2ca5; }

.b--light-purple { border-color: #a463f2; }

.b--dark-pink { border-color: #d5008f; }

.b--hot-pink { border-color: #ff41b4; }

.b--pink { border-color: #ff80cc; }

.b--light-pink { border-color: #ffa3d7; }

.b--dark-green { border-color: #137752; }

.b--green { border-color: #19a974; }

.b--light-green { border-color: #9eebcf; }

.b--navy { border-color: #001b44; }

.b--dark-blue { border-color: #00449e; }

.b--blue { border-color: #357edd; }

.b--light-blue { border-color: #96ccff; }

.b--lightest-blue { border-color: #cdecff; }

.b--washed-blue { border-color: #f6fffe; }

.b--washed-green { border-color: #e8fdf5; }

.b--washed-yellow { border-color: #fffceb; }

.b--washed-red { border-color: #ffdfdf; }

.b--transparent { border-color: transparent; }

.b--inherit { border-color: inherit; }

.b--crowd { border-color: #8060f7; }

/*

   BORDER RADIUS
   Docs: http://tachyons.io/docs/themes/border-radius/

   Base:
     br   = border-radius

   Modifiers:
     0    = 0/none
     1    = 1st step in scale
     2    = 2nd step in scale
     3    = 3rd step in scale
     4    = 4th step in scale

   Literal values:
     -100 = 100%
     -pill = 9999px

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.br0 { border-radius: 0; }

.br1 { border-radius: .125rem; }

.br2 { border-radius: .25rem; }

.br3 { border-radius: .5rem; }

.br4 { border-radius: 1rem; }

.br-100 { border-radius: 100%; }

.br-pill { border-radius: 9999px; }

.br--bottom { border-top-left-radius: 0; border-top-right-radius: 0; }

.br--top { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }

.br--right { border-top-left-radius: 0; border-bottom-left-radius: 0; }

.br--left { border-top-right-radius: 0; border-bottom-right-radius: 0; }

.br--right-only { border-top-left-radius: 0; border-bottom-left-radius: 0; border-top-right-radius: 0; }

/* BORDER STYLES Docs: http://tachyons.io/docs/themes/borders/ Depends on base border module in _borders.css Base: b = border-style Modifiers: --none   = none --dotted = dotted --dashed = dashed --solid  = solid Media Query Extensions: -ns = not-small -m  = medium -l  = large */
.b--dotted { border-style: dotted; }

.b--dashed { border-style: dashed; }

.b--solid { border-style: solid; }

.b--none { border-style: none; }

/*

   BORDER WIDTHS
   Docs: http://tachyons.io/docs/themes/borders/

   Base:
     bw = border-width

   Modifiers:
     0 = 0 width border
     1 = 1st step in border-width scale
     2 = 2nd step in border-width scale
     3 = 3rd step in border-width scale
     4 = 4th step in border-width scale
     5 = 5th step in border-width scale

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.bw0 { border-width: 0; }

.bw1 { border-width: .125rem; }

.bw2 { border-width: .25rem; }

.bw3 { border-width: .5rem; }

.bw4 { border-width: 1rem; }

.bw5 { border-width: 2rem; }

/* Resets */
.bt-0 { border-top-width: 0; }

.br-0 { border-right-width: 0; }

.bb-0 { border-bottom-width: 0; }

.bl-0 { border-left-width: 0; }

/* BOX-SHADOW Docs: http://tachyons.io/docs/themes/box-shadow/ Media Query Extensions: -ns = not-small -m  = medium -l  = large */
.shadow-1 { box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2); }

.shadow-2 { box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2); }

.shadow-3 { box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2); }

.shadow-4 { box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2); }

.shadow-5 { box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2); }

.shadow-soft { box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }

.shadow-text { text-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }

/*

   CODE

*/
.pre { overflow-x: auto; overflow-y: hidden; overflow: scroll; }

/*

   COORDINATES
   Docs: http://tachyons.io/docs/layout/position/

   Use in combination with the position module.

   Base:
     top
     bottom
     right
     left

   Modifiers:
     -0  = literal value 0
     -1  = literal value 1
     -2  = literal value 2
     --1 = literal value -1
     --2 = literal value -2

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.top-0 { top: 0; }

.right-0 { right: 0; }

.bottom-0 { bottom: 0; }

.left-0 { left: 0; }

.top-1 { top: 1rem; }

.right-1 { right: 1rem; }

.right-4 { right: 4rem; }

.right-50 { right: 50%; }

.bottom-1 { bottom: 1rem; }

.left-1 { left: 1rem; }

.top-2 { top: 2rem; }

.right-2 { right: 2rem; }

.bottom-2 { bottom: 2rem; }

.left-2 { left: 2rem; }

.top--1 { top: -1rem; }

.right--1 { right: -1rem; }

.bottom--1 { bottom: -1rem; }

.left--1 { left: -1rem; }

.top--2 { top: -2rem; }

.right--2 { right: -2rem; }

.bottom--2 { bottom: -2rem; }

.left--2 { left: -2rem; }

.absolute--fill { top: 0; right: 0; bottom: 0; left: 0; }

.right-19 { right: 19.25%; }

.left-15 { left: 15%; }

.left-30 { left: 26.5%; }

.left-50 { left: 50%; }

.left-70 { left: 70%; }

/*

   CLEARFIX
   http://tachyons.io/docs/layout/clearfix/

*/
/* Nicolas Gallaghers Clearfix solution Ref: http://nicolasgallagher.com/micro-clearfix-hack/ */
.cf:before, .cf:after { content: " "; display: table; }

.cf:after { clear: both; }

.cf { *zoom: 1; }

.cl { clear: left; }

.cr { clear: right; }

.cb { clear: both; }

.cn { clear: none; }

/*

   DISPLAY
   Docs: http://tachyons.io/docs/layout/display

   Base:
    d = display

   Modifiers:
    n     = none
    b     = block
    ib    = inline-block
    it    = inline-table
    t     = table
    tc    = table-cell
    t-row          = table-row
    t-columm       = table-column
    t-column-group = table-column-group

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.dn { display: none; }

.di { display: inline; }

.db { display: block; }

.dib { display: inline-block; }

.dit { display: inline-table; }

.dt { display: table; }

.dtc { display: table-cell; }

.dt-row { display: table-row; }

.dt-row-group { display: table-row-group; }

.dt-column { display: table-column; }

.dt-column-group { display: table-column-group; }

/* This will set table to full width and then all cells will be equal width */
.dt--fixed { table-layout: fixed; width: 100%; }

/*

  FLEXBOX

  Media Query Extensions:
   -ns = not-small
   -m  = medium
   -l  = large

*/
.flex { display: -webkit-box; display: -ms-flexbox; display: flex; }

.inline-flex { display: -webkit-inline-box; display: -ms-inline-flexbox; display: inline-flex; }

/* 1. Fix for Chrome 44 bug. https://code.google.com/p/chromium/issues/detail?id=506893 */
.flex-auto { -webkit-box-flex: 1; -ms-flex: 1 1 auto; flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }

.flex-none { -webkit-box-flex: 0; -ms-flex: none; flex: none; }

.flex-column { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; }

.flex-row { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; }

.flex-wrap { -ms-flex-wrap: wrap; flex-wrap: wrap; }

.flex-nowrap { -ms-flex-wrap: nowrap; flex-wrap: nowrap; }

.flex-wrap-reverse { -ms-flex-wrap: wrap-reverse; flex-wrap: wrap-reverse; }

.flex-column-reverse { -webkit-box-orient: vertical; -webkit-box-direction: reverse; -ms-flex-direction: column-reverse; flex-direction: column-reverse; }

.flex-row-reverse { -webkit-box-orient: horizontal; -webkit-box-direction: reverse; -ms-flex-direction: row-reverse; flex-direction: row-reverse; }

.items-start { -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start; }

.items-end { -webkit-box-align: end; -ms-flex-align: end; align-items: flex-end; }

.items-center { -webkit-box-align: center; -ms-flex-align: center; align-items: center; }

.items-baseline { -webkit-box-align: baseline; -ms-flex-align: baseline; align-items: baseline; }

.items-stretch { -webkit-box-align: stretch; -ms-flex-align: stretch; align-items: stretch; }

.self-start { -ms-flex-item-align: start; align-self: flex-start; }

.self-end { -ms-flex-item-align: end; align-self: flex-end; }

.self-center { -ms-flex-item-align: center; -ms-grid-row-align: center; align-self: center; }

.self-baseline { -ms-flex-item-align: baseline; align-self: baseline; }

.self-stretch { -ms-flex-item-align: stretch; -ms-grid-row-align: stretch; align-self: stretch; }

.justify-start { -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; }

.justify-end { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; }

.justify-center { -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; }

.justify-between { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; }

.justify-around { -ms-flex-pack: distribute; justify-content: space-around; }

.content-start { -ms-flex-line-pack: start; align-content: flex-start; }

.content-end { -ms-flex-line-pack: end; align-content: flex-end; }

.content-center { -ms-flex-line-pack: center; align-content: center; }

.content-between { -ms-flex-line-pack: justify; align-content: space-between; }

.content-around { -ms-flex-line-pack: distribute; align-content: space-around; }

.content-stretch { -ms-flex-line-pack: stretch; align-content: stretch; }

.order-0 { -webkit-box-ordinal-group: 1; -ms-flex-order: 0; order: 0; }

.order-1 { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1; }

.order-2 { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2; }

.order-3 { -webkit-box-ordinal-group: 4; -ms-flex-order: 3; order: 3; }

.order-4 { -webkit-box-ordinal-group: 5; -ms-flex-order: 4; order: 4; }

.order-5 { -webkit-box-ordinal-group: 6; -ms-flex-order: 5; order: 5; }

.order-6 { -webkit-box-ordinal-group: 7; -ms-flex-order: 6; order: 6; }

.order-7 { -webkit-box-ordinal-group: 8; -ms-flex-order: 7; order: 7; }

.order-8 { -webkit-box-ordinal-group: 9; -ms-flex-order: 8; order: 8; }

.order-last { -webkit-box-ordinal-group: 100000; -ms-flex-order: 99999; order: 99999; }

.flex-grow-0 { -webkit-box-flex: 0; -ms-flex-positive: 0; flex-grow: 0; }

.flex-grow-1 { -webkit-box-flex: 1; -ms-flex-positive: 1; flex-grow: 1; }

.flex-shrink-0 { -ms-flex-negative: 0; flex-shrink: 0; }

.flex-shrink-1 { -ms-flex-negative: 1; flex-shrink: 1; }

/*

   FLOATS
   http://tachyons.io/docs/layout/floats/

   1. Floated elements are automatically rendered as block level elements.
      Setting floats to display inline will fix the double margin bug in
      ie6. You know... just in case.

   2. Don't forget to clearfix your floats with .cf

   Base:
     f = float

   Modifiers:
     l = left
     r = right
     n = none

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.fl { float: left; }

.fr { float: right; }

.fn { float: none; }

/*

   FONT FAMILY GROUPS
   Docs: http://tachyons.io/docs/typography/font-family/

*/
.sans-serif { font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif; }

.serif { font-family: georgia, times, serif; }

.system-sans-serif { font-family: sans-serif; }

.system-serif { font-family: serif; }

/* Monospaced Typefaces (for code) */
/* From http://cssfontstack.com */
code, .code { font-family: Consolas, monaco, monospace; }

.courier { font-family: 'Courier Next', courier, monospace; }

/* Sans-Serif Typefaces */
.helvetica { font-family: 'helvetica neue', helvetica, sans-serif; }

.avenir { font-family: 'avenir next', avenir, sans-serif; }

/* Serif Typefaces */
.athelas { font-family: athelas, georgia, serif; }

.georgia { font-family: georgia, serif; }

.times { font-family: times, serif; }

.bodoni { font-family: "Bodoni MT", serif; }

.calisto { font-family: "Calisto MT", serif; }

.garamond { font-family: garamond, serif; }

.baskerville { font-family: baskerville, serif; }

/*

   FONT STYLE
   Docs: http://tachyons.io/docs/typography/font-style/

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.i { font-style: italic; }

.fs-normal { font-style: normal; }

/*

   FONT WEIGHT
   Docs: http://tachyons.io/docs/typography/font-weight/

   Base
     fw = font-weight

   Modifiers:
     1 = literal value 100
     2 = literal value 200
     3 = literal value 300
     4 = literal value 400
     5 = literal value 500
     6 = literal value 600
     7 = literal value 700
     8 = literal value 800
     9 = literal value 900

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.normal { font-weight: normal; }

.b { font-weight: bold; }

.fw1 { font-weight: 100; }

.fw2 { font-weight: 200; }

.fw3 { font-weight: 300; }

.fw4 { font-weight: 400; }

.fw5 { font-weight: 500; }

.fw6 { font-weight: 600; }

.fw7 { font-weight: 700; }

.fw8 { font-weight: 800; }

.fw9 { font-weight: 900; }

/*

   FORMS

*/
.input-reset { -webkit-appearance: none; -moz-appearance: none; }

.button-reset::-moz-focus-inner, .input-reset::-moz-focus-inner { border: 0; padding: 0; }

/*

   HEIGHTS
   Docs: http://tachyons.io/docs/layout/heights/

   Base:
     h = height
     min-h = min-height
     min-vh = min-height vertical screen height
     vh = vertical screen height

   Modifiers
     1 = 1st step in height scale
     2 = 2nd step in height scale
     3 = 3rd step in height scale
     4 = 4th step in height scale
     5 = 5th step in height scale

     -25   = literal value 25%
     -50   = literal value 50%
     -75   = literal value 75%
     -100  = literal value 100%

     -auto = string value of auto
     -inherit = string value of inherit

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
/* Height Scale */
.h1 { height: 1rem; }

.h2 { height: 2rem; }

.h2-5 { height: 3rem; }

.h3 { height: 4rem; }

.h3-4 { height: 6rem; }

.h4 { height: 8rem; }

.h5 { height: 16rem; }

/* Height Percentages - Based off of height of parent */
.h-25 { height: 25%; }

.h-50 { height: 50%; }

.h-75 { height: 75%; }

.h-100 { height: 100%; }

.h-125 { height: 125%; }

.min-h-100 { min-height: 100%; }

/* Screen Height Percentage */
.vh-25 { height: 25vh; }

.vh-50 { height: 50vh; }

.vh-75 { height: 75vh; }

.vh-100 { height: 100vh; }

.min-vh-100 { min-height: 100vh; }

/* String Properties */
.h-auto { height: auto; }

.h-inherit { height: inherit; }

/*

   LETTER SPACING
   Docs: http://tachyons.io/docs/typography/tracking/

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.tracked { letter-spacing: .1em; }

.tracked-tight { letter-spacing: -.05em; }

.tracked-mega { letter-spacing: .25em; }

/*

   LINE HEIGHT / LEADING
   Docs: http://tachyons.io/docs/typography/line-height

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.lh-solid { line-height: 1; }

.lh-title { line-height: 1.25; }

.lh-copy { line-height: 1.5; }

/*

   LINKS
   Docs: http://tachyons.io/docs/elements/links/

*/
.link { text-decoration: none; transition: color .15s ease-in; }

.link:link, .link:visited { transition: color .15s ease-in; }

.link:hover { transition: color .15s ease-in; }

.link:active { transition: color .15s ease-in; }

.link:focus { transition: color .15s ease-in; outline: 1px dotted currentColor; }

/*

   LISTS
   http://tachyons.io/docs/elements/lists/

*/
.list { list-style-type: none; }

/*

   MAX WIDTHS
   Docs: http://tachyons.io/docs/layout/max-widths/

   Base:
     mw = max-width

   Modifiers
     1 = 1st step in width scale
     2 = 2nd step in width scale
     3 = 3rd step in width scale
     4 = 4th step in width scale
     5 = 5th step in width scale
     6 = 6st step in width scale
     7 = 7nd step in width scale
     8 = 8rd step in width scale
     9 = 9th step in width scale

     -100 = literal value 100%

     -none  = string value none


   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
/* Max Width Percentages */
.mw-100 { max-width: 100%; }

/* Max Width Scale */
.mw1 { max-width: 1rem; }

.mw2 { max-width: 2rem; }

.mw3 { max-width: 4rem; }

.mw4 { max-width: 8rem; }

.mw5 { max-width: 16rem; }

.mw6 { max-width: 32rem; }

.mw7 { max-width: 48rem; }

.mw8 { max-width: 64rem; }

.mw9 { max-width: 96rem; }

/* Max Width String Properties */
.mw-none { max-width: none; }

/*

   WIDTHS
   Docs: http://tachyons.io/docs/layout/widths/

   Base:
     w = width

   Modifiers
     1 = 1st step in width scale
     2 = 2nd step in width scale
     3 = 3rd step in width scale
     4 = 4th step in width scale
     5 = 5th step in width scale

     -10  = literal value 10%
     -20  = literal value 20%
     -25  = literal value 25%
     -30  = literal value 30%
     -33  = literal value 33%
     -34  = literal value 34%
     -40  = literal value 40%
     -50  = literal value 50%
     -60  = literal value 60%
     -70  = literal value 70%
     -75  = literal value 75%
     -80  = literal value 80%
     -90  = literal value 90%
     -100 = literal value 100%

     -third      = 100% / 3 (Not supported in opera mini or IE8)
     -two-thirds = 100% / 1.5 (Not supported in opera mini or IE8)
     -auto       = string value auto


   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
/* Width Scale */
.w1 { width: 1rem; }

.w2 { width: 2rem; }

.w3 { width: 4rem; }

.w4 { width: 8rem; }

.w5 { width: 16rem; }

.w-0 { width: 0; }

.w-10 { width: 10%; }

.w-15 { width: 15%; }

.w-20 { width: 20%; }

.w-25 { width: 25%; }

.w-30 { width: 30%; }

.w-33 { width: 33%; }

.w-34 { width: 34%; }

.w-40 { width: 40%; }

.w-45 { width: 45%; }

.w-50 { width: 50%; }

.w-60 { width: 60%; }

.w-70 { width: 70%; }

.w-75 { width: 75%; }

.w-80 { width: 80%; }

.w-90 { width: 90%; }

.w-100 { width: 100%; }

.w-125 { width: 125%; }

.w-third { width: calc( 100% / 3); }

.w-two-thirds { width: calc( 100% / 1.5); }

.w-auto { width: auto; }

.vw-90 { width: 90vw; }

/* OVERFLOW Media Query Extensions: -ns = not-small -m  = medium -l  = large */
.overflow-visible { overflow: visible; }

.overflow-hidden { overflow: hidden; }

.overflow-scroll { overflow: scroll; }

.overflow-auto { overflow: auto; }

.overflow-x-visible { overflow-x: visible; }

.overflow-x-hidden { overflow-x: hidden; }

.overflow-x-scroll { overflow-x: scroll; }

.overflow-x-auto { overflow-x: auto; }

.overflow-y-visible { overflow-y: visible; }

.overflow-y-hidden { overflow-y: hidden; }

.overflow-y-scroll { overflow-y: scroll; }

.overflow-y-auto { overflow-y: auto; }

/*

   POSITIONING
   Docs: http://tachyons.io/docs/layout/position/

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.static { position: static; }

.relative { position: relative; }

.absolute { position: absolute; }

.fixed { position: fixed; }

/*

    OPACITY
    Docs: http://tachyons.io/docs/themes/opacity/

*/
.o-100 { opacity: 1; }

.o-90 { opacity: .9; }

.o-80 { opacity: .8; }

.o-70 { opacity: .7; }

.o-60 { opacity: .6; }

.o-50 { opacity: .5; }

.o-40 { opacity: .4; }

.o-30 { opacity: .3; }

.o-20 { opacity: .2; }

.o-10 { opacity: .1; }

.o-05 { opacity: .05; }

.o-025 { opacity: .025; }

.o-0 { opacity: 0; }

/*

   ROTATIONS

*/
.rotate-45 { -webkit-transform: rotate(45deg); transform: rotate(45deg); }

.rotate-90 { -webkit-transform: rotate(90deg); transform: rotate(90deg); }

.rotate-135 { -webkit-transform: rotate(135deg); transform: rotate(135deg); }

.rotate-180 { -webkit-transform: rotate(180deg); transform: rotate(180deg); }

.rotate-225 { -webkit-transform: rotate(225deg); transform: rotate(225deg); }

.rotate-270 { -webkit-transform: rotate(270deg); transform: rotate(270deg); }

.rotate-315 { -webkit-transform: rotate(315deg); transform: rotate(315deg); }

/*

   SKINS
   Docs: http://tachyons.io/docs/themes/skins/

   Classes for setting foreground and background colors on elements.
   If you haven't declared a border color, but set border on an element, it will
   be set to the current text color.

*/
/* Text colors */
.black-90 { color: rgba(0, 0, 0, 0.9); }

.black-80 { color: rgba(0, 0, 0, 0.8); }

.black-70 { color: rgba(0, 0, 0, 0.7); }

.black-60 { color: rgba(0, 0, 0, 0.6); }

.black-50 { color: rgba(0, 0, 0, 0.5); }

.black-40 { color: rgba(0, 0, 0, 0.4); }

.black-30 { color: rgba(0, 0, 0, 0.3); }

.black-20 { color: rgba(0, 0, 0, 0.2); }

.black-10 { color: rgba(0, 0, 0, 0.1); }

.black-05 { color: rgba(0, 0, 0, 0.05); }

.white-90 { color: rgba(255, 255, 255, 0.9); }

.white-80 { color: rgba(255, 255, 255, 0.8); }

.white-70 { color: rgba(255, 255, 255, 0.7); }

.white-60 { color: rgba(255, 255, 255, 0.6); }

.white-50 { color: rgba(255, 255, 255, 0.5); }

.white-40 { color: rgba(255, 255, 255, 0.4); }

.white-30 { color: rgba(255, 255, 255, 0.3); }

.white-20 { color: rgba(255, 255, 255, 0.2); }

.white-10 { color: rgba(255, 255, 255, 0.1); }

.black { color: #000; }

.near-black { color: #111; }

.dark-gray { color: #333; }

.mid-gray { color: #555; }

.gray { color: #777; }

.silver { color: #999; }

.light-silver { color: #aaa; }

.moon-gray { color: #ccc; }

.light-gray { color: #eee; }

.near-white { color: #f4f4f4; }

.white { color: #fff; }

.dark-red { color: #e7040f; }

.red { color: #ff4136; }

.light-red { color: #ff725c; }

.orange { color: #ff6300; }

.gold { color: #ffb700; }

.yellow { color: #ffd700; }

.light-yellow { color: #fbf1a9; }

.purple { color: #5e2ca5; }

.light-purple { color: #a463f2; }

.dark-pink { color: #d5008f; }

.hot-pink { color: #ff41b4; }

.pink { color: #ff80cc; }

.light-pink { color: #ffa3d7; }

.dark-green { color: #137752; }

.green { color: #19a974; }

.light-green { color: #9eebcf; }

.navy { color: #001b44; }

.dark-blue { color: #00449e; }

.blue { color: #357edd; }

.light-blue { color: #96ccff; }

.lightest-blue { color: #cdecff; }

.washed-blue { color: #f6fffe; }

.washed-green { color: #e8fdf5; }

.washed-yellow { color: #fffceb; }

.washed-red { color: #ffdfdf; }

.crowd { color: #8060f7; }

.space-white { color: #e0e5f0; }

.color-inherit { color: inherit; }

.bg-black-90 { background-color: rgba(0, 0, 0, 0.9); }

.bg-black-80 { background-color: rgba(0, 0, 0, 0.8); }

.bg-black-70 { background-color: rgba(0, 0, 0, 0.7); }

.bg-black-60 { background-color: rgba(0, 0, 0, 0.6); }

.bg-black-50 { background-color: rgba(0, 0, 0, 0.5); }

.bg-black-40 { background-color: rgba(0, 0, 0, 0.4); }

.bg-black-30 { background-color: rgba(0, 0, 0, 0.3); }

.bg-black-20 { background-color: rgba(0, 0, 0, 0.2); }

.bg-black-10 { background-color: rgba(0, 0, 0, 0.1); }

.bg-black-05 { background-color: rgba(0, 0, 0, 0.05); }

.bg-white-90 { background-color: rgba(255, 255, 255, 0.9); }

.bg-white-80 { background-color: rgba(255, 255, 255, 0.8); }

.bg-white-70 { background-color: rgba(255, 255, 255, 0.7); }

.bg-white-60 { background-color: rgba(255, 255, 255, 0.6); }

.bg-white-50 { background-color: rgba(255, 255, 255, 0.5); }

.bg-white-40 { background-color: rgba(255, 255, 255, 0.4); }

.bg-white-30 { background-color: rgba(255, 255, 255, 0.3); }

.bg-white-20 { background-color: rgba(255, 255, 255, 0.2); }

.bg-white-10 { background-color: rgba(255, 255, 255, 0.1); }

/* Background colors */
.bg-black { background-color: #000; }

.bg-black-new { background-color: #161616; }

.bg-near-black { background-color: #111; }

.bg-dark-gray { background-color: #333; }

.bg-mid-gray { background-color: #555; }

.bg-gray { background-color: #777; }

.bg-silver { background-color: #999; }

.bg-light-silver { background-color: #aaa; }

.bg-moon-gray { background-color: #ccc; }

.bg-light-gray { background-color: #eee; }

.bg-near-white { background-color: #f5f5f5; }

.bg-white { background-color: #fff; }

.bg-transparent { background-color: transparent; }

.bg-dark-red { background-color: #e7040f; }

.bg-red { background-color: #ff4136; }

.bg-light-red { background-color: #ff725c; }

.bg-orange { background-color: #ff6300; }

.bg-pale-orange { background-color: #faad3f; }

.bg-gold { background-color: #ffb700; }

.bg-yellow { background-color: #ffd700; }

.bg-light-yellow { background-color: #fbf1a9; }

.bg-purple { background-color: #5e2ca5; }

.bg-light-purple { background-color: #a463f2; }

.bg-black-pink { background-color: #900663; }

.bg-dark-pink { background-color: #d5008f; }

.bg-hot-pink { background-color: #ff41b4; }

.bg-pink { background-color: #ff80cc; }

.bg-light-pink { background-color: #ffa3d7; }

.bg-dark-green { background-color: #137752; }

.bg-green { background-color: #19a974; }

.bg-light-green { background-color: #9eebcf; }

.bg-navy { background-color: #001b44; }

.bg-dark-blue { background-color: #00449e; }

.bg-blue { background-color: #357edd; }

.bg-light-blue { background-color: #96ccff; }

.bg-lightest-blue { background-color: #cdecff; }

.bg-washed-blue { background-color: #f6fffe; }

.bg-washed-green { background-color: #e8fdf5; }

.bg-washed-yellow { background-color: #fffceb; }

.bg-washed-red { background-color: #ffdfdf; }

.bg-inherit { background-color: inherit; }

.bg-space-white { background-color: #e0e5f0; }

.bg-crowd { background-color: #8060f7; }

/* SKINS:PSEUDO Customize the color of an element when it is focused or hovered over. */
.hover-black:hover { color: #000; }

.hover-black:focus { color: #000; }

.hover-near-black:hover { color: #111; }

.hover-near-black:focus { color: #111; }

.hover-dark-gray:hover { color: #333; }

.hover-dark-gray:focus { color: #333; }

.hover-mid-gray:hover { color: #555; }

.hover-mid-gray:focus { color: #555; }

.hover-gray:hover { color: #777; }

.hover-gray:focus { color: #777; }

.hover-silver:hover { color: #999; }

.hover-silver:focus { color: #999; }

.hover-light-silver:hover { color: #aaa; }

.hover-light-silver:focus { color: #aaa; }

.hover-moon-gray:hover { color: #ccc; }

.hover-moon-gray:focus { color: #ccc; }

.hover-light-gray:hover { color: #eee; }

.hover-light-gray:focus { color: #eee; }

.hover-near-white:hover { color: #f4f4f4; }

.hover-near-white:focus { color: #f4f4f4; }

.hover-white:hover { color: #fff; }

.hover-white:focus { color: #fff; }

.hover-black-90:hover { color: rgba(0, 0, 0, 0.9); }

.hover-black-90:focus { color: rgba(0, 0, 0, 0.9); }

.hover-black-80:hover { color: rgba(0, 0, 0, 0.8); }

.hover-black-80:focus { color: rgba(0, 0, 0, 0.8); }

.hover-black-70:hover { color: rgba(0, 0, 0, 0.7); }

.hover-black-70:focus { color: rgba(0, 0, 0, 0.7); }

.hover-black-60:hover { color: rgba(0, 0, 0, 0.6); }

.hover-black-60:focus { color: rgba(0, 0, 0, 0.6); }

.hover-black-50:hover { color: rgba(0, 0, 0, 0.5); }

.hover-black-50:focus { color: rgba(0, 0, 0, 0.5); }

.hover-black-40:hover { color: rgba(0, 0, 0, 0.4); }

.hover-black-40:focus { color: rgba(0, 0, 0, 0.4); }

.hover-black-30:hover { color: rgba(0, 0, 0, 0.3); }

.hover-black-30:focus { color: rgba(0, 0, 0, 0.3); }

.hover-black-20:hover { color: rgba(0, 0, 0, 0.2); }

.hover-black-20:focus { color: rgba(0, 0, 0, 0.2); }

.hover-black-10:hover { color: rgba(0, 0, 0, 0.1); }

.hover-black-10:focus { color: rgba(0, 0, 0, 0.1); }

.hover-white-90:hover { color: rgba(255, 255, 255, 0.9); }

.hover-white-90:focus { color: rgba(255, 255, 255, 0.9); }

.hover-white-80:hover { color: rgba(255, 255, 255, 0.8); }

.hover-white-80:focus { color: rgba(255, 255, 255, 0.8); }

.hover-white-70:hover { color: rgba(255, 255, 255, 0.7); }

.hover-white-70:focus { color: rgba(255, 255, 255, 0.7); }

.hover-white-60:hover { color: rgba(255, 255, 255, 0.6); }

.hover-white-60:focus { color: rgba(255, 255, 255, 0.6); }

.hover-white-50:hover { color: rgba(255, 255, 255, 0.5); }

.hover-white-50:focus { color: rgba(255, 255, 255, 0.5); }

.hover-white-40:hover { color: rgba(255, 255, 255, 0.4); }

.hover-white-40:focus { color: rgba(255, 255, 255, 0.4); }

.hover-white-30:hover { color: rgba(255, 255, 255, 0.3); }

.hover-white-30:focus { color: rgba(255, 255, 255, 0.3); }

.hover-white-20:hover { color: rgba(255, 255, 255, 0.2); }

.hover-white-20:focus { color: rgba(255, 255, 255, 0.2); }

.hover-white-10:hover { color: rgba(255, 255, 255, 0.1); }

.hover-white-10:focus { color: rgba(255, 255, 255, 0.1); }

.hover-inherit:hover, .hover-inherit:focus { color: inherit; }

.hover-bg-black:hover { background-color: #000; }

.hover-bg-black:focus { background-color: #000; }

.hover-bg-near-black:hover { background-color: #111; }

.hover-bg-near-black:focus { background-color: #111; }

.hover-bg-dark-gray:hover { background-color: #333; }

.hover-bg-dark-gray:focus { background-color: #333; }

.hover-bg-mid-gray:hover { background-color: #555; }

.hover-bg-mid-gray:focus { background-color: #555; }

.hover-bg-gray:hover { background-color: #777; }

.hover-bg-gray:focus { background-color: #777; }

.hover-bg-silver:hover { background-color: #999; }

.hover-bg-silver:focus { background-color: #999; }

.hover-bg-light-silver:hover { background-color: #aaa; }

.hover-bg-light-silver:focus { background-color: #aaa; }

.hover-bg-moon-gray:hover { background-color: #ccc; }

.hover-bg-moon-gray:focus { background-color: #ccc; }

.hover-bg-light-gray:hover { background-color: #eee; }

.hover-bg-light-gray:focus { background-color: #eee; }

.hover-bg-near-white:hover { background-color: #f4f4f4; }

.hover-bg-near-white:focus { background-color: #f4f4f4; }

.hover-bg-white:hover { background-color: #fff; }

.hover-bg-white:focus { background-color: #fff; }

.hover-bg-transparent:hover { background-color: transparent; }

.hover-bg-transparent:focus { background-color: transparent; }

.hover-bg-black-90:hover { background-color: rgba(0, 0, 0, 0.9); }

.hover-bg-black-90:focus { background-color: rgba(0, 0, 0, 0.9); }

.hover-bg-black-80:hover { background-color: rgba(0, 0, 0, 0.8); }

.hover-bg-black-80:focus { background-color: rgba(0, 0, 0, 0.8); }

.hover-bg-black-70:hover { background-color: rgba(0, 0, 0, 0.7); }

.hover-bg-black-70:focus { background-color: rgba(0, 0, 0, 0.7); }

.hover-bg-black-60:hover { background-color: rgba(0, 0, 0, 0.6); }

.hover-bg-black-60:focus { background-color: rgba(0, 0, 0, 0.6); }

.hover-bg-black-50:hover { background-color: rgba(0, 0, 0, 0.5); }

.hover-bg-black-50:focus { background-color: rgba(0, 0, 0, 0.5); }

.hover-bg-black-40:hover { background-color: rgba(0, 0, 0, 0.4); }

.hover-bg-black-40:focus { background-color: rgba(0, 0, 0, 0.4); }

.hover-bg-black-30:hover { background-color: rgba(0, 0, 0, 0.3); }

.hover-bg-black-30:focus { background-color: rgba(0, 0, 0, 0.3); }

.hover-bg-black-20:hover { background-color: rgba(0, 0, 0, 0.2); }

.hover-bg-black-20:focus { background-color: rgba(0, 0, 0, 0.2); }

.hover-bg-black-10:hover { background-color: rgba(0, 0, 0, 0.1); }

.hover-bg-black-10:focus { background-color: rgba(0, 0, 0, 0.1); }

.hover-bg-white-90:hover { background-color: rgba(255, 255, 255, 0.9); }

.hover-bg-white-90:focus { background-color: rgba(255, 255, 255, 0.9); }

.hover-bg-white-80:hover { background-color: rgba(255, 255, 255, 0.8); }

.hover-bg-white-80:focus { background-color: rgba(255, 255, 255, 0.8); }

.hover-bg-white-70:hover { background-color: rgba(255, 255, 255, 0.7); }

.hover-bg-white-70:focus { background-color: rgba(255, 255, 255, 0.7); }

.hover-bg-white-60:hover { background-color: rgba(255, 255, 255, 0.6); }

.hover-bg-white-60:focus { background-color: rgba(255, 255, 255, 0.6); }

.hover-bg-white-50:hover { background-color: rgba(255, 255, 255, 0.5); }

.hover-bg-white-50:focus { background-color: rgba(255, 255, 255, 0.5); }

.hover-bg-white-40:hover { background-color: rgba(255, 255, 255, 0.4); }

.hover-bg-white-40:focus { background-color: rgba(255, 255, 255, 0.4); }

.hover-bg-white-30:hover { background-color: rgba(255, 255, 255, 0.3); }

.hover-bg-white-30:focus { background-color: rgba(255, 255, 255, 0.3); }

.hover-bg-white-20:hover { background-color: rgba(255, 255, 255, 0.2); }

.hover-bg-white-20:focus { background-color: rgba(255, 255, 255, 0.2); }

.hover-bg-white-10:hover { background-color: rgba(255, 255, 255, 0.1); }

.hover-bg-white-10:focus { background-color: rgba(255, 255, 255, 0.1); }

.hover-dark-red:hover { color: #e7040f; }

.hover-dark-red:focus { color: #e7040f; }

.hover-red:hover { color: #ff4136; }

.hover-red:focus { color: #ff4136; }

.hover-light-red:hover { color: #ff725c; }

.hover-light-red:focus { color: #ff725c; }

.hover-orange:hover { color: #ff6300; }

.hover-orange:focus { color: #ff6300; }

.hover-gold:hover { color: #ffb700; }

.hover-gold:focus { color: #ffb700; }

.hover-yellow:hover { color: #ffd700; }

.hover-yellow:focus { color: #ffd700; }

.hover-light-yellow:hover { color: #fbf1a9; }

.hover-light-yellow:focus { color: #fbf1a9; }

.hover-purple:hover { color: #5e2ca5; }

.hover-purple:focus { color: #5e2ca5; }

.hover-light-purple:hover { color: #a463f2; }

.hover-light-purple:focus { color: #a463f2; }

.hover-dark-pink:hover { color: #d5008f; }

.hover-dark-pink:focus { color: #d5008f; }

.hover-hot-pink:hover { color: #ff41b4; }

.hover-hot-pink:focus { color: #ff41b4; }

.hover-pink:hover { color: #ff80cc; }

.hover-pink:focus { color: #ff80cc; }

.hover-light-pink:hover { color: #ffa3d7; }

.hover-light-pink:focus { color: #ffa3d7; }

.hover-dark-green:hover { color: #137752; }

.hover-dark-green:focus { color: #137752; }

.hover-green:hover { color: #19a974; }

.hover-green:focus { color: #19a974; }

.hover-light-green:hover { color: #9eebcf; }

.hover-light-green:focus { color: #9eebcf; }

.hover-navy:hover { color: #001b44; }

.hover-navy:focus { color: #001b44; }

.hover-dark-blue:hover { color: #00449e; }

.hover-dark-blue:focus { color: #00449e; }

.hover-blue:hover { color: #357edd; }

.hover-blue:focus { color: #357edd; }

.hover-light-blue:hover { color: #96ccff; }

.hover-light-blue:focus { color: #96ccff; }

.hover-lightest-blue:hover { color: #cdecff; }

.hover-lightest-blue:focus { color: #cdecff; }

.hover-washed-blue:hover { color: #f6fffe; }

.hover-washed-blue:focus { color: #f6fffe; }

.hover-washed-green:hover { color: #e8fdf5; }

.hover-washed-green:focus { color: #e8fdf5; }

.hover-washed-yellow:hover { color: #fffceb; }

.hover-washed-yellow:focus { color: #fffceb; }

.hover-washed-red:hover { color: #ffdfdf; }

.hover-washed-red:focus { color: #ffdfdf; }

.hover-bg-dark-red:hover { background-color: #e7040f; }

.hover-bg-dark-red:focus { background-color: #e7040f; }

.hover-bg-red:hover { background-color: #ff4136; }

.hover-bg-red:focus { background-color: #ff4136; }

.hover-bg-light-red:hover { background-color: #ff725c; }

.hover-bg-light-red:focus { background-color: #ff725c; }

.hover-bg-orange:hover { background-color: #ff6300; }

.hover-bg-orange:focus { background-color: #ff6300; }

.hover-bg-gold:hover { background-color: #ffb700; }

.hover-bg-gold:focus { background-color: #ffb700; }

.hover-bg-yellow:hover { background-color: #ffd700; }

.hover-bg-yellow:focus { background-color: #ffd700; }

.hover-bg-light-yellow:hover { background-color: #fbf1a9; }

.hover-bg-light-yellow:focus { background-color: #fbf1a9; }

.hover-bg-purple:hover { background-color: #5e2ca5; }

.hover-bg-purple:focus { background-color: #5e2ca5; }

.hover-bg-light-purple:hover { background-color: #a463f2; }

.hover-bg-light-purple:focus { background-color: #a463f2; }

.hover-bg-dark-pink:hover { background-color: #d5008f; }

.hover-bg-dark-pink:focus { background-color: #d5008f; }

.hover-bg-hot-pink:hover { background-color: #ff41b4; }

.hover-bg-hot-pink:focus { background-color: #ff41b4; }

.hover-bg-pink:hover { background-color: #ff80cc; }

.hover-bg-dri:hover { background-color: #ff80cc; }

.hover-bg-link:hover { background-color: #0d75b5; }

.hover-bg-twee:hover { background-color: #1da1f2; }

.hover-bg-crowd:hover { background-color: #8060f7; }

.hover-bg-pink:focus { background-color: #ff80cc; }

.hover-bg-light-pink:hover { background-color: #ffa3d7; }

.hover-bg-light-pink:focus { background-color: #ffa3d7; }

.hover-bg-dark-green:hover { background-color: #137752; }

.hover-bg-dark-green:focus { background-color: #137752; }

.hover-bg-green:hover { background-color: #19a974; }

.hover-bg-green:focus { background-color: #19a974; }

.hover-bg-light-green:hover { background-color: #9eebcf; }

.hover-bg-light-green:focus { background-color: #9eebcf; }

.hover-bg-navy:hover { background-color: #001b44; }

.hover-bg-navy:focus { background-color: #001b44; }

.hover-bg-dark-blue:hover { background-color: #00449e; }

.hover-bg-dark-blue:focus { background-color: #00449e; }

.hover-bg-blue:hover { background-color: #357edd; }

.hover-bg-blue:focus { background-color: #357edd; }

.hover-bg-light-blue:hover { background-color: #96ccff; }

.hover-bg-light-blue:focus { background-color: #96ccff; }

.hover-bg-lightest-blue:hover { background-color: #cdecff; }

.hover-bg-lightest-blue:focus { background-color: #cdecff; }

.hover-bg-washed-blue:hover { background-color: #f6fffe; }

.hover-bg-washed-blue:focus { background-color: #f6fffe; }

.hover-bg-washed-green:hover { background-color: #e8fdf5; }

.hover-bg-washed-green:focus { background-color: #e8fdf5; }

.hover-bg-washed-yellow:hover { background-color: #fffceb; }

.hover-bg-washed-yellow:focus { background-color: #fffceb; }

.hover-bg-washed-red:hover { background-color: #ffdfdf; }

.hover-bg-washed-red:focus { background-color: #ffdfdf; }

.hover-bg-inherit:hover, .hover-bg-inherit:focus { background-color: inherit; }

/* Variables */
/*
   SPACING
   Docs: http://tachyons.io/docs/layout/spacing/

   An eight step powers of two scale ranging from 0 to 16rem.

   Base:
     p = padding
     m = margin

   Modifiers:
     a = all
     h = horizontal
     v = vertical
     t = top
     r = right
     b = bottom
     l = left

     0 = none
     1 = 1st step in spacing scale
     2 = 2nd step in spacing scale
     3 = 3rd step in spacing scale
     4 = 4th step in spacing scale
     5 = 5th step in spacing scale
     6 = 6th step in spacing scale
     7 = 7th step in spacing scale

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.pa-round { padding: .15rem .7rem; }

.pa0 { padding: 0; }

.pa1 { padding: .25rem; }

.pa2 { padding: .5rem; }

.pa3 { padding: 1rem; }

.pa4 { padding: 2rem; }

.pa5 { padding: 4rem; }

.pa6 { padding: 8rem; }

.pa7 { padding: 16rem; }

.pl0 { padding-left: 0; }

.pl1 { padding-left: .25rem; }

.pl2 { padding-left: .5rem; }

.pl3 { padding-left: 1rem; }

.pl4 { padding-left: 2rem; }

.pl5 { padding-left: 4rem; }

.pl6 { padding-left: 8rem; }

.pl7 { padding-left: 16rem; }

.pr0 { padding-right: 0; }

.pr1 { padding-right: .25rem; }

.pr2 { padding-right: .5rem; }

.pr3 { padding-right: 1rem; }

.pr4 { padding-right: 2rem; }

.pr5 { padding-right: 4rem; }

.pr6 { padding-right: 8rem; }

.pr7 { padding-right: 16rem; }

.pb0 { padding-bottom: 0; }

.pb1 { padding-bottom: .25rem; }

.pb2 { padding-bottom: .5rem; }

.pb3 { padding-bottom: 1rem; }

.pb4 { padding-bottom: 2rem; }

.pb5 { padding-bottom: 4rem; }

.pb6 { padding-bottom: 8rem; }

.pb7 { padding-bottom: 16rem; }

.pt0 { padding-top: 0; }

.pt1 { padding-top: .25rem; }

.pt2 { padding-top: .5rem; }

.pt3 { padding-top: 1rem; }

.pt4 { padding-top: 2rem; }

.pt5 { padding-top: 4rem; }

.pt5-5 { padding-top: 6rem; }

.pt6 { padding-top: 8rem; }

.pt7 { padding-top: 16rem; }

.pv0 { padding-top: 0; padding-bottom: 0; }

.pv1 { padding-top: .25rem; padding-bottom: .25rem; }

.pv2 { padding-top: .5rem; padding-bottom: .5rem; }

.pv3 { padding-top: 1rem; padding-bottom: 1rem; }

.pv4 { padding-top: 2rem; padding-bottom: 2rem; }

.pv5 { padding-top: 4rem; padding-bottom: 4rem; }

.pv6 { padding-top: 8rem; padding-bottom: 8rem; }

.pv7 { padding-top: 16rem; padding-bottom: 16rem; }

.ph0 { padding-left: 0; padding-right: 0; }

.ph1 { padding-left: .25rem; padding-right: .25rem; }

.ph2 { padding-left: .5rem; padding-right: .5rem; }

.ph3 { padding-left: 1rem; padding-right: 1rem; }

.ph4 { padding-left: 2rem; padding-right: 2rem; }

.ph5 { padding-left: 4rem; padding-right: 4rem; }

.ph6 { padding-left: 8rem; padding-right: 8rem; }

.ph7 { padding-left: 16rem; padding-right: 16rem; }

.ma0 { margin: 0; }

.ma1 { margin: .25rem; }

.ma2 { margin: .5rem; }

.ma3 { margin: 1rem; }

.ma4 { margin: 2rem; }

.ma5 { margin: 4rem; }

.ma6 { margin: 8rem; }

.ma7 { margin: 16rem; }

.ml0 { margin-left: 0; }

.ml1 { margin-left: .25rem; }

.ml2 { margin-left: .5rem; }

.ml3 { margin-left: 1rem; }

.ml4 { margin-left: 2rem; }

.ml5 { margin-left: 4rem; }

.ml6 { margin-left: 8rem; }

.ml7 { margin-left: 16rem; }

.mr0 { margin-right: 0; }

.mr1 { margin-right: .25rem; }

.mr2 { margin-right: .5rem; }

.mr3 { margin-right: 1rem; }

.mr4 { margin-right: 2rem; }

.mr5 { margin-right: 4rem; }

.mr6 { margin-right: 8rem; }

.mr7 { margin-right: 16rem; }

.mb0 { margin-bottom: 0; }

.mb1 { margin-bottom: .25rem; }

.mb2 { margin-bottom: .5rem; }

.mb3 { margin-bottom: 1rem; }

.mb4 { margin-bottom: 2rem; }

.mb5 { margin-bottom: 4rem; }

.mb6 { margin-bottom: 8rem; }

.mb7 { margin-bottom: 16rem; }

.mt0 { margin-top: 0; }

.mt1 { margin-top: .25rem; }

.mt2 { margin-top: .5rem; }

.mt3 { margin-top: 1rem; }

.mt4 { margin-top: 2rem; }

.mt5 { margin-top: 4rem; }

.mt6 { margin-top: 8rem; }

.mt7 { margin-top: 16rem; }

.mv0 { margin-top: 0; margin-bottom: 0; }

.mv1 { margin-top: .25rem; margin-bottom: .25rem; }

.mv2 { margin-top: .5rem; margin-bottom: .5rem; }

.mv3 { margin-top: 1rem; margin-bottom: 1rem; }

.mv4 { margin-top: 2rem; margin-bottom: 2rem; }

.mv5 { margin-top: 4rem; margin-bottom: 4rem; }

.mv6 { margin-top: 8rem; margin-bottom: 8rem; }

.mv7 { margin-top: 16rem; margin-bottom: 16rem; }

.mh0 { margin-left: 0; margin-right: 0; }

.mh1 { margin-left: .25rem; margin-right: .25rem; }

.mh2 { margin-left: .5rem; margin-right: .5rem; }

.mh3 { margin-left: 1rem; margin-right: 1rem; }

.mh4 { margin-left: 2rem; margin-right: 2rem; }

.mh5 { margin-left: 4rem; margin-right: 4rem; }

.mh6 { margin-left: 8rem; margin-right: 8rem; }

.mh7 { margin-left: 16rem; margin-right: 16rem; }

/*
   NEGATIVE MARGINS

   Base:
     n = negative

   Modifiers:
     a = all
     t = top
     r = right
     b = bottom
     l = left

     1 = 1st step in spacing scale
     2 = 2nd step in spacing scale
     3 = 3rd step in spacing scale
     4 = 4th step in spacing scale
     5 = 5th step in spacing scale
     6 = 6th step in spacing scale
     7 = 7th step in spacing scale

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.na1 { margin: -.25rem; }

.na2 { margin: -.5rem; }

.na3 { margin: -1rem; }

.na4 { margin: -2rem; }

.na5 { margin: -4rem; }

.na6 { margin: -8rem; }

.na7 { margin: -16rem; }

.nl1 { margin-left: -.25rem; }

.nl2 { margin-left: -.5rem; }

.nl3 { margin-left: -1rem; }

.nl4 { margin-left: -2rem; }

.nl5 { margin-left: -4rem; }

.nl6 { margin-left: -8rem; }

.nl7 { margin-left: -16rem; }

.nr1 { margin-right: -.25rem; }

.nr2 { margin-right: -.5rem; }

.nr3 { margin-right: -1rem; }

.nr4 { margin-right: -2rem; }

.nr5 { margin-right: -4rem; }

.nr6 { margin-right: -8rem; }

.nr7 { margin-right: -16rem; }

.nb1 { margin-bottom: -.25rem; }

.nb2 { margin-bottom: -.5rem; }

.nb3 { margin-bottom: -1rem; }

.nb4 { margin-bottom: -2rem; }

.nb5 { margin-bottom: -4rem; }

.nb6 { margin-bottom: -8rem; }

.nb7 { margin-bottom: -16rem; }

.nt1 { margin-top: -.25rem; }

.nt2 { margin-top: -.5rem; }

.nt3 { margin-top: -1rem; }

.nt4 { margin-top: -2rem; }

.nt5 { margin-top: -4rem; }

.nt6 { margin-top: -8rem; }

.nt7 { margin-top: -16rem; }

/*

  TABLES
  Docs: http://tachyons.io/docs/elements/tables/

*/
.collapse { border-collapse: collapse; border-spacing: 0; }

.striped--light-silver:nth-child(odd) { background-color: #aaa; }

.striped--moon-gray:nth-child(odd) { background-color: #ccc; }

.striped--light-gray:nth-child(odd) { background-color: #eee; }

.striped--near-white:nth-child(odd) { background-color: #f4f4f4; }

.stripe-light:nth-child(odd) { background-color: rgba(255, 255, 255, 0.1); }

.stripe-dark:nth-child(odd) { background-color: rgba(0, 0, 0, 0.1); }

/*

   TEXT DECORATION
   Docs: http://tachyons.io/docs/typography/text-decoration/


   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.strike { text-decoration: line-through; }

.underline { text-decoration: underline; }

.no-underline { text-decoration: none; }

/*

  TEXT ALIGN
  Docs: http://tachyons.io/docs/typography/text-align/

  Base
    t = text-align

  Modifiers
    l = left
    r = right
    c = center
    j = justify

  Media Query Extensions:
    -ns = not-small
    -m  = medium
    -l  = large

*/
.tl { text-align: left; }

.tr { text-align: right; }

.tc { text-align: center; }

.tj { text-align: justify; }

/*

   TEXT TRANSFORM
   Docs: http://tachyons.io/docs/typography/text-transform/

   Base:
     tt = text-transform

   Modifiers
     c = capitalize
     l = lowercase
     u = uppercase
     n = none

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.ttc { text-transform: capitalize; }

.ttl { text-transform: lowercase; }

.ttu { text-transform: uppercase; }

.ttn { text-transform: none; }

/* TYPE SCALE Docs: http://tachyons.io/docs/typography/scale/ Base: f = font-size Modifiers 1 = 1st step in size scale 2 = 2nd step in size scale 3 = 3rd step in size scale 4 = 4th step in size scale 5 = 5th step in size scale 6 = 6th step in size scale 7 = 7th step in size scale Media Query Extensions: -ns = not-small -m  = medium -l  = large */
/* For Hero/Marketing Titles These generally are too large for mobile so be careful using them on smaller screens. */
.f-6, .f-headline { font-size: 6rem; }

.f-5, .f-subheadline { font-size: 5rem; }

.f-3, .f-title { font-size: 1.75rem; }

.f-2, .f-giant { font-size: 4.5rem; }

/* Type Scale */
.f1 { font-size: 3rem; }

.f2 { font-size: 2.25rem; }

.f3 { font-size: 1.5rem; }

.f4 { font-size: 1.25rem; }

.f5 { font-size: 1rem; }

.f6 { font-size: .875rem; }

.f7 { font-size: .75rem; }

/* Small and hard to read for many people so use with extreme caution */
/*

   TYPOGRAPHY
   http://tachyons.io/docs/typography/measure/

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
/* Measure is limited to ~66 characters */
.measure { max-width: 30em; }

/* Measure is limited to ~80 characters */
.measure-wide { max-width: 34em; }

/* Measure is limited to ~45 characters */
.measure-narrow { max-width: 20em; }

/* Book paragraph style - paragraphs are indented with no vertical spacing. */
.indent { text-indent: 1em; margin-top: 0; margin-bottom: 0; }

.small-caps { font-variant: small-caps; }

/* Combine this class with a width to truncate text (or just leave as is to truncate at width of containing element. */
.truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/*

   UTILITIES

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
/* Equivalent to .overflow-y-scroll */
.overflow-container { overflow-y: scroll; }

.center { margin-right: auto; margin-left: auto; }

.mr-auto { margin-right: auto; }

.ml-auto { margin-left: auto; }

/*

   VISIBILITY

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
/* Text that is hidden but accessible Ref: http://snook.ca/archives/html_and_css/hiding-content-for-accessibility */
.clip { position: fixed !important; _position: absolute !important; clip: rect(1px 1px 1px 1px); /* IE6, IE7 */ clip: rect(1px, 1px, 1px, 1px); }

/*

   WHITE SPACE

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.ws-normal { white-space: normal; }

.nowrap { white-space: nowrap; }

.pre { white-space: pre; }

/*

   VERTICAL ALIGN

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.v-base { vertical-align: baseline; }

.v-mid { vertical-align: middle; }

.v-top { vertical-align: top; }

.v-btm { vertical-align: bottom; }

/*

  HOVER EFFECTS
  Docs: http://tachyons.io/docs/themes/hovers/

    - Dim
    - Glow
    - Hide Child
    - Underline text
    - Grow
    - Pointer
    - Shadow

*/
/*

  Dim element on hover by adding the dim class.

*/
.dim { opacity: 1; transition: opacity .15s ease-in; }

.dim:hover, .dim:focus { opacity: .5; transition: opacity .15s ease-in; }

.dim:active { opacity: .8; transition: opacity .15s ease-out; }

/*

  Animate opacity to 100% on hover by adding the glow class.

*/
.glow { transition: opacity .15s ease-in; }

.glow:hover, .glow:focus { opacity: 1; transition: opacity .15s ease-in; }

/* Hide child & reveal on hover: Put the hide-child class on a parent element and any nested element with the child class will be hidden and displayed on hover or focus. <div class="hide-child"> <div class="child"> Hidden until hover or focus </div> <div class="child"> Hidden until hover or focus </div> <div class="child"> Hidden until hover or focus </div> <div class="child"> Hidden until hover or focus </div> </div> */
.hide-child .child { opacity: 0; transition: opacity .15s ease-in; }

.hide-child:hover .child, .hide-child:focus .child, .hide-child:active .child { opacity: 1; transition: opacity .15s ease-in; }

.underline-hover:hover, .underline-hover:focus { text-decoration: underline; }

/* Can combine this with overflow-hidden to make background images grow on hover even if you are using background-size: cover */
.grow { -moz-osx-font-smoothing: grayscale; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-transform: translateZ(0); transform: translateZ(0); transition: -webkit-transform .25s ease-out; transition: transform .25s ease-out; transition: transform .25s ease-out, -webkit-transform .25s ease-out; }

.grow:hover, .grow:focus { -webkit-transform: scale(1.05); transform: scale(1.05); }

.grow:active { -webkit-transform: scale(0.9); transform: scale(0.9); }

.grow-large { -moz-osx-font-smoothing: grayscale; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-transform: translateZ(0); transform: translateZ(0); transition: -webkit-transform .25s ease-in-out; transition: transform .25s ease-in-out; transition: transform .25s ease-in-out, -webkit-transform .25s ease-in-out; }

.grow-large:hover, .grow-large:focus { -webkit-transform: scale(1.2); transform: scale(1.2); }

.grow-large:active { -webkit-transform: scale(0.95); transform: scale(0.95); }

/* Add pointer on hover */
.pointer:hover { cursor: pointer; }

/* Add shadow on hover. Performant box-shadow animation pattern from http://tobiasahlin.com/blog/how-to-animate-box-shadow/ */
.shadow-hover { cursor: pointer; position: relative; transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1); }

.shadow-hover::after { content: ''; box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.2); border-radius: inherit; opacity: 0; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; transition: opacity 0.5s cubic-bezier(0.165, 0.84, 0.44, 1); }

.shadow-hover:hover::after, .shadow-hover:focus::after { opacity: 1; }

/* Combine with classes in skins and skins-pseudo for many different transition possibilities. */
.bg-animate, .bg-animate:hover, .bg-animate:focus { transition: background-color .15s ease-in-out; }

.bg { transition: background-color .5s ease; }

/*

  Z-INDEX

  Base
    z = z-index

  Modifiers
    -0 = literal value 0
    -1 = literal value 1
    -2 = literal value 2
    -3 = literal value 3
    -4 = literal value 4
    -5 = literal value 5
    -999 = literal value 999
    -9999 = literal value 9999

    -max = largest accepted z-index value as integer

    -inherit = string value inherit
    -initial = string value initial
    -unset = string value unset

  MDN: https://developer.mozilla.org/en/docs/Web/CSS/z-index
  Spec: http://www.w3.org/TR/CSS2/zindex.html
  Articles:
    https://philipwalton.com/articles/what-no-one-told-you-about-z-index/

  Tips on extending:
  There might be a time worth using negative z-index values.
  Or if you are using tachyons with another project, you might need to
  adjust these values to suit your needs.

*/
.z-0 { z-index: 0; }

.z-1 { z-index: 1; }

.z-2 { z-index: 2; }

.z-3 { z-index: 3; }

.z-4 { z-index: 4; }

.z-5 { z-index: 5; }

.z-999 { z-index: 999; }

.z-9999 { z-index: 9999; }

.z-max { z-index: 2147483647; }

.z-inherit { z-index: inherit; }

.z-initial { z-index: initial; }

.z-unset { z-index: unset; }

/*

    NESTED
    Tachyons module for styling nested elements
    that are generated by a cms.

*/
.nested-copy-line-height p, .nested-copy-line-height ul, .nested-copy-line-height ol { line-height: 1.5; }

.nested-headline-line-height h1, .nested-headline-line-height h2, .nested-headline-line-height h3, .nested-headline-line-height h4, .nested-headline-line-height h5, .nested-headline-line-height h6 { line-height: 1.25; }

.nested-list-reset ul, .nested-list-reset ol { padding-left: 0; margin-left: 0; list-style-type: none; }

.nested-copy-indent p + p { text-indent: 1em; margin-top: 0; margin-bottom: 0; }

.nested-copy-separator p + p { margin-top: 1.5em; }

.nested-img img { width: 100%; max-width: 100%; display: block; }

.nested-links a { color: #357edd; transition: color .15s ease-in; }

.nested-links a:hover { color: #96ccff; transition: color .15s ease-in; }

.nested-links a:focus { color: #96ccff; transition: color .15s ease-in; }

/*

  STYLES

  Add custom styles here.

*/
/* Variables */
/* Importing here will allow you to override any variables in the modules */
/*

   Tachyons
   COLOR VARIABLES

   Grayscale
   - Solids
   - Transparencies
   Colors

*/
/*

  CUSTOM MEDIA QUERIES

  Media query values can be changed to fit your own content.
  There are no magic bullets when it comes to media query width values.
  They should be declared in em units - and they should be set to meet
  the needs of your content. You can also add additional media queries,
  or remove some of the existing ones.

  These media queries can be referenced like so:

  @media (--breakpoint-not-small) {
    .medium-and-larger-specific-style {
      background-color: red;
    }
  }

  @media (--breakpoint-medium) {
    .medium-screen-specific-style {
      background-color: red;
    }
  }

  @media (--breakpoint-large) {
    .large-and-larger-screen-specific-style {
      background-color: red;
    }
  }

*/
/* Media Queries */
/* Debugging */
/*

  DEBUG CHILDREN
  Docs: http://tachyons.io/docs/debug/

  Just add the debug class to any element to see outlines on its
  children.

*/
.debug * { outline: 1px solid gold; }

.debug-white * { outline: 1px solid white; }

.debug-black * { outline: 1px solid black; }

/*

   DEBUG GRID
   http://tachyons.io/docs/debug-grid/

   Can be useful for debugging layout issues
   or helping to make sure things line up perfectly.
   Just tack one of these classes onto a parent element.

*/
.debug-grid { background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVR4AWPAC97/9x0eCsAEPgwAVLshdpENIxcAAAAASUVORK5CYII=) repeat top left; }

.debug-grid-16 { background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVR4AWOgCLz/b0epAa6UGuBOqQHOQHLUgFEDnAbcBZ4UGwDOkiCnkIhdgNgNxAYAiYlD+8sEuo8AAAAASUVORK5CYII=) repeat top left; }

.debug-grid-8-solid { background: white url(data:image/gif;base64,R0lGODdhCAAIAPEAAADw/wDx/////wAAACwAAAAACAAIAAACDZQvgaeb/lxbAIKA8y0AOw==) repeat top left; }

.debug-grid-16-solid { background: white url(data:image/gif;base64,R0lGODdhEAAQAPEAAADw/wDx/xXy/////ywAAAAAEAAQAAACIZyPKckYDQFsb6ZqD85jZ2+BkwiRFKehhqQCQgDHcgwEBQA7) repeat top left; }

/* Uncomment out the line below to help debug layout issues */
@media screen and (min-width: 30em) { .aspect-ratio-ns { height: 0; position: relative; }
  .aspect-ratio--16x9-ns { padding-bottom: 56.25%; }
  .aspect-ratio--9x16-ns { padding-bottom: 177.77%; }
  .aspect-ratio--4x3-ns { padding-bottom: 75%; }
  .aspect-ratio--3x4-ns { padding-bottom: 133.33%; }
  .aspect-ratio--6x4-ns { padding-bottom: 66.6%; }
  .aspect-ratio--4x6-ns { padding-bottom: 150%; }
  .aspect-ratio--8x5-ns { padding-bottom: 62.5%; }
  .aspect-ratio--5x8-ns { padding-bottom: 160%; }
  .aspect-ratio--7x5-ns { padding-bottom: 71.42%; }
  .aspect-ratio--5x7-ns { padding-bottom: 140%; }
  .aspect-ratio--1x1-ns { padding-bottom: 100%; }
  .aspect-ratio--object-ns { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }
  .cover-ns { background-size: cover !important; }
  .contain-ns { background-size: contain !important; }
  .bg-center-ns { background-repeat: no-repeat; background-position: center center; }
  .bg-top-ns { background-repeat: no-repeat; background-position: top center; }
  .bg-right-ns { background-repeat: no-repeat; background-position: center right; }
  .bg-bottom-ns { background-repeat: no-repeat; background-position: bottom center; }
  .bg-left-ns { background-repeat: no-repeat; background-position: center left; }
  .outline-ns { outline: 1px solid; }
  .outline-transparent-ns { outline: 1px solid transparent; }
  .outline-0-ns { outline: 0; }
  .ba-ns { border-style: solid; border-width: 1px; }
  .bt-ns { border-top-style: solid; border-top-width: 1px; }
  .br-ns { border-right-style: solid; border-right-width: 1px; }
  .bb-ns { border-bottom-style: solid; border-bottom-width: 1px; }
  .bl-ns { border-left-style: solid; border-left-width: 1px; }
  .bn-ns { border-style: none; border-width: 0; }
  .br0-ns { border-radius: 0; }
  .br1-ns { border-radius: .125rem; }
  .br2-ns { border-radius: .25rem; }
  .br3-ns { border-radius: .5rem; }
  .br4-ns { border-radius: 1rem; }
  .br-100-ns { border-radius: 100%; }
  .br-pill-ns { border-radius: 9999px; }
  .br--bottom-ns { border-top-left-radius: 0; border-top-right-radius: 0; }
  .br--top-ns { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }
  .br--right-ns { border-top-left-radius: 0; border-bottom-left-radius: 0; }
  .br--left-ns { border-top-right-radius: 0; border-bottom-right-radius: 0; }
  .b--dotted-ns { border-style: dotted; }
  .b--dashed-ns { border-style: dashed; }
  .b--solid-ns { border-style: solid; }
  .b--none-ns { border-style: none; }
  .bw0-ns { border-width: 0; }
  .bw1-ns { border-width: .125rem; }
  .bw2-ns { border-width: .25rem; }
  .bw3-ns { border-width: .5rem; }
  .bw4-ns { border-width: 1rem; }
  .bw5-ns { border-width: 2rem; }
  .bt-0-ns { border-top-width: 0; }
  .br-0-ns { border-right-width: 0; }
  .bb-0-ns { border-bottom-width: 0; }
  .bl-0-ns { border-left-width: 0; }
  .shadow-1-ns { box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2); }
  .shadow-2-ns { box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2); }
  .shadow-3-ns { box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2); }
  .shadow-4-ns { box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2); }
  .shadow-5-ns { box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2); }
  .top-0-ns { top: 0; }
  .left-0-ns { left: 0; }
  .right-0-ns { right: 0; }
  .bottom-0-ns { bottom: 0; }
  .top-1-ns { top: 1rem; }
  .left-1-ns { left: 1rem; }
  .right-1-ns { right: 1rem; }
  .bottom-1-ns { bottom: 1rem; }
  .top-2-ns { top: 2rem; }
  .left-2-ns { left: 2rem; }
  .right-2-ns { right: 2rem; }
  .bottom-2-ns { bottom: 2rem; }
  .top--1-ns { top: -1rem; }
  .right--1-ns { right: -1rem; }
  .bottom--1-ns { bottom: -1rem; }
  .left--1-ns { left: -1rem; }
  .top--2-ns { top: -2rem; }
  .right--2-ns { right: -2rem; }
  .bottom--2-ns { bottom: -2rem; }
  .left--2-ns { left: -2rem; }
  .absolute--fill-ns { top: 0; right: 0; bottom: 0; left: 0; }
  .cl-ns { clear: left; }
  .cr-ns { clear: right; }
  .cb-ns { clear: both; }
  .cn-ns { clear: none; }
  .dn-ns { display: none; }
  .di-ns { display: inline; }
  .db-ns { display: block; }
  .dib-ns { display: inline-block; }
  .dit-ns { display: inline-table; }
  .dt-ns { display: table; }
  .dtc-ns { display: table-cell; }
  .dt-row-ns { display: table-row; }
  .dt-row-group-ns { display: table-row-group; }
  .dt-column-ns { display: table-column; }
  .dt-column-group-ns { display: table-column-group; }
  .dt--fixed-ns { table-layout: fixed; width: 100%; }
  .flex-ns { display: -webkit-box; display: -ms-flexbox; display: flex; }
  .inline-flex-ns { display: -webkit-inline-box; display: -ms-inline-flexbox; display: inline-flex; }
  .flex-auto-ns { -webkit-box-flex: 1; -ms-flex: 1 1 auto; flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }
  .flex-none-ns { -webkit-box-flex: 0; -ms-flex: none; flex: none; }
  .flex-column-ns { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; }
  .flex-row-ns { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; }
  .flex-wrap-ns { -ms-flex-wrap: wrap; flex-wrap: wrap; }
  .flex-nowrap-ns { -ms-flex-wrap: nowrap; flex-wrap: nowrap; }
  .flex-wrap-reverse-ns { -ms-flex-wrap: wrap-reverse; flex-wrap: wrap-reverse; }
  .flex-column-reverse-ns { -webkit-box-orient: vertical; -webkit-box-direction: reverse; -ms-flex-direction: column-reverse; flex-direction: column-reverse; }
  .flex-row-reverse-ns { -webkit-box-orient: horizontal; -webkit-box-direction: reverse; -ms-flex-direction: row-reverse; flex-direction: row-reverse; }
  .items-start-ns { -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start; }
  .items-end-ns { -webkit-box-align: end; -ms-flex-align: end; align-items: flex-end; }
  .items-center-ns { -webkit-box-align: center; -ms-flex-align: center; align-items: center; }
  .items-baseline-ns { -webkit-box-align: baseline; -ms-flex-align: baseline; align-items: baseline; }
  .items-stretch-ns { -webkit-box-align: stretch; -ms-flex-align: stretch; align-items: stretch; }
  .self-start-ns { -ms-flex-item-align: start; align-self: flex-start; }
  .self-end-ns { -ms-flex-item-align: end; align-self: flex-end; }
  .self-center-ns { -ms-flex-item-align: center; -ms-grid-row-align: center; align-self: center; }
  .self-baseline-ns { -ms-flex-item-align: baseline; align-self: baseline; }
  .self-stretch-ns { -ms-flex-item-align: stretch; -ms-grid-row-align: stretch; align-self: stretch; }
  .justify-start-ns { -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; }
  .justify-end-ns { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; }
  .justify-center-ns { -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; }
  .justify-between-ns { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; }
  .justify-around-ns { -ms-flex-pack: distribute; justify-content: space-around; }
  .content-start-ns { -ms-flex-line-pack: start; align-content: flex-start; }
  .content-end-ns { -ms-flex-line-pack: end; align-content: flex-end; }
  .content-center-ns { -ms-flex-line-pack: center; align-content: center; }
  .content-between-ns { -ms-flex-line-pack: justify; align-content: space-between; }
  .content-around-ns { -ms-flex-line-pack: distribute; align-content: space-around; }
  .content-stretch-ns { -ms-flex-line-pack: stretch; align-content: stretch; }
  .order-0-ns { -webkit-box-ordinal-group: 1; -ms-flex-order: 0; order: 0; }
  .order-1-ns { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1; }
  .order-2-ns { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2; }
  .order-3-ns { -webkit-box-ordinal-group: 4; -ms-flex-order: 3; order: 3; }
  .order-4-ns { -webkit-box-ordinal-group: 5; -ms-flex-order: 4; order: 4; }
  .order-5-ns { -webkit-box-ordinal-group: 6; -ms-flex-order: 5; order: 5; }
  .order-6-ns { -webkit-box-ordinal-group: 7; -ms-flex-order: 6; order: 6; }
  .order-7-ns { -webkit-box-ordinal-group: 8; -ms-flex-order: 7; order: 7; }
  .order-8-ns { -webkit-box-ordinal-group: 9; -ms-flex-order: 8; order: 8; }
  .order-last-ns { -webkit-box-ordinal-group: 100000; -ms-flex-order: 99999; order: 99999; }
  .flex-grow-0-ns { -webkit-box-flex: 0; -ms-flex-positive: 0; flex-grow: 0; }
  .flex-grow-1-ns { -webkit-box-flex: 1; -ms-flex-positive: 1; flex-grow: 1; }
  .flex-shrink-0-ns { -ms-flex-negative: 0; flex-shrink: 0; }
  .flex-shrink-1-ns { -ms-flex-negative: 1; flex-shrink: 1; }
  .fl-ns { float: left; }
  .fr-ns { float: right; }
  .fn-ns { float: none; }
  .i-ns { font-style: italic; }
  .fs-normal-ns { font-style: normal; }
  .normal-ns { font-weight: normal; }
  .b-ns { font-weight: bold; }
  .fw1-ns { font-weight: 100; }
  .fw2-ns { font-weight: 200; }
  .fw3-ns { font-weight: 300; }
  .fw4-ns { font-weight: 400; }
  .fw5-ns { font-weight: 500; }
  .fw6-ns { font-weight: 600; }
  .fw7-ns { font-weight: 700; }
  .fw8-ns { font-weight: 800; }
  .fw9-ns { font-weight: 900; }
  .h1-ns { height: 1rem; }
  .h2-ns { height: 2rem; }
  .h2-5-ns { height: 3rem; }
  .h3-ns { height: 4rem; }
  .h3-4-ns { height: 6rem; }
  .h4-ns { height: 8rem; }
  .h5-ns { height: 16rem; }
  .h-25-ns { height: 25%; }
  .h-50-ns { height: 50%; }
  .h-75-ns { height: 75%; }
  .h-100-ns { height: 100%; }
  .min-h-100-ns { min-height: 100%; }
  .vh-25-ns { height: 25vh; }
  .vh-50-ns { height: 50vh; }
  .vh-75-ns { height: 75vh; }
  .vh-100-ns { height: 100vh; }
  .min-vh-100-ns { min-height: 100vh; }
  .h-auto-ns { height: auto; }
  .h-inherit-ns { height: inherit; }
  .tracked-ns { letter-spacing: .1em; }
  .tracked-tight-ns { letter-spacing: -.05em; }
  .tracked-mega-ns { letter-spacing: .25em; }
  .lh-solid-ns { line-height: 1; }
  .lh-title-ns { line-height: 1.25; }
  .lh-copy-ns { line-height: 1.5; }
  .mw-100-ns { max-width: 100%; }
  .mw1-ns { max-width: 1rem; }
  .mw2-ns { max-width: 2rem; }
  .mw3-ns { max-width: 4rem; }
  .mw4-ns { max-width: 8rem; }
  .mw5-ns { max-width: 16rem; }
  .mw6-ns { max-width: 32rem; }
  .mw7-ns { max-width: 48rem; }
  .mw8-ns { max-width: 64rem; }
  .mw9-ns { max-width: 96rem; }
  .mw-none-ns { max-width: none; }
  .w1-ns { width: 1rem; }
  .w2-ns { width: 2rem; }
  .w3-ns { width: 4rem; }
  .w4-ns { width: 8rem; }
  .w5-ns { width: 16rem; }
  .w-10-ns { width: 10%; }
  .w-20-ns { width: 20%; }
  .w-25-ns { width: 25%; }
  .w-30-ns { width: 30%; }
  .w-33-ns { width: 33%; }
  .w-34-ns { width: 34%; }
  .w-40-ns { width: 40%; }
  .w-50-ns { width: 50%; }
  .w-60-ns { width: 60%; }
  .w-70-ns { width: 70%; }
  .w-75-ns { width: 75%; }
  .w-80-ns { width: 80%; }
  .w-90-ns { width: 90%; }
  .w-100-ns { width: 100%; }
  .w-third-ns { width: calc( 100% / 3); }
  .w-two-thirds-ns { width: calc( 100% / 1.5); }
  .w-auto-ns { width: auto; }
  .overflow-visible-ns { overflow: visible; }
  .overflow-hidden-ns { overflow: hidden; }
  .overflow-scroll-ns { overflow: scroll; }
  .overflow-auto-ns { overflow: auto; }
  .overflow-x-visible-ns { overflow-x: visible; }
  .overflow-x-hidden-ns { overflow-x: hidden; }
  .overflow-x-scroll-ns { overflow-x: scroll; }
  .overflow-x-auto-ns { overflow-x: auto; }
  .overflow-y-visible-ns { overflow-y: visible; }
  .overflow-y-hidden-ns { overflow-y: hidden; }
  .overflow-y-scroll-ns { overflow-y: scroll; }
  .overflow-y-auto-ns { overflow-y: auto; }
  .static-ns { position: static; }
  .relative-ns { position: relative; }
  .absolute-ns { position: absolute; }
  .fixed-ns { position: fixed; }
  .rotate-45-ns { -webkit-transform: rotate(45deg); transform: rotate(45deg); }
  .rotate-90-ns { -webkit-transform: rotate(90deg); transform: rotate(90deg); }
  .rotate-135-ns { -webkit-transform: rotate(135deg); transform: rotate(135deg); }
  .rotate-180-ns { -webkit-transform: rotate(180deg); transform: rotate(180deg); }
  .rotate-225-ns { -webkit-transform: rotate(225deg); transform: rotate(225deg); }
  .rotate-270-ns { -webkit-transform: rotate(270deg); transform: rotate(270deg); }
  .rotate-315-ns { -webkit-transform: rotate(315deg); transform: rotate(315deg); }
  .pa-round-ns { padding: .35rem 1.2rem; }
  .pa0-ns { padding: 0; }
  .pa1-ns { padding: .25rem; }
  .pa2-ns { padding: .5rem; }
  .pa3-ns { padding: 1rem; }
  .pa4-ns { padding: 2rem; }
  .pa5-ns { padding: 4rem; }
  .pa6-ns { padding: 8rem; }
  .pa7-ns { padding: 16rem; }
  .pl0-ns { padding-left: 0; }
  .pl1-ns { padding-left: .25rem; }
  .pl2-ns { padding-left: .5rem; }
  .pl3-ns { padding-left: 1rem; }
  .pl4-ns { padding-left: 2rem; }
  .pl5-ns { padding-left: 4rem; }
  .pl6-ns { padding-left: 8rem; }
  .pl7-ns { padding-left: 16rem; }
  .pr0-ns { padding-right: 0; }
  .pr1-ns { padding-right: .25rem; }
  .pr2-ns { padding-right: .5rem; }
  .pr3-ns { padding-right: 1rem; }
  .pr4-ns { padding-right: 2rem; }
  .pr5-ns { padding-right: 4rem; }
  .pr6-ns { padding-right: 8rem; }
  .pr7-ns { padding-right: 16rem; }
  .pb0-ns { padding-bottom: 0; }
  .pb1-ns { padding-bottom: .25rem; }
  .pb2-ns { padding-bottom: .5rem; }
  .pb3-ns { padding-bottom: 1rem; }
  .pb4-ns { padding-bottom: 2rem; }
  .pb5-ns { padding-bottom: 4rem; }
  .pb6-ns { padding-bottom: 8rem; }
  .pb7-ns { padding-bottom: 16rem; }
  .pt0-ns { padding-top: 0; }
  .pt1-ns { padding-top: .25rem; }
  .pt2-ns { padding-top: .5rem; }
  .pt3-ns { padding-top: 1rem; }
  .pt4-ns { padding-top: 2rem; }
  .pt5-ns { padding-top: 4rem; }
  .pt6-ns { padding-top: 8rem; }
  .pt7-ns { padding-top: 16rem; }
  .pv0-ns { padding-top: 0; padding-bottom: 0; }
  .pv1-ns { padding-top: .25rem; padding-bottom: .25rem; }
  .pv2-ns { padding-top: .5rem; padding-bottom: .5rem; }
  .pv3-ns { padding-top: 1rem; padding-bottom: 1rem; }
  .pv4-ns { padding-top: 2rem; padding-bottom: 2rem; }
  .pv5-ns { padding-top: 4rem; padding-bottom: 4rem; }
  .pv6-ns { padding-top: 8rem; padding-bottom: 8rem; }
  .pv7-ns { padding-top: 16rem; padding-bottom: 16rem; }
  .ph0-ns { padding-left: 0; padding-right: 0; }
  .ph1-ns { padding-left: .25rem; padding-right: .25rem; }
  .ph2-ns { padding-left: .5rem; padding-right: .5rem; }
  .ph3-ns { padding-left: 1rem; padding-right: 1rem; }
  .ph4-ns { padding-left: 2rem; padding-right: 2rem; }
  .ph5-ns { padding-left: 4rem; padding-right: 4rem; }
  .ph6-ns { padding-left: 8rem; padding-right: 8rem; }
  .ph7-ns { padding-left: 16rem; padding-right: 16rem; }
  .ma0-ns { margin: 0; }
  .ma1-ns { margin: .25rem; }
  .ma2-ns { margin: .5rem; }
  .ma3-ns { margin: 1rem; }
  .ma4-ns { margin: 2rem; }
  .ma5-ns { margin: 4rem; }
  .ma6-ns { margin: 8rem; }
  .ma7-ns { margin: 16rem; }
  .ml0-ns { margin-left: 0; }
  .ml1-ns { margin-left: .25rem; }
  .ml2-ns { margin-left: .5rem; }
  .ml3-ns { margin-left: 1rem; }
  .ml4-ns { margin-left: 2rem; }
  .ml5-ns { margin-left: 4rem; }
  .ml6-ns { margin-left: 8rem; }
  .ml7-ns { margin-left: 16rem; }
  .mr0-ns { margin-right: 0; }
  .mr1-ns { margin-right: .25rem; }
  .mr2-ns { margin-right: .5rem; }
  .mr3-ns { margin-right: 1rem; }
  .mr4-ns { margin-right: 2rem; }
  .mr5-ns { margin-right: 4rem; }
  .mr6-ns { margin-right: 8rem; }
  .mr7-ns { margin-right: 16rem; }
  .mb0-ns { margin-bottom: 0; }
  .mb1-ns { margin-bottom: .25rem; }
  .mb2-ns { margin-bottom: .5rem; }
  .mb3-ns { margin-bottom: 1rem; }
  .mb4-ns { margin-bottom: 2rem; }
  .mb5-ns { margin-bottom: 4rem; }
  .mb6-ns { margin-bottom: 8rem; }
  .mb7-ns { margin-bottom: 16rem; }
  .mt0-ns { margin-top: 0; }
  .mt1-ns { margin-top: .25rem; }
  .mt2-ns { margin-top: .5rem; }
  .mt3-ns { margin-top: 1rem; }
  .mt4-ns { margin-top: 2rem; }
  .mt5-ns { margin-top: 4rem; }
  .mt6-ns { margin-top: 8rem; }
  .mt7-ns { margin-top: 16rem; }
  .mv0-ns { margin-top: 0; margin-bottom: 0; }
  .mv1-ns { margin-top: .25rem; margin-bottom: .25rem; }
  .mv2-ns { margin-top: .5rem; margin-bottom: .5rem; }
  .mv3-ns { margin-top: 1rem; margin-bottom: 1rem; }
  .mv4-ns { margin-top: 2rem; margin-bottom: 2rem; }
  .mv5-ns { margin-top: 4rem; margin-bottom: 4rem; }
  .mv6-ns { margin-top: 8rem; margin-bottom: 8rem; }
  .mv7-ns { margin-top: 16rem; margin-bottom: 16rem; }
  .mh0-ns { margin-left: 0; margin-right: 0; }
  .mh1-ns { margin-left: .25rem; margin-right: .25rem; }
  .mh2-ns { margin-left: .5rem; margin-right: .5rem; }
  .mh3-ns { margin-left: 1rem; margin-right: 1rem; }
  .mh4-ns { margin-left: 2rem; margin-right: 2rem; }
  .mh5-ns { margin-left: 4rem; margin-right: 4rem; }
  .mh6-ns { margin-left: 8rem; margin-right: 8rem; }
  .mh7-ns { margin-left: 16rem; margin-right: 16rem; }
  .na1-ns { margin: -.25rem; }
  .na2-ns { margin: -.5rem; }
  .na3-ns { margin: -1rem; }
  .na4-ns { margin: -2rem; }
  .na5-ns { margin: -4rem; }
  .na6-ns { margin: -8rem; }
  .na7-ns { margin: -16rem; }
  .nl1-ns { margin-left: -.25rem; }
  .nl2-ns { margin-left: -.5rem; }
  .nl3-ns { margin-left: -1rem; }
  .nl4-ns { margin-left: -2rem; }
  .nl5-ns { margin-left: -4rem; }
  .nl6-ns { margin-left: -8rem; }
  .nl7-ns { margin-left: -16rem; }
  .nr1-ns { margin-right: -.25rem; }
  .nr2-ns { margin-right: -.5rem; }
  .nr3-ns { margin-right: -1rem; }
  .nr4-ns { margin-right: -2rem; }
  .nr5-ns { margin-right: -4rem; }
  .nr6-ns { margin-right: -8rem; }
  .nr7-ns { margin-right: -16rem; }
  .nb1-ns { margin-bottom: -.25rem; }
  .nb2-ns { margin-bottom: -.5rem; }
  .nb3-ns { margin-bottom: -1rem; }
  .nb4-ns { margin-bottom: -2rem; }
  .nb5-ns { margin-bottom: -4rem; }
  .nb6-ns { margin-bottom: -8rem; }
  .nb7-ns { margin-bottom: -16rem; }
  .nt1-ns { margin-top: -.25rem; }
  .nt2-ns { margin-top: -.5rem; }
  .nt3-ns { margin-top: -1rem; }
  .nt4-ns { margin-top: -2rem; }
  .nt5-ns { margin-top: -4rem; }
  .nt6-ns { margin-top: -8rem; }
  .nt7-ns { margin-top: -16rem; }
  .strike-ns { text-decoration: line-through; }
  .underline-ns { text-decoration: underline; }
  .no-underline-ns { text-decoration: none; }
  .tl-ns { text-align: left; }
  .tr-ns { text-align: right; }
  .tc-ns { text-align: center; }
  .tj-ns { text-align: justify; }
  .ttc-ns { text-transform: capitalize; }
  .ttl-ns { text-transform: lowercase; }
  .ttu-ns { text-transform: uppercase; }
  .ttn-ns { text-transform: none; }
  .f-6-ns, .f-headline-ns { font-size: 6rem; }
  .f-5-ns, .f-subheadline-ns { font-size: 5rem; }
  .f1-ns { font-size: 3rem; }
  .f2-ns { font-size: 2.25rem; }
  .f3-ns { font-size: 1.5rem; }
  .f4-ns { font-size: 1.25rem; }
  .f5-ns { font-size: 1rem; }
  .f6-ns { font-size: .875rem; }
  .f7-ns { font-size: .75rem; }
  .f-giant { font-size: 10rem; }
  .measure-ns { max-width: 30em; }
  .measure-wide-ns { max-width: 34em; }
  .measure-narrow-ns { max-width: 20em; }
  .indent-ns { text-indent: 1em; margin-top: 0; margin-bottom: 0; }
  .small-caps-ns { font-variant: small-caps; }
  .truncate-ns { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .center-ns { margin-right: auto; margin-left: auto; }
  .mr-auto-ns { margin-right: auto; }
  .ml-auto-ns { margin-left: auto; }
  .clip-ns { position: fixed !important; position: absolute !important; clip: rect(1px 1px 1px 1px); /* IE6, IE7 */ clip: rect(1px, 1px, 1px, 1px); }
  .ws-normal-ns { white-space: normal; }
  .nowrap-ns { white-space: nowrap; }
  .pre-ns { white-space: pre; }
  .v-base-ns { vertical-align: baseline; }
  .v-mid-ns { vertical-align: middle; }
  .v-top-ns { vertical-align: top; }
  .v-btm-ns { vertical-align: bottom; } }

@media screen and (min-width: 30em) and (max-width: 60em) { .aspect-ratio-m { height: 0; position: relative; }
  .aspect-ratio--16x9-m { padding-bottom: 56.25%; }
  .aspect-ratio--9x16-m { padding-bottom: 177.77%; }
  .aspect-ratio--4x3-m { padding-bottom: 75%; }
  .aspect-ratio--3x4-m { padding-bottom: 133.33%; }
  .aspect-ratio--6x4-m { padding-bottom: 66.6%; }
  .aspect-ratio--4x6-m { padding-bottom: 150%; }
  .aspect-ratio--8x5-m { padding-bottom: 62.5%; }
  .aspect-ratio--5x8-m { padding-bottom: 160%; }
  .aspect-ratio--7x5-m { padding-bottom: 71.42%; }
  .aspect-ratio--5x7-m { padding-bottom: 140%; }
  .aspect-ratio--1x1-m { padding-bottom: 100%; }
  .aspect-ratio--object-m { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }
  .cover-m { background-size: cover !important; }
  .contain-m { background-size: contain !important; }
  .bg-center-m { background-repeat: no-repeat; background-position: center center; }
  .bg-top-m { background-repeat: no-repeat; background-position: top center; }
  .bg-right-m { background-repeat: no-repeat; background-position: center right; }
  .bg-bottom-m { background-repeat: no-repeat; background-position: bottom center; }
  .bg-left-m { background-repeat: no-repeat; background-position: center left; }
  .outline-m { outline: 1px solid; }
  .outline-transparent-m { outline: 1px solid transparent; }
  .outline-0-m { outline: 0; }
  .ba-m { border-style: solid; border-width: 1px; }
  .bt-m { border-top-style: solid; border-top-width: 1px; }
  .br-m { border-right-style: solid; border-right-width: 1px; }
  .bb-m { border-bottom-style: solid; border-bottom-width: 1px; }
  .bl-m { border-left-style: solid; border-left-width: 1px; }
  .bn-m { border-style: none; border-width: 0; }
  .br0-m { border-radius: 0; }
  .br1-m { border-radius: .125rem; }
  .br2-m { border-radius: .25rem; }
  .br3-m { border-radius: .5rem; }
  .br4-m { border-radius: 1rem; }
  .br-100-m { border-radius: 100%; }
  .br-pill-m { border-radius: 9999px; }
  .br--bottom-m { border-top-left-radius: 0; border-top-right-radius: 0; }
  .br--top-m { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }
  .br--right-m { border-top-left-radius: 0; border-bottom-left-radius: 0; }
  .br--left-m { border-top-right-radius: 0; border-bottom-right-radius: 0; }
  .b--dotted-m { border-style: dotted; }
  .b--dashed-m { border-style: dashed; }
  .b--solid-m { border-style: solid; }
  .b--none-m { border-style: none; }
  .bw0-m { border-width: 0; }
  .bw1-m { border-width: .125rem; }
  .bw2-m { border-width: .25rem; }
  .bw3-m { border-width: .5rem; }
  .bw4-m { border-width: 1rem; }
  .bw5-m { border-width: 2rem; }
  .bt-0-m { border-top-width: 0; }
  .br-0-m { border-right-width: 0; }
  .bb-0-m { border-bottom-width: 0; }
  .bl-0-m { border-left-width: 0; }
  .shadow-1-m { box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2); }
  .shadow-2-m { box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2); }
  .shadow-3-m { box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2); }
  .shadow-4-m { box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2); }
  .shadow-5-m { box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2); }
  .top-0-m { top: 0; }
  .left-0-m { left: 0; }
  .right-0-m { right: 0; }
  .bottom-0-m { bottom: 0; }
  .top-1-m { top: 1rem; }
  .left-1-m { left: 1rem; }
  .right-1-m { right: 1rem; }
  .bottom-1-m { bottom: 1rem; }
  .top-2-m { top: 2rem; }
  .left-2-m { left: 2rem; }
  .right-2-m { right: 2rem; }
  .bottom-2-m { bottom: 2rem; }
  .top--1-m { top: -1rem; }
  .right--1-m { right: -1rem; }
  .bottom--1-m { bottom: -1rem; }
  .left--1-m { left: -1rem; }
  .top--2-m { top: -2rem; }
  .right--2-m { right: -2rem; }
  .bottom--2-m { bottom: -2rem; }
  .left--2-m { left: -2rem; }
  .absolute--fill-m { top: 0; right: 0; bottom: 0; left: 0; }
  .cl-m { clear: left; }
  .cr-m { clear: right; }
  .cb-m { clear: both; }
  .cn-m { clear: none; }
  .dn-m { display: none; }
  .di-m { display: inline; }
  .db-m { display: block; }
  .dib-m { display: inline-block; }
  .dit-m { display: inline-table; }
  .dt-m { display: table; }
  .dtc-m { display: table-cell; }
  .dt-row-m { display: table-row; }
  .dt-row-group-m { display: table-row-group; }
  .dt-column-m { display: table-column; }
  .dt-column-group-m { display: table-column-group; }
  .dt--fixed-m { table-layout: fixed; width: 100%; }
  .flex-m { display: -webkit-box; display: -ms-flexbox; display: flex; }
  .inline-flex-m { display: -webkit-inline-box; display: -ms-inline-flexbox; display: inline-flex; }
  .flex-auto-m { -webkit-box-flex: 1; -ms-flex: 1 1 auto; flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }
  .flex-none-m { -webkit-box-flex: 0; -ms-flex: none; flex: none; }
  .flex-column-m { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; }
  .flex-row-m { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; }
  .flex-wrap-m { -ms-flex-wrap: wrap; flex-wrap: wrap; }
  .flex-nowrap-m { -ms-flex-wrap: nowrap; flex-wrap: nowrap; }
  .flex-wrap-reverse-m { -ms-flex-wrap: wrap-reverse; flex-wrap: wrap-reverse; }
  .flex-column-reverse-m { -webkit-box-orient: vertical; -webkit-box-direction: reverse; -ms-flex-direction: column-reverse; flex-direction: column-reverse; }
  .flex-row-reverse-m { -webkit-box-orient: horizontal; -webkit-box-direction: reverse; -ms-flex-direction: row-reverse; flex-direction: row-reverse; }
  .items-start-m { -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start; }
  .items-end-m { -webkit-box-align: end; -ms-flex-align: end; align-items: flex-end; }
  .items-center-m { -webkit-box-align: center; -ms-flex-align: center; align-items: center; }
  .items-baseline-m { -webkit-box-align: baseline; -ms-flex-align: baseline; align-items: baseline; }
  .items-stretch-m { -webkit-box-align: stretch; -ms-flex-align: stretch; align-items: stretch; }
  .self-start-m { -ms-flex-item-align: start; align-self: flex-start; }
  .self-end-m { -ms-flex-item-align: end; align-self: flex-end; }
  .self-center-m { -ms-flex-item-align: center; -ms-grid-row-align: center; align-self: center; }
  .self-baseline-m { -ms-flex-item-align: baseline; align-self: baseline; }
  .self-stretch-m { -ms-flex-item-align: stretch; -ms-grid-row-align: stretch; align-self: stretch; }
  .justify-start-m { -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; }
  .justify-end-m { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; }
  .justify-center-m { -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; }
  .justify-between-m { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; }
  .justify-around-m { -ms-flex-pack: distribute; justify-content: space-around; }
  .content-start-m { -ms-flex-line-pack: start; align-content: flex-start; }
  .content-end-m { -ms-flex-line-pack: end; align-content: flex-end; }
  .content-center-m { -ms-flex-line-pack: center; align-content: center; }
  .content-between-m { -ms-flex-line-pack: justify; align-content: space-between; }
  .content-around-m { -ms-flex-line-pack: distribute; align-content: space-around; }
  .content-stretch-m { -ms-flex-line-pack: stretch; align-content: stretch; }
  .order-0-m { -webkit-box-ordinal-group: 1; -ms-flex-order: 0; order: 0; }
  .order-1-m { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1; }
  .order-2-m { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2; }
  .order-3-m { -webkit-box-ordinal-group: 4; -ms-flex-order: 3; order: 3; }
  .order-4-m { -webkit-box-ordinal-group: 5; -ms-flex-order: 4; order: 4; }
  .order-5-m { -webkit-box-ordinal-group: 6; -ms-flex-order: 5; order: 5; }
  .order-6-m { -webkit-box-ordinal-group: 7; -ms-flex-order: 6; order: 6; }
  .order-7-m { -webkit-box-ordinal-group: 8; -ms-flex-order: 7; order: 7; }
  .order-8-m { -webkit-box-ordinal-group: 9; -ms-flex-order: 8; order: 8; }
  .order-last-m { -webkit-box-ordinal-group: 100000; -ms-flex-order: 99999; order: 99999; }
  .flex-grow-0-m { -webkit-box-flex: 0; -ms-flex-positive: 0; flex-grow: 0; }
  .flex-grow-1-m { -webkit-box-flex: 1; -ms-flex-positive: 1; flex-grow: 1; }
  .flex-shrink-0-m { -ms-flex-negative: 0; flex-shrink: 0; }
  .flex-shrink-1-m { -ms-flex-negative: 1; flex-shrink: 1; }
  .fl-m { float: left; }
  .fr-m { float: right; }
  .fn-m { float: none; }
  .i-m { font-style: italic; }
  .fs-normal-m { font-style: normal; }
  .normal-m { font-weight: normal; }
  .b-m { font-weight: bold; }
  .fw1-m { font-weight: 100; }
  .fw2-m { font-weight: 200; }
  .fw3-m { font-weight: 300; }
  .fw4-m { font-weight: 400; }
  .fw5-m { font-weight: 500; }
  .fw6-m { font-weight: 600; }
  .fw7-m { font-weight: 700; }
  .fw8-m { font-weight: 800; }
  .fw9-m { font-weight: 900; }
  .h1-m { height: 1rem; }
  .h2-m { height: 2rem; }
  .h2-5-m { height: 3rem; }
  .h3-m { height: 4rem; }
  .h3-4-m { height: 6rem; }
  .h4-m { height: 8rem; }
  .h5-m { height: 16rem; }
  .h-25-m { height: 25%; }
  .h-50-m { height: 50%; }
  .h-75-m { height: 75%; }
  .h-100-m { height: 100%; }
  .min-h-100-m { min-height: 100%; }
  .vh-25-m { height: 25vh; }
  .vh-50-m { height: 50vh; }
  .vh-75-m { height: 75vh; }
  .vh-100-m { height: 100vh; }
  .min-vh-100-m { min-height: 100vh; }
  .h-auto-m { height: auto; }
  .h-inherit-m { height: inherit; }
  .tracked-m { letter-spacing: .1em; }
  .tracked-tight-m { letter-spacing: -.05em; }
  .tracked-mega-m { letter-spacing: .25em; }
  .lh-solid-m { line-height: 1; }
  .lh-title-m { line-height: 1.25; }
  .lh-copy-m { line-height: 1.5; }
  .mw-100-m { max-width: 100%; }
  .mw1-m { max-width: 1rem; }
  .mw2-m { max-width: 2rem; }
  .mw3-m { max-width: 4rem; }
  .mw4-m { max-width: 8rem; }
  .mw5-m { max-width: 16rem; }
  .mw6-m { max-width: 32rem; }
  .mw7-m { max-width: 48rem; }
  .mw8-m { max-width: 64rem; }
  .mw9-m { max-width: 96rem; }
  .mw-none-m { max-width: none; }
  .w1-m { width: 1rem; }
  .w2-m { width: 2rem; }
  .w3-m { width: 4rem; }
  .w4-m { width: 8rem; }
  .w5-m { width: 16rem; }
  .w-10-m { width: 10%; }
  .w-20-m { width: 20%; }
  .w-25-m { width: 25%; }
  .w-30-m { width: 30%; }
  .w-33-m { width: 33%; }
  .w-34-m { width: 34%; }
  .w-40-m { width: 40%; }
  .w-50-m { width: 50%; }
  .w-60-m { width: 60%; }
  .w-70-m { width: 70%; }
  .w-75-m { width: 75%; }
  .w-80-m { width: 80%; }
  .w-90-m { width: 90%; }
  .w-100-m { width: 100%; }
  .w-third-m { width: calc( 100% / 3); }
  .w-two-thirds-m { width: calc( 100% / 1.5); }
  .w-auto-m { width: auto; }
  .overflow-visible-m { overflow: visible; }
  .overflow-hidden-m { overflow: hidden; }
  .overflow-scroll-m { overflow: scroll; }
  .overflow-auto-m { overflow: auto; }
  .overflow-x-visible-m { overflow-x: visible; }
  .overflow-x-hidden-m { overflow-x: hidden; }
  .overflow-x-scroll-m { overflow-x: scroll; }
  .overflow-x-auto-m { overflow-x: auto; }
  .overflow-y-visible-m { overflow-y: visible; }
  .overflow-y-hidden-m { overflow-y: hidden; }
  .overflow-y-scroll-m { overflow-y: scroll; }
  .overflow-y-auto-m { overflow-y: auto; }
  .static-m { position: static; }
  .relative-m { position: relative; }
  .absolute-m { position: absolute; }
  .fixed-m { position: fixed; }
  .rotate-45-m { -webkit-transform: rotate(45deg); transform: rotate(45deg); }
  .rotate-90-m { -webkit-transform: rotate(90deg); transform: rotate(90deg); }
  .rotate-135-m { -webkit-transform: rotate(135deg); transform: rotate(135deg); }
  .rotate-180-m { -webkit-transform: rotate(180deg); transform: rotate(180deg); }
  .rotate-225-m { -webkit-transform: rotate(225deg); transform: rotate(225deg); }
  .rotate-270-m { -webkit-transform: rotate(270deg); transform: rotate(270deg); }
  .rotate-315-m { -webkit-transform: rotate(315deg); transform: rotate(315deg); }
  .pa-round-m { padding: .35rem 1.2rem; }
  .pa0-m { padding: 0; }
  .pa1-m { padding: .25rem; }
  .pa2-m { padding: .5rem; }
  .pa3-m { padding: 1rem; }
  .pa4-m { padding: 2rem; }
  .pa5-m { padding: 4rem; }
  .pa6-m { padding: 8rem; }
  .pa7-m { padding: 16rem; }
  .pl0-m { padding-left: 0; }
  .pl1-m { padding-left: .25rem; }
  .pl2-m { padding-left: .5rem; }
  .pl3-m { padding-left: 1rem; }
  .pl4-m { padding-left: 2rem; }
  .pl5-m { padding-left: 4rem; }
  .pl6-m { padding-left: 8rem; }
  .pl7-m { padding-left: 16rem; }
  .pr0-m { padding-right: 0; }
  .pr1-m { padding-right: .25rem; }
  .pr2-m { padding-right: .5rem; }
  .pr3-m { padding-right: 1rem; }
  .pr4-m { padding-right: 2rem; }
  .pr5-m { padding-right: 4rem; }
  .pr6-m { padding-right: 8rem; }
  .pr7-m { padding-right: 16rem; }
  .pb0-m { padding-bottom: 0; }
  .pb1-m { padding-bottom: .25rem; }
  .pb2-m { padding-bottom: .5rem; }
  .pb3-m { padding-bottom: 1rem; }
  .pb4-m { padding-bottom: 2rem; }
  .pb5-m { padding-bottom: 4rem; }
  .pb6-m { padding-bottom: 8rem; }
  .pb7-m { padding-bottom: 16rem; }
  .pt0-m { padding-top: 0; }
  .pt1-m { padding-top: .25rem; }
  .pt2-m { padding-top: .5rem; }
  .pt3-m { padding-top: 1rem; }
  .pt4-m { padding-top: 2rem; }
  .pt5-m { padding-top: 4rem; }
  .pt6-m { padding-top: 8rem; }
  .pt7-m { padding-top: 16rem; }
  .pv0-m { padding-top: 0; padding-bottom: 0; }
  .pv1-m { padding-top: .25rem; padding-bottom: .25rem; }
  .pv2-m { padding-top: .5rem; padding-bottom: .5rem; }
  .pv3-m { padding-top: 1rem; padding-bottom: 1rem; }
  .pv4-m { padding-top: 2rem; padding-bottom: 2rem; }
  .pv5-m { padding-top: 4rem; padding-bottom: 4rem; }
  .pv6-m { padding-top: 8rem; padding-bottom: 8rem; }
  .pv7-m { padding-top: 16rem; padding-bottom: 16rem; }
  .ph0-m { padding-left: 0; padding-right: 0; }
  .ph1-m { padding-left: .25rem; padding-right: .25rem; }
  .ph2-m { padding-left: .5rem; padding-right: .5rem; }
  .ph3-m { padding-left: 1rem; padding-right: 1rem; }
  .ph4-m { padding-left: 2rem; padding-right: 2rem; }
  .ph5-m { padding-left: 4rem; padding-right: 4rem; }
  .ph6-m { padding-left: 8rem; padding-right: 8rem; }
  .ph7-m { padding-left: 16rem; padding-right: 16rem; }
  .ma0-m { margin: 0; }
  .ma1-m { margin: .25rem; }
  .ma2-m { margin: .5rem; }
  .ma3-m { margin: 1rem; }
  .ma4-m { margin: 2rem; }
  .ma5-m { margin: 4rem; }
  .ma6-m { margin: 8rem; }
  .ma7-m { margin: 16rem; }
  .ml0-m { margin-left: 0; }
  .ml1-m { margin-left: .25rem; }
  .ml2-m { margin-left: .5rem; }
  .ml3-m { margin-left: 1rem; }
  .ml4-m { margin-left: 2rem; }
  .ml5-m { margin-left: 4rem; }
  .ml6-m { margin-left: 8rem; }
  .ml7-m { margin-left: 16rem; }
  .mr0-m { margin-right: 0; }
  .mr1-m { margin-right: .25rem; }
  .mr2-m { margin-right: .5rem; }
  .mr3-m { margin-right: 1rem; }
  .mr4-m { margin-right: 2rem; }
  .mr5-m { margin-right: 4rem; }
  .mr6-m { margin-right: 8rem; }
  .mr7-m { margin-right: 16rem; }
  .mb0-m { margin-bottom: 0; }
  .mb1-m { margin-bottom: .25rem; }
  .mb2-m { margin-bottom: .5rem; }
  .mb3-m { margin-bottom: 1rem; }
  .mb4-m { margin-bottom: 2rem; }
  .mb5-m { margin-bottom: 4rem; }
  .mb6-m { margin-bottom: 8rem; }
  .mb7-m { margin-bottom: 16rem; }
  .mt0-m { margin-top: 0; }
  .mt1-m { margin-top: .25rem; }
  .mt2-m { margin-top: .5rem; }
  .mt3-m { margin-top: 1rem; }
  .mt4-m { margin-top: 2rem; }
  .mt5-m { margin-top: 4rem; }
  .mt6-m { margin-top: 8rem; }
  .mt7-m { margin-top: 16rem; }
  .mv0-m { margin-top: 0; margin-bottom: 0; }
  .mv1-m { margin-top: .25rem; margin-bottom: .25rem; }
  .mv2-m { margin-top: .5rem; margin-bottom: .5rem; }
  .mv3-m { margin-top: 1rem; margin-bottom: 1rem; }
  .mv4-m { margin-top: 2rem; margin-bottom: 2rem; }
  .mv5-m { margin-top: 4rem; margin-bottom: 4rem; }
  .mv6-m { margin-top: 8rem; margin-bottom: 8rem; }
  .mv7-m { margin-top: 16rem; margin-bottom: 16rem; }
  .mh0-m { margin-left: 0; margin-right: 0; }
  .mh1-m { margin-left: .25rem; margin-right: .25rem; }
  .mh2-m { margin-left: .5rem; margin-right: .5rem; }
  .mh3-m { margin-left: 1rem; margin-right: 1rem; }
  .mh4-m { margin-left: 2rem; margin-right: 2rem; }
  .mh5-m { margin-left: 4rem; margin-right: 4rem; }
  .mh6-m { margin-left: 8rem; margin-right: 8rem; }
  .mh7-m { margin-left: 16rem; margin-right: 16rem; }
  .na1-m { margin: -.25rem; }
  .na2-m { margin: -.5rem; }
  .na3-m { margin: -1rem; }
  .na4-m { margin: -2rem; }
  .na5-m { margin: -4rem; }
  .na6-m { margin: -8rem; }
  .na7-m { margin: -16rem; }
  .nl1-m { margin-left: -.25rem; }
  .nl2-m { margin-left: -.5rem; }
  .nl3-m { margin-left: -1rem; }
  .nl4-m { margin-left: -2rem; }
  .nl5-m { margin-left: -4rem; }
  .nl6-m { margin-left: -8rem; }
  .nl7-m { margin-left: -16rem; }
  .nr1-m { margin-right: -.25rem; }
  .nr2-m { margin-right: -.5rem; }
  .nr3-m { margin-right: -1rem; }
  .nr4-m { margin-right: -2rem; }
  .nr5-m { margin-right: -4rem; }
  .nr6-m { margin-right: -8rem; }
  .nr7-m { margin-right: -16rem; }
  .nb1-m { margin-bottom: -.25rem; }
  .nb2-m { margin-bottom: -.5rem; }
  .nb3-m { margin-bottom: -1rem; }
  .nb4-m { margin-bottom: -2rem; }
  .nb5-m { margin-bottom: -4rem; }
  .nb6-m { margin-bottom: -8rem; }
  .nb7-m { margin-bottom: -16rem; }
  .nt1-m { margin-top: -.25rem; }
  .nt2-m { margin-top: -.5rem; }
  .nt3-m { margin-top: -1rem; }
  .nt4-m { margin-top: -2rem; }
  .nt5-m { margin-top: -4rem; }
  .nt6-m { margin-top: -8rem; }
  .nt7-m { margin-top: -16rem; }
  .strike-m { text-decoration: line-through; }
  .underline-m { text-decoration: underline; }
  .no-underline-m { text-decoration: none; }
  .tl-m { text-align: left; }
  .tr-m { text-align: right; }
  .tc-m { text-align: center; }
  .tj-m { text-align: justify; }
  .ttc-m { text-transform: capitalize; }
  .ttl-m { text-transform: lowercase; }
  .ttu-m { text-transform: uppercase; }
  .ttn-m { text-transform: none; }
  .f-6-m, .f-headline-m { font-size: 6rem; }
  .f-5-m, .f-subheadline-m { font-size: 5rem; }
  .f1-m { font-size: 3rem; }
  .f2-m { font-size: 2.25rem; }
  .f3-m { font-size: 1.5rem; }
  .f4-m { font-size: 1.25rem; }
  .f5-m { font-size: 1rem; }
  .f6-m { font-size: .875rem; }
  .f7-m { font-size: .75rem; }
  .measure-m { max-width: 30em; }
  .measure-wide-m { max-width: 34em; }
  .measure-narrow-m { max-width: 20em; }
  .indent-m { text-indent: 1em; margin-top: 0; margin-bottom: 0; }
  .small-caps-m { font-variant: small-caps; }
  .truncate-m { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .center-m { margin-right: auto; margin-left: auto; }
  .mr-auto-m { margin-right: auto; }
  .ml-auto-m { margin-left: auto; }
  .clip-m { position: fixed !important; position: absolute !important; clip: rect(1px 1px 1px 1px); /* IE6, IE7 */ clip: rect(1px, 1px, 1px, 1px); }
  .ws-normal-m { white-space: normal; }
  .nowrap-m { white-space: nowrap; }
  .pre-m { white-space: pre; }
  .v-base-m { vertical-align: baseline; }
  .v-mid-m { vertical-align: middle; }
  .v-top-m { vertical-align: top; }
  .v-btm-m { vertical-align: bottom; } }

@media screen and (min-width: 60em) { .aspect-ratio-l { height: 0; position: relative; }
  .aspect-ratio--16x9-l { padding-bottom: 56.25%; }
  .aspect-ratio--9x16-l { padding-bottom: 177.77%; }
  .aspect-ratio--4x3-l { padding-bottom: 75%; }
  .aspect-ratio--3x4-l { padding-bottom: 133.33%; }
  .aspect-ratio--6x4-l { padding-bottom: 66.6%; }
  .aspect-ratio--4x6-l { padding-bottom: 150%; }
  .aspect-ratio--8x5-l { padding-bottom: 62.5%; }
  .aspect-ratio--5x8-l { padding-bottom: 160%; }
  .aspect-ratio--7x5-l { padding-bottom: 71.42%; }
  .aspect-ratio--5x7-l { padding-bottom: 140%; }
  .aspect-ratio--1x1-l { padding-bottom: 100%; }
  .aspect-ratio--object-l { position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100; }
  .cover-l { background-size: cover !important; }
  .contain-l { background-size: contain !important; }
  .bg-center-l { background-repeat: no-repeat; background-position: center center; }
  .bg-top-l { background-repeat: no-repeat; background-position: top center; }
  .bg-right-l { background-repeat: no-repeat; background-position: center right; }
  .bg-bottom-l { background-repeat: no-repeat; background-position: bottom center; }
  .bg-left-l { background-repeat: no-repeat; background-position: center left; }
  .outline-l { outline: 1px solid; }
  .outline-transparent-l { outline: 1px solid transparent; }
  .outline-0-l { outline: 0; }
  .ba-l { border-style: solid; border-width: 1px; }
  .bt-l { border-top-style: solid; border-top-width: 1px; }
  .br-l { border-right-style: solid; border-right-width: 1px; }
  .bb-l { border-bottom-style: solid; border-bottom-width: 1px; }
  .bl-l { border-left-style: solid; border-left-width: 1px; }
  .bn-l { border-style: none; border-width: 0; }
  .br0-l { border-radius: 0; }
  .br1-l { border-radius: .125rem; }
  .br2-l { border-radius: .25rem; }
  .br3-l { border-radius: .5rem; }
  .br4-l { border-radius: 1rem; }
  .br-100-l { border-radius: 100%; }
  .br-pill-l { border-radius: 9999px; }
  .br--bottom-l { border-top-left-radius: 0; border-top-right-radius: 0; }
  .br--top-l { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }
  .br--right-l { border-top-left-radius: 0; border-bottom-left-radius: 0; }
  .br--left-l { border-top-right-radius: 0; border-bottom-right-radius: 0; }
  .b--dotted-l { border-style: dotted; }
  .b--dashed-l { border-style: dashed; }
  .b--solid-l { border-style: solid; }
  .b--none-l { border-style: none; }
  .bw0-l { border-width: 0; }
  .bw1-l { border-width: .125rem; }
  .bw2-l { border-width: .25rem; }
  .bw3-l { border-width: .5rem; }
  .bw4-l { border-width: 1rem; }
  .bw5-l { border-width: 2rem; }
  .bt-0-l { border-top-width: 0; }
  .br-0-l { border-right-width: 0; }
  .bb-0-l { border-bottom-width: 0; }
  .bl-0-l { border-left-width: 0; }
  .shadow-1-l { box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2); }
  .shadow-2-l { box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2); }
  .shadow-3-l { box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2); }
  .shadow-4-l { box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2); }
  .shadow-5-l { box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2); }
  .top-0-l { top: 0; }
  .left-0-l { left: 0; }
  .right-0-l { right: 0; }
  .bottom-0-l { bottom: 0; }
  .top-1-l { top: 1rem; }
  .left-1-l { left: 1rem; }
  .right-1-l { right: 1rem; }
  .bottom-1-l { bottom: 1rem; }
  .top-2-l { top: 2rem; }
  .left-2-l { left: 2rem; }
  .right-2-l { right: 2rem; }
  .bottom-2-l { bottom: 2rem; }
  .top--1-l { top: -1rem; }
  .right--1-l { right: -1rem; }
  .bottom--1-l { bottom: -1rem; }
  .left--1-l { left: -1rem; }
  .top--2-l { top: -2rem; }
  .right--2-l { right: -2rem; }
  .bottom--2-l { bottom: -2rem; }
  .left--2-l { left: -2rem; }
  .absolute--fill-l { top: 0; right: 0; bottom: 0; left: 0; }
  .cl-l { clear: left; }
  .cr-l { clear: right; }
  .cb-l { clear: both; }
  .cn-l { clear: none; }
  .dn-l { display: none; }
  .di-l { display: inline; }
  .db-l { display: block; }
  .dib-l { display: inline-block; }
  .dit-l { display: inline-table; }
  .dt-l { display: table; }
  .dtc-l { display: table-cell; }
  .dt-row-l { display: table-row; }
  .dt-row-group-l { display: table-row-group; }
  .dt-column-l { display: table-column; }
  .dt-column-group-l { display: table-column-group; }
  .dt--fixed-l { table-layout: fixed; width: 100%; }
  .flex-l { display: -webkit-box; display: -ms-flexbox; display: flex; }
  .inline-flex-l { display: -webkit-inline-box; display: -ms-inline-flexbox; display: inline-flex; }
  .flex-auto-l { -webkit-box-flex: 1; -ms-flex: 1 1 auto; flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }
  .flex-none-l { -webkit-box-flex: 0; -ms-flex: none; flex: none; }
  .flex-column-l { -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; }
  .flex-row-l { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; }
  .flex-wrap-l { -ms-flex-wrap: wrap; flex-wrap: wrap; }
  .flex-nowrap-l { -ms-flex-wrap: nowrap; flex-wrap: nowrap; }
  .flex-wrap-reverse-l { -ms-flex-wrap: wrap-reverse; flex-wrap: wrap-reverse; }
  .flex-column-reverse-l { -webkit-box-orient: vertical; -webkit-box-direction: reverse; -ms-flex-direction: column-reverse; flex-direction: column-reverse; }
  .flex-row-reverse-l { -webkit-box-orient: horizontal; -webkit-box-direction: reverse; -ms-flex-direction: row-reverse; flex-direction: row-reverse; }
  .items-start-l { -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start; }
  .items-end-l { -webkit-box-align: end; -ms-flex-align: end; align-items: flex-end; }
  .items-center-l { -webkit-box-align: center; -ms-flex-align: center; align-items: center; }
  .items-baseline-l { -webkit-box-align: baseline; -ms-flex-align: baseline; align-items: baseline; }
  .items-stretch-l { -webkit-box-align: stretch; -ms-flex-align: stretch; align-items: stretch; }
  .self-start-l { -ms-flex-item-align: start; align-self: flex-start; }
  .self-end-l { -ms-flex-item-align: end; align-self: flex-end; }
  .self-center-l { -ms-flex-item-align: center; -ms-grid-row-align: center; align-self: center; }
  .self-baseline-l { -ms-flex-item-align: baseline; align-self: baseline; }
  .self-stretch-l { -ms-flex-item-align: stretch; -ms-grid-row-align: stretch; align-self: stretch; }
  .justify-start-l { -webkit-box-pack: start; -ms-flex-pack: start; justify-content: flex-start; }
  .justify-end-l { -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; }
  .justify-center-l { -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; }
  .justify-between-l { -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; }
  .justify-around-l { -ms-flex-pack: distribute; justify-content: space-around; }
  .content-start-l { -ms-flex-line-pack: start; align-content: flex-start; }
  .content-end-l { -ms-flex-line-pack: end; align-content: flex-end; }
  .content-center-l { -ms-flex-line-pack: center; align-content: center; }
  .content-between-l { -ms-flex-line-pack: justify; align-content: space-between; }
  .content-around-l { -ms-flex-line-pack: distribute; align-content: space-around; }
  .content-stretch-l { -ms-flex-line-pack: stretch; align-content: stretch; }
  .order-0-l { -webkit-box-ordinal-group: 1; -ms-flex-order: 0; order: 0; }
  .order-1-l { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1; }
  .order-2-l { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2; }
  .order-3-l { -webkit-box-ordinal-group: 4; -ms-flex-order: 3; order: 3; }
  .order-4-l { -webkit-box-ordinal-group: 5; -ms-flex-order: 4; order: 4; }
  .order-5-l { -webkit-box-ordinal-group: 6; -ms-flex-order: 5; order: 5; }
  .order-6-l { -webkit-box-ordinal-group: 7; -ms-flex-order: 6; order: 6; }
  .order-7-l { -webkit-box-ordinal-group: 8; -ms-flex-order: 7; order: 7; }
  .order-8-l { -webkit-box-ordinal-group: 9; -ms-flex-order: 8; order: 8; }
  .order-last-l { -webkit-box-ordinal-group: 100000; -ms-flex-order: 99999; order: 99999; }
  .flex-grow-0-l { -webkit-box-flex: 0; -ms-flex-positive: 0; flex-grow: 0; }
  .flex-grow-1-l { -webkit-box-flex: 1; -ms-flex-positive: 1; flex-grow: 1; }
  .flex-shrink-0-l { -ms-flex-negative: 0; flex-shrink: 0; }
  .flex-shrink-1-l { -ms-flex-negative: 1; flex-shrink: 1; }
  .fl-l { float: left; }
  .fr-l { float: right; }
  .fn-l { float: none; }
  .i-l { font-style: italic; }
  .fs-normal-l { font-style: normal; }
  .normal-l { font-weight: normal; }
  .b-l { font-weight: bold; }
  .fw1-l { font-weight: 100; }
  .fw2-l { font-weight: 200; }
  .fw3-l { font-weight: 300; }
  .fw4-l { font-weight: 400; }
  .fw5-l { font-weight: 500; }
  .fw6-l { font-weight: 600; }
  .fw7-l { font-weight: 700; }
  .fw8-l { font-weight: 800; }
  .fw9-l { font-weight: 900; }
  .h1-l { height: 1rem; }
  .h2-l { height: 2rem; }
  .h2-5-l { height: 3rem; }
  .h3-l { height: 4rem; }
  .h3-4-l { height: 6rem; }
  .h4-l { height: 8rem; }
  .h5-l { height: 16rem; }
  .h-25-l { height: 25%; }
  .h-50-l { height: 50%; }
  .h-75-l { height: 75%; }
  .h-90-l { height: 90%; }
  .h-80-l { height: 80%; }
  .h-100-l { height: 100%; }
  .min-h-100-l { min-height: 100%; }
  .vh-25-l { height: 25vh; }
  .vh-50-l { height: 50vh; }
  .vh-75-l { height: 75vh; }
  .vh-90-l { height: 90vh; }
  .vh-80-l { height: 80vh; }
  .vh-100-l { height: 100vh; }
  .min-vh-100-l { min-height: 100vh; }
  .h-auto-l { height: auto; }
  .h-inherit-l { height: inherit; }
  .tracked-l { letter-spacing: .1em; }
  .tracked-tight-l { letter-spacing: -.05em; }
  .tracked-mega-l { letter-spacing: .25em; }
  .lh-solid-l { line-height: 1; }
  .lh-tight-l { line-height: .8; }
  .lh-title-l { line-height: 1.25; }
  .lh-copy-l { line-height: 1.5; }
  .mw-100-l { max-width: 100%; }
  .vw-90-l { width: 90vw; }
  .mw1-l { max-width: 1rem; }
  .mw2-l { max-width: 2rem; }
  .mw3-l { max-width: 4rem; }
  .mw4-l { max-width: 8rem; }
  .mw5-l { max-width: 16rem; }
  .mw6-l { max-width: 32rem; }
  .mw7-l { max-width: 48rem; }
  .mw8-l { max-width: 64rem; }
  .mw9-l { max-width: 96rem; }
  .mw-none-l { max-width: none; }
  .w1-l { width: 1rem; }
  .w2-l { width: 2rem; }
  .w3-l { width: 4rem; }
  .w4-l { width: 8rem; }
  .w5-l { width: 16rem; }
  .w-10-l { width: 10%; }
  .w-20-l { width: 20%; }
  .w-25-l { width: 25%; }
  .w-30-l { width: 30%; }
  .w-33-l { width: 33%; }
  .w-34-l { width: 34%; }
  .w-40-l { width: 40%; }
  .w-50-l { width: 50%; }
  .w-60-l { width: 60%; }
  .w-70-l { width: 70%; }
  .w-75-l { width: 75%; }
  .w-80-l { width: 80%; }
  .w-90-l { width: 90%; }
  .w-100-l { width: 100%; }
  .w-third-l { width: calc( 100% / 3); }
  .w-two-thirds-l { width: calc( 100% / 1.5); }
  .w-auto-l { width: auto; }
  .overflow-visible-l { overflow: visible; }
  .overflow-hidden-l { overflow: hidden; }
  .overflow-scroll-l { overflow: scroll; }
  .overflow-auto-l { overflow: auto; }
  .overflow-x-visible-l { overflow-x: visible; }
  .overflow-x-hidden-l { overflow-x: hidden; }
  .overflow-x-scroll-l { overflow-x: scroll; }
  .overflow-x-auto-l { overflow-x: auto; }
  .overflow-y-visible-l { overflow-y: visible; }
  .overflow-y-hidden-l { overflow-y: hidden; }
  .overflow-y-scroll-l { overflow-y: scroll; }
  .overflow-y-auto-l { overflow-y: auto; }
  .static-l { position: static; }
  .relative-l { position: relative; }
  .absolute-l { position: absolute; }
  .fixed-l { position: fixed; }
  .rotate-45-l { -webkit-transform: rotate(45deg); transform: rotate(45deg); }
  .rotate-90-l { -webkit-transform: rotate(90deg); transform: rotate(90deg); }
  .rotate-135-l { -webkit-transform: rotate(135deg); transform: rotate(135deg); }
  .rotate-180-l { -webkit-transform: rotate(180deg); transform: rotate(180deg); }
  .rotate-225-l { -webkit-transform: rotate(225deg); transform: rotate(225deg); }
  .rotate-270-l { -webkit-transform: rotate(270deg); transform: rotate(270deg); }
  .rotate-315-l { -webkit-transform: rotate(315deg); transform: rotate(315deg); }
  .pa-round-l { padding: .35rem 1.2rem; }
  .pa0-l { padding: 0; }
  .pa1-l { padding: .25rem; }
  .pa2-l { padding: .5rem; }
  .pa3-l { padding: 1rem; }
  .pa4-l { padding: 2rem; }
  .pa5-l { padding: 4rem; }
  .pa6-l { padding: 8rem; }
  .pa7-l { padding: 16rem; }
  .pl0-l { padding-left: 0; }
  .pl1-l { padding-left: .25rem; }
  .pl2-l { padding-left: .5rem; }
  .pl3-l { padding-left: 1rem; }
  .pl4-l { padding-left: 2rem; }
  .pl5-l { padding-left: 4rem; }
  .pl6-l { padding-left: 8rem; }
  .pl7-l { padding-left: 16rem; }
  .pr0-l { padding-right: 0; }
  .pr1-l { padding-right: .25rem; }
  .pr2-l { padding-right: .5rem; }
  .pr3-l { padding-right: 1rem; }
  .pr4-l { padding-right: 2rem; }
  .pr5-l { padding-right: 4rem; }
  .pr6-l { padding-right: 8rem; }
  .pr7-l { padding-right: 16rem; }
  .pb0-l { padding-bottom: 0; }
  .pb1-l { padding-bottom: .25rem; }
  .pb2-l { padding-bottom: .5rem; }
  .pb3-l { padding-bottom: 1rem; }
  .pb4-l { padding-bottom: 2rem; }
  .pb5-l { padding-bottom: 4rem; }
  .pb6-l { padding-bottom: 8rem; }
  .pb7-l { padding-bottom: 16rem; }
  .pt0-l { padding-top: 0; }
  .pt1-l { padding-top: .25rem; }
  .pt2-l { padding-top: .5rem; }
  .pt3-l { padding-top: 1rem; }
  .pt4-l { padding-top: 2rem; }
  .pt5-l { padding-top: 4rem; }
  .pt6-l { padding-top: 8rem; }
  .pt7-l { padding-top: 16rem; }
  .pv0-l { padding-top: 0; padding-bottom: 0; }
  .pv1-l { padding-top: .25rem; padding-bottom: .25rem; }
  .pv2-l { padding-top: .5rem; padding-bottom: .5rem; }
  .pv3-l { padding-top: 1rem; padding-bottom: 1rem; }
  .pv4-l { padding-top: 2rem; padding-bottom: 2rem; }
  .pv5-l { padding-top: 4rem; padding-bottom: 4rem; }
  .pv6-l { padding-top: 8rem; padding-bottom: 8rem; }
  .pv7-l { padding-top: 16rem; padding-bottom: 16rem; }
  .ph0-l { padding-left: 0; padding-right: 0; }
  .ph1-l { padding-left: .25rem; padding-right: .25rem; }
  .ph2-l { padding-left: .5rem; padding-right: .5rem; }
  .ph3-l { padding-left: 1rem; padding-right: 1rem; }
  .ph4-l { padding-left: 2rem; padding-right: 2rem; }
  .ph5-l { padding-left: 4rem; padding-right: 4rem; }
  .ph6-l { padding-left: 8rem; padding-right: 8rem; }
  .ph7-l { padding-left: 16rem; padding-right: 16rem; }
  .ma0-l { margin: 0; }
  .ma1-l { margin: .25rem; }
  .ma2-l { margin: .5rem; }
  .ma3-l { margin: 1rem; }
  .ma4-l { margin: 2rem; }
  .ma5-l { margin: 4rem; }
  .ma6-l { margin: 8rem; }
  .ma7-l { margin: 16rem; }
  .ml0-l { margin-left: 0; }
  .ml1-l { margin-left: .25rem; }
  .ml2-l { margin-left: .5rem; }
  .ml3-l { margin-left: 1rem; }
  .ml4-l { margin-left: 2rem; }
  .ml5-l { margin-left: 4rem; }
  .ml6-l { margin-left: 8rem; }
  .ml7-l { margin-left: 16rem; }
  .mr0-l { margin-right: 0; }
  .mr1-l { margin-right: .25rem; }
  .mr2-l { margin-right: .5rem; }
  .mr3-l { margin-right: 1rem; }
  .mr4-l { margin-right: 2rem; }
  .mr5-l { margin-right: 4rem; }
  .mr6-l { margin-right: 8rem; }
  .mr7-l { margin-right: 16rem; }
  .mb0-l { margin-bottom: 0; }
  .mb1-l { margin-bottom: .25rem; }
  .mb2-l { margin-bottom: .5rem; }
  .mb3-l { margin-bottom: 1rem; }
  .mb4-l { margin-bottom: 2rem; }
  .mb5-l { margin-bottom: 4rem; }
  .mb6-l { margin-bottom: 8rem; }
  .mb7-l { margin-bottom: 16rem; }
  .mt0-l { margin-top: 0; }
  .mt1-l { margin-top: .25rem; }
  .mt2-l { margin-top: .5rem; }
  .mt3-l { margin-top: 1rem; }
  .mt4-l { margin-top: 2rem; }
  .mt5-l { margin-top: 4rem; }
  .mt6-l { margin-top: 8rem; }
  .mt7-l { margin-top: 16rem; }
  .mv0-l { margin-top: 0; margin-bottom: 0; }
  .mv1-l { margin-top: .25rem; margin-bottom: .25rem; }
  .mv2-l { margin-top: .5rem; margin-bottom: .5rem; }
  .mv3-l { margin-top: 1rem; margin-bottom: 1rem; }
  .mv4-l { margin-top: 2rem; margin-bottom: 2rem; }
  .mv5-l { margin-top: 4rem; margin-bottom: 4rem; }
  .mv6-l { margin-top: 8rem; margin-bottom: 8rem; }
  .mv7-l { margin-top: 16rem; margin-bottom: 16rem; }
  .mh0-l { margin-left: 0; margin-right: 0; }
  .mh1-l { margin-left: .25rem; margin-right: .25rem; }
  .mh2-l { margin-left: .5rem; margin-right: .5rem; }
  .mh3-l { margin-left: 1rem; margin-right: 1rem; }
  .mh4-l { margin-left: 2rem; margin-right: 2rem; }
  .mh5-l { margin-left: 4rem; margin-right: 4rem; }
  .mh6-l { margin-left: 8rem; margin-right: 8rem; }
  .mh7-l { margin-left: 16rem; margin-right: 16rem; }
  .na1-l { margin: -.25rem; }
  .na2-l { margin: -.5rem; }
  .na3-l { margin: -1rem; }
  .na4-l { margin: -2rem; }
  .na5-l { margin: -4rem; }
  .na6-l { margin: -8rem; }
  .na7-l { margin: -16rem; }
  .nl1-l { margin-left: -.25rem; }
  .nl2-l { margin-left: -.5rem; }
  .nl3-l { margin-left: -1rem; }
  .nl4-l { margin-left: -2rem; }
  .nl5-l { margin-left: -4rem; }
  .nl6-l { margin-left: -8rem; }
  .nl7-l { margin-left: -16rem; }
  .nr1-l { margin-right: -.25rem; }
  .nr2-l { margin-right: -.5rem; }
  .nr3-l { margin-right: -1rem; }
  .nr4-l { margin-right: -2rem; }
  .nr5-l { margin-right: -4rem; }
  .nr6-l { margin-right: -8rem; }
  .nr7-l { margin-right: -16rem; }
  .nb1-l { margin-bottom: -.25rem; }
  .nb2-l { margin-bottom: -.5rem; }
  .nb3-l { margin-bottom: -1rem; }
  .nb4-l { margin-bottom: -2rem; }
  .nb5-l { margin-bottom: -4rem; }
  .nb6-l { margin-bottom: -8rem; }
  .nb7-l { margin-bottom: -16rem; }
  .nt1-l { margin-top: -.25rem; }
  .nt2-l { margin-top: -.5rem; }
  .nt3-l { margin-top: -1rem; }
  .nt4-l { margin-top: -2rem; }
  .nt5-l { margin-top: -4rem; }
  .nt6-l { margin-top: -8rem; }
  .nt7-l { margin-top: -16rem; }
  .strike-l { text-decoration: line-through; }
  .underline-l { text-decoration: underline; }
  .no-underline-l { text-decoration: none; }
  .tl-l { text-align: left; }
  .tr-l { text-align: right; }
  .tc-l { text-align: center; }
  .tj-l { text-align: justify; }
  .ttc-l { text-transform: capitalize; }
  .ttl-l { text-transform: lowercase; }
  .ttu-l { text-transform: uppercase; }
  .ttn-l { text-transform: none; }
  .f-6-l, .f-headline-l { font-size: 6rem; }
  .f-5-l, .f-subheadline-l { font-size: 5rem; }
  .f1-l { font-size: 3rem; }
  .f2-l { font-size: 2.25rem; }
  .f3-l { font-size: 1.5rem; }
  .f-4 { font-size: 1.375rem; }
  .f4-l { font-size: 1.25rem; }
  .f5-l { font-size: 1rem; }
  .f6-l { font-size: .875rem; }
  .f7-l { font-size: .75rem; }
  .measure-l { max-width: 30em; }
  .measure-wide-l { max-width: 34em; }
  .measure-narrow-l { max-width: 20em; }
  .indent-l { text-indent: 1em; margin-top: 0; margin-bottom: 0; }
  .small-caps-l { font-variant: small-caps; }
  .truncate-l { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .center-l { margin-right: auto; margin-left: auto; }
  .mr-auto-l { margin-right: auto; }
  .ml-auto-l { margin-left: auto; }
  .clip-l { position: fixed !important; position: absolute !important; clip: rect(1px 1px 1px 1px); /* IE6, IE7 */ clip: rect(1px, 1px, 1px, 1px); }
  .ws-normal-l { white-space: normal; }
  .nowrap-l { white-space: nowrap; }
  .pre-l { white-space: pre; }
  .v-base-l { vertical-align: baseline; }
  .v-mid-l { vertical-align: middle; }
  .v-top-l { vertical-align: top; }
  .v-btm-l { vertical-align: bottom; } }
`;
