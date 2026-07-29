import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

//login process
function login(){

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        name:"",
        email: "",
        password:""

    });

    function handleChange(e) {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
        
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try{

            const response = await fetch("http://127.0.0.1:5000/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(login)
            })

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.access_token);
                localStorage.setItem("role", data.role);

                alert("LoginSuccessful ^-^");

                if (data.role === "mentor") {
                    navigator("/Mentor/MtDashboard");
                }
                else if (data.role === "student") {
                    navigator("/Student/StdDashboard");
                }

            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div className="container">
            <h1>LOGIN</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="enter your name" onChange={handleChange} required />

                <input type="email" name="email" placeholder="enter your email" onChange={handleChange} required />

                <input type="password" name="password" placeholder="enter your password" onChange={handleChange} required />

                <button type="submit">Login</button>
            </form>
            <div>
                <Link to="/ForgotPassword">Forgot password</Link>
            </div>
            <div>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
    
}
export default login;
