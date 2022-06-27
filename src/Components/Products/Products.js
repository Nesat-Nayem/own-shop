import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/slice";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Products.css";

const Products = () => {
  const products = useSelector((state) => state.products.allProducts);
  console.log("form product folder", products);
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch('http://localhost:5000/products')
    fetch("http://localhost:7070/api/products/getProduct")
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data)));
  }, []);

  const filterJobs = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Header></Header>
      <img
        className=" product-banner img-fluid"
        src="https://i.postimg.cc/9X7ZHsYd/services-banner.webp"
      />
      <div className="container mx-auto procontrol d-flex justify-content-between  align-items-center">
        <h6 style={{ color: "#FF0080" }} className="m-0 mt-5">
          Total services found {products.length}
        </h6>

        <select
          style={{
            padding: "10px 30px",
            backgroundColor: "#85F4FF",
            border: "none",
            outline: "none",
          }}
          name=""
          id=""
          // value={category}
          className=" px-2 py-2 "
          onChange={filterJobs}
        >
          <option value="all">All Services</option>
          <option value="Intriory"> Intriory</option>
          <option value="Computer">Computer</option>
          <option value="Construction">Construction</option>
          <option value="Carwash">Carwash</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Electrical">Electrical</option>
        </select>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mb-5">
        {products?.map((pro) => {
          return (
            <Card key={pro.id} product={pro}></Card>
            // {/* <Card products={products} ></Card> */}
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Products;
