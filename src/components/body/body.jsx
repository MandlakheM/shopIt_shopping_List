import React from "react";
import "./body.css";

function Body() {
  return (
    <main>
      <div className="catContainer">
        <div className="fruits">
          <span>FRUITS/VEGITABLES</span>
          
          <p>no data</p>
        </div>
        <div className="meat">
          <span>MEAT/POULTRY</span>
        </div>
        <div className="grain">
          <span>GRAINS</span>
        </div>
        <div className="condiments">
          <span>CONDIMENTS/SAUCE</span>
        </div>
        <div className="cannedFood">
          <span>CANNED GOODS</span>
        </div>
        <div className="dairy">
          <span>DAIRY/DELI</span>
        </div>
        <div className="toiletries">
          <span>TOILETRIES</span>
        </div>
        <div className="homeSupplies">
          <span>HOME SUPPLIES</span>
        </div>
        <div className="other">
          <span>OTHER</span>
        </div>
      </div>
    </main>
  );
}

export default Body;
