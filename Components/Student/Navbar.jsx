function Navbar() {
  return (
    <nav className="navbar">
      <a className="nav-brand" href="#top">
        <span>LUPINE ART ACADEMY</span>
        TOUCH THE ART
      </a>

      <div className="nav-links">
        <ul>
            <li><a href="#db">Dashboard</a></li>
            <li><a href="#course">Course</a></li>
            <li><a href="#assign">Assignments</a></li>
            <li><a href="#grade">Grades</a></li>      
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
