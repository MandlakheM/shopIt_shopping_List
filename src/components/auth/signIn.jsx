import React, { useState, useEffect } from "react";
import axios from "axios";
import "./signUp.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import { Link } from "react-router-dom";

function SignIn({ deactivateSignInModal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.trim() !== "" && password.trim() !== "") {
      try {
        const response = await axios.get(
          `http://localhost:3030/users?username=${username}&password=${password}`
        );

        if (response.data.length > 0) {
          const user = response.data[0];
          localStorage.setItem("userId", user.userId);
          toast.success("Sign In successful");
          navigate("/yourList");

          // deactivateSignInModal();
        } else {
          toast.error("Invalid credentials");
        }
      } catch (error) {
        toast.error("Error during login: " + error.message);
      }
    } else {
      toast.error("Please fill in both username and password");
    }
  };

  return (
    <>
      <Header />
      <div className="modal">
        <div className="overlay"></div>
        <div className="modalContent">
          <form onSubmit={handleSubmit}>
            <div className="formContainer">
              <label>Username (Email)</label>
              <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Sign In</button>
            </div>
            <p>
              {" "}
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
