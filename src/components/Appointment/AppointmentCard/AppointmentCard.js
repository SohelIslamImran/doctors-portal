import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const AppointmentCard = ({ appointment, show }) => {
    return (
        <Col md={4} className="mb-5">
            <Card className="appointment-card px-3 py-4">
                <Card.Body className="text-center">
                    <Card.Title as={"h4"}>{appointment.subject}</Card.Title>
                    <h6>{appointment.visitingHour}</h6>
                    <p className="text-muted">{appointment.totalSpace} SPACES AVAILABLE</p>
                    <Button onClick={() => show(appointment.subject)}>BOOK APPOINTMENT</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AppointmentCard;