'use strict';

const el = React.createElement;

const root = document.getElementById('root');

let price = 0;

function PricingComponent(props) {
  return el(
    'div',
    null,
    el('input', {
      type: 'range',
      min: '8',
      max: '36',
      step: '4',
      value: props.price,
      onChange: handleChange,
    }),
    el('p', null, `$ ${props.price} `)
  );
}

function handleChange(ev) {
  ReactDOM.render(el(PricingComponent, { price: ev.target.value }), root);
}

ReactDOM.render(el(PricingComponent, { price: price }, null), root);
