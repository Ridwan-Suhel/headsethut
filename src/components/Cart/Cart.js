import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  //   let productName = "";
  //   for (const product of cart) {
  //     // console.log(product.name);
  //     productName = product.name;
  //   }
  return (
    <div className="selected-items">
      <h3>Selected Items...</h3>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
