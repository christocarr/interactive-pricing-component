'use strict';

const sliderEl = React.createElement;

const priceDisplayEl = React.createElement;

function Slider() {
  const [price, setPrice] = React.useState(0);

  return sliderEl('input', {
    type: 'range',
    min: '1',
    max: '30',
    step: '1',

    onChange: (ev) => setPrice(ev.target.value),
  });
}

function Price() {
  return priceDisplayEl('p', null, 'price state goes here');
}

const sliderComponentContainer = document.querySelector(
  '#slider_component_container'
);
ReactDOM.render(sliderEl(Slider), sliderComponentContainer);

const priceComponentContainer = document.querySelector(
  '#price_component_container'
);
ReactDOM.render(priceDisplayEl(Price), priceComponentContainer);
