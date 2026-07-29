
import { BrowserRouter, Routes, Route } from "react-router-dom";

// app pages
import Searchbar from "./Components/App/Searchbar";
import Home from "./Pages/App/Home";
import About from "./Pages/App/About";
import Register from "./Pages/App/Register";
import Login from "./Pages/App/Login";
import ForgotPassward from "./Pages/App/ForgotPassword";
import ResetPassward from "./Pages/App/ResetPassword";

//course
import Course from "./Pages/Course/Course";

//mentor
import Assignmnents from "./Pages/Mentor/Assignments";
import CreateAssignments from "./Pages/Mentor/CreateAssignment";
import GradedAssignments from "./Pages/Mentor/GradedAssignments";
import CreateLessonPlan from "./Pages/Mentor/LessonPlanCreation";
import LessonPlan from "./Pages/Mentor/Lesson";
import MtDashboard from "./Pages/Mentor/MtDashboard";

//students
import Assignms from "./Pages/Student/Assignments";
import Grades from "./Pages/Student/Grades";
import StdDashboard from "./Pages/Student/StdDashboard";
import ProtectedRoute from "./Pages/App/ProtectedRoutes";

function App() {
  const Roles = {
    TEACHER : "teacher",
    ADMIN: "admin",
    STUDENT: "student"
  }
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

            <Route path="/MtDashboard" element={<ProtectedRoute allowedRole="teacher"><MtDashboard/></ProtectedRoute>}>
              <Route path="assignments" element={<Assignmnents/>}></Route>
              <Route path="createassignments" element={<CreateAssignments/>}></Route>
              <Route path="gradedassignments" element={<GradedAssignments/>}></Route>
              <Route path="createlessonplan" element={<CreateLessonPlan/>}></Route>
              <Route path="lessonplan" element={<LessonPlan/>}></Route>
            </Route>
            
            <Route path="/StdDashboard" element={<ProtectedRoute allowedRole="student"><StdDashboard/></ProtectedRoute>}>
               <Route path="assignms" element={<Assignms/>}/>
               <Route path="grades" element={<Grades/>}/>
               <Route path="course" element={<Course/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
export default App;