
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

//students
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
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
            <Route path="/resetpassword" element={<ResetPassword/>}></Route>
            <Route path="/searchbar" element={<Searchbar/>}></Route>
            

            <Route path="/MtDashboard" 
            element={
            <ProtectedRoute allowedRole="teacher">
              <MtDashboard/>
            </ProtectedRoute>}>             
            </Route>
            
            <Route path="/StdDashboard" 
            element={
            <ProtectedRoute allowedRole="student">
              <StdDashboard/></ProtectedRoute>}>
            </Route>

        </Routes>
        </BrowserRouter>
    )
}
export default App;