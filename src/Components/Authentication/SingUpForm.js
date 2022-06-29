import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import cogoToast from "cogo-toast";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/userSlice";
import './SingUpForm.css'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
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

  const [photoURL, setPhotoURL] = useState("");

  // image uplodar 
          // image upload handler
          const imageUploadHandler = (e) => {
            const imageData = new FormData();
            imageData.set("key", "fe834545cf9ccab761e32c03f567e890");
            imageData.append("image", e.target.files[0]);
            axios
              .post("https://api.imgbb.com/1/upload", imageData)
              .then(function (response) {
                console.log(response);
                setPhotoURL(response.data.data.display_url);
              })
              .catch(function (error) {
                console.log(error);
              });
          };
  // image uplodar 

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data)
    const userInfo = {
     
      username: data.username,
      email: data.email,
      photoURL,
      password: data.password,
      access:'approved',
      role:'user',
     
    };

    axios
      .post(
        "http://localhost:7070/api/users/signup",
        userInfo
      )
      .then((response) => {
        dispatch(signin(response.data));
        console.log(response.data)
        // if (location.pathname === "/") {
          navigate("");
        // }

        const options = { position: "bottom-center" };
        cogoToast.success("Signup Sucessfully", options);
      })
      .catch((error) => {
        const options = { position: "bottom-center" };
        cogoToast.error("Authentication failed", options);
          console.log(error.message)
      });
  };
  return (
    <>
    <Header></Header>
    <div style={{marginTop:'120px',marginBottom:'25px'}} className="">


{/* form */}
<form className="singupform " onSubmit={handleSubmit(onSubmit)}>
  {/* username */}
  <h3 className="text-center mb-4">User Register</h3>
 
  <div className="registerifo">
    <p className="uppertext">User Name</p>
    <input
    
      {...register("username", { required: true, minLength: 2 })}
      autoComplete="false"
    />
    {/* errors will return when field validation fails  */}
    {errors.username && (
      <span className="errortext">
        username is required
      </span>
    )}
  </div>
  {/* email */}
  <div className="registerifo">
    <p className="">Email</p>
    <input
      className=""
      {...register("email", { required: true })}
      autoComplete="false"
    />
    {/* errors will return when field validation fails  */}
    {errors.email && (
      <span className="errortext">
        email is required
      </span>
    )}
  </div>
   {/* photo  */}
   <div  className="registerifo">
            <p >Upload Your Photo</p>
            <input style={{border:'1px solid black'}}
              className=""
              placeholder="photoURL"
              id="photoURL"
              type="file"
              {...register("photoURL", { required: true })}
              onBlur={imageUploadHandler}
           
            />
            {/* errors will return when field validation fails  */}
            {errors.photoURL && (
              <span className="">
                Photo is required
              </span>
            )}
          </div>
  {/* photo  */}
  {/* password  */}
  <div className="registerifo">
    <p className="">Password</p>
    <input
      className=""
      type="password"
      {...register("password", {
        required: true,
        pattern: /^(?=.{6,})/,
      })}
      autoComplete="false"
    />
    {/* errors will return when field validation fails  */}
    <span className="errortext">
      {errors.password?.type === "required" && "password  is required"}
    </span>
    <span className="">
      {errors.password?.type === "pattern" &&
        "password must be 6 characters"}
    </span>
  </div>
  {/* password confirm */}
  <div className="registerifo">
    <p className="">Confirm Password</p>
    <input
      className=""
      type="password"
      {...register("passwordConfirm", {
        required: true,
        validate: (value) =>
          value === password.current || "The passwords do not match",
      })}
      autoComplete="false"
    />
    {/* errors will return when field validation fails  */}
    <span className="errortext">
      {errors.passwordConfirm?.type === "required" &&
        "password  is required"}
    </span>
    <span className="errortext">
      {errors.passwordConfirm?.type === "validate" &&
        "The passwords do not match"}
    </span>
  </div>

  {/* submit button */}
  <div className="">
    <input
      type="submit"
      className=" formBtbn "
      value="Sign Up"
    />
  </div>

  <h6 className="mt-5">
  Alreay Have An Account? 
  <Link className="" to="/singin">
    Sign in
  </Link>
</h6>
</form>

</div>
<Footer></Footer>
    </>
  );
};

export default SingUpForm;