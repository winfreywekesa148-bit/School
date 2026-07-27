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
            <li><a href="#Lesson">Lesson</a></li>
            <li><a href="#checkedassign">CheckAssignments</a></li>
            <li><a href="#graded">Graded</a></li>      
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
