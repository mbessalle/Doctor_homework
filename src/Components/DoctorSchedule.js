import React, { useState, useEffect } from "react";

export default function DoctorSchedule() {
  const date = new Date();
  const time = date.getHours();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          console.log(data);
          setDoctors(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <main>
        <h1> Who is on duty?</h1>
        <center>
          <table>
            <tr>
              <th>Doctor</th>
              <th>Availability</th>
            </tr>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.doctor}</td>
                <td>{doctor.onDuty ? "on duty" : "off duty"}</td>
                {console.log(doctor)}
              </tr>
            ))}
          </table>
        </center>
        <ul>
          <p>we are: {time >= 8 && time <= 17 ? "open" : "closed"}</p>
          <p>To make an appointment</p>
          <p>call: 020 555 5555</p>
        </ul>
      </main>
    );
  }
}
