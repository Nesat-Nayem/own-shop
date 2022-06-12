import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import PaymentMethods from "./PaymentMethods";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51JwOogAoCSeLW1ZZcpteQ8NnObfva0IAM2Az0nSRVxMRzd9gNaQ8II8ujVo9m1XEEHM8mdqULpyXSj2xSSbrOGLU00EmD0xFCI"
);

const CheckoutLayout = () => {
  const [isFullFilled, setIsFullFilled] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState({});
  console.log(checkoutDetails, isFullFilled);

  return (
    <section className="md:w-9/12 w-11/12 mx-auto py-10">
      {isFullFilled ? (
        <>
          <Elements stripe={stripePromise}>
     
            <PaymentMethods checkoutDetails={checkoutDetails} />
          </Elements>
        </>
      ) : (
        <>
          <CheckoutForm
            setIsFullFilled={setIsFullFilled}
            setCheckoutDetails={setCheckoutDetails}
          />
        </>
      )}
    </section>
  );
};

export default CheckoutLayout;