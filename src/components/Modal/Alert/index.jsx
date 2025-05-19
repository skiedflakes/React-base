// ConfirmModal.js
import React from "react";
import "./index.style.css"; // Add CSS styles for the confirm modal

const ConfirmModal = ({ message, onConfirm, onCancel }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <h2>{message || "Do you want to save changes?"}</h2>
      <div className="modal-buttons">
        <button onClick={onConfirm} className="confirm-button">
          Yes
        </button>
        <button onClick={onCancel} className="cancel-button">
          No
        </button>
      </div>
    </div>
  </div>
);

export default ConfirmModal;
