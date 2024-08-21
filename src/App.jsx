import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import SignUp from "./components/auth/signUp";
import SignIn from "./components/auth/signIn";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./components/searcch/search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="appContainer">
        <div className="layout">
          <Provider store={store}>
            <ToastContainer />
            <Routes>
              {/* <Route path="/nav" element={<Header />} /> */}
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/yourList" element={<Body />} />
            </Routes>
          </Provider>
        </div>
      </div>
    </>
  );
}

export default App;
