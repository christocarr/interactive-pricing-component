'use strict';

const el = React.createElement;
const { useState, useEffect } = React;

const root = document.getElementById('root');

function PageViews(props) {
  return el(
    'p',

    { className: 'page_views' },
    `${props.pageviews}k page views`
  );
}

function Price(props) {
  return el(
    'p',
    null,
    el('span', { className: 'price' }, `$${props.price}`),
    ' / month'
  );
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
    'div',

    { className: 'discount_toggle' },
    el('p', null, 'Monthly Billing'),
    el(
      'label',
      { className: 'toggle' },
      el('input', {
        type: 'checkbox',
        className: 'checkbox',
        value: props.isDiscount,
        onChange: props.onChange,
      }),
      el('span', { className: 'slider round' })
    ),
    el('p', null, 'Yearly Billing'),
    el('p', null, '-25%')
  );
}

function Footer() {
  return el(
    'div',
    { className: 'pricing_component_footer' },
    el('p', null, 'Unlimited websites'),
    el('p', null, '100% data ownership'),
    el('p', null, 'Email reports'),
    el('button', null, 'Start my trial')
  );
}

function PricingComponent() {
  const [price, setPrice] = useState(8);
  const [isDiscount, setIsDiscount] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(price);
  const [pageviews, setPageviews] = useState(1);

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
    { className: 'pricing_component_wrapper' },
    el(
      'div',
      { className: 'price_settings_container' },
      el(PageViews, { pageviews: pageviews }),
      el(Slider, {
        price: price,
        onChange: handlePriceChange,
      }),
      el(Price, {
        price: displayPrice,
      }),
      el(Toggle, {
        isDiscount: isDiscount,
        nChange: handleDiscountChange,
      })
    ),
    el(Footer)
  );
}

ReactDOM.render(el(PricingComponent), root);
