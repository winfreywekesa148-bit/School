import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/App/Footer";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username:"",
    full_name:"",
    email: "",
    password: "",
    course: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {

    const response = await fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
        if (response.ok) {
          alert("Registration successful!");
          navigate("/login");
        } else {
          alert(data.message);
        }
    } catch(error){
        console.error("Registration error:", error);
        alert("Something went wrong. Is the backend running on port 5000?");
      };
  };

  return (
    <>
      <div className="register-container">
        <div className="form-container">
          <h2 className="form-title">Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
               />
            </div>

            <div className="form-group">
              <label>FullName</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
/>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="course">Course:</label>
              <select id="course" name="course" required>
                <option value={formData.course}>Select a course</option>
                <option value="painting">Painting Classes🖌️ 🎨</option>
                <option value="sculpture">Sculpture Workshops🗿 🛠️</option>
                <option value="seminars">Drawing Seminars✏️ 🖍️</option>
                <option value="history">Art History Lectures🏛️ 📚</option>
                <option value="instrumentals">Instrumentals🎵 🎹</option>
                <option value="music">Music Classes🎼 🎵</option>
                <option value="acting">Acting Classes🎭 🎬</option>
                <option value="theater">Theater Classes🎭 🎟️</option>
                <option value="dance">Dance Classes💃 🕺</option>
                <option value="sketch">Sketching Classes✏️ ✍️</option>
              </select>
             
            </div>
            <div className="form-group">
              <label>Role</label>
              <select name="role" value={formData.role} onChange={handleChange} required>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
