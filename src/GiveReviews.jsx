import React, { useState } from 'react';
import './GiveReviews.css';

const GiveReviews = () => {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("0");

    return (
        <div className="review-wrapper">
            <div className="review-container">
                <div className="review-header">
                    <h2>Share Your <span>Experience</span></h2>
                    <p>Your feedback helps us provide better care for everyone.</p>
                </div>

                <div className="form-group">
                    <label>Describe your consultation</label>
                    <textarea 
                        className="form-control" 
                        rows="4"
                        value={review} 
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Tell us about the doctor and the quality of care..."
                    />
                </div>

                <div className="form-group">
                    <label>Overall Rating</label>
                    <select 
                        className="form-control" 
                        value={rating} 
                        onChange={(e) => setRating(e.target.value)}
                    >
                        <option value="0">Select rating...</option>
                        <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                        <option value="4">⭐⭐⭐⭐ Very Good</option>
                        <option value="3">⭐⭐⭐ Good</option>
                        <option value="2">⭐⭐ Fair</option>
                        <option value="1">⭐ Poor</option>
                    </select>
                </div>

                <button 
                    className="btn-submit-review" 
                    disabled={!review || rating === "0"}
                >
                    Submit Feedback
                </button>
            </div>
        </div>
    );
};

export default GiveReviews;