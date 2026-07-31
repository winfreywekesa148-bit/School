import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateLessonPlan() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    course_name: "",
    mentorfirst_name: "",
    mentorlast_name: "",
    topic: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access_token");

    try {
      const response = await fetch("http://127.0.0.1:5000/lesson-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Lesson Plan Created Successfully!");

        // Go to the page that displays lesson plans
        navigate("/lesson");
      } else {
        alert(data.message || "Failed to create lesson plan.");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Unable to connect to the Flask server.");
    }
  };

  return (
    <div className="container">
      <h2>Create Lesson Plan</h2>

      <form onSubmit={handleSubmit}>

        <div>
            <label>Course name</label>
          <select
            name="course_name"
            value={formData.course_name}
            onChange={handleChange}
            required
        >
            <option value="">Select a course</option>
            <option value="Painting">Painting Classes</option>
            <option value="Sculpture">Sculpture Workshops</option>
            <option value="Drawing">Drawing Seminars</option>
            <option value="Art History">Art History Lectures</option>
            <option value="Music">Music Classes</option>
            <option value="Dance">Dance Classes</option>
          </select>
        </div>

        <div>
          <label>Mentor First Name</label>
          <input
            type="text"
            name="mentorfirst_name"
            value={formData.mentorfirst_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Mentor Last Name</label>
          <input
            type="text"
            name="mentorlast_name"
            value={formData.mentorlast_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Topic</label>
          <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">
          Create Lesson Plan
        </button>

      </form>
    </div>
  );
}

export default CreateLessonPlan;
