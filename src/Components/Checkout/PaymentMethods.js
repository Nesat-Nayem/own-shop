import {
    CardCvcElement,
    CardElement,
    CardExpiryElement,
    CardNumberElement,
    useElements,
    useStripe,
  } from "@stripe/react-stripe-js";
  import cogoToast from "cogo-toast";
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import axios from "axios";
//   import { clearCart } from "../../redux/slices/cartSlice";
  import { useNavigate } from "react-router-dom";
  
  const ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: "18px",
        color: "#424770",
        letterSpacing: "0.025em",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };
  
  const PaymentMethods = ({ checkoutDetails }) => {
    const elements = useElements();
    const stripe = useStripe();
    const [postal, setPostal] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
  
    const user = useSelector((state) => state.user.user);
    // const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
      axios
        .post(
          "http://localhost:7070/create-payment-intent",
          // cart
        )
        .then(function (response) {
          console.log(response.data.clientSecret)
          setClientSecret(response.data.clientSecret);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
  
    // total cost
    // const total = cart.reduce((total, pd) => total + pd.price * pd.quantity, 0);
    // const totalCost = total.toFixed(2);
  
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
      if (!stripe || !elements) {
        return;
      }
  
      const card = elements.getElement(CardNumberElement);
  
      if (card == null) {
        return;
      }
  
      setProcessing(true);
      const payload = await stripe.createPaymentMethod({
        type: "card",
        card,
        billing_details: {
          name: checkoutDetails.fullname,
          email: checkoutDetails.email,
          phone: checkoutDetails.phone,
          address: {
            postal_code: postal,
          },
        },
      });
  
      if (payload.error) {
        setErrorMessage(payload.error.message);
        setPaymentMethod(null);
      } else {
        // cogoToast.success(payload.paymentMethod.id, { options: "bottom-right" });
        setPaymentMethod(payload.paymentMethod);
        setErrorMessage(null);
      }
  
      // payment intent
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: checkoutDetails.fullname,
              email: checkoutDetails.email,
            },
          },
        }
      );
  
      if (error) {
        cogoToast.error(error.message);
      }
      // if (paymentIntent) {
      //   console.log(paymentIntent);
      //   let orders = [];
      //   for (let i = 0; i < cart.length; i++) {
      //     const element = cart[i];
      //     orders.push({
      //       userId: user._id,
      //       productId: element._id,
      //       quantity: element.quantity,
      //       shippingAddress: {
      //         country: checkoutDetails.country,
      //         region: checkoutDetails.region,
      //         phone: checkoutDetails.phone,
      //       },
      //       transectionId: paymentIntent.id,
      //     });
      //   }
  
        // axios
        //   .post("https://still-eyrie-85728.herokuapp.com/api/orders", orders)
        //   .then((response) => {
        //     navigate("/dashboard/orders");
        //     dispatch(clearCart());
        //     const options = { position: "bottom-right" };
        //     cogoToast.success("Order sucessfully completed!", options);
        //   })
        //   .catch(function (error) {
        //     const options = { position: "bottom-right" };
        //     cogoToast.error("Orders failed", options);
        //   });
      //   setProcessing(false);
      // }
    };
  
    return (
      <div style={{marginTop:'120px'}} className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-xl font-bold pb-7">Pay with Card</h1>
          <br />
          <label htmlFor="cardNumber">Card Number</label>
          <CardNumberElement
            id="cardNumber"
            className="focus:outline-none w-full border border-gray-400 rounded px-3 py-2"
            options={ELEMENT_OPTIONS}
          />
          <div className="flex justify-between py-4">
            <div>
              <label htmlFor="expiry">Card Expiration</label>
              <CardExpiryElement
                id="expiry"
                className="focus:outline-none  border border-gray-400 rounded px-3 py-2"
                options={ELEMENT_OPTIONS}
              />
            </div>
            <div>
              <label htmlFor="cvc">CVC</label>
              <CardCvcElement
                id="cvc"
                className="focus:outline-none w-20 border border-gray-400 rounded px-3 py-2"
                options={ELEMENT_OPTIONS}
              />
            </div>
          </div>
  
          <label htmlFor="postal">Postal Code</label>
          <input
            id="postal"
            required
            placeholder="12345"
            className="focus:outline-none w-full border border-gray-400 rounded px-3 py-2"
            value={postal}
            onChange={(e) => {
              setPostal(e.target.value);
            }}
          />
          {/* {errorMessage && <ErrorResult>{errorMessage}</ErrorResult>}
        {paymentMethod && <Result>Got PaymentMethod: {paymentMethod.id}</Result>} */}
          <div className="flex justify-center py-6">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!stripe || processing}
            >
              Pay $120
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default PaymentMethods;