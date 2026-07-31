import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function LessonPlans() {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("access_token");

        fetch("http://127.0.0.1:5000/lesson-plan")
            .then((response) => response.json())
            .then((data) => setLessons(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container">
            <h1>Lesson Plans</h1>

            <Link to="/lessonplancreation">
            <button>Create lesson plan</button>
            </Link>

            <table>
                <tbody>
                    {lessons.map((lesson) => (
                       <tr key={lesson.lesson_id}>
                          <td>{lesson.course_name}</td>
                          <td>{lesson.mentorfirst_name} {lesson.mentorlast_name}</td>
                          <td>{lesson.topic}</td>
                          <td>{lesson.date}</td>
                       </tr>
                 ))}
                </tbody>
            </table>
        </div>
    );
}

export default LessonPlans;
