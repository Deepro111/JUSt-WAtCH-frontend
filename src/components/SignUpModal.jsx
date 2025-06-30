// SignUpModal.jsx
import React, { useState } from 'react';
import './signupModal.css';
import ViewerForm from './viewerForm';
import AdminForm from './adminForm';

const SignUpModal = ({ isOpen, onClose }) => {
  const [formType, setFormType] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>

        {!formType ? (
          <div className="signup-choice">
            <h2 className="signup-title">Sign Up as a</h2>
            <div className="button-group">
              <button onClick={() => setFormType('viewer')} className="choice-btn viewer-btn">Viewer</button>
              <button onClick={() => setFormType('admin')} className="choice-btn admin-btn">Admin</button>
            </div>
          </div>
        ) : (
          <div className="signup-form-container">
            {formType === 'viewer' ? (
              <ViewerForm onBack={() => setFormType(null)} />
            ) : (
              <AdminForm onBack={() => setFormType(null)} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpModal;
