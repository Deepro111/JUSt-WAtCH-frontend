import React, { useState } from 'react';
import googleIcon from '../assets/google-icon.png';
import './viewerForm.css';

const ViewerForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Viewer Sign-Up Data:', formData);
    // handle form submit logic here
  };

  return (
    <div className="viewer-form">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <h3>Sign Up as Viewer</h3>

      <button className="google-btn">
        <img src={googleIcon} alt="Google" className="google-icon" />
        Continue with Google
      </button>

      <div className="divider">or</div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default ViewerForm;
