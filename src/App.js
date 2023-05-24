import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import AppointmentBooking from "./pages/AppointmentBooking";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardAppointments from "./pages/Dashboard/DashboardAppointments";
import Patients from "./pages/Dashboard/Patients";
import Prescriptions from "./pages/Dashboard/Prescriptions";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/appointment">
          <AppointmentBooking />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/dashboard/appointment">
          <DashboardAppointments />
        </Route>
        <Route path="/dashboard/patients">
          <Patients />
        </Route>
        <Route path="/dashboard/prescriptions">
          <Prescriptions />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
