import { Link } from "react-router-dom";

function Assignments() {
    const assignments = [
        {
            id:1,
            title: "Read on materials for sketching",
            course_name: "Sketching Classes✏️ ✍️",
            course_id: 4,
            dueDate: "2026-07-30"
        }
    ];

    return (
        <div>
            <h1>Assignments</h1>

            <Link to="/createassignment">
            <button>Create Assignments</button>
            </Link>

            <table>

                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Course</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>

                    {assignments.map((assignment) => {
                        <tr>
                            <td>{assignment.title}</td>
                            <td>{assignment.course}</td>
                            <td>{assignment.dueDate}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Assignments;
