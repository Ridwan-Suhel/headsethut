import React, { useState } from "react";
import "./Cart.css";
const Cart = (props) => {
  let { cart } = props;

  function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
  }
  // btnRandom.addEventListener('click', () => {
  //     let index = getRandomNumber(0, users.length-1);
  //     result.innerText = users[index];
  // });

  const handleRandomBtn = () => {
    let index = getRandomNumber(0, cart.length - 1);
    // const li = document.querySelector("li");
    // li.innerHTML = cart[index];
    // let result = cart[index];
    // const test = cart[index].name;
    console.log(cart, cart[index].name, "clicked");
  };

  return (
    <div className="selected-items">
      <h3>Selected Items...</h3>
      <ul className="pr-lists">
        {cart.map((product, idx) => (
          <li className="li" key={idx}>
            {product.name}
          </li>
        ))}
      </ul>
      <div className="btn-wrapper">
        <button onClick={handleRandomBtn} className="chose-btn">
          Chose 1 for me
        </button>

        <button className="reset-btn">Reset</button>
        {/* <button onClick={() => handleResetBtn(reset)} className="reset-btn">
          Reset
        </button> */}

        {/* https://love2dev.com/blog/javascript-remove-from-array/ */}
      </div>

      {/* <div className="random-product">{}</div> */}
    </div>
  );
};

export default Cart;
