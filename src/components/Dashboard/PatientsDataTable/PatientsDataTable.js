import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PatientsDataTable = () => {
    const [allPatients, setAllPatients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/appointments')
            .then(res => setAllPatients(res.data))
            .catch(error => console.log(error));
    }, [])

    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr. No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Gender</th>
                    <th className="text-secondary" scope="col">Age</th>
                    <th className="text-secondary" scope="col">Weight</th>
                    <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    allPatients.map((patient, idx) =>
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{patient.name}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.age}</td>
                            <td>{patient.weight}kg</td>
                            <td>{patient.phone}</td>
                            <td>{patient.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default PatientsDataTable;