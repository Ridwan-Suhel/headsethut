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

  let randomName = [];

  const handleRandomBtn = () => {
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    let index = getRandomNumber(0, cart.length - 1);
    const randomPr = cart[index];
    randomName.push(randomPr.name);
    const oneRandom = randomName[0];
    ul.innerHTML = `<p class="randomOne"><span>Your Random Product</span>: ${oneRandom}</p>`;
    console.log(cart);
    cart = [];
    // console.log(cart, cart[index].name, "clicked");
  };

  const resetBtn = () => {
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    cart = [];
    // console.log(cart);
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
        <button onClick={resetBtn} className="reset-btn">
          Reset
        </button>

        {/* https://love2dev.com/blog/javascript-remove-from-array/ */}
      </div>
    </div>
  );
};

export default Cart;
