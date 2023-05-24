import React from 'react';
import { Table } from 'react-bootstrap';
import './AppointmentDataTable.css';

const AppointmentDataTable = ({ appointments, date }) => {
    return (
        <section className="appointment-table bg-white rounded shadow-sm p-3 pl-md-5">
            <div className="py-3 d-flex align-items-center justify-content-between">
                <h6>Appointments</h6>
                <p className="text-muted">{date}</p>
            </div>
            {
                appointments.length === 0 ?
                    <div className="p-5">
                        <h4 className="text-center text-muted">No Appointments for this Date</h4>
                    </div>
                    :
                    <Table borderless responsive>
                        <thead>
                            <tr>
                                <th className="text-muted" scope="col">Name</th>
                                <th className="text-muted text-center" scope="col">Schedule</th>
                                <th className="text-muted text-center" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map((app, idx) =>
                                    <tr key={idx}>
                                        <td>{app.name}</td>
                                        <td className="text-center">{app.time.split(' - ')[0]}</td>
                                        <td className="text-center">
                                            <select
                                                /* onClick={() => setSelectAppointment(ap)} onChange={e => handleVisitingStatusChange(e.target.value)}  */
                                                className="btn text-capitalize">
                                                <option value={app.visitingStatus === "Not Visited"} className="bg-white text-secondary">Not Visited</option>
                                                <option value={app.visitingStatus === "Visited"} className="bg-white text-secondary">Visited</option>
                                            </select>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
            }
        </section>
    );
};

export default AppointmentDataTable;