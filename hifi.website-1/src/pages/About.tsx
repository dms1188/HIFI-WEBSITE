import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const About: React.FC = () => {
    return (
        <DefaultLayout>
            <div className="about">
                <h1>About Us</h1>
                <p>Welcome to our website! We are dedicated to providing the best services to our customers.</p>
                <p>Our team is composed of experienced professionals who are passionate about their work.</p>
                <p>Thank you for visiting our site, and we look forward to serving you!</p>
            </div>
        </DefaultLayout>
    );
};

export default About;