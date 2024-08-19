import React from "react";
import { useState } from "react";
import "./item.css";
import { RiFileList3Line } from "react-icons/ri";

function item({ toggleEditing }) {
  return (
    <div className="itemContainer" onClick={toggleEditing}>
      <div className="icon">
        <RiFileList3Line />
      </div>
      <div className="itemName">
        <p>buy meat</p>
      </div>
      <div className="itemQuantity">
        <p>3</p>
      </div>
      <div className="description">
        <p>get a fresh T-bone steak</p>
      </div>
    </div>
  );
}

export default item;
