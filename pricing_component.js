'use strict';

const el = React.createElement;

const root = document.getElementById('root');

function Price(props) {
  return el('p', null, props.price);
}

function Slider(props) {
  return el('input', {
    type: 'range',
    min: '8',
    max: '32',
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
      onChange: props.onChange,
    }),
    el('span', { className: 'slider round' })
  );
}

class PricingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 8,
    };
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDiscountChange = this.handleDiscountChange.bind(this);
  }

  handlePriceChange(ev) {
    this.setState({ price: ev.target.value });
  }

  handleDiscountChange() {
    this.setState({ price: this.state.price * 0.025 });
  }

  render() {
    return el(
      'div',
      null,
      el(Price, {
        price: this.state.price,
      }),
      el(Slider, {
        price: this.state.price,
        onChange: this.handlePriceChange,
      }),
      el(Toggle, {
        onChange: this.handleDiscountChange,
      })
    );
  }
}

ReactDOM.render(el(PricingComponent), root);
