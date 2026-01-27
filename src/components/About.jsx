import React from 'react';
import './About.css';
import aboutVisual from '../assets/about-growth.png';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <div className="about-content">
                    <span className="about-label">ABOUT US</span>
                    <h2 className="about-title">
                        Built for Growth
                    </h2>
                    <p className="about-text">
                        We don’t just build websites; we design and develop digital ecosystems focused on performance and scalability. Our team blends strategy, design, and technology to turn complex challenges into elegant, automated solutions that deliver real results.
                    </p>
                </div>
                <div className="about-visual">
                    <img src={aboutVisual} alt="Zevora Digital Ecosystem and Business Growth Visualization" className="about-image" />
                </div>
            </div>
        </section>
    );
};

export default About;
