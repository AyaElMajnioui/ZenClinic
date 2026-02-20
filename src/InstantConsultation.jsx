import React from 'react';
import './InstantConsultation.css';

const InstantConsultation = () => {
    const specialties = [
        { name: 'Cardiology', icon: 'fa-heartbeat' },
        { name: 'Neurology', icon: 'fa-brain' },
        { name: 'Orthopedics', icon: 'fa-bone' },
        { name: 'General Medicine', icon: 'fa-stethoscope' }
    ];

    return (
        <div className="consultation-page">
            <div className="consultation-container">
                <div className="consultation-header">
                    <h1>Instant <span>Consultation</span></h1>
                    <p>Select a specialty to start an immediate video call with a verified doctor.</p>
                </div>
                
                <div className="specialty-grid">
                    {specialties.map(item => (
                        <div key={item.name} className="consult-card">
                            <div className="card-icon">
                                <i className={`fa ${item.icon}`}></i>
                            </div>
                            <h3>{item.name}</h3>
                            <p className="card-text">Connect with a specialist in less than 2 minutes.</p>
                            <button className="btn-consult">Start Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstantConsultation;