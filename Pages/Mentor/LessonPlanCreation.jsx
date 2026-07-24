import { useState } from "react";

function CreateLessonPlan() {
    const [lesson, setLesson] = useState({
        Course: "",
        Mentor:"",
        Topic: "",
        Date:""
                
    });

    function handleChange(e) {
        setLesson({
            ...lesson,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(lesson);

        alert("Saved Successfully ^-^!!");
    }

    return (
        <div className="lessonplan">
            <h1>Create Lesson Plan</h1>

            <form onSubmit={handleSubmit}>

                <input 
                name="Course"
                type="text"
                placeholder="Course" 
                onChange={handleChange}/>

                <input 
                name="Mentor"
                type="text"
                placeholder="Mentor" 
                onChange={handleChange}/>

                <input 
                name="Topic"
                type="text"
                placeholder="Topic" 
                onChange={handleChange}/>

                <input 
                name="Date"
                type="date"
                placeholder="Date" 
                onChange={handleChange}/>

                <button type="submit">Save</button>

            </form>
        </div>
    )
}
export default CreateLessonPlan;
