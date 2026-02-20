import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            {/* Section Hero */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Your Health, <span>Simplified.</span></h1>
                    <p>
                        Access world-class medical expertise from the comfort of your home. 
                        Connect with verified doctors in minutes.
                    </p>
                    <div className="hero-btns">
                        <Link to="/find-doctor" className="btn-primary-home">Find a Doctor</Link>
                        <Link to="/appointments" className="btn-secondary-home">Book Now</Link>
                    </div>
                </div>
                <div className="hero-image">
                    <i className="fa fa-user-md medical-icon-large"></i>
                </div>
            </section>

            {/* Section Statistiques / Confiance */}
            <section className="stats-section">
                <div className="stat-card">
                    <h3>500+</h3>
                    <p>Verified Doctors</p>
                </div>
                <div className="stat-card">
                    <h3>2M+</h3>
                    <p>Happy Patients</p>
                </div>
                <div className="stat-card">
                    <h3>24/7</h3>
                    <p>Instant Support</p>
                </div>
            </section>

            {/* Section Services */}
            <section className="services-overview">
                <h2>Our Premium Services</h2>
                <div className="services-grid">
                    <div className="service-item">
                        <i className="fa fa-video-camera"></i>
                        <h4>Video Consultation</h4>
                        <p>Talk to doctors face-to-face via high-quality video calls.</p>
                    </div>
                    <div className="service-item">
                        <i className="fa fa-file-text"></i>
                        <h4>Digital Prescriptions</h4>
                        <p>Receive and manage your prescriptions digitally and securely.</p>
                    </div>
                    <div className="service-item">
                        <i className="fa fa-shield"></i>
                        <h4>Secure Records</h4>
                        <p>Your medical data is encrypted and protected with us.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;