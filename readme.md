# React classname elements

This package was created to support the nicer creation of components with premade css-classes, for example when using [tailwindcss](https://tailwindcss.com). It explicitly does not support template literals as styled-components does.

The arguments are parsed by the [classnames package function](https://www.npmjs.com/package/classnames).

Basic example:
```js
const tw = require('react-classname-elements'); // Named after tailwind
const Container = tw.div("container flex rounded bg-grey-light", props => ({"bg-orange" : props.isHighlighted}))
```

