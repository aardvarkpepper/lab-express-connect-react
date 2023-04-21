import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    return (
        <div>
            <span><NavLink to="/">Index</NavLink></span>
            <span><NavLink to="/Logs">Logs</NavLink></span>
            <span><NavLink to ="NewForm">New Form</NavLink></span>

        </div>
    )
}