import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../../Appointment/AppointmentFormModal/Modal.css';

const PrescriptionModal = ({ selectAppointment, setSelectAppointment, ...props }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="modal-title-id"
            centered
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <div className="px-5 py-3">
                    {
                        selectAppointment &&
                        <div>
                            <div className="mb-3 mb-4 d-flex justify-content-between">
                                <span className="text-primary">{selectAppointment.patientInfo.name}</span>
                                <span>Gender : {selectAppointment.patientInfo.gender}</span>
                                <span>Age : {selectAppointment.patientInfo.age}</span>
                            </div>
                            <form className="row add-prescription"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="col-12">
                                    {errors.medicine && <span className="text-danger">Medicine Name must not empty ! <br /></span>}
                                    {errors.doge && <span className="text-danger">Doge Name must not empty ! <br /> </span>}
                                    {errors.days && <span className="text-danger">Days Must not empty ! <br /> </span>}
                                </div>
                                <input className="form-control col-6" {...register("medicine", { required: true })} placeholder="Medicine Name" type="text" />
                                <select {...register("doge", { required: true })} className="form-control col-3">
                                    <option value="1 - 1 - 1">1 - 1 - 1</option>
                                    <option value="1 - 0 - 1">1 - 0 - 1</option>
                                    <option value="1 - 0 - 0">1 - 0 - 0</option>
                                    <option value="1 - 1 - 0">1 - 1 - 0</option>
                                    <option value="1 - 1 - 0">1 - 1 - 0</option>
                                    <option value="0 - 1 - 1">0 - 1 - 1</option>
                                    <option value="1 - 0 - 0">1 - 0 - 0</option>
                                    <option value="0 - 0 - 1">0 - 0 - 1</option>
                                </select>
                                <input {...register("days", { required: true })} className="form-control col-2" type="number" placeholder="Days" />
                                <button type="submit" className="btn btn-primary col-1"><FontAwesomeIcon icon={faPlus} /></button>
                            </form>
                            <div className="mt-5" style={{ height: "300px", overflow: "auto" }}>
                                {
                                    selectAppointment.prescription &&

                                    <table className="table table-borderless">
                                        {
                                            selectAppointment.prescription.length &&
                                            selectAppointment.prescription.map((prescript, idx) =>
                                                <tr key={idx}>
                                                    <td>{idx + 1}.</td>
                                                    <td>{prescript.medicine}</td>
                                                    <td>{prescript.doge}</td>
                                                    <td>{prescript.days} Days</td>
                                                </tr>
                                            )
                                        }
                                    </table>
                                }
                            </div>
                        </div>
                    }
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default PrescriptionModal;