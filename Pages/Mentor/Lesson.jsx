import { Link } from "react-router-dom";

function LessonPlans() {
    const lessonPlans = [
        {
            id: 1,
            course: "Acting Classes🎭 🎬",
            mentor_id: 3,
            mentorfirst_name: "John",
            mentorlast_name: "Doe",
            topic: "Getting into character",
            date: "2026-7-27"
        }
    ];

    return (
        <div>
            <h1>Lesson Plans</h1>

            <Link to="/newlessonplan">
            <button>Create lesson plan</button>
            </Link>

            <table>

                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Mentor</th>
                        <th>Topic</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>

                    {lessonPlans.map((lesson) => {
                        <tr>
                            <td>{lesson.course}</td>
                            <td>{lesson.mentor}</td>
                            <td>{lesson.topic}</td>
                            <td>{lesson.date}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default LessonPlans;
