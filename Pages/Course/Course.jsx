import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Course() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    fetch("http://127.0.0.1:5000/courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading courses...</h2>;
  }

  return (
    <div className="container">
      <h1>Courses</h1>

      <Link to="/create-course">
        <button>Create Course</button>
      </Link>

      <br />
      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Course</th>
            <th>Description</th>
            <th>Credits</th>
            <th>Teacher</th>
          </tr>
        </thead>

        <tbody>
          {courses.length > 0 ? (
            courses.map((course) => (
              <tr key={course.course_id}>
                <td>{course.course_id}</td>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>{course.credits}</td>
                <td>{course.teacher}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No courses available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Course;
