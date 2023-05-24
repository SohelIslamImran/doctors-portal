import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Modal.css';

const AppointmentFormModal = ({ appointmentOn, date, ...props }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isBooked, setIsBooked] = useState(false);

    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.bookedDate = new Date().toLocaleString();

        axios.post('http://localhost:5000/addAppointment', data)
            .then(res => {
                if (res.data) {
                    setIsBooked(true);
                    setTimeout(() => {
                        setIsBooked(false);
                        props.onHide()
                    }, 1000);
                }
            })
            .catch(error => {
                console.log(error);
                setIsBooked(false);
            });
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="modal-title-id"
            centered
        >
            {isBooked ?
                <>
                    <Modal.Header closeButton />
                    <div className="text-center py-5 my-5">
                        <FontAwesomeIcon className="text-success" style={{ fontSize: "5rem" }} icon={faCheckCircle} />
                        <Modal.Title className="mt-5 text-dark" id="modal-title-id">Appointment Request Sent!</Modal.Title>
                    </div>
                </>
                : <>
                    <Modal.Header closeButton />
                    <Modal.Title className="text-center" id="modal-title-id">{appointmentOn}</Modal.Title>
                    <p className="text-center text-muted">On {date}</p>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Form.Control as="select" defaultValue="Select Time" {...register("time", { required: true })}>
                                    <option disabled value="Select Time">Select Time</option>
                                    <option value="7:00 AM - 8:30 AM">7:00 AM - 8:30 AM</option>
                                    <option value="8:00 AM - 9:00 AM">8:00 AM - 9:00 AM</option>
                                    <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM</option>
                                    <option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
                                    <option value="7:00 PM - 8:30 PM">7:00 PM - 8:30 PM</option>
                                    <option value="8:00 PM - 9:00 PM">8:00 PM - 9:00 PM</option>
                                    <option value="9:00 PM - 10:30 PM">9:50 PM - 10:30 PM</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" {...register("name", { required: true })} placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" {...register("phone", { required: true })} placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="email" {...register("email", { required: true })} placeholder="Email" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control as="select" defaultValue="Male" {...register("gender", { required: true })} >
                                        <option disabled value="Not set">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control {...register("age", { required: true })} placeholder="Your Age" type="number" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control {...register("weight", { required: true })} placeholder="Weight" type="number" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group className="text-right mb-0">
                                <Button type="submit">SEND</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </>
            }
        </Modal>
    );
};

export default AppointmentFormModal;