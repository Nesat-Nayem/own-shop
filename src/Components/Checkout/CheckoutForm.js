import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import cogoToast from "cogo-toast";
import { useParams } from "react-router-dom";
import './CheckoutForm.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const CheckoutForm = ({ setIsFullFilled, setCheckoutDetails }) => {
  const {productId} = useParams()
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const selectCountry = (value) => {
    setCountry(value);
  };

  const selectRegion = (value) => {
    setRegion(value);
  };

  const user = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data)
    if (data.fullname && data.email && data.phone && country && region) {
      const checkoutDetails = {
        fullname: data.fullname,
        email: data.email,
        phone: data.phone,
        country,
        region,
      };
      // console.log(checkoutDetails)

      setCheckoutDetails(checkoutDetails);
      setIsFullFilled(true);
    } else {
      cogoToast.warn("Please fill all the inputs", {
        position: "bottom-center",
      });
    }
  };

  return (
    <div>
      <Header></Header>
      <div style={{marginTop:'120px', marginBottom:'50px'}} className="checkoutforn">
      
        <h1 className="text-center mb-5">
          Fill Your Payemnt Info
        </h1>
        <form style={{margin:'0 auto', width:'500px'}} className="py-7" onSubmit={handleSubmit(onSubmit)}>
          {/* full name */}
          <div className="paymentifput">
            <p className="">Full Name</p>
            <input
              className="align-center"
              {...register("fullname", { required: true })}
              defaultValue={user?.username}
            />
            {errors.fullname && (
              <span className="">
                Full name is required
              </span>
            )}
          </div>

          {/* email */}
          <div className="paymentifput">
            <p className="">Enter You Email</p>
            <input
              className=" "
              {...register("email", { required: true })}
              defaultValue={user?.email}
              // readOnly="true"
            />
          </div>

          {/* phone */}
          <div className="paymentifput">
            <p className="">Your Number(with country code)</p>
            <input
              className=" "
              type="text"
              {...register("phone", { required: true })}
              placeholder="+880"
            />
            {errors.phone && (
              <span className="">
                Phone Numberis required
              </span>
            )}
          </div>

          {/* country */}
     <div >
     <div  className="paymentifput">
            <p className="">Select Country</p>
            <CountryDropdown style={{width:"300px"}}
              value={country}
              onChange={(val) => selectCountry(val)}
              className="regionbtn"
            />
          </div>
     </div>

          <div className="paymentifput">
            <p className="mt-2">Select You Region</p>
            <RegionDropdown  style={{width:"300px"}}
              country={country}
              value={region}
              onChange={(val) => selectRegion(val)}
              className=" regionbtn"
            />
          </div>

          {/* check box */}

          {/* <div>
            <div className="">
              <input
                type="checkbox"
                {...register("check", { required: true })}
              />
              <span>Please make sure you are human</span>
            </div>
            {errors.check && (
              <span className="">
                Please check the input
              </span>
            )}
          </div> */}

          {/* submit button */}
          <div className="">
            <input
              type="submit"
              className="formBtbn"
              value="Submit"
            />
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CheckoutForm;