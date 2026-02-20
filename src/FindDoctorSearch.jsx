import React, { useState } from 'react';
import './FindDoctorSearch.css';
import Notification from './Notification';

const FindDoctorSearch = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [doctorName, setDoctorName] = useState("");
    
    const specialties = [
        { name: 'Dentist', icon: 'fa-tooth' },
        { name: 'Gynecologist', icon: 'fa-female' },
        { name: 'General Physician', icon: 'fa-user-md' },
        { name: 'Dermatologist', icon: 'fa-hand-paper' },
        { name: 'Pediatrician', icon: 'fa-child' }
    ];

    const handleBooking = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <div className="search-page">
            {showNotification && (
                <Notification
                    message="Appointment Booked Successfully!"
                    onClose={() => setShowNotification(false)}
                />
            )}
            
            <div className="search-container">
                <header className="search-header">
                    <h1>Find a <span>Doctor</span></h1>
                    <p>Book an instant consultation with our certified specialists.</p>
                </header>

                <div className="search-wrapper">
                    <div className="search-input-group">
                        <i className="fa fa-search search-main-icon"></i>
                        <input
                            type="text"
                            placeholder="Search by name, specialty or clinic..."
                            value={doctorName}
                            onChange={(e) => setDoctorName(e.target.value)}
                        />
                        <button className="btn-search-go">Search</button>
                    </div>

                    <div className="specialty-tags">
                        {specialties.map(spec => (
                            <div key={spec.name} className="specialty-tag">
                                <i className={`fa ${spec.icon}`}></i>
                                <span>{spec.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Carte Docteur Premium */}
                    <div className="doctor-result-card">
                        <div className="dr-avatar">
                            <i className="fa fa-user-md"></i>
                        </div>
                        <div className="dr-info">
                            <h3>Dr. Samy Al-Amir</h3>
                            <p className="dr-specialty">Senior Dentist</p>
                            <p className="dr-exp">10 years experience • ⭐ 4.9 (120 reviews)</p>
                            <button className="btn-book-now" onClick={handleBooking}>
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindDoctorSearch;