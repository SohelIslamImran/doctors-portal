import React from 'react';
import { Row } from 'react-bootstrap';
import infoData from '../../../data/infoData';
import InfoCard from '../InfoCard/InfoCard.js';

const Infos = () => {
    return (
        <section className="d-flex justify-content-center">
            <Row className="info-container">
                {
                    infoData.map((info, idx) => <InfoCard key={idx} info={info} />)
                }
            </Row>
        </section>
    );
};

export default Infos;