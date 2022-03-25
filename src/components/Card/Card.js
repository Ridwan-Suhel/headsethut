import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Card.css";
const Card = ({ data, handleAddToCart }) => {
  const { img, name, price } = data;
  return (
    <div className="single-pr-card">
      <div className="card-top">
        <img src={img} alt="Img" />
      </div>
      <div className="card-info">
        <p>{name}</p>
        <h3>$ {price}</h3>
      </div>
      <div className="card-btn">
        <button onClick={() => handleAddToCart(data)} className="cart-btn">
          Add to cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Card;
