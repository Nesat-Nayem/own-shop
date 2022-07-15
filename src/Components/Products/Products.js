import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices,allData } from "../../redux/dataSlice/dataSlice";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loading from "../Loader/loading";
import MultiServicesFilter from "../MultiServicesFilter/MultiServicesFilter";
import "./Products.css";

const Products = () => {

  const {allServices, getLoad} = useSelector(allData)

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getAllServices())


  }, []);

 
  return (
    <div>
      <Header></Header>

{    allServices.length === 0 ? <Loading></Loading> :
 
<div>
  
<MultiServicesFilter></MultiServicesFilter>
      <div className="container mx-auto procontrol d-flex justify-content-between  align-items-center">
        <h6 style={{ color: "#FF0080" }} className="m-0 mt-5">
          Total services found {allServices.length}
        </h6>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mb-5">
        {allServices?.map((pro) => {
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
