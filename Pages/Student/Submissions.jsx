import { useState } from "react";

function Assignms() {
    const [submission, setSubmission] = useState({
        assignment: "",
        course:"",
        submissionText:"",
        file: null
    })

    function handleChange(e) {
        const { name, value, files } = e.target;

        if (name === "file") {
            setSubmission({
                ...submission,
                file: files[0]
            });
        } else {
            setSubmission({
                ...submission,
                [name]: value
            });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(submission);

        alert("Assignment submitted successfully!");
    }

    return (
        <div className="container">
            <h1>Submit Assignment</h1>

            <form onSubmit={handleSubmit}>

                <label>Assignment</label>

                <input type="text" name="assignment" placeholder="title" onChange={handleChange}/>

                <label>Course</label>

                <input type="text" name="course" placeholder="course" onChange={handleChange}/>

                <label>Ans</label>

                <textarea type="text" name="submissiontext" onChange={handleChange}/>

                <input type="file" name="file" onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Assignms;
