import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = { name, email, password };

    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("role", data.role);

          if (data.role === "teacher") {
            navigate("/MtDashboard");
          } else if (data.role === "student") {
            navigate("/StdDashboard");
          }
        } else {
          alert(data.message || "Login failed");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Something went wrong. Is the backend running on port 5000?");
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="login-container">
          <h2 className="title">Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="button-group">
              <button type="submit" className="login-btn">
                Login
              </button>
              <Link to="/forgot-password" className="forgot-link">
                Forgot Password?
              </Link>
            </div>
          </form>
          <p className="register-link">
            Don't have an account? <Link to="/Register">Register</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
