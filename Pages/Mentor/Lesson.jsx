import { useLocation } from "react-router-dom";
import MentorNavbar from "../../Components/Mentor/MentorNavbar";

function LessonPlans() {
    const location = useLocation();

    const lesson = location.state;

    return (
         <div className="container">
            <MentorNavbar/>
            <h1>Lesson Plan</h1>

            {lesson ? (
                <>
                    <p>Course: {lesson.course_name}</p>
                    <p>Mentor: {lesson.mentorfirst_name} {lesson.mentorlast_name}</p>
                    <p>Topic: {lesson.topic}</p>
                    <p>Date: {lesson.date}</p>
                </>
            ) : (
                <p>No lesson plan found.</p>
            )}
        </div>
    );
}

export default LessonPlans;
