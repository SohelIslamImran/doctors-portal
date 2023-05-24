import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../Appointment/AppointmentHeader/Calendar.css';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../Sidebar/Sidebar';
import './appointments.css';

const Appointments = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:5000/appointmentsByDate', { date: selectedDate })
            .then(res => setAppointments(res.data))
            .catch(error => console.log(error));
    }, [selectedDate])

    return (
        <Container as={Row} className="appointments" fluid >
            <Sidebar />
            <Col md={10} className="p-4 pr-5">
                <h5 className="mb-5">Appointments</h5>
                <Row>
                    <Col md={5}>
                        <Calendar onChange={date => setSelectedDate(date.toDateString())} defaultValue={new Date()} />
                    </Col>
                    <Col md={6}>
                        <AppointmentDataTable date={selectedDate} appointments={appointments} />
                    </Col>
                </Row>
            </Col>
        </Container>
    );
};

export default Appointments;