import React, { useState } from 'react';
import './signin.css';
import SignUpModal from '../components/SignUpModal';
import googleIcon from '../assets/google-icon.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {


    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const onSubmitHandler = async (e) => {
    e.preventDefault(); // 🚫 Prevent form reload

    try {
        const { data } = await axios.post(
            'https://movieapi-2-m2ws.onrender.com/v1/auth/token',
            { username, password }
        );

        if (data?.username) {
            
            navigate('/dashboard');
        } else {
            console.log(data.message || 'Login failed');
        }
    } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
    }
};

    return (
        <div className="login-page">
            <div className="login-overlay" />
            <div className="login-box">
                
                <div className="login-content">
                    <button className="google-btn">
                        <img src={googleIcon} alt="Google" className="google-icon" />
                        Continue with Google
                    </button>

                    <div className="divider">or</div>

                    <form  onClick={onSubmitHandler} className="login-form">
                        <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="usernamer" required />
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
                        <button type="submit" className="continue-btn">Continue</button>
                    </form>
                </div>

                <div className="login-links">
                    <div className="forgot-password">
                        <button>Forgot Password?</button>
                    </div>
                    <p>
                        New to JUSt WAtCH? <button onClick={() => setShowModal(true)} className="link-btn">Create your account now</button>
                    </p>
                </div>
            </div>
            <SignUpModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
};

export default Login;
