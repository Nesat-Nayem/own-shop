import axios from "axios";
import cogoToast from "cogo-toast";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
// import swal from "sweetalert";
import Swal from "sweetalert2";
import "./AddAService.css";

const AddProducts = () => {
  const user = useSelector((state) => state.user.user);
  const [product, setProduct] = useState({});
  const [img, setImg] = useState("");
  //   console.log(product);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data)
    const serviceinfo = {
      img,
      // data
      id: data.id,
      name: data.name,
      price: data.price,
      subcategory: data.subcategory,
      category: data.category,
      location: data.location,
      longdesc: data.longdesc,
      shrotdesc: data.shrotdesc,
      providername: user.username,
      provideremail: user.email,
      providernumber: user.phone,
    };
    console.log(serviceinfo);

    axios
      .post("http://localhost:7070/api/products/postProduct", serviceinfo)
      .then((response) => {
        console.log(response.data);

        // navigate("/");

        Swal.fire("Success!", "Your services successfully created", "success");
      })
      .catch((error) => {
        const options = { position: "bottom-center" };
        cogoToast.error("Authentication failed", options);
      });
  };

  const options = { position: "bottom-center" };

  const [loadCategory, setLoadCategory] = useState([""]);
  // console.log(loadCategory)

  useEffect(() => {
    fetch("http://localhost:7070/api/category/getcategories")
      .then((res) => res.json())
      .then((data) => setLoadCategory(data.categoryList));
  });

  // image upload handler
  const imageUploadHandler = (e) => {
    const imageData = new FormData();
    imageData.set("key", "fe834545cf9ccab761e32c03f567e890");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response);
        setImg(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // image upload handler

  // category lodad

  const textArea = {
    height: "150px",
    outline: "none",
    border: "2px solid #3498db",
    width: "100%",
    padding: "5px",
  };

  const textArea2 = {
    height: "100px",
    outline: "none",
    border: "2px solid #3498db",
    width: "100%",
    padding: "5px",
  };

  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2
              className="text-center mb-4 fw-bold mt-3"
              style={{ color: "#3498db" }}
            >
              Add a Service
            </h2>
            <div className="form-area">
              {/* <form onSubmit={handleSubmit}> */}
              <p
                className="form-label"
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "green",
                }}
              >
                Soft Name
              </p>
              <input
                type="text"
                //   onBlur={handleBlur}
                //   name="name"
                placeholder="Soft Name"
                required
                {...register("name", { required: true })}
              />

              {/* category sub category  */}
              <p
                className="form-label"
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "green",
                }}
              >
                Category
              </p>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                style={{ background: "#E5E5E5" }}
                //   name="category"
                //   onBlur={handleBlur}
                {...register("category", { required: true })}
              >
                {loadCategory.map((category) => (
                  <option key={category._id} defaultValue={category?.name}>
                    {category?.name}
                  </option>
                ))}
              </select>
              <p
                className="form-label"
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "green",
                }}
              >
                Sub Category
              </p>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                style={{ background: "#E5E5E5" }}
                //   name="subcategory"
                {...register("subcategory", { required: true })}
                //   onBlur={handleBlur}
              >
                {loadCategory.map((category) => (
                  <option key={category._id} defaultValue={category?.name}>
                    {category?.children?.[0]?.name}
                  </option>
                ))}
              </select>
              <p
                className="form-label"
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "green",
                }}
              >
                Service Location
              </p>
              <input
                type="text"
                //   onBlur={handleBlur}
                //   name="location"
                {...register("location", { required: true })}
                placeholder="Service Location"
                required
              />
              <p
                className="form-label"
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "green",
                }}
              >
                Service Id
              </p>
              <input
                type="providernumber"
                //   onBlur={handleBlur}
                //   name="id"
                {...register("id", { required: true })}
                placeholder="Service Id"
                required
              />

              <p
                className="form-label"
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "green",
                }}
              >
                Service Photo
              </p>
              <input
                style={{ border: "2px solid #10AC84" }}
                className=""
                placeholder="photoURL"
                id="photoURL"
                type="file"
                {...register("img", { required: true })}
                onBlur={imageUploadHandler}
              />
              <p
                className="form-label"
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "green",
                }}
              >
                Service Price
              </p>
              <input
                //   onBlur={handleBlur}
                type="number"
                //   name="price"
                {...register("price", { required: true })}
                placeholder="Price"
                required
              />

              <textarea
                style={textArea}
                //   onBlur={handleBlur}
                type="text"
                //   name="longdesc"
                {...register("longdesc", { required: true })}
                placeholder="Long Description"
                required
              />
              <textarea
                style={textArea2}
                //   onBlur={handleBlur}
                type="text"
                //   name="shrotdesc"
                {...register("shrotdesc", { required: true })}
                placeholder="Short Description"
                required
              />
              {/* <button type="submit" className="signBtn mt-2">
              Add Service
            </button> */}

              <input
                id="verdeorbtn"
                className="signBtn mt-2"
                value="Add Service"
                type="submit"
              />
              {/* </form> */}
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddProducts;
