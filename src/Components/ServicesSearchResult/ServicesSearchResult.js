import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loader/loading";

const ServicesSearchResult = () => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    fetch("https://energetic-pear-threads.cyclic.app/api/products/getProduct")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        var result = data?.filter(
          (Products) =>
            Products.location.toLowerCase().includes(city.toLowerCase()) &&
            Products.providername
              .toLowerCase()
              .includes(provider.toLowerCase()) &&
            Products.name.toLowerCase().includes(service.toLowerCase()) &&
            Products.id.toString().includes(searchId.toString())
        );
        setSearchJobs(result);
        setLoading(false);
        resetKey();
      });
  }, []);

  return (
    <>
      <Header></Header>
      <div style={{ marginTop: "100px" }}>
        <div className="container py-5">
          {loading === true ? (
            <Loading></Loading>
          ) : (
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
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ServicesSearchResult;
