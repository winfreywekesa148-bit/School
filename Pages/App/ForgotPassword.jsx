import { Link } from "react-router-dom";
function ForgotPassword() {
    
    return (
        <div className="container">
            <h1>YOU FORGOT YOUR PASSWORD?</h1>
            <p>
                <ul>
                    <li>Click the "Reset Password"</li>
                    <li>Set your new password</li>
                    <li>Confirm your new password</li>
                    <li>Click the reset password button</li>
                </ul>
            </p>

            <div>
                <Link to="/ResetPassword">Reset Password</Link>
            </div>

        </div>
    )
}
export default ForgotPassword;