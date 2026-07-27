import CourseCard from "./CourseCard";

function CourseList({ courses = [], onDelete}) {
    const courses = [
        {
            course: "Painting Classes🖌️ 🎨",
            course_id: 1,
            duration: "1.5 years",
            mentor: "Eunice Muthoni"
        },
        {
            course: "Music Classes🎼 🎵<",
            course_id: 6,
            duration: "6 years",
            mentor: "David Kamau"
        }
    ];

    return (
        <section className="list">
            <div>
                <p>Overview</p>
                <h2>Course</h2>
                <div>
                    <p><onDelete courses={courses} onDelete={onDelete}/></p>
                </div>

                <div className="grid">
                    {courses.map((course) => (
                        <CourseCard
                        key={course.id}
                        course = {course}
                        onDelete={onDelete}
                        />
                    ))}
                </div>
            </div>

        </section>

    );
}

export default CourseList;
