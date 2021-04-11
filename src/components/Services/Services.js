import React from 'react';
import { Row } from 'react-bootstrap';
import servicesData from '../../data/servicesData';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const Services = () => {
    return (
        <section className="text-center services-container mt-5">
            <h5>OUR SERVICES</h5>
            <h1>Services We Provide</h1>
            <div className="d-flex justify-content-center mx-auto mt-5 pt-5">
                <Row>
                    {
                        servicesData.map((service, idx) => <ServiceDetail key={idx} service={service} />)
                    }
                </Row>
            </div>
        </section>
    );
};

export default Services;