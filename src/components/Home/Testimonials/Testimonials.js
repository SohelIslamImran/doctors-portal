import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import testimonialsData from '../../../data/testimonialsData';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <Container>
                <div>
                    <h5>TESTIMONIAL</h5>
                    <h1>What's Our Patients <br /> Says </h1>
                </div>
                <CardDeck className="mt-5">
                    {
                        testimonialsData.map((testimonial, idx) => <Testimonial key={idx} testimonial={testimonial} />)
                    }
                </CardDeck>
            </Container>
        </section>
    );
};

export default Testimonials;