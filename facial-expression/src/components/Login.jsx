import React from "react";
import Header from "./Header";
import "./Login.css";
import { Link } from "react-router-dom";

// Login Page

const Login = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="login">
          <h1>Login</h1>
          <div className="inputs">
            <input type="text" id="name" placeholder="Name" />
            <input type="text" id="password" placeholder="Password" />
            <div className="sign flex-row">
              <h3>Sign Up</h3>
              <Link to="/Main">
                <button>
                  <i class="fa-solid fa-check"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;
