import React, { useState } from 'react';
import googleIcon from '../assets/google-icon.png';
import './viewerForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ViewerForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    password: ''
  });
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate =useNavigate();



  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const payload = {
      username, // full name
      email,
      password,
    };

    const { data } = await axios.post(
      'https://movieapi-2-m2ws.onrender.com/v1/auth/signup', 
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (data.username) {
      console.log(data.username + ' signup successful');
      navigate('/dashboard');
    } else {
      console.log('Signup failed');
    }
  } catch (error) {
    console.error('Signup error:', error.response?.data || error.message);
  }
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
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          name="age"
        // required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default ViewerForm;
