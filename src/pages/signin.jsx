import React, { useState } from 'react';
import './signin.css';
import SignUpModal from '../components/SignUpModal';
import googleIcon from '../assets/google-icon.png';

const Login = () => {

    const [showModal, setShowModal] = useState(false);

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

                    <form className="login-form">
                        <input type="text" placeholder="Email or phone number" required />
                        <input type="password" placeholder="Password" required />
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
