import Delete from "../../App/Components/Delete";

function CourseCard({course, course_id, duration, mentors, onDelete}) {
    if (!course) return null;

    return (
        <div className="coursecard">
            <h3>{course}</h3>
            <samp>{course_id}</samp>
            <span>{duration}</span>
            <p>{mentors}</p>
            <Delete courses={course} onDelete={onDelete}/>
        </div>

    )
}
export default CourseCard;
