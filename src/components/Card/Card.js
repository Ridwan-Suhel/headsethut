import React from "react";
import "./Card.css";
const Card = (props) => {
  const { img, name, price } = props.data;
  return (
    <div className="single-pr-card">
      <div className="card-top">
        <img src={img} alt="Img" />
      </div>
      <div className="card-info">
        <p>{name}</p>
        <h3>${price}</h3>
      </div>
    </div>
  );
};

export default Card;
