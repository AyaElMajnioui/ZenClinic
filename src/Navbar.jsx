import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const email = sessionStorage.getItem("email");
        if (email) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.clear();
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    Zen<span>Clinic</span> <i className="fa fa-stethoscope"></i>
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/appointments">Appointments</Link></li>
                <li><Link to="/find-doctor">Find a Doctor</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                {isLoggedIn && <li><Link to="/profile" className="profile-link">My Profile</Link></li>}
            </ul>
            <div className="navbar-auth">
                {isLoggedIn ? (
                    <button className="btn-logout" onClick={handleLogout}>Logout</button>
                ) : (
                    <div className="navbar-buttons">
                        <Link to="/login" className="btn-login">Login</Link>
                        <Link to="/signup" className="btn-signup">Sign Up</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;