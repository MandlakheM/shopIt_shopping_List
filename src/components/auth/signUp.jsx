import React, { useState } from "react";
import "./signUp.css";
import { toast } from "react-toastify";
import axios from "axios";
import Header from "../header/header";
import { Link, useNavigate } from "react-router-dom";

function SignUp({ deactivateSignUpModal }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") {
      toast.error("Name is required");
      return;
    } else if (name.length < 2 || name.length > 15) {
      toast.error("Name must be between 3 and 15 characters");
      return;
    }

    if (surname.trim() === "") {
      toast.error("Surname is required");
      return;
    } else if (surname.length < 3 || surname.length > 20) {
      toast.error("Surname must be between 3 and 20 characters");
      return;
    }

    // if (username.trim() === "") {
    //   toast.error("Email is required");
    //   return;
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(username)) {
    //   toast.error("Invalid email address");
    //   return;
    // }

    if (password.trim() === "") {
      toast.error("Password is required");
      return;
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    const userId = new Date().toISOString();
    const userobj = { userId, name, surname, username, password };

    console.log(userobj);

    axios
      .post("http://localhost:3030/users", userobj)
      .then((res) => {
        toast.success("User SignUp successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Sign Up Failed due to :" + err.message);
      });
    deactivateSignUpModal();
  }

  return (
    <>
      <Header />
      <div className="modal">
        <div className="overlay" onClick={deactivateSignUpModal}></div>
        <div className="modalContent">
          <form onSubmit={handleSubmit}>
            <div className="formContainer">
              {/* <label>Full Name</label> */}
              <h3>Sign Up</h3>

              <div className="wrap-input-9">
                <input
                  className="input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                />
                <span className="focus-border">
                  <i></i>
                </span>
              </div>
              {/* <label>Surname</label> */}

              <div className="wrap-input-9">
                <input
                  className="input"
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder="surname"
                />
                <span className="focus-border">
                  <i></i>
                </span>
              </div>
              {/* <label>Username (Email)</label> */}

              <div className="wrap-input-9">
                <input
                  className="input"
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                />
                <span className="focus-border">
                  <i></i>
                </span>
              </div>
              {/* <label>Password</label> */}
              <div className="wrap-input-9">
                <input
                  className="input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
                <span className="focus-border">
                  <i></i>
                </span>
              </div>
              <button className="authbtn" type="submit">
                Sign Up
              </button>
            </div>
            <br />
            <br />
            <p>
              Already have an account ?<Link to={"/"}>Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
