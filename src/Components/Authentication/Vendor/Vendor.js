import React, { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import cogoToast from "cogo-toast";
import { useDispatch } from "react-redux";
import Select from "react-select";
import countryList from "react-select-country-list";
import { signin, signOut } from "../../../redux/userSlice";
import "./Vendor.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Swal from "sweetalert2";

const Vendor = () => {
  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const logout = () => {
    console.log("log out clicked");
    dispatch(signOut());
  };
  // location
  const changeHandler = (country) => {
    setCountry(country);
  };

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
  const [lincence, setLicenceURL] = useState("");
  const [id, setIdURL] = useState("");

  console.log(id);
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);

    const userInfo = {
      photoURL,
      lincence,
      role: "vendor",
      username: data.username,
      email: data.email,
      password: data.password,
      location: country.label,
      access: "InActive",
      phone: data.phone,
    };

    axios
      .post("https://energetic-pear-threads.cyclic.app/api/users/signup", userInfo)
      .then((response) => {
        dispatch(signin(response.data));
      })
      .catch((error) => {
        const options = { position: "bottom-center" };
        cogoToast.error("Authentication failed", options);
      });

    axios
      .post("https://energetic-pear-threads.cyclic.app/api/createprovider", userInfo)
      .then((response) => {
        dispatch(signin(response.data));
        console.log(response.data);
        Swal.fire("Success!", "Your account is created", "success");
        navigate("/dashboard");

        logout();
      })
      .catch((error) => {
        const options = { position: "bottom-center" };
        cogoToast.error("Authentication failed", options);
      });

    dispatch(signOut());
    logout();
  };

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

  // image upload handler
  const imageUploadHandler2 = (e) => {
    const imageData = new FormData();
    imageData.set("key", "fe834545cf9ccab761e32c03f567e890");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response);
        setLicenceURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // image upload handler
  // image upload handler
  const imageUploadHandler3 = (e) => {
    const imageData = new FormData();
    imageData.set("key", "fe834545cf9ccab761e32c03f567e890");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response);
        setIdURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Header></Header>
      <div style={{ marginTop: "120px" }} className="">
        <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="row ">
            {/* generel details */}

            <div className="col-md-6 col-lg-6 text-center">
              <h2 className="">Generel Details</h2>
              <div className="generalifo">
                <p className="">Enter your username</p>
                <input
                  className="  "
                  placeholder="Elon mask"
                  {...register("username", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.username && (
                  <span
                    style={{
                      display: "block",
                      color: "red",
                      marginLeft: "-70px",
                    }}
                    className=""
                  >
                    username is required
                  </span>
                )}
              </div>
              {/* email address */}
              <div className="generalifo">
                <p style={{ marginLeft: "-130px" }} className="">
                  Enter your email
                </p>
                <input
                  className=" "
                  placeholder="example@gmail.com"
                  type="email"
                  {...register("email", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.email && (
                  <span
                    style={{
                      display: "block",
                      color: "red",
                      marginLeft: "-100px",
                    }}
                    className=""
                  >
                    email is required
                  </span>
                )}
              </div>

              {/* password */}
              <div className="generalifo">
                <div>
                  <p className="">Enter your password</p>
                  <input
                    className=" "
                    placeholder="Password"
                    type="password"
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.{6,})/,
                    })}
                  />
                  {/* errors will return when field validation fails  */}
                  <span
                    style={{
                      display: "block",
                      color: "red",
                      marginLeft: "-70px",
                    }}
                    className=""
                  >
                    {errors.password?.type === "required" &&
                      "password  is required"}
                  </span>
                  <span className="">
                    {errors.password?.type === "pattern" &&
                      "password must be 6 characters"}
                  </span>
                </div>
              </div>

              {/* phone number */}
              <div className="generalifo">
                <p style={{ marginLeft: "-70px" }} className="">
                  Enter your phone number
                </p>
                <input
                  className=" "
                  placeholder="+880 "
                  type="text"
                  {...register("phone", {
                    required: true,
                    pattern: /^(?=.{11,})/,
                  })}
                />
                {/* errors will return when field validation fails  */}
                <span
                  style={{
                    display: "block",
                    color: "red",
                    marginLeft: "-100px",
                  }}
                  className=""
                >
                  {errors.phone?.type === "required" && "phone  is required"}
                </span>
                <span className="">
                  {errors.phone?.type === "pattern" &&
                    "phone must be 11 characters"}
                </span>
              </div>

              {/* photo upload */}
              <div className="generalifo">
                <p style={{ marginLeft: "-120px" }}>Upload Your Photo</p>
                <input
                  style={{ border: "1px solid black" }}
                  className=""
                  placeholder="photoURL"
                  id="photoURL"
                  type="file"
                  onBlur={imageUploadHandler}
                  required
                />
                {/* errors will return when field validation fails  */}
                {errors.photoURL && (
                  <span className="">License is required</span>
                )}
              </div>
            </div>

            {/* // professional details */}
            <div className="col-md-6 col-lg-6">
              <h2 className="forfissionlheader">Professional Details</h2>
              <div className=" col-md-6">
                <div className="profisinfo">
                  <p className="">Enter your Company Name</p>
                  <input
                    className="  "
                    placeholder="Google"
                    {...register("companyName", { required: true })}
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.companyName && (
                    <span
                      style={{ display: "block", color: "red" }}
                      className=""
                    >
                      Company Name is required
                    </span>
                  )}
                </div>

                {/* liceance  */}

                {/* photo upload */}
                <div className="profisinfo">
                  <p>Upload Your business License</p>
                  <input
                    style={{ border: "1px solid black" }}
                    className=""
                    placeholder="photoURL"
                    id="photoURL"
                    type="file"
                    // {...register("photoURL", { required: true })}
                    onBlur={imageUploadHandler2}
                    required
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.photoURL && (
                    <span
                      style={{ display: "block", color: "red" }}
                      className=""
                    >
                      License is required
                    </span>
                  )}
                </div>

                {/* liceance  */}
                {/* photo upload */}
                <div className="profisinfo">
                  <p>Upload Your National Id card</p>
                  <input
                    style={{ border: "1px solid black" }}
                    className=""
                    placeholder="photoURL"
                    id="photoURL"
                    type="file"
                    // {...register("photoURL", { required: true })}
                    onBlur={imageUploadHandler3}
                    required
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.photoURL && (
                    <span
                      style={{ display: "block", color: "red" }}
                      className=""
                    >
                      License is required
                    </span>
                  )}
                </div>

                {/* liceance  */}
                <div className="profisinfo">
                  <p className="">Enter your Designation</p>
                  <input
                    className=""
                    placeholder="Hiring Manager"
                    type="post"
                    {...register("post", { required: true })}
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.post && (
                    <span
                      style={{ display: "block", color: "red" }}
                      className=""
                    >
                      Current Designation is required
                    </span>
                  )}
                </div>
                <div className="profisinfo">
                  <p className="">Enter your Website</p>
                  <input
                    className=""
                    placeholder="www.google.com"
                    type="text"
                    {...register("companyWebsite")}
                  />
                </div>
                <div
                  id="location"
                  style={{ width: "250px" }}
                  className="profisinfo"
                >
                  <p className="">Enter your Company Location</p>
                  <Select
                    options={options}
                    value={country}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ marginLeft: "-180px", marginTop: "30px" }}
            className="text-center py-2"
          >
            <input
              id="verdeorbtn"
              className="vendorbtn"
              value="Register A Vendor"
              type="submit"
            />
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Vendor;
