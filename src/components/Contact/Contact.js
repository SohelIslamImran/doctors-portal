import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <Container>
                <div className="text-center text-white mb-5">
                    <h5>CONTACT US</h5>
                    <h1>Always Connect with us</h1>
                </div>
                <Col md={9} className="mx-auto">
                    <Form action="">
                        <Form.Group>
                            <Form.Control type="email" placeholder="Email Address" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" cols="30" rows="8" placeholder="Your Message" />
                        </Form.Group>
                        <Form.Group className="text-center">
                            <Button type="button">SUBMIT</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Container>
        </section>
    );
};

export default Contact;