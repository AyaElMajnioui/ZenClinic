import React, { useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, onClose }) => {
  // Optionnel : auto-fermeture visuelle synchronisée
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="notification-toast">
      <div className="notification-content">
        <div className="notification-icon">
          <i className="fa fa-check-circle"></i>
        </div>
        <div className="notification-text">
          <span className="notification-status">Succès</span>
          <p>{message}</p>
        </div>
        <button onClick={onClose} className="btn-close-toast">
          <i className="fa fa-times"></i>
        </button>
      </div>
      <div className="notification-progress"></div>
    </div>
  );
};

export default Notification;