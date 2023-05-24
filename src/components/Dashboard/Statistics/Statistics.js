import React, { useEffect, useState } from 'react';
import SingleStatistic from '../SingleStatistic/SingleStatistic';

const Statistics = () => {
    const [allBookedAppointments, setAllBookedAppointments] = useState([]);

    useEffect(() => {
        fetch("https://doctors-portal-backend.herokuapp.com/bookedAppointments")
            .then(res => res.json())
            .then(data => setAllBookedAppointments(data));
    }, [allBookedAppointments.length])

    const total = allBookedAppointments.length;
    const pending = allBookedAppointments.reduce((accu, curr) => {
        if (curr.status === "Pending") {
            accu += 1;
        }
        return accu;

    }, 0)
    const date = new Date();
    const formatedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    const todays = allBookedAppointments.reduce((accu, curr) => {
        if (curr.date === formatedDate) {
            accu += 1;
        }
        return accu;
    }, 0)

    return (
        <div className="row my-5">
            <SingleStatistic classToAdd="bg-danger" data={{ title: "Pending Appointments", count: pending }} />
            <SingleStatistic classToAdd="bg-info" data={{ title: "Today’s Appointments", count: todays }} />
            <SingleStatistic classToAdd="bg-success" data={{ title: "Total Appointments", count: total }} />
            <SingleStatistic classToAdd="bg-warning" data={{ title: "Total  Patients", count: 20 }} />
        </div>
    );
};

export default Statistics;