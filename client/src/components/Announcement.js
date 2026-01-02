import React, { useState } from 'react';

const Announcement = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Call the onClose callback first to trigger animations immediately
    if (onClose) {
      onClose();
    }
    // Then hide the announcement
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="announcement-banner">
      <div className="announcement-content">
        <div className="announcement-icon">
          <i className="fas fa-bullhorn"></i>
        </div>
        <div className="announcement-text">
          <strong>Currently Working:</strong> Building a RAG (Retrieval-Augmented Generation) application at Flatirons Solutions, Chennai
        </div>
        <button className="announcement-close" onClick={handleClose} aria-label="Close announcement">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default Announcement;

