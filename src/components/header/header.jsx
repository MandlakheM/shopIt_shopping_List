import React, { useState, useEffect } from "react";
import "./header.css";
import SignUp from "../auth/signUp";
import SignIn from "../auth/signIn";

function Header() {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [userToggle, setUserToggle] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("userId");
    if (!user) {
      setUserToggle(false);
    } else {
      setUserToggle(true);
    }
  }, [userToggle]);

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
    // navigate("/");
  }

  return (
    <header className="header">
      <div className="logo">Shop it</div>
      <div className="userInfo">
        <p>Name: </p>
        <p>Surname: </p>
        <div>
          {userToggle ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <>
              <button onClick={activateSignInModal}>Sign In</button>
              {signInModal && (
                <SignIn deactivateSignInModal={deactivateSignInModal} />
              )}
              <button onClick={activateSignUpModal}>Sign Up</button>
              {signUpModal && (
                <SignUp deactivateSignUpModal={deactivateSignUpModal} />
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
