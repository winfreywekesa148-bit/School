import Delete from "../../App/Components/Delete";

function StudentCard({student, course, onDelete }) {
    if (!student) return null;

    return (
        <div id="header">
            <div>
                <h3>{student.name}</h3>
                <p>{student.course}</p>
                <span>{student.id}</span>
                <samp>{course.course_id}</samp>
            </div>

            <Delete students={student} onDelete={onDelete}/>
            
        </div>
    )
}

export default StudentCard;
