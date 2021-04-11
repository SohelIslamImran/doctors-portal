import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import chair from '../../images/chair.png';

const Banner = () => {
    return (
        <Container fluid>
            <Row className="align-items-center banner" style={{ height: "100vh" }}>
                <Col md={{ span: 4, offset: 1 }} className="p-md-5 order-2 order-md-1">
                    <h1>Your New Smile <br /> Starts Here</h1>
                    <p className="text-muted my-4 pr-md-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
                    <Button
                        as={Link}
                        size="lg"
                        style={{background: "linear-gradient(75deg, #19D3AE, #0fcfec)", fontWeight: "600"}}
                        className="p-3 shadow-none border-0 text-uppercase"
                        to="/appointment">
                        Get appointment
                    </Button>
                </Col>
                <Col md={6} className="order-1 order-md-2">
                    <Image src={chair} fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;