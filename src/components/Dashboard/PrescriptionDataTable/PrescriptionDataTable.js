import React, { useEffect, useState } from 'react';
import PrescriptionModal from '../PrescriptionModal/PrescriptionModal';

const PrescriptionDataTable = () => {
    const [allBookedAppointments, setAllBookedAppointments] = useState([]);
    const [selectAppointment, setSelectAppointment] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch("https://doctors-portal-backend.herokuapp.com/bookedAppointments")
            .then(res => res.json())
            .then(data => setAllBookedAppointments(data));
    }, [allBookedAppointments.length])

    const openPrescriptionModal = (apId) => {
        setShowModal(true);
        const selectedAp = allBookedAppointments.find(ap => ap._id === apId)
        setSelectAppointment(selectedAp);
    }

    return (
        <>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Date</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Contact</th>
                        <th className="text-secondary text-center" scope="col">Prescription</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBookedAppointments.filter(app => app.prescription)
                            .map((app, idx) =>
                                <tr>
                                    <td>{idx + 1}</td>
                                    <td>{app.date}</td>
                                    <td>{app.patientInfo.name}</td>
                                    <td>{app.patientInfo.phone}</td>
                                    <td className="text-center">
                                        <button onClick={() => openPrescriptionModal(app._id)}
                                            className="btn btn-primary">View</button>
                                    </td>

                                </tr>
                            )
                    }
                </tbody>
            </table>
            <PrescriptionModal
                selectAppointment={selectAppointment}
                setSelectAppointment={setSelectAppointment}
                show={showModal}
                onHide={() => setShowModal(false)} />
        </>
    );
};

export default PrescriptionDataTable;