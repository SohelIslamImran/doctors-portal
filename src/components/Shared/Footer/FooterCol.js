import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <Col md={3}>
            <h5>{props.menuTitle}</h5>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, idx) => <li key={idx}><Link to={item.link} className="text-secondary">{item.name}</Link></li>)
                }
            </ul>
            {props.children && props.children}
        </Col>
    );
};

export default FooterCol;