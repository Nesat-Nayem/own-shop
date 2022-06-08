import React from "react";

import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container overflow-hidden ">
      <div>
        <img src="https://truelysell.com/assets/img/banner.jpg" />
        <div className="banner w-100">
          <div className="banner-form">
            {/* search field form  */}
            <form
              action=""
              className="d-md-flex justify-content-center banner-form-input"
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
