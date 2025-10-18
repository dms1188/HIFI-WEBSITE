import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to HiFi</h1>
                <p>Your one-stop solution for high-fidelity audio experiences.</p>
                <a href="#services" className="btn-primary">Explore Our Services</a>
            </div>
        </section>
    );
};

export default Hero;