import { Link } from "react-router-dom";

function StdDashboard() {
    return (
        <div className="dashboard">

            <h1>Students Dashboard</h1>

            <p>Welcome Back</p>

            <div className="card">
                <Link to="/assignments">
                <button>📝Submit Assignment</button>
                </Link>

                <Link to="/grades">
                <button>📊View Grades</button>
                </Link>
            </div>
        </div>    
    );
}
export default StdDashboard;
