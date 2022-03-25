import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  const [prDatas, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // console.log(data);
  return (
    <div>
      <Header></Header>
      <div className="area-wrapper">
        {/* product area  */}
        <div className="product-wrapper">
          {prDatas.map((prData) => (
            <Card key={prData.id} data={prData}></Card>
          ))}
        </div>
        {/* selected area  */}
        <div className="selected-area">
          <h3>Selected Items...</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
