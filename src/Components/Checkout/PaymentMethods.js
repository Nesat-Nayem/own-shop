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
  import {  useSelector } from "react-redux";
  import axios from "axios";
  import './PaymentMethods.css'
//   import { clearCart } from "../../redux/slices/cartSlice";
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

    const {productId} = useParams()

    const user = useSelector((state) => state.user.user);
    // const cart = useSelector((state) => state.cart.cart);
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    
    let [data,setdata] = useState('')
 
    // console.log(data)

  const orderalldata = {
    username: checkoutDetails?.fullname,
    price:data?.price,
    serviceName:data?.name,
    status:'pending',
    providerName:'providerDebo name'
   

  }

    const paymentbutton = ()=>{
      // console.log('clicked butoon' , orderalldata)

      axios
      .post("http://localhost:7070/api/orders/postOrder", orderalldata)
      // .post("http://localhost:7070/api/orders/postOrder", )
      .then((response) => {
        navigate("/");
        // dispatch(clearCart());
        const options = { position: "bottom-right" };
        cogoToast.success("Order sucessfully completed!", options);
      })
      .catch(function (error) {
        const options = { position: "bottom-right" };
        cogoToast.error("Orders failed", options);
      });

    }


    const {price} = data;
    console.log(data)
    // console.log("product price",price)
    // console.log(data)
    // console.log(data?.name)
    useEffect(()=>{
      fetch(`http://localhost:7070/api/Products/singleProduct/${productId}`)
      .then(res =>res.json())
      .then(data =>setdata(data))
    },[productId])
  

  
    // total cost
    // const total = cart.reduce((total, pd) => total + pd.price * pd.quantity, 0);
    // const totalCost = total.toFixed(2);
  
    const handleSubmit = async (event) => {
      // Block native form submission.
      // console.log(event)
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
          // address: {
          //   postal_code: postal,
          // },
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
        // console.log(paymentIntent);
        // let orders = [];
        // console.log(orders)
        // for (let i = 0; i < user.length; i++) {
        //   const element = cart[i];
        //   orders.push({
        //     userId: user._id,
        //     productId: element._id,
        //     quantity: element.quantity,
        //     shippingAddress: {
        //       country: checkoutDetails.country,
        //       region: checkoutDetails.region,
        //       phone: checkoutDetails.phone,
        //     },
        //     transectionId: paymentIntent.id,
        //   });
        // }
  
        // const paymentInfo ={
        //   servicename: data?.name,
        //   serviceimg:data?.img,
        //   serviceprice:data?.price,

        // }
        // console.log(paymentInfo)


        // axios
        //   .post("http://localhost:7070/api/orders/postOrder", data)
        //   // .post("http://localhost:7070/api/orders/postOrder", )
        //   .then((response) => {
        //     navigate("/");
        //     // dispatch(clearCart());
        //     const options = { position: "bottom-right" };
        //     cogoToast.success("Order sucessfully completed!", options);
        //   })
        //   .catch(function (error) {
        //     const options = { position: "bottom-right" };
        //     cogoToast.error("Orders failed", options);
        //   });
        // setProcessing(false);
      }





    };

    useEffect(() => {
      fetch('http://localhost:7070/create-payment-intent',{
        method:'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify({price})

      })
      .then(res =>res.json())
      .then(data => setClientSecret(data?.clientSecret))
  }, [price]);

  
    return (
     <>
     <Header></Header>
      <div style={{marginTop:'120px', marginBottom:'20px'}} className="">
        <form className="paymentform" onSubmit={handleSubmit}>
        {/* <h1>pay for: {productId}</h1>
        <h1>pay for: {data?.name}</h1> */}
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
       
            <div className="paymentifput" >
              <label htmlFor="expiry">Enter Your Card Expiration</label>
              <CardExpiryElement
                id="expiry"
                className="paymentifputinput"
                options={ELEMENT_OPTIONS}
              />
            </div>

            <div className="paymentifput" >
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


          {/* {errorMessage && <ErrorResult>{errorMessage}</ErrorResult>}
        {paymentMethod && <Result>Got PaymentMethod: {paymentMethod.id}</Result>} */}
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