'use strict';

const el = React.createElement;
const { useState, useEffect } = React;

const root = document.getElementById('root');

function Price(props) {
  return el('p', null, `$${props.price}`);
}

function Slider(props) {
  return el('input', {
    type: 'range',
    min: '8',
    max: '32',
    step: '4',
    value: props.price,
    onChange: props.onChange,
  });
}

function Toggle(props) {
  return el(
    'label',
    { className: 'toggle' },
    el('input', {
      type: 'checkbox',
      className: 'checkbox',
      value: props.isDiscount,
      onChange: props.onChange,
    }),
    el('span', { className: 'slider round' })
  );
}

function PricingComponent() {
  const [price, setPrice] = useState(8);
  const [isDiscount, setIsDiscount] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(price);

  useEffect(() => {
    if (isDiscount) {
      setDisplayPrice(price - price * 0.25);
    }

    if (!isDiscount) {
      setDisplayPrice(price);
    }
  }, [price, isDiscount]);

  function handlePriceChange(ev) {
    setPrice(ev.target.value);
  }

  function handleDiscountChange(ev) {
    setIsDiscount(ev.target.checked);
  }

  return el(
    'div',
    null,
    el(Price, {
      price: displayPrice,
    }),
    el(Slider, {
      price: price,
      onChange: handlePriceChange,
    }),
    el(Toggle, {
      isDiscount: isDiscount,
      onChange: handleDiscountChange,
    })
  );
}

ReactDOM.render(el(PricingComponent), root);
