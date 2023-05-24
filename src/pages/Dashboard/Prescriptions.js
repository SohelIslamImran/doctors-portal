import React from 'react';
import DataTable from '../../components/Dashboard/DataTable/DataTable';
import PrescriptionDataTable from '../../components/Dashboard/PrescriptionDataTable/PrescriptionDataTable';
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar';

const Prescriptions = () => {
    return (
        <div className="container-fluid row " >
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="mb-5">Prescriptions</h5>
                <DataTable tableName="All Prescriptions">
                    <PrescriptionDataTable />
                </DataTable>
            </div>
        </div>
    );
};

export default Prescriptions;