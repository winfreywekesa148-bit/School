
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./Pages/Mentor/Courses";

// app pages
import Searchbar from "./Components/App/Searchbar";
import Home from "./Pages/App/Home";
import About from "./Pages/App/About";
import Register from "./Pages/App/Register";
import Login from "./Pages/App/Login";
import ForgotPassword from "./Pages/App/ForgotPassword";
import ResetPassword from "./Pages/App/ResetPassword";

//mentor
import MtDashboard from "./Pages/Mentor/MtDashboard";
import Assignments from "./Pages/Mentor/Assignments";
import CreateAssignment from "./Pages/Mentor/CreateAssignment";
import GradedAssignments from "./Pages/Mentor/GradedAssignments";
import Lesson from "./Pages/Mentor/Lesson";
import LessonPlanCreation from "./Pages/Mentor/LessonPlanCreation";

//students
import StdDashboard from "./Pages/Student/StdDashboard";
import Submission from "./Pages/Student/Submissions";
import Grades from "./Pages/Student/Grades"
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
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
            <Route path="/resetpassword" element={<ResetPassword/>}></Route>
            <Route path="/searchbar" element={<Searchbar/>}></Route>
            

            <Route 
            path="/MtDashboard" 
            element={<ProtectedRoute allowedRole="teacher">
              <MtDashboard/>
            </ProtectedRoute>}>             
            </Route>

            <Route 
            path="/assignments" 
            element={<ProtectedRoute allowedRole="teacher">
              <Assignments/>
            </ProtectedRoute>}>             
            </Route>

            <Route 
            path="/createassignment" 
            element={<ProtectedRoute allowedRole="teacher">
              <CreateAssignment/>
            </ProtectedRoute>}>             
            </Route>

            <Route 
            path="/gradedassignments" 
            element={<ProtectedRoute allowedRole="teacher">
              <GradedAssignments/>
            </ProtectedRoute>}>             
            </Route>

            <Route 
            path="/lesson" 
            element={<ProtectedRoute allowedRole="teacher">
              <Lesson/>
            </ProtectedRoute>}>             
            </Route>

            <Route 
            path="/lessonplancreation" 
            element={<ProtectedRoute allowedRole="teacher">
              <LessonPlanCreation/>
            </ProtectedRoute>}>             
            </Route>
            
            <Route path="/stddashboard" 
            element={
            <ProtectedRoute allowedRole="student">
              <StdDashboard/></ProtectedRoute>}>
            </Route>

            <Route path="/submission" 
            element={
            <ProtectedRoute allowedRole="student">
              <Submission/></ProtectedRoute>}>
            </Route>

            <Route path="/grade" 
            element={
            <ProtectedRoute allowedRole="student">
              <Grades/></ProtectedRoute>}>
            </Route>

            <Route path="/courses" 
            element={
            <ProtectedRoute >
              <Courses/></ProtectedRoute>}>
            </Route>

        </Routes>
        </BrowserRouter>
    )
}
export default App;