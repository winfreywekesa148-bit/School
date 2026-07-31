import { useState } from "react";
import StudentNavbar from "../../Components/Student/StudentNavbar";

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
            <StudentNavbar/>
            <h1>Submit Assignment</h1>

            <form onSubmit={handleSubmit}>

                <label>Assignment</label>

                <input type="text" name="assignment" placeholder="title" onChange={handleChange}/>

                
                <label htmlFor="course">Course:</label>
                 <select id="course" name="course" required>
                   <option value="">Select your course</option>
                   <option value="painting">Painting Classes🖌️ 🎨</option>
                   <option value="sculpture">Sculpture Workshops🗿 🛠️</option>
                   <option value="seminars">Drawing Seminars✏️ 🖍️</option>
                   <option value="history">Art History Lectures🏛️ 📚</option>
                   <option value="instrumentals">Instrumentals🎵 🎹</option>
                   <option value="music">Music Classes🎼 🎵</option>
                   <option value="acting">Acting Classes🎭 🎬</option>
                   <option value="theater">Theater Classes🎭 🎟️</option>
                   <option value="dance">Dance Classes💃 🕺</option>
                   <option value="sketch">Sketching Classes✏️ ✍️</option>
                 </select>
             
                <label>Ans</label>

                <textarea type="text" name="submissiontext" onChange={handleChange}/>

                <input type="file" name="file" onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Assignms;
