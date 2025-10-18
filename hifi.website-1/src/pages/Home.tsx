import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;