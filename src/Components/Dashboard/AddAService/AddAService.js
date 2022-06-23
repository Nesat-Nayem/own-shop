import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import swal from "sweetalert";
import "./AddAService.css";

const AddProducts = () => {
  const [product, setProduct] = useState({});
//   console.log(product);
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProduct = { ...product };
    newProduct[field] = value;
    setProduct(newProduct);
    // console.log(newProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);

    // fetch("http://localhost:5000/addProduct", {
    //     method: "POST",
    //     headers: {
    //         "content-type": "application/json",
    //     },
    //     body: JSON.stringify(product),
    // })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         if (data.insertedId) {
    //             swal("Product Inserted Successfully!", "", "success");
    //             e.target.reset();
    //         }
    //     });

    console.log(product);
  };

  // category lodad
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
        // setPhotoURL(response.data.data.display_url);
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
        <h2
          className="text-center mb-4 fw-bold mt-3"
          style={{ color: "#3498db" }}
        >
          Add a Service
        </h2>
        <div className="form-area">
          <form onSubmit={handleSubmit}>
          <p className="form-label" style={{ fontWeight: "bold",textAlign:'left',color: 'green' }}>
           Service Name
              
            </p>
            <input
              type="text"
              onBlur={handleBlur}
              name="name"
              placeholder="Service Name"
              required
            />

            {/* category sub category  */}
            <p className="form-label" style={{ fontWeight: "bold",textAlign:'left',color: 'green' }}>
           Category
              
            </p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              style={{ background: "#E5E5E5" }}
              name="category"
              onBlur={handleBlur}
            >
              {loadCategory.map((category) => (
                <option key={category._id} defaultValue={category?.name}>
                  {category?.name}
                </option>
              ))}
            </select>
            <p className="form-label" style={{ fontWeight: "bold",textAlign:'left',color: 'green' }}>
           Sub Category
              
            </p>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              style={{ background: "#E5E5E5" }}
              name="subcategory"
              onBlur={handleBlur}
            >
              {loadCategory.map((category) => (
                <option key={category._id} defaultValue={category?.name}>
                  {category?.children?.[0]?.name}
                </option>
              ))}
            </select>
            <p className="form-label" style={{ fontWeight: "bold",textAlign:'left',color: 'green' }}>
         Service Id
              
            </p>
            <input
              type="number"
              onBlur={handleBlur}
              name="id"
              placeholder="Service Id"
              required
            />
           
           <p className="form-label" style={{ fontWeight: "bold",textAlign:'left',color: 'green' }}>
         Service Photo
              
         </p>
            <input style={{border:'2px solid #10AC84'}}
              className=""
              placeholder="photoURL"
              id="photoURL"
              type="file"
            //   {...register("photoURL", { required: true })}
              onBlur={imageUploadHandler}
            />
             <p className="form-label" style={{ fontWeight: "bold",textAlign:'left',color: 'green' }}>
         
              Service Price
         </p>
            <input
              onBlur={handleBlur}
              type="number"
              name="price"
              placeholder="Price"
              required
            />

           

            <textarea
              style={textArea}
              onBlur={handleBlur}
              type="text"
              name="longdesc"
              placeholder="Long Description"
              required
            />
            <textarea
              style={textArea2}
              onBlur={handleBlur}
              type="text"
              name="shotdesc"
              placeholder="Short Description"
              required
            />
            <button type="submit" className="signBtn mt-2">
              Add Service
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddProducts;
