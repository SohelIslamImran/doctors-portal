import React, { useEffect, useState } from 'react';
import AppointmentFormModal from '../components/Appointment/AppointmentFormModal/AppointmentFormModal';
import AppointmentHeader from '../components/Appointment/AppointmentHeader/AppointmentHeader';
import BookAppointment from '../components/Appointment/BookAppointment/BookAppointment';
import Footer from '../components/Shared/Footer/Footer';
import NavBar from '../components/Shared/NavBar/NavBar';

const AppointmentBooking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    const handleDateChange = date => setSelectedDate(date.toDateString());
    const [showModal, setShowModal] = useState(false);
    const [selectAppointment, setSelectAppointment] = useState("");
    useEffect(() => { window.scrollTo(0, 0) }, []);

    return (
        <section>
            <NavBar />
            <AppointmentHeader handleDateChange={handleDateChange} />
            <BookAppointment
                date={selectedDate}
                show={data => {
                    setShowModal(true);
                    setSelectAppointment(data);
                }} />
            <AppointmentFormModal
                date={selectedDate}
                appointmentOn={selectAppointment}
                show={showModal}
                onHide={() => setShowModal(false)} />
            <Footer />
        </section>
    );
};

export default AppointmentBooking;