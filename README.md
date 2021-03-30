# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

[![Netlify Status](https://api.netlify.com/api/v1/badges/2be9b869-c9be-47c5-8bf4-7546f6e1399f/deploy-status)](https://app.netlify.com/sites/cc-pricing-component/deploys)

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

![screenshot of site](https://imgur.com/TIqfipH)

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

- Website - [Chris Carr](https://www.iamchriscarr.com)
- Frontend Mentor - [@christocarr](https://www.frontendmentor.io/profile/christocarr)
