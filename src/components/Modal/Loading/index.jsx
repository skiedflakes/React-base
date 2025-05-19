// LoadingModal.js
import React from "react";
import "./index.style.css"; // Add the CSS for the loading modal

const LoadingModal = ({ text }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <h2>{text ? text : "Loading..."}</h2>
      <div className="spinner"></div>
    </div>
  </div>
);

export default LoadingModal;
