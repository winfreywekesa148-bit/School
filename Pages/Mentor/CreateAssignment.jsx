import { useState } from "react";

function CreateAssignment() {
    const [assignment, setAssignment] = useState({
        Title: "",
        Course:"",
        Description:"",
        Date:""
                
    });

    function handleChange(e) {
        setAssignment({
            ...assignment,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(lesson);

        alert("Assignment Created Successfully ^-^!!");
    }

    return (
        <div className="container">
            <h1>Create Assignment</h1>

            <form onSubmit={handleSubmit}>

                <input 
                name="Title"
                type="text"
                placeholder="Title" 
                onChange={handleChange}/>


                <input 
                name="Course"
                type="text"
                placeholder="Course" 
                onChange={handleChange}/>

                
                <textarea
                name="Desc"
                type="text"
                placeholder="Description" 
                onChange={handleChange}/>

                <input 
                name="Date"
                type="date"
                placeholder="Date" 
                onChange={handleChange}/>

                <button type="submit">Create Assignment</button>

            </form>
        </div>
    )
}
export default CreateAssignment;
