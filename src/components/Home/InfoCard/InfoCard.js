import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import './InfoCard.css';

const InfoCard = ({ info }) => {
    const { title, icon, description, bg } = info;

    return (
        <Col md={4}>
            <div className={`${bg} text-white mx-auto my-2 p-4 d-flex align-items-center justify-content-center rounded`}>
                <FontAwesomeIcon className="info-icon mr-4" icon={icon} />
                <div>
                    <h5>{title}</h5>
                    <p className="small m-0">{description}</p>
                </div>
            </div>
        </Col>
    );
};

export default InfoCard;