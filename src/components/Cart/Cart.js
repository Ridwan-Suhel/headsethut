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

  let randomName = [];

  const handleRandomBtn = () => {
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    let index = getRandomNumber(0, cart.length - 1);

    // const randomPr = cart[index].name;
    const randomPr = cart[index];
    randomName.push(randomPr.name);
    console.log(cart, cart[index].name, "clicked");
    // console.log(randomName, "i am random");

    // const p = document.createElement(p);
    // ul.appendChild(p);
    const oneRandom = randomName[0];
    // console.log(oneRandom);
    ul.innerHTML = `<p class="randomOne"><span>Your Random Product</span>: ${oneRandom}</p>`;
    // const randomP = document.getElementsByClassName("randomOne");
    // randomP.innerHTML = "";
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
      <p>{randomName[0]}</p>

      {/* <div className="random-product">{}</div> */}
    </div>
  );
};

export default Cart;
