import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <NavLink className="home" to="/home">Home</NavLink>
            <NavLink className="patientdatabase" to="/patient-database">Patient Database</NavLink>
            <NavLink className="doctorschedule" to="/doctor-schedule">Doctor Schedule</NavLink>
            <NavLink className="patientsignup" to="/patient-signup">Patient signup</NavLink>
        </div>
    )
}
