import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../../stripe';

const CURRENCY = 'USD';

const fromUsdToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(http://localhost:8080/,
    {
      // description,
      source: token.id,
      currency: CURRENCY
      // amount: fromUsdToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) => {
  return (
    <StripeCheckout
      name={name}
      description={description}
      amount={fromUsdToCent(amount)}
      // token={onToken(amount, description)}
      currency={CURRENCY}
      stripeKey={STRIPE_PUBLISHABLE}
    />
  );
}

export default Checkout;