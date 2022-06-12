import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import cogoToast from "cogo-toast";

const CheckoutForm = ({ setIsFullFilled, setCheckoutDetails }) => {
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
    if (data.fullname && data.email && data.phone && country && region) {
      const checkoutDetails = {
        fullname: data.fullname,
        email: data.email,
        phone: data.phone,
        country,
        region,
      };
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
      <div style={{marginTop:'120px'}} className="">
        <h1 className="text-center text-xl font-thin">
          Please fill all the form with correct information
        </h1>
        <form className="py-7" onSubmit={handleSubmit(onSubmit)}>
          {/* full name */}
          <div className="">
            <p className="text-sm">Full Name</p>
            <input
              className="md:w-96 w-full py-1  border border-slate-300 rounded focus:outline-none  px-2"
              {...register("fullname", { required: true })}
              defaultValue={user?.username}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500 block">
                Full name is required
              </span>
            )}
          </div>

          {/* email */}
          <div className="py-4">
            <p className="text-sm">Email</p>
            <input
              className="md:w-96 w-full py-1  border border-slate-300 rounded focus:outline-none  px-2"
              {...register("email", { required: true })}
              defaultValue={user?.email}
              // readOnly="true"
            />
          </div>

          {/* phone */}
          <div className="pb-4">
            <p className="text-sm">Phone Number (with country code)</p>
            <input
              className="md:w-96 w-full py-1  border border-slate-300 rounded 
              focus:outline-none  px-2"
              type="text"
              {...register("phone", { required: true })}
              placeholder="+880"
            />
            {errors.phone && (
              <span className="text-sm text-red-500 block">
                Phone Numberis required
              </span>
            )}
          </div>

          {/* country */}
          <div className="">
            <p className="text-sm">Country</p>
            <CountryDropdown
              value={country}
              onChange={(val) => selectCountry(val)}
              className="md:w-96 w-full py-1  border border-slate-300 rounded focus:outline-none  px-2"
            />
          </div>

          <div className="py-4">
            <p className="text-sm">Region</p>
            <RegionDropdown
              country={country}
              value={region}
              onChange={(val) => selectRegion(val)}
              className="md:w-96 w-full py-1  border border-slate-300 rounded focus:outline-none  px-2"
            />
          </div>

          {/* check box */}

          <div>
            <div className="flex justify-center space-x-2 items-center">
              <input
                type="checkbox"
                {...register("check", { required: true })}
              />
              <span>Please make sure you are human</span>
            </div>
            {errors.check && (
              <span className="text-sm text-red-500 block text-center">
                Please check the input
              </span>
            )}
          </div>

          {/* submit button */}
          <div className="flex justify-center py-4">
            <input
              type="submit"
              className="border px-5 py-2 cursor-pointer bg-cyan-600 text-white rounded"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;