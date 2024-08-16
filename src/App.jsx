import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";

function App() {
  return (
    <>
      <div className="appContainer">
        <div className="layout">
          <Header />
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
