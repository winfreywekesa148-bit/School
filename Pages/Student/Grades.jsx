import StudentNavbar from "../../Components/Student/StudentNavbar";

function Grade() {
    const grades = [
        {
            id:1,
            assignment: "Read on materials for sketching",
            course: "Sketching Classes✏️ ✍️",
            grade: "89%"
        }
    ]

    return (
        <div className="container">
            <StudentNavbar/>
            <h1>My Grades</h1>
            <table>
                <thead>
                    <tr>
                        <th>Assignment</th>
                        <th>Course</th>
                        <th>Grade</th>
                    </tr>
                </thead>

                <tbody>
                    {grades.map((grade) => (
                        <tr key={grade.id}>
                            <td>{grade.assignment}</td>
                            <td>{grade.course}</td>
                            <td>{grade.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Grade;
