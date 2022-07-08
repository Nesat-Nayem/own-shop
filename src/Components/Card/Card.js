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
        <img id="cardImage" src={img} className="card-img-top" alt={name} />

        <NavLink
          to={`/services/${category}/${id}`}
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
  
  );
};

export default Card;
