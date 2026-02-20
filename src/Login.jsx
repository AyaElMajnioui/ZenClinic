import React from 'react';
import './Login.css';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const emailValue = e.target.email.value;

        if (emailValue) {
            // 1. Storage for Navbar persistence
            sessionStorage.setItem("email", emailValue);
            
            // 2. Updated alert for the new brand
            alert("Login successful! Welcome back to ZenClinic."); 
            
            // 3. Redirect
            window.location.href = "/"; 
        } else {
            alert("Please enter a valid email");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Welcome <span>Back</span></h2>
                    <p>New to ZenClinic? <a href="/signup">Join us today</a></p>
                </div>
                
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="name@example.com" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="••••••••" 
                            required 
                        />
                    </div>
                    
                    <div className="btn-group">
                        <button type="submit" className="btn-primary">Login</button>
                        <button type="reset" className="btn-secondary">Reset</button>
                    </div>
                </form>
                
                <p className="forgot-password">Forgot your password?</p>
            </div>
        </div>
    );
};

export default Login;