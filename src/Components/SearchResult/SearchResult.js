import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../Loader/loading";

const SearchResult = () => {
  const [searchJobs, setSearchJobs] = useState([]);
  const { searchKey, setSearchKey, searchLocation, setSearchLocation } =
    useAuth();
    const [loading,setLoading] = useState(false)
    console.log('loading start',loading)
  console.log("came from searchResult", searchKey, searchLocation);

  const resetKey = () => {
    setSearchKey("");
  };

  const resetLocation = () => {
    setSearchLocation("");
  };

  useEffect(() => {
    setLoading(true)
    fetch("https://lit-sands-58263.herokuapp.com/api/products/getProduct")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        var result = data.filter(
          (Products) =>
            Products.name.toLowerCase().includes(searchKey.toLowerCase()) &&
            Products.location
              .toLowerCase()
              .includes(searchLocation.toLowerCase())
        );
        setSearchJobs(result);
        setLoading(false);
        resetKey();
        resetLocation();
       
      });
  }, []);

  return (
    <>
      <Header></Header>
      <div style={{ marginTop: "100px" }}>
        <div className="container py-5">

         {
          loading === true ? <Loading></Loading> :

          
          <div className="row">

          {searchJobs.length == 0 ? (
            <div>
              <h1
                className="text-center"
                style={{ color: "brown", margin: "120px 120px" }}
              >
                No Result Found
              </h1>
            </div>
          ) : (
            <div>
              <div className="container mx-auto procontrol d-flex justify-content-between  align-items-center">
                <p style={{ color: "rgb(255, 0, 128)" }} className="m-0">
                  Total Product found {searchJobs.length}
                </p>
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mb-5">
                {searchJobs?.map((pro) => {
                  return <Card key={pro.id} product={pro}></Card>;
                })}
              </div>
            </div>
          )}
        </div>
         }

        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SearchResult;
