import { useState } from "react";
import "./loginForm.css";
function LoginForm (){
    const [show, setShow] = useState(true);
    if(!show) return null;
    return (
        <div className="overlay fade-in">
            <div className="login-form">
                <button className="close-btn" onclick = {() => setShow(false)}>x</button>
                <h2>Login</h2>
                <div className="form-group">
                    <label >Username</label>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" placeholder="Password" />
                </div>
                <button className="login-btn">Login</button>
            </div>
        </div>
    );
}
export default LoginForm
