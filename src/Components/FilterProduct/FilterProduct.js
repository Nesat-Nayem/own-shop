import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { allData, getAllServices } from "../../redux/dataSlice/dataSlice";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loading from "../Loader/loading";

const FilterProduct = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  const { allServices, getLoad } = useSelector(allData);

  console.log("here form here", getLoad);
  console.log("here form here", allServices);

  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  const filtered = allServices.filter(
    (pro) => pro.category.toLocaleLowerCase() === category.toLocaleLowerCase()
  );

  return (
    <>
      <Header></Header>
      {getLoad === true ? (
        <Loading></Loading>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4  container mx-auto my-5">
          {filtered.map((pro) => {
            return <Card key={pro.id} product={pro}></Card>;
          })}
        </div>
      )}
      <Footer></Footer>
    </>
  );
};

export default FilterProduct;
