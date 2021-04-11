import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import bannerImg from '../../images/ap-banner.png';
import './AppointmentBanner.css';

const AppointmentBanner = () => {
    return (
        <section className="appointment-banner">
            <Row>
                <Col md={{ span: 4, offset: 2 }} className="d-none d-md-block">
                    <img src={bannerImg} alt="" />
                </Col>
                <Col md={4} className="text-white p-5 px-md-0">
                    <h5>APPOINTMENT</h5>
                    <h1 className="my-4">Make an Appointment <br /> Today</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its.</p>
                    <Button>Learn More</Button>
                </Col>
            </Row>
        </section>
    );
};

export default AppointmentBanner;