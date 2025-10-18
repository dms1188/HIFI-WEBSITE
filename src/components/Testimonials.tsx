import React from 'react';

const testimonials = [
    {
        name: "John Doe",
        feedback: "This service is fantastic! Highly recommend to everyone.",
        position: "CEO, Company A"
    },
    {
        name: "Jane Smith",
        feedback: "A wonderful experience from start to finish.",
        position: "CTO, Company B"
    },
    {
        name: "Alice Johnson",
        feedback: "Exceptional quality and support. Will use again!",
        position: "Manager, Company C"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-list">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <p>"{testimonial.feedback}"</p>
                        <h4>- {testimonial.name}, {testimonial.position}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;