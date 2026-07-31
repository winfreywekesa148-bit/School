import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../Components/App/Footer";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = { name, email, password };

    try {

    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed.");
        return;
      }
      // Save token and role
      localStorage.setItem("access_token", data.token);
      localStorage.setItem("role", data.role);

      if (data.role === "teacher") {
            navigate("/MtDashboard");
      } else if (data.role === "student") {
            navigate("/StdDashboard");
      } else {
        alert("Unknown user role")
      }
      
      } catch(error) {
        console.error("Login error:", error);
        alert("Something went wrong. Is the backend running on port 5000?");
      };
   };

  return (
    <>
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
            <p className="register-link">
            Don't have an account? <Link to="/Register">Register</Link>
          </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
