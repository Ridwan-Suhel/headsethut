import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./Product.css";

const Product = () => {
  const [prDatas, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleAddToCart = (product) => {
    // const newCart = [...cart, product];
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="area-wrapper">
      {/* product area  */}
      <div className="product-wrapper">
        {prDatas.map((prData) => (
          <Card
            key={prData.id}
            data={prData}
            handleAddToCart={handleAddToCart}
          ></Card>
        ))}
      </div>
      {/* selected area  */}
      <div className="selected-area">
        <Cart key={cart.id} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Product;
