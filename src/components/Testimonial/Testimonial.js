import React from 'react';
import { Card } from 'react-bootstrap';

const Testimonial = ({ testimonial }) => {
    const { quote, name, from, img } = testimonial;
    return (
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Text className="text-center">{quote}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex align-items-center">
                <img className="mx-3" src={img} alt="" width="60" />
                <div>
                    <h6>{name}</h6>
                    <p className="m-0 text-muted">{from}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default Testimonial;