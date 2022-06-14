import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./FuteredCatagory.css";
const FuteredCatagory = () => {
  const products = useSelector((state) => state.products);
  return (
    <div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="featuredcatimg">
              <img src="https://truelysell.com/assets/img/title-image.png" />

              <div className="feturedtextcata">
                <h1>Featured Categories</h1>
                <h6>What do you need to find?</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="fetuedcarig">
              <a href="#">
                VIEW ALL
                <span>
                  <i class="fas fa-angle-right"></i>
                </span>
              </a>
              <h1>Featured Categories</h1>
            </div>
          </div>
        </div>
      </div>

      {/* product card */}
      <div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* hover image  */}

            {/* <h2 id="demo14">14. Shine</h2> */}
            {/* <div class="hover14 column">
  <div>
    <figure><img src="https://picsum.photos/300/200?image=244" /></figure>
    <span>Hover</span>
  </div>

</div> */}

            {/* Supplements */}

            {/* hover image  */}
            <div class="col">
              <div class="card h-100 cataoryimg">

                <Nav.Item as={NavLink} to="/products/intriory">

                  <img
                    src="https://truelysell.com/uploads/category_images/1631720887category-02_381_286.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div className="catagorycardrap d-flex">
                    <span></span>
                    <p>Interior</p>
                  </div>

                </Nav.Item>

              </div>
            </div>
            <div class="col">
              <div class="card h-100">
              <Nav.Item as={NavLink} to="/products/computer">
                <img
                  src="https://truelysell.com/uploads/category_images/1631720857category-01_381_286.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="catagorycardrap d-flex">
                  <span></span>
                  <p>Computer</p>
                </div>
                </Nav.Item>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
              <Nav.Item as={NavLink} to="/products/carwash">
                <img
                  src="https://truelysell.com/uploads/category_images/1631720916category-03_381_286.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="catagorycardrap d-flex">
                  <span></span>
                  <p>Car Wash</p>
                </div>
                </Nav.Item>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
              <Nav.Item as={NavLink} to="/products/cleaning">
                <img
                  src="https://truelysell.com/uploads/category_images/1631720937category-04_381_286.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="catagorycardrap d-flex">
                  <span></span>
                  <p>Cleaning</p>
                </div>
                </Nav.Item>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
              <Nav.Item as={NavLink} to="/products/electrical">
                <img
                  src="https://truelysell.com/uploads/category_images/1631720955category-05_381_286.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="catagorycardrap d-flex">
                  <span></span>
                  <p>Electrical</p>
                </div>
                </Nav.Item>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
              <Nav.Item as={NavLink} to="/products/construction">
                <img
                  src="https://truelysell.com/uploads/category_images/1631720973category-06_381_286.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="catagorycardrap d-flex">
                  <span></span>
                  <p>Construction</p>
                </div>
                </Nav.Item>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product card */}
    </div>
  );
};

export default FuteredCatagory;
