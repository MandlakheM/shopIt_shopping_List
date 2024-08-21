import React from "react";
import { useState } from "react";
import "./item.css";
import { RiFileList3Line } from "react-icons/ri";
import { GiFruitBowl } from "react-icons/gi";
import { GiMeat } from "react-icons/gi";
import { GiCannedFish } from "react-icons/gi";
import { FaToiletPaper } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

function item({
  itemName,
  itemDescription,
  itemQuantity,
  toggleEditing,
  itemCategory,
  itemId,
}) {
  const displayIcon = (cat) => {
    switch (cat) {
      case "fruits/veg":
        return <GiFruitBowl />;
      case "meat":
        return <GiMeat />;
      case "canned goods":
        return <GiCannedFish />;
      case "toiletries":
        return <FaToiletPaper />;
      case "home supplies":
        return <FaTools />;
      case "other":
        return <BsThreeDots />;
    }
  };

  return (
    <div className="itemContainer" onClick={() => toggleEditing(itemId)}>
      <div className="icon">
        {displayIcon(itemCategory)}
        {/* <RiFileList3Line /> */}
      </div>
      <div className="itemName">
        <p>{itemName}</p>
      </div>
      <div className="itemQuantity">
        <p>{itemQuantity}</p>
      </div>
      <div className="description">
        <p>{itemDescription}</p>
      </div>
    </div>
  );
}

export default item;
