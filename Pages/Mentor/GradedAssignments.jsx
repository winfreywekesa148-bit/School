function GradedAssignment(){
    const submission = [
        {
            id: 1,
            student_name: "Joanne Mukiri",
            assigmnent: "Read on materials for sketching",
            submitted: "2026-06-25",
            grade:""
        }
    ]

    return (
        <div className="container">
            <h1>Grade Assignments</h1>

            <table>
                <thead>
                    <tr>
                        <th>Students_name</th>
                        <th>Assigmnent</th>
                        <th>Submitted</th>
                        <th>Grade</th>
                    </tr>
                </thead>

                <tbody>
                    {submission.map((submission) => {
                        <tr key={submission.id}>
                        <td>{submission.student}</td> 
                        <td>{submission.assigmnent}</td>
                        <td>{submission.submitted}</td>
                        <td>
                            <input type="text" placeholder="enter grade" />
                        </td>
                        </tr>
                    })}
                </tbody>
            </table>

            <button>Save Grades</button>

        </div>
    )
}
export default GradedAssignment;
