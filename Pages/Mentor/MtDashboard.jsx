import { Outlet, Link } from "react-router-dom";

function MtDashboard() {
    return (
        <div className="dashboard">

            <h1>Mentor Dashboard</h1>

            <p>Welcome Back</p>
            <div>
                <section className="Lesson plan">
                    <h2>Lesson Plans</h2>

                    <Link to="/LessonPlanCreation">
                    <button>Create Lesson Plan</button>
                    </Link>

                    <Link to="/Lesson">
                    <button>View Lesson Plan</button>
                    </Link>

                </section>

                <section className="Assignment">
                    <h2>Assignments</h2>

                    <Link to="/CreateAssignment">
                    <button>Create Assignments</button>
                    </Link>

                    <Link to="/assignments">
                    <button>View Assignments</button>
                    </Link>

                </section>

                <section className="grade">
                    <h2>Grade the assignments</h2>

                    <Link to="/GradedAssignments">
                    <button>Grade Assignments</button>
                    </Link>
                </section>
            </div>
            <Outlet/>
        </div>
    );
        
}
export default MtDashboard;
