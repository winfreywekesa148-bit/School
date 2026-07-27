import { useState } from "react";

function Sidebar () {

    return (
        <div className="sidebar">
            <div id="sidebar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#login">Login</a></li>
                    <li><a href="#register">Register</a></li>
                </ul>
            </div>
        </div>
    )
    
}

export default Sidebar;
