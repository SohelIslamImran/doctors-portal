import React from 'react';
import { Container, Row } from 'react-bootstrap';
import doctorsData from '../../data/doctorsData';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    return (
        <section className="my-5 py-5 doctors">
            <Container>
                <h5 className="text-center mb-5">Our Doctors</h5>
                <Row>
                    {
                        doctorsData.map((doctor, idx) => <Doctor key={idx} doctor={doctor} />)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Doctors;