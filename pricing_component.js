'use strict';

const { createElement } = React;

let price = 0;

function PricingComponent(props) {
  console.log(props);
  return createElement(
    'div',
    null,
    createElement('input', {
      type: 'range',
      min: '8',
      max: '36',
      step: '4',
      value: props.price,
      onChange: handleChange,
    }),
    createElement('p', null, `$ ${props.price} `)
  );
}

function handleChange(ev) {
  ReactDOM.render(
    createElement(PricingComponent, { price: ev.target.value }),
    document.getElementById('root')
  );
}

ReactDOM.render(
  createElement(PricingComponent, { price: price }, null),
  document.getElementById('root')
);
