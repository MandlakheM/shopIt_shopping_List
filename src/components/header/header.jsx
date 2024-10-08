import React, { useState, useEffect } from "react";
import "./header.css";
import SignUp from "../auth/signUp";
import SignIn from "../auth/signIn";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



function Header() {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [userToggle, setUserToggle] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    const user = localStorage.getItem("userId");
    if (!user) {
      setUserToggle(false);
    } else {
      setUserToggle(true);
    }
  }, []);

  function activateSignUpModal() {
    setSignUpModal(true);
  }

  function deactivateSignUpModal() {
    setSignUpModal(false);
  }

  function activateSignInModal() {
    setSignInModal(true);
  }

  function deactivateSignInModal() {
    setSignInModal(false);
  }

  function handleSignOut() {
    localStorage.removeItem("userId");
    toast.success("You have signed out");
    setUserToggle(false);
    navigate("/");

    }

  return (
    <header className="header">
      <div className="logo"><h1>Shop <span id="it">it.</span></h1></div>
      <div className="userInfo">

        <div className="auth">
          {userToggle ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <>
              <button onClick={activateSignInModal}>Sign In</button>

              <button onClick={activateSignUpModal}>Sign Up</button>

            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
