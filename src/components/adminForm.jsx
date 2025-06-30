import React, { useState } from 'react';
import './adminForm.css';

const AdminForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    channelName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Sign-Up Data:', formData);
    // validation and backend integration here
  };

  return (
    <div className="admin-form">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <h3>Sign Up as Admin</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="channelName"
          placeholder="Channel / Production House Name"
          value={formData.channelName}
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
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="agreed"
            id="agree"
            checked={formData.agreed}
            onChange={handleChange}
          />
          <label htmlFor="agree">
            I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>
        <button type="submit" className="submit-btn">Create Admin Account</button>
      </form>
    </div>
  );
};

export default AdminForm;
