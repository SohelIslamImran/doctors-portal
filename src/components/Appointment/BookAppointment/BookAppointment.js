import React from 'react';
import { Row } from 'react-bootstrap';
import appointmentData from '../../../data/appointmentData';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import './BookAppointment.css';

const BookAppointment = ({ date, show }) => {
    return (
        <section className="appointment-section my-5 py-4">
            <h2 className="text-center my-5">Available Appointments on {date}</h2>
            <div className="d-flex justify-content-center">
                <Row>
                    {
                        appointmentData.map(appointment => <AppointmentCard key={appointment.id} show={show} appointment={appointment} />)
                    }
                </Row>
            </div>
        </section>
    );
};

export default BookAppointment;