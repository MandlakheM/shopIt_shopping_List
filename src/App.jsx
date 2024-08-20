import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import SignUp from "./components/auth/signUp";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <div className="appContainer">
          <div className="layout">
            <Header />
            <Body />
            {/* <SignUp/> */}
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
