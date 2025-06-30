import React from 'react';
import './features.css';
import iconWatch from '../assets/watch-anywhere.png';
import iconCancel from '../assets/cancel-anytime.png';
import iconDownload from '../assets/download-offline.png';

const features = [
    {
        icon: iconWatch,
        title: 'Watch Anywhere',
        desc: 'Stream on your phone, tablet, laptop, and TV.',
    },
    {
        icon: iconCancel,
        title: 'Cancel Anytime',
        desc: 'No contracts, no commitments. Cancel online anytime.',
    },
    {
        icon: iconDownload,
        title: 'Download and Go',
        desc: 'Save your favorites and always have something to watch.',
    },
];

const Features = () => {
    return (
        <section className="features">
            <div className="features-heading">
                <h2>More Reasons to JUSt WAtCH</h2>
            </div>
            {features.map((f, idx) => (
                <div key={idx} className="feature-box">
                    <img src={f.icon} alt={f.title} className="feature-icon" />
                    <div className="feature-box-content">
                        <h3 className='feature-box-heading'>{f.title}</h3>
                        <p className='feature-box-desc'>{f.desc}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Features;
