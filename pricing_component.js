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
    { className: 'price_display' },
    el('span', { className: 'price' }, `$${props.price}.00`),
    ` / ${props.isDiscount ? 'year' : 'month'}`
  );
}

function Slider({ pageviews, pageviewsArr, onChange }) {
  console.log(pageviews, pageviewsArr);

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(pageviewsArr.indexOf(pageviews));
  }, [pageviews]);

  return el(
    'div',
    { className: 'slider_container' },
    el('input', {
      id: 'sliderComponent',
      type: 'range',
      min: '0',
      max: '4',
      step: '1',
      list: 'tickmarks',
      value: value,
      onInput: onChange,
    }),
    el(
      'datalist',
      {
        id: 'tickmarks',
      },
      pageviewsArr.map((item, index) => {
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
        id: 'discountToggle',
        type: 'checkbox',
        className: 'checkbox',
        value: props.isDiscount,
        onChange: props.onChange,
      }),
      el('span', { className: 'slider round' })
    ),
    el(
      'p',
      null,
      'Yearly Billing',
      el('span', { className: 'discount_detail' }, '25% ')
    )
  );
}

function Footer() {
  return el(
    'div',
    { className: 'pricing_component_footer' },
    el(
      'div',
      null,
      el(
        'p',
        null,
        el('span', { className: 'check_icon' }),
        'Unlimited websites'
      ),
      el(
        'p',
        null,
        el('span', { className: 'check_icon' }),
        '100% data ownership'
      ),
      el('p', null, el('span', { className: 'check_icon' }), 'Email reports')
    ),
    el('button', { className: 'start_trial_button' }, 'Start my trial')
  );
}

function PricingComponent() {
  const pageviewsArr = ['10K', '50K', '100K', '500K', '1M'];

  const [price, setPrice] = useState(16);
  const [pageviews, setPageviews] = useState('100K');
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
