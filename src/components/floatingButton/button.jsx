import React from "react";
import "./button.css";

function button({ activateModal }) {
  return (
    <div>
      <button id="addButton" onClick={activateModal}>
        click here
      </button>
    </div>
  );
}

export default button;
