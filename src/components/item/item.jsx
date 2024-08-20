import React from "react";
import { useState } from "react";
import "./item.css";
import { RiFileList3Line } from "react-icons/ri";

function item({ itemName, itemDescription, itemQuantity, toggleEditing }) {
  return (
    <div className="itemContainer" onClick={toggleEditing}>
      <div className="icon">
        <RiFileList3Line />
      </div>
      <div className="itemName">
        <p>name: {itemName}</p>
      </div>
      <div className="itemQuantity">
        <p>quantity: {itemQuantity}</p>
      </div>
      <div className="description">
        <p>description: {itemDescription}</p>
      </div>
    </div>
  );
}

export default item;
