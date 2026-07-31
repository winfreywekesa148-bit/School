import { Link, useNavigate } from "react-router-dom";

function StudentNavbar() {
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
          <Link to="/StdDashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/courses">Courses</Link>
        </li>

        <li>
          <Link to="/lesson">Lesson Plans</Link>
        </li>

        <li>
          <Link to="/assignments">Assignments</Link>
        </li>

        <li>
          <Link to="/grades">Grades</Link>
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

export default StudentNavbar;