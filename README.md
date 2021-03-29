# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [Live site](https://cc-pricing-component.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I decided to use React without JSX and not create a full blown React app for two reasons:

1. If you ever want to implement a widget like this pricing component into an old site that wasn't orignially built with React then using React without JSX is perfect if you don't want to worry about setting up compilation.

2. Having never built React apps without JSX I wanted to learn the syntax of creating React components without JSX.

The javascript snippet below uses JSX-less React to render an input element of the type range to the DOM. The input uses a datalist for its options since the slider needed custom ranges. The input steps are not uniform.

```js
const el = React.createElement;

function Slider(props) {
  return el(
    'div',
    { className: 'slider_container' },
    el('input', {
      type: 'range',
      min: '0',
      max: '4',
      step: '1',
      list: 'tickmarks',
      value: props.pageviewsArr.indexOf[props.pageviews],
      onChange: props.onChange,
    }),
    el(
      'datalist',
      {
        id: 'tickmarks',
      },
      props.pageviewsArr.map((item, index) => {
        return el('option', { key: index }, index);
      })
    )
  );
}
```

### Useful resources

- [React docs](https://reactjs.org/docs/react-without-jsx.html)

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
