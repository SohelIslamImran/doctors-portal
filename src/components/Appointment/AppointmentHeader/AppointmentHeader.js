import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/chair.png';
import './AppointmentHeader.css';
import './Calendar.css'; 

const AppointmentHeader = ({ handleDateChange }) => {
    return (
        <section className="appointment-header">
            <Container fluid>
                <Row className="align-items-center banner" style={{ height: "100vh" }}>
                    <Col md={{ span: 4, offset: 1 }} className="p-md-5 order-2 order-md-1">
                        <div className="calender-area">
                            <h2>Appointment</h2>
                            <Calendar
                                onChange={handleDateChange}
                                defaultValue={new Date()}
                            />
                        </div>
                    </Col>
                    <Col md={6} className="order-1 order-md-2">
                        <Image src={chair} fluid />
                    </Col>
                </Row>
            </Container>
        </section>

    );
};

export default AppointmentHeader;