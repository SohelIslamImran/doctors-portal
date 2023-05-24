import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import featuredImg from '../../../images/featured.png';
import './FeaturedService.css';

const FeaturedService = () => {
    return (
        <section className="features-service d-flex justify-content-center p-0 p-md-5 my-5 m-md-5">
                <Row className="mb-5">
                    <Col md={5} className="mb-4 m-md-0">
                        <Image src={featuredImg} fluid />
                    </Col>
                    <Col md={7} className="align-self-center px-4">
                        <h1>Exceptional Dental Care, on Your Terms</h1>
                        <p className="text-muted my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <Button size="lg">Learn More</Button>
                    </Col>
                </Row>
        </section>
    );
};

export default FeaturedService;