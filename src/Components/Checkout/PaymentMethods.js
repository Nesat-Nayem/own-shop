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
import { useSelector } from "react-redux";
import axios from "axios";
import "./PaymentMethods.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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
  // console.log(checkoutDetails)
  const elements = useElements();
  const stripe = useStripe();
  const [postal, setPostal] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  const user = useSelector((state) => state.user.user);
// console.log(user._id)
  const { productId } = useParams();


  // console.log(user)
  const navigate = useNavigate();


  let [data, setdata] = useState("");

  //  product data get 

// console.log(data);
useEffect(() => {
  fetch(`http://localhost:7070/api/Products/singleProduct/${productId}`)
    .then((res) => res.json())
    .then((data) => setdata(data));
}, [productId]);


//  product data get 

  const { price } = data;

// payment intent 
useEffect(() => {
  fetch("http://localhost:7070/create-payment-intent", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ price }),
  })
    .then((res) => res.json())
    .then((data) => setClientSecret(data?.clientSecret));
}, [price]);


// payment stystem 
const handleSubmit = async (event) => {
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
      name: checkoutDetails?.fullname,
      email: checkoutDetails?.email,
      phone: checkoutDetails?.phone,
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
          name: checkoutDetails?.fullname,
          email: checkoutDetails?.email,
        },
      },
    }
  );

  if (error) {
    cogoToast.error(error.message);
  }
  if (paymentIntent) {
  }
};


// payment stystem 



  // console.log(data)



  const orderalldata = {
   
    username: checkoutDetails?.fullname,
    userId: user?._id,
    email:checkoutDetails?.email,
    userAddress:checkoutDetails?.country,
    userRegion:checkoutDetails?.region,
    userNumber:checkoutDetails?.phone,
    price: data?.price,
    serviceName: data?.name,
    status: "pending",
    providerName: data?.providername,
    providerEmail: data?.provideremail,
    providerNumber:data?.providernumber,
    serviceImg:data?.img
   
  };

  const paymentbutton = () => {
    // console.log('clicked butoon' , orderalldata)

    axios
      .post("http://localhost:7070/api/orders/postOrder", orderalldata)
      .then((response) => {
        navigate("/dashboard/myorder");
        const options = { position: "bottom-right" };
        cogoToast.success("Order sucessfully completed!", options);
      })
      .catch(function (error) {
        const options = { position: "bottom-right" };
        cogoToast.error("Orders failed", options);
      });
  };



  return (
    <>
      <Header></Header>
      <div style={{ marginTop: "120px", marginBottom: "20px" }} className="">
        <form className="paymentform" onSubmit={handleSubmit}>
          <h1 className="">Fill Your Card Information</h1>
          <br />

          <div className="paymentifput">
            <label htmlFor="cardNumber">Enter You Card Number</label>
            <CardNumberElement
              id="cardNumber"
              className="paymentifputinput"
              options={ELEMENT_OPTIONS}
            />
          </div>

          <div className="paymentifput">
            <label htmlFor="expiry">Enter Your Card Expiration</label>
            <CardExpiryElement
              id="expiry"
              className="paymentifputinput"
              options={ELEMENT_OPTIONS}
            />
          </div>

          <div className="paymentifput">
            <label htmlFor="cvc">Enter Your CVC</label>
            <CardCvcElement
              id="cvc"
              className="paymentifputinput "
              options={ELEMENT_OPTIONS}
            />
          </div>

          <div className="paymentifput">
            <label htmlFor="postal">Enter Your Postal Code</label>
            <br />
            <input
              id="postal"
              required
              placeholder="12345"
              className="paymentifputinput"
              value={postal}
              onChange={(e) => {
                setPostal(e.target.value);
              }}
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="formBtbn"
              disabled={!stripe || processing}
              onClick={paymentbutton}
            >
              Pay $ {data?.price}
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PaymentMethods;
