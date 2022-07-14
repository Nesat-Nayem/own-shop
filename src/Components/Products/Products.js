import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/slice";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loading from "../Loader/loading";
import MultiServicesFilter from "../MultiServicesFilter/MultiServicesFilter";
import "./Products.css";

const Products = () => {
  const products = useSelector((state) => state.products.allProducts);
  // console.log("form product folder", products);
  // const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  useEffect(() => {
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

{    products.length === 0 ? <Loading></Loading> :
 
<div>
  
<MultiServicesFilter></MultiServicesFilter>
      <div className="container mx-auto procontrol d-flex justify-content-between  align-items-center">
        <h6 style={{ color: "#FF0080" }} className="m-0 mt-5">
          Total services found {products.length}
        </h6>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mb-5">
        {products?.map((pro) => {
          return <Card key={pro.id} product={pro}></Card>;
        })}
      </div> 

</div>
      
      }

      <Footer></Footer>
    </div>
  );
};

export default Products;
