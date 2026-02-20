import React from 'react';
import './Sign_Up.css';

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique de validation
        alert("Account created successfully! Welcome to ZenClinic."); 
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <div className="signup-header">
                    <h2>Join <span>ZenClinic</span></h2>
                    <p>Start your journey to better health today.</p>
                </div>
                
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Role</label>
                        <select>
                            <option>Patient</option>
                            <option>Doctor</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your name" required />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="Enter your phone number" required />
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Create a password" required />
                    </div>

                    <div className="form-buttons">
                        <button type="submit" className="btn-primary">Create Account</button>
                        <button type="reset" className="btn-secondary">Reset</button>
                    </div>
                </form>
                
                <p className="signup-footer">
                    Already a member? <a href="/login">Login here</a>
                </p>
            </div>
        </div>
    );
}

export default SignUp;