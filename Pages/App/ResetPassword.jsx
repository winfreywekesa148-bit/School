import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
    const navigate = useNavigate();

    const [passwords, setPasswords] = useState({
        password: "",
        confirmPassword: ""
    })

    function handleChange(e) {
        setPasswords({
            ...passwords,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (passwords.password !== passwords.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("New password activated!");

        navigate("/login")
    }

    return (
        <div className="container">
            <h1>Reset Password</h1>

            <form onSubmit={handleSubmit}>
                <input type="password" name="password" placeholder="New Password" onChange={handleChange} required/>

                <input type="password" name="confirmpassword" placeholder="Confirm Password" onChange={handleChange} required/>

                <button type="submit">Reset Password</button>
            </form>
        </div>
    )
}
export default ResetPassword;