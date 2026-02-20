import React, { useEffect, useState } from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) {
      // Formate le nom pour qu'il soit plus propre
      const rawName = storedEmail.split('@')[0];
      const formattedName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
      
      setUserDetails({
        name: formattedName,
        email: storedEmail,
        phone: "+1 (123) 456-7890",
      });
    }
  }, []);

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <i className="fa fa-user-md"></i>
          </div>
          <h2>Patient <span>Profile</span></h2>
          <p className="profile-subtitle">Manage your personal medical information</p>
        </div>

        <div className="profile-info-grid">
          <div className="info-item">
            <label>Full Name</label>
            <p>{userDetails.name}</p>
          </div>
          <div className="info-item">
            <label>Email Address</label>
            <p>{userDetails.email}</p>
          </div>
          <div className="info-item">
            <label>Contact Number</label>
            <p>{userDetails.phone}</p>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn-edit-profile">Update Details</button>
          <button className="btn-view-records">Medical Records</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;