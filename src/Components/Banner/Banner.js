// import React, { useState } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Banner.css";

const Banner = () => {
  const [service,setService] = useState([])
  console.log('from banner',service)
  useEffect(()=>{
    fetch('http://localhost:7070/api/products/getProduct')
    .then(res=>res.json())
    .then(data => setService(data) )
  })


  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const { searchKey, setSearchKey, searchLocation, setSearchLocation } =
    useAuth();

  const handleSearchByKey = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    setSearchKey(searchText);
    // console.log(searchText);

// search sussion show
const searchWord = e.target.value;
setWordEntered(searchWord);
const newFilter = service.filter((value) => {

  return value.name.toLowerCase().includes(searchWord.toLowerCase());
});

if (searchWord === "") {
  setFilteredData([]);
} else {
  setFilteredData(newFilter);
}
// search sussion show 


  };

 

  const handleSearchByLocation = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    console.log(searchText);
    setSearchLocation(searchText);
  };

  return (
    <div className="banner-container overflow-hidden">
      <div>
        <img src="https://truelysell.com/assets/img/banner.jpg" />

        <div className="banner w-100">
          <div>
            <h1
              className="btitle"
              style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}
            >
              World's Largest Marketplace!!!!
            </h1>
            <h5 className="banaerp" style={{ color: "white" }}>
              Search From 100 Awesome Verified Ads!
            </h5>
          </div>
          <div className="banner-form mt-5">
            {/* search field form  */}
            <form
              action=""
              className="d-md-flex justify-content-center  banner-form-input"
            >
              <input
                type="text"
                name=""
                id=""
                placeholder="what you need"
                className="search-field search-icon"
                style={{ color: "#333" }}
                // {...register("searchkey", { required: true })}
                onChange={handleSearchByKey}
                // required
              />

              {/* search sussion show  */}
              {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem"  target="_blank">
                <p className="sesionp">{value.name} </p>
              </a>
            );
          })}
        </div>
    )} 
              {/* search sussion show  */}

              <input
                type="text"
                name=""
                id=""
                placeholder="Location (city or country)"
                className="search-field location-icon"
                style={{ color: "#333" }}
                onChange={handleSearchByLocation}

                // {...register("searchlocation", { required: true })}

                // required
              />
              <Link to="/searchresult">
                <button className="search-btn footer-search-btn p-3">
                  Search
                </button>
              </Link>
              {/* </form> */}
            </form>
          </div>
          <div className="popularserch ">
            <div className="populartag">
              <span></span>
              <p
                style={{ fontSize: "18px", marginRight: "20px" }}
                className="mt-3 ms-2"
              >
                Popular Searches
              </p>
            </div>
            <a href="/services/carwash">Car Repair Services</a>

            <a href="/services/electrical"> Toughened Glass Fitting Services</a>
            <a href="/services/computer">Computer & Server AMC Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
