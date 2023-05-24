import React from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginImg from '../../images/login-img.png';
import './Login.css';

const Login = () => {
    return (
        <section className="login-page d-flex justify-content-center">
            <Row className="align-items-center" style={{ height: "100vh" }}>
                <Col md={6} className="shadow p-5">
                    <h3 className="text-center text-secondary my-5">Login</h3>
                    <Form className="px-md-3">
                        <Form.Group>
                            <Form.Label className="text-muted">User Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="text-muted">Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="text-danger">Forgot your password?</Form.Label>
                        </Form.Group>
                        <Button as={Link} to="doctor/dashboard" type="submit" block>
                            Sign In
                        </Button>
                    </Form>
                </Col>
                <Col md={{ span: 5, offset: 1 }} className="d-none d-md-block align-self-end">
                    <Image src={LoginImg} fluid />
                </Col>
            </Row>
        </section>
    );
};

export default Login;