import React from "react";

import './basket.css'
function Basket({title}) {
  return (
    <div className="basket">
      <div className="basketCard">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
export default Basket;
