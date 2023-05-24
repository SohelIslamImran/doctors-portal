import React from 'react';
import DataTable from '../../components/Dashboard/DataTable/DataTable';
import RecentAppointments from '../../components/Dashboard/RecentAppointments/RecentAppointments';
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar';
import Statistics from '../../components/Dashboard/Statistics/Statistics';

const Dashboard = () => {
    return (
        <section>
            <div className="container-fluid row " >
                <Sidebar />
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5>Dashboard</h5>
                    <Statistics />
                    <DataTable tableName="Recent Appointments">
                        <RecentAppointments />
                    </DataTable>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;