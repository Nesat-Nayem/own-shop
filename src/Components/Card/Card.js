import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "./Card.css";

const Card = ({ product }) => {
  const { id, name, img, category, price, review } = product;

  return (

   
    <div
      style={{ marginTop: "80px" }}
      className="col-lg-3 col-md-4 col-sm-6 col-xs-12 "
    >
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} />

        <NavLink
          to={`/products/${category}/${id}`}
          className="text-decoration-none"
        >
          <div className="card-body d-flex flex-column align-items-start">
            <Rating ratingValue={review * 20} size={18} readonly={true} />
            <p
              style={{
                color: "#3a9046",
                fontSize: "13px",
                margin: "5px 0",
              }}
            >
              {String(category).toLocaleUpperCase()}
            </p>
            <h2
              className="card-title"
              style={{
                color: "#FF0080",
                fontSize: "18px",
                fontWeight: 900,
                margin: "5px 0",
                letterSpacing: "1px",
              }}
            >
              {name}
            </h2>
            <p
              style={{
                color: "#3a9046",
                fontSize: "25px",
                margin: "0",
              }}
            >
              ${price}
            </p>
          </div>
        </NavLink>
      </div>
    </div>

     // another  card defrent design 2
//      <div className="col-lg-6 col-md-12 col-12">
//      <div id="container">	

//             <div className="product-details">
                 
//                  {/* <h1>{title}</h1> */}
//                  <h1 style={{color:'rgb(255, 0, 128)'}}>{name}</h1>
//                  <span className="hint-star star">
//                       <i className="fa fa-star" aria-hidden="true"></i>
//                       <i className="fa fa-star" aria-hidden="true"></i>
//                       <i className="fa fa-star" aria-hidden="true"></i>
//                       <i className="fa fa-star" aria-hidden="true"></i>
//                       <i className="fa fa-star-o" aria-hidden="true"></i>
//                  </span>
                 
//                  <p style={{marginLeft:'-150px'}} className="information">{category}</p>
//                  {/* <Rating ratingValue={5} size={18} readonly={true} /> */}
                 
                 
//        <div className="control">

//        {/* dynamic button */}
            
//        <Link  to={`/products/${category}/${id}`}>
//        <button className="btn">
//             <span className="booking">View</span>
//        <span className="booking-cart"><i className="fas icon-booking fa-light-eye"></i></span>
//        <span className="buy">Details</span>
//        </button>
//        </Link>
            
//        </div>
                      
//        </div>

//        <div className="product-image">
//        <img className="img-fluid" src={img} alt="" />
//        <div className="info">
//             <h2> {name.slice(0,10)}</h2>
//             <p className="ms-2 mt-4">Best for your use</p>
//             <p className="ms-2">Best for your use</p>
//             <p className="ms-2">Best for your use</p>
//             {/* <ul>
//                  <li><strong>Choice your : </strong>Place</li>
//                  <li><strong>Take: </strong>winter cloth</li>
//                  <li><strong>Make sure: </strong>you are fit</li>
//                  <li><strong>Start : </strong>your journey</li>
                 
//             </ul> */}
//        </div>
//        </div>

//        </div>

//   </div>
     // card defrent design
  );
};

export default Card;
