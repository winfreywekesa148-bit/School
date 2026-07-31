import { Link, useNavigate } from "react-router-dom";

function MentorNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>🎨 Art School</h2>

      <ul className="nav-links">
        <li>
          <Link to="/MtDashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/lesson">Lesson Plans</Link>
        </li>

        <li>
          <Link to="/lessonplancreation">Create Lesson Plan</Link>
        </li>

        <li>
          <Link to="/assignments">Assignments</Link>
        </li>

        <li>
          <Link to="/create-assignment">Create Assignment</Link>
        </li>

        <li>
          <Link to="/students">Students</Link>
        </li>

        <li>
          <Link to="/courses">Courses</Link>
        </li>

        <li>
          <button onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MentorNavbar;