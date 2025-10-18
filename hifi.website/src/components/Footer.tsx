import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Stay Connected</h2>
                <p>Subscribe to our newsletter for the latest updates.</p>
                <form className="footer-form">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className="footer-links">
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
                <a href="/privacy">Privacy Policy</a>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} HiFi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;