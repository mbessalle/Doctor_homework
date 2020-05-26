import React from "react";
import { NavLink } from "react-router-dom";
export default function Home() {
  const date = new Date();
  const time = date.getHours();

  return (
    <div>
      <p>we are: {time >= 8 && time <= 17 ? "open" : "closed"}</p>
      <p>To make an appointment</p>
      <p>call: 020 555 5555</p>
      <NavLink className="doctorschedule" to="/doctor-schedule">
        <button type="button">Who is on duty?</button>
      </NavLink>
      <NavLink className="patientsignup" to="/patient-signup">
        <button type="button">I am a new patient</button>
      </NavLink>
    </div>
  );
}
