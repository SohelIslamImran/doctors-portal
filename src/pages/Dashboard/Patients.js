import React from 'react';
import DataTable from '../../components/Dashboard/DataTable/DataTable';
import PatientsDataTable from '../../components/Dashboard/PatientsDataTable/PatientsDataTable';
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar';

const Patients = () => {
    return (
        <div className="container-fluid row " >
        <Sidebar/>
        <div className="col-md-10 p-4 pr-5" style={{position:"absolute", right:0,backgroundColor: "#F4FDFB"}}>
            <h5 className="mb-5">Patients</h5>
            <DataTable tableName="All Patients">
                <PatientsDataTable/>
            </DataTable>
        </div>
    </div>
    );
};

export default Patients;