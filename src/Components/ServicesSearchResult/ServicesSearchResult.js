import React, { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";
import { Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useAuth from "../../hooks/useAuth";
import MultiServicesFilter from "../MultiServicesFilter/MultiServicesFilter";

const ServicesSearchResult = () => {
    const [searchJobs, setSearchJobs] = useState([]);
    // const { searchKey, setSearchKey, searchLocation, setSearchLocation } =
    //   useAuth();

    const {  searchId, setSearchId, city,setCity, provider, setProvider,  service, setServiceName} = useAuth()
    // console.log('from the needed point',searchId);
  
    const resetKey = () => {
    //   setSearchKey("");
    // setSearchId("");
    };
  
    // const resetLocation = () => {
    //   setSearchLocation("");
    // };
  
    useEffect(() => {
      // fetch("http://localhost:5000/products")
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

              Products.name
              .toLowerCase()
              .includes(service.toLowerCase()) 
              
            //   &&

            //   Products.id
            //   .indexOf(searchId) 
            //   Products?.id(searchId)
             
          );
        //   console.log(searchId)
          setSearchJobs(result);
          resetKey();
        //   resetLocation();
        });
    }, []);
  
    // if (searchJobs.length === 0) {
    //   return <Spinner animation="border" variant="danger" />;
  
    // }
  
    return (
        <>
        <Header></Header>
       
        <div >
        {/* <MultiServicesFilter></MultiServicesFilter> */}
          {/* <div
            className="list-sec-banner d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "var(--color-primary-light)",
              height: "50vh",
            }}
          >
            <img src='' alt="" className="w-50 p-3" />
          </div> */}
  
          <div style={{marginTop:'100px'}} className="container py-5 mb-5">
            <div className="row">
              {/* <Col md={4}>
                <h4 className="p-3">Jobs by Filter</h4>
                <div className="job-list-form">
                  <form action="">
                    <input type="text" name="" id="" placeholder="Locations" />{" "}
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Preference"
                    />{" "}
                    <br />
                    <input type="text" name="" id="" placeholder="Category" />
                  </form>
                </div>
              </Col> */}
              {/* <Col md={8}> */}
                {searchJobs.length == 0 ? (
                  <div>
                    <h1 className="text-center" style={{ color: "brown", marginTop:'120px' }}>
                      No Result Found
                    </h1>
                  </div>
                ) : (

                  <div>
                  <div className="container mx-auto procontrol d-flex justify-content-between  align-items-center">
                      <p style={{color:'rgb(58, 144, 70)'}} className='m-0'>Total Product found {searchJobs.length}</p>
          
                  </div>
                  <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto ">
                    {
                      searchJobs?.map(pro=>{
                            return(
                              <Card key={pro.id} product={pro} ></Card>
                            )
                        })
                    }
                  </div>
              </div>
                  // <div className="row d-md-flex align-items-center justify-content-center">
                  //   {searchJobs?.map((job) => (
                  //     <Link
                  //       className="job-list-link"
                  //       to={`/jobdetails/${job._id}`}
                  //     >
                  //       <article
                  //         className="job-list-article row align-items-center justify-content-center"
                  //         style={{ height: "170px", minHeight: "170px" }}
                  //       >
                  //         <Col md={6} className="d-md-flex align-items-center">
                  //           <img
                  //             src={job.img}
                  //             alt=""
                  //             className="w-25 p-4"
                  //             style={{ borderRadius: "150px" }}
                  //           />
                  //           <div className="">
                  //             <p
                  //               style={{
                  //                 color: "brown",
                  //                 fontSize: "18px",
                  //                 fontWeight: "600",
                  //               }}
                  //             >
                  //               <u>{job.job}</u>
                  //             </p>
                  //             <h6>{job.company}</h6>
                  //             <p>
                  //               {" "}
                  //               {/* <ImLocation2 /> */}
                  //               {job.location}
                  //             </p>
                  //           </div>
                  //         </Col>
                  //         <Col md={2}>{job.employmentStatus}</Col>
                  //         <Col md={2}>
                  //           {/* <FcCurrencyExchange /> */}
                  //           <span className="ps-1">{job.salary}</span>
                  //         </Col>
                  //         <Col md={2}>
                  //           <span style={{ fontWeight: "600", color: "brown" }}>
                  //             closing:
                  //           </span>{" "}
                  //           <br /> {job.applicationDeadline}
                  //         </Col>
                  //       </article>
                  //     </Link>
                  //   ))}
                  // </div>
                )}
              {/* </Col> */}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
};

export default ServicesSearchResult;