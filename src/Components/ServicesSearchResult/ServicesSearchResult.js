import React, { useEffect, useState } from "react";
import { Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useAuth from "../../hooks/useAuth";
import MultiServicesFilter from "../MultiServicesFilter/MultiServicesFilter";

const ServicesSearchResult = () => {
  const [searchJobs, setSearchJobs] = useState([]);
  const {
    searchId,
    setSearchId,
    city,
    setCity,
    provider,
    setProvider,
    service,
    setServiceName,
  } = useAuth();

  const resetKey = () => {};

  useEffect(() => {
    fetch("http://localhost:7070/api/products/getProduct")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        var result = data?.filter(
          (Products) =>
            Products.location.toLowerCase().includes(city.toLowerCase()) &&
            Products.providername
              .toLowerCase()
              .includes(provider.toLowerCase()) &&
            Products.name.toLowerCase().includes(service.toLowerCase())
        );
        setSearchJobs(result);
        resetKey();
      });
  }, []);

  return (
    <>
      <Header></Header>

      <div>
        <div style={{ marginTop: "100px" }} className="container py-5 mb-5">
          <div className="row">
            {searchJobs.length == 0 ? (
              <div>
                <h1
                  className="text-center"
                  style={{ color: "brown", marginTop: "120px" }}
                >
                  No Result Found
                </h1>
              </div>
            ) : (
              <div>
                <div className="container mx-auto procontrol d-flex justify-content-between  align-items-center">
                  <p style={{ color: "rgb(58, 144, 70)" }} className="m-0">
                    Total Product found {searchJobs.length}
                  </p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto ">
                  {searchJobs?.map((pro) => {
                    return <Card key={pro.id} product={pro}></Card>;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ServicesSearchResult;
