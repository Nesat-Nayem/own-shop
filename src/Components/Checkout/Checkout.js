import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
const stripePromise = loadStripe('pk_test_51JwOogAoCSeLW1ZZcpteQ8NnObfva0IAM2Az0nSRVxMRzd9gNaQ8II8ujVo9m1XEEHM8mdqULpyXSj2xSSbrOGLU00EmD0xFCI');

const Checkout = () => {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: 'sk_test_51JwOogAoCSeLW1ZZZyLXZTUYhQgmVPcA80LyA3fKsRrAcZYaoL4vdMrfshJHKPA068ze8pmrnuuZROEMBvuIMqAx00wm8Zy86I',
      };
    
      return (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      );
};

export default Checkout;