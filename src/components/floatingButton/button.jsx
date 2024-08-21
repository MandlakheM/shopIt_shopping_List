import React from "react";
import "./button.css";
import { MdAdd } from "react-icons/md";


function button({ activateModal }) {
  return (
    <div>
      <button id="addButton" onClick={activateModal}>
      <MdAdd />
      </button>
    </div>
  );
}

export default button;
