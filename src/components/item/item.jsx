import React from "react";
import { useState } from "react";
import "./item.css";

function item({ toggleEditing }) {
  return (
    <div className="itemContainer" onClick={toggleEditing}>
      <p>buy meat</p>
    </div>
  );
}

export default item;
