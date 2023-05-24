import { faPencilAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PrescriptionModal from '../PrescriptionModal/PrescriptionModal';

const RecentAppointments = () => {
    const [allBookedAppointments, setAllBookedAppointments] = useState([]);
    const [selectAppointment, setSelectAppointment] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    useEffect(() => {
        fetch("https://doctors-portal-backend.herokuapp.com/bookedAppointments")
            .then(res => res.json())
            .then(data => setAllBookedAppointments(data));
    }, [allBookedAppointments.length])

    const openPrescriptionModal = (appId) => {
        setShowModal(true);
        const selectedAp = allBookedAppointments.find(app => app._id === appId)
        setSelectAppointment(selectedAp);
    }

    const openDataEditModal = (appId) => {
        setEditModal(true);
        const selectedAp = allBookedAppointments.find(app => app._id === appId)
        setSelectAppointment(selectedAp);
    }

    return (
        <>
            <table className="table table-borderless">
                <thead>
                    <tr className="text-center">
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Date</th>
                        <th className="text-secondary" scope="col">Time</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Contact</th>
                        <th className="text-secondary" scope="col">Prescription</th>
                        <th className="text-secondary" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBookedAppointments.map((app, idx) =>
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{app.date}</td>
                                <td>{app.time}</td>
                                <td>{app.patientInfo.name}</td>
                                <td>{app.patientInfo.phone}</td>
                                <td className="text-center">
                                    {
                                        app.prescription ?
                                            <button onClick={() => openPrescriptionModal(app._id)} className="btn btn-primary">View</button>
                                            :
                                            <span>
                                                <span>Not Added</span>
                                                <FontAwesomeIcon onClick={() => openPrescriptionModal(app._id)} className="text-success ml-2" style={{ cursor: "pointer" }} icon={faPlusCircle} />
                                            </span>
                                    }
                                </td>
                                <td className="text-center">
                                    <select onClick={() => setSelectAppointment(app)} className={app.status == "Rejected" ? "btn btn-danger" : app.status == "Approved" ? "btn btn-success" : "btn btn-info"}>
                                        <option selected={app.status == "Pending"} className="bg-white text-secondary">Pending</option>
                                        <option selected={app.status == "Approved"} className="bg-white text-secondary">Approved</option>
                                        <option selected={app.status == "Rejected"} className="bg-white text-secondary">Rejected</option>
                                    </select>


                                    <button onClick={() => openDataEditModal(app._id)} className="btn ml-1 btn-warning text-white"> <FontAwesomeIcon icon={faPencilAlt} /> </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Modal
                show={editModal}
                onHide={() => setEditModal(false)}
                size="lg"
                aria-labelledby="modal-title-id"
                centered >
                {selectAppointment &&
                    <form className="px-5 my-3" onSubmit={handleSubmit(onSubmit)}>
                        <h5 className="text-primary text-center mb-5">{selectAppointment.patientInfo.name}'s Appointment</h5>
                        <div className="form-group row">
                            <label htmlFor="" className="col-4">Date</label>
                            <input type="text" defaultValue={selectAppointment.date} {...register("date", { required: true })} className="form-control col-8" />
                            <div className="col-12">
                                {errors.date && <span className="text-danger">Appointment date must not empty ! <br /></span>}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-4">Time</label>
                            <input type="text" defaultValue={selectAppointment.time} {...register("time", { required: true })} className="form-control col-8" />
                            <div className="col-12">
                                {errors.time && <span className="text-danger">Appointment time must not empty ! <br /></span>}
                            </div>
                        </div>
                        <div className="form-group text-right">
                            <input type="hidden" value={selectAppointment._id} {...register("id", { required: true })} />
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </form>
                }
            </Modal>

            <PrescriptionModal
                selectAppointment={selectAppointment}
                setSelectAppointment={setSelectAppointment}
                show={showModal}
                onHide={() => setShowModal(false)} />
        </>
    );
};

export default RecentAppointments;