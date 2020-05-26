import React from "react";

export default function DoctorSchedule() {
  const date = new Date();
  const time = date.getHours();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [doctors, setDoctors] = useState([]);

  return (
    <div>
      <p>we are: {time >= 8 && time <= 17 ? "open" : "closed"}</p>
      <p>To make an appointment</p>
      <p>call: 020 555 5555</p>
    </div>
  );
}
