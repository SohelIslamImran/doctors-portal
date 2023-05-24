import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { noNamed, oralHealth, ourAddress, services } from '../../../data/footerData';
import './Footer.css';
import FooterCol from './FooterCol';

const Footer = () => {
    return (
        <footer className="footer-area">
            <Container className="pt-md-5 pb-1">
                <Row className="py-5">
                    <FooterCol key={1} menuTitle={""} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item">
                                <a href="//facebook.com/SohelIslamImran">
                                    <FontAwesomeIcon className="icon active-icon" icon={faFacebookF} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//google.com">
                                    <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//instagram.com">
                                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                                </a>
                            </li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-muted">Call Now</h6>
                            <Button>+2025550295</Button>
                        </div>
                    </FooterCol>
                </Row>
                <div className="text-center text-muted">
                    <p>Copyright <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} All Rights Reserved</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;