import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import cogoToast from "cogo-toast";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/userSlice";
// import { signin } from "../../redux/slices/userSlice";

const SingUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data)
    const userInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    axios
      .post(
        "http://localhost:7070/api/users/signup",
        userInfo
      )
      .then((response) => {
        dispatch(signin(response.data));
        console.log(response.data)
        if (location.pathname === "/signup") {
          navigate("/");
        }

        const options = { position: "bottom-center" };
        // cogoToast.success("Signup Sucessfully", options);
      })
      .catch((error) => {
        const options = { position: "bottom-center" };
        // cogoToast.error("Authentication failed", options);
      });
  };
  return (
    <div style={{marginTop:'120px'}} className="md:px-0 px-2">
      <h1 className="text-3xl font-thin text-center italic text-yellow-800">
        Join Becakina.
      </h1>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* username */}
        <div className="py-4">
          <p className="">Username</p>
          <input
            className="md:w-96 w-full py-1  border border-slate-300 rounded focus:outline-none  px-2"
            {...register("username", { required: true, minLength: 2 })}
            autoComplete="false"
          />
          {/* errors will return when field validation fails  */}
          {errors.username && (
            <span className="text-sm text-red-500 block">
              username is required
            </span>
          )}
        </div>
        {/* email */}
        <div className="">
          <p className="">Email</p>
          <input
            className="md:w-96 w-full py-1  border border-slate-300 rounded focus:outline-none  px-2"
            {...register("email", { required: true })}
            autoComplete="false"
          />
          {/* errors will return when field validation fails  */}
          {errors.email && (
            <span className="text-sm text-red-500 block">
              email is required
            </span>
          )}
        </div>
        {/* password  */}
        <div className="py-4">
          <p className="">Password</p>
          <input
            className="md:w-96 w-full py-1  border border-slate-300 rounded focus:outline-none  px-2"
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.{6,})/,
            })}
            autoComplete="false"
          />
          {/* errors will return when field validation fails  */}
          <span className="text-sm text-red-500 block">
            {errors.password?.type === "required" && "password  is required"}
          </span>
          <span className="text-sm text-red-500 block">
            {errors.password?.type === "pattern" &&
              "password must be 6 characters"}
          </span>
        </div>
        {/* password confirm */}
        <div className="">
          <p className="">Confirm Password</p>
          <input
            className="md:w-96 w-full py-1  border border-slate-300 rounded focus:outline-none px-2"
            type="password"
            {...register("passwordConfirm", {
              required: true,
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
            autoComplete="false"
          />
          {/* errors will return when field validation fails  */}
          <span className="text-sm text-red-500 block">
            {errors.passwordConfirm?.type === "required" &&
              "password  is required"}
          </span>
          <span className="text-sm text-red-500 block">
            {errors.passwordConfirm?.type === "validate" &&
              "The passwords do not match"}
          </span>
        </div>

        {/* submit button */}
        <div className="flex justify-center py-4">
          <input
            type="submit"
            className="border px-5 py-2 rounded cursor-pointer bg-pink-500 text-white hover:bg-pink-600 hover:text-white transition-all duration-300 "
            value="Continue"
          />
        </div>
      </form>
      <h1 className="text-center">
        Existing User?{" "}
        <Link className="underline text-blue-700" to="/signin">
          Sign in
        </Link>
      </h1>
    </div>
  );
};

export default SingUpForm;