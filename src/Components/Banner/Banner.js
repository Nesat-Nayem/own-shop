import React from "react";

import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container overflow-hidden">
      <div>
        <img src="https://truelysell.com/assets/img/banner.jpg" />

        <div className="banner w-100">
        <div>
          <h1 className="btitle" style={{color:'white', fontSize:'40px', fontWeight:'bold'}}>World's Largest Marketplace!!!!</h1>
          <h5 className="banaerp" style={{color:'white'}} >Search From 100 Awesome Verified Ads!</h5>
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
                style={{ color: "orange" }}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Location (city or country)"
                className="search-field location-icon"
                style={{ color: "orange" }}
              />
              <button className="search-btn footer-search-btn p-3">
                Search
              </button>
            </form>
          </div>
          <div className="popularserch ">
            <div className="populartag">
            <span></span>
            <p style={{fontSize:'18px', marginRight:'20px'}} className="mt-3 ms-2">Popular Searches</p>
            </div>
            <a>Car Repair Services</a>
            <a>Toughened Glass Fitting Services </a>
            <a>Computer & Server AMC Service</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
