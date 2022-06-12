import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import cogoToast from "cogo-toast";
import { signin } from "../../redux/userSlice";

// import { signin } from "../../redux/slices/userSlice";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    axios
      .post(
        "http://localhost:7070/api/users/signin",
        userInfo
      )
      .then((response) => {
        dispatch(signin(response.data));
        if (location.pathname === "/signin") {
          navigate("/");
        }
        const options = { position: "bottom-center" };
        cogoToast.success("Signin successfull", options);
      })
      .catch((error) => {
        const options = { position: "bottom-center" };
        cogoToast.error("Authentication failed", options);
      });
  };
  return (
    <div style={{marginTop:'120px'}} className="">
      <h1 className="">
        Sign In.
      </h1>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* email */}
        <div className="">
          <p className="">Email</p>
          <input
            className=""
            {...register("email", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && (
            <span className="">
              email is required
            </span>
          )}
        </div>
        {/* password  */}
        <div className="py-4">
          <p className="">password</p>
          <input
            className=""
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.{6,})/,
            })}
          />
          {/* errors will return when field validation fails  */}
          <span className="">
            {errors.password?.type === "required" && "password  is required"}
          </span>
          <span className="">
            {errors.password?.type === "pattern" &&
              "password must be 6 characters"}
          </span>
        </div>

        {/* submit button */}
        <div className="flex justify-center py-4">
          <input
            type="submit"
            className="  "
            value="Continue"
          />
        </div>
      </form>
      <h1 className="text-center">
        New here?{" "}
        <Link className="" to="/singup">
          Join Becakina
        </Link>
      </h1>
    </div>
  );
};

export default SignInForm;