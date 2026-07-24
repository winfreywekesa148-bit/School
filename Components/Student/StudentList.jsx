import StudentCard from "./StudentCard";

function StudentList({ students = [], onDelete}) {
    const students = [
        { 
            name: "Stephaine Maria",
            id: 1,
            course: "Painting Classes🖌️ 🎨",
            course_id: 1
            
        },
        {
            name: "Mary Joy",
            id: 2,
            course: "Music Classes🎼 🎵<",
            course_id: 6
        }
    ];

    return (
        <section className="list">
            <div>
                <p>Overview</p>
                <h2>Students</h2>
                <div>
                <onDelete students={students} onDelete={onDelete}/>
                </div>

                <div className="grid">
                    {students.map((student) => (
                        <StaffCard
                        key={student.id}
                        student = {student}
                        onDelete={onDelete}
                        />
                    ))}
                </div>
            </div>

        </section>

    );
}

export default StudentList;
