import { BrowserRouter, Routes, Route } from "react-router-dom";

// app pages
import footer from "./App/Components/Footer";
import Navbar from "./App/Components/Navbar";
import Searchbar from "./App/Components/Searchbar";
import Home from "./App/Pages/Home";
import About from "./App/Pages/About";
import Register from "./App/Pages/Register";
import Login from "./App/Pages/Login";
import ForgotPassward from "./App/Pages";
import ResetPassward from "./App/Pages";

//course
import Course from "./Course/Pages/Course";

//mentor
import Assignmnents from "./Mentor/Pages/Assignments";
import CreateAssignments from "./Mentor/Pages/CreateAssignment";
import GradedAssignments from "./Mentor/Pages/GradedAssignments";
import CreateLessonPlan from "./Mentor/Pages/LessonPlanCreation";
import MtDashboard from "./Mentor/Pages/MtDashboard";

//students
import Assignms from "./Student/Pages/Assignments";
import Grades from "./Student/Pages/Grades";
import StdDashboard from "./Student/Pages/StdDashboard";

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}>
              <Route path="about" element={<About/>}></Route>
              <Route path="register" element={<Register/>}></Route>
              <Route path="login" element={<Login/>}></Route>
              <Route path="forgotpassward" element={<ForgotPassward/>}></Route>
              <Route path="resetpassword" element={<ResetPassward/>}></Route>
              <Route path="searchbar" element={<Searchbar/>}></Route>
            </Route>

            <Route path="/MtDashboard" element={<MtDashboard/>}>
              <Route path="assignments" element={<Assignmnents/>}></Route>
              <Route path="createassignments" element={<CreateAssignments/>}></Route>
              <Route path="gradedassignments" element={<GradedAssignments/>}></Route>
              <Route path="createlessonplan" element={<CreateLessonPlan/>}></Route>
            </Route>
            
            <Route path="/StdDashboard" element={<StdDashboard/>}>
               <Route path="assignms" element={<Assignms/>}/>
               <Route path="grades" element={<Grades/>}/>
               <Route path="course" element={<Course/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
export default App;
