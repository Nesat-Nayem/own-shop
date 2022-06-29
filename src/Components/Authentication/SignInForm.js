import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import cogoToast from "cogo-toast";
import { signin, signOut } from "../../redux/userSlice";
import './SingInForm.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";

// import { signin } from "../../redux/slices/userSlice";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const inactiveaccess = () =>{
    Swal.fire(
      'Oops...',
      'Your access is pending at this time. admin check your info soon.',
      'error'
    )
    // console.log('log out clicked')
    dispatch(signOut())
  }

  const activeAccess = () =>{
         const options = { position: "bottom-center" };
        cogoToast.success("Signin successfull", options);
  }

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
        console.log(response.data.access)
        {
          response.data.access === 'InActive'? 
          // console.log('he is not active') 
       
          inactiveaccess()
        
    
          : activeAccess()
        }
        // if(response.data.access ==== 'InActive'){
        //   console.log('he is not active')
        // }
        // if (location.pathname === "/signin") {
          navigate("/dashboard");
        // }
        // const options = { position: "bottom-center" };
        // cogoToast.success("Signin successfull", options);
      })
      .catch((error) => {
        const options = { position: "bottom-center" };
        cogoToast.error("Authentication failed", options);
      });
  };
  return (
  
    <div>
        <Header></Header>
        <div className="container">
   <div className="row">
    <div className="col-md-6 col-12">
    <div className="loginare">
      {/* <h1 className="text-center">
        Sign In.
      </h1> */}

      {/* form */}
      <form className="loginform mb-5"  onSubmit={handleSubmit(onSubmit)}>
        {/* email */}
        <h3 className="text-center mb-4">Sing In</h3>
       <div>
       <div className="loginifo">
          <p >Email</p>
          <input
          
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
        <div className="loginifo">
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
        <div className="">
          <input
            type="submit"
            className=" loginbtn"
            value="Sign In"
          />
        </div>
       </div>
       <h6 className="mt-5">
       New here?
        <Link className="text-end" to="/register">
       Just Join 
        </Link>
      </h6>
      </form>
      {/* <h1 className="text-center my-5">
        New here?{" "}
        <Link className="" to="/register">
          Just Join 
        </Link>
      </h1> */}
      </div>
    </div>
    <div className="col-md-6 col-12">
    <img className="img-fluid mt-5" src="https://i.postimg.cc/NFw7H4ZL/login.webp" alt="login" />
    </div>
   </div>
   </div>
      <Footer></Footer>
    </div>
  );
};

export default SignInForm;