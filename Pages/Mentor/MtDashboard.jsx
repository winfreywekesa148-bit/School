function MtDashboard() {
    return (
        <div className="dashboard">

            <h1>Mentor Dashboard</h1>

            <p>Welcome Back</p>

            <div>
                <section className="Lesson plan">
                    <h2>Lesson Plans</h2>

                    <ul>
                        <li>Lesson PlanA</li>
                        <li>Lesson PlanB</li>
                    </ul>

                    <button>Create Lesson Plan</button>

                </section>

                <section className="Assignment">
                    <h2>Assignments</h2>

                    <ul>
                        <li>Assignmets1</li>
                        <li>Assignmets2</li>
                    </ul>

                    <button>Create Assignments</button>

                </section>

                <section className="grade">
                    <h2>Grade the assignments</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Assignments</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <body>
                            <tr>
                                <td>Student1</td>
                                <td>Assignments1</td>
                                <td><button>Grade</button></td>
                            </tr>
                        </body>
                    </table>
                </section>

                <section className="Announcements">
                    <h2>Announcements</h2>

                    <ul>
                        <li>1.Announcements</li>
                    </ul>
                    <button>Announcements</button>
                </section>
            </div>
        </div>
    );
}
export default MtDashboard;
