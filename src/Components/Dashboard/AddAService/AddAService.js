import axios from "axios";
import cogoToast from "cogo-toast";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import "./AddAService.css";

const AddProducts = () => {
  const user = useSelector((state) => state.user.user);
  const [img, setImg] = useState("");
  const [gallary, setGalary] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const serviceinfo = {
      img,
      gallery: gallary,
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
      providerPhoto:user.photoURL,
      providernumber: user.phone,
    };
    console.log(serviceinfo);

    axios
      .post("https://energetic-pear-threads.cyclic.app/api/products/postProduct", serviceinfo)
      .then((response) => {
        console.log(response.data);


        Swal.fire("Success!", "Your services successfully created", "success");
      })
      .catch((error) => {
        const options = { position: "bottom-center" };
        cogoToast.error("Authentication failed", options);
      });
  };

  const options = { position: "bottom-center" };

  const [loadCategory, setLoadCategory] = useState([""]);
  useEffect(() => {
    fetch("https://energetic-pear-threads.cyclic.app/api/category/getcategories")
      .then((res) => res.json())
      .then((data) => setLoadCategory(data.categoryList));
  },[]);

  // multiple images upload in cludanary 

  

  const [images, setImages] = useState([]);


  const handleUploadImages = () => {
    const formData = new FormData();
    const files = images;
    for (let i = 0; i < files.length; i += 1) {
      formData.append("images[]", files[i]);
    }

    console.log("for check images", formData);
    fetch("https://energetic-pear-threads.cyclic.app/media", {
      method: "post",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setGalary(data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };



  // multiple images upload in cludanary 

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
              <p
                className="form-label"
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "green",
                }}
              >
                Shop Name
              </p>
              <input
                type="text"
                placeholder="Shop Name"
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
                {loadCategory?.map((category) => (
                  // console.log(category)
                  Object.entries(category).map(
                    ([key,value]) =>{
                
                      if(key === 'children'){
                        return value.map((url,idx)=>{
                
                          
                      return(
                         <option key={idx + 1} defaultValue={category?.name}>
                    {url?.name}
                  </option>
                      )
                        })}})
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
                Photo Galary
              </p>
              <input
                style={{ border: "2px solid #10AC84" }}
                className=""


                placeholder="photoURL"
                id="photoURL"
                  type="file"
                  name="images"
                  onChange={(e) => setImages(e.target.files)}
                  multiple
                  accept="image/png , image/jpeg, image/webp" 
              />
              <button id="upload_btn" onClick={handleUploadImages} >upload</button>
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
