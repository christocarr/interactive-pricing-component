'use strict';

const el = React.createElement;
const { useState, useEffect } = React;

const root = document.getElementById('root');

function PageViews(props) {
  return el(
    'p',

    { className: 'page_views' },
    `${props.pageviews} pageviews`
  );
}

function Price(props) {
  return el(
    'p',
    null,
    el('span', { className: 'price' }, `$${props.price}`),
    `/ ${props.isDiscount ? 'year' : 'month'}`
  );
}

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
  const [price, setPrice] = useState(16);
  const [pageviews, setPageviews] = useState('100K');
  const [isDiscount, setIsDiscount] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(price);

  const pageviewsArr = ['10K', '50K', '100K', '500K', '1M'];

  useEffect(() => {
    if (isDiscount) {
      setDisplayPrice(price - price * 0.25);
    }

    if (!isDiscount) {
      setDisplayPrice(price);
    }
  }, [price, isDiscount]);

  function handlePageviewsChange(ev) {
    const value = ev.target.value;
    setPageviews(pageviewsArr[value]);
    switch (value) {
      case '0':
        setPrice(8);
        break;
      case '1':
        setPrice(12);
        break;
      case '2':
        setPrice(16);
        break;
      case '3':
        setPrice(24);
        break;
      case '4':
        setPrice(32);
        break;
      default:
        setPrice(16);
    }
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
        pageviewsArr: pageviewsArr,
        pageviews: pageviews,
        onChange: handlePageviewsChange,
      }),
      el(Price, {
        isDiscount: isDiscount,
        price: displayPrice,
      }),
      el(Toggle, {
        isDiscount: isDiscount,
        onChange: handleDiscountChange,
      })
    ),
    el(Footer)
  );
}

ReactDOM.render(el(PricingComponent), root);
