import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Image } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
    const { name, photo, mobile } = doctor;
    return (
        <Col md={4} className="text-center">
            <Image className="mb-3" src={photo} alt="" fluid />
            <h5>{name}</h5>
            <p className="text-muted">
                <FontAwesomeIcon className="phone-icon" icon={faPhoneAlt} /> {mobile}
            </p>
        </Col>
    );
};

export default Doctor;