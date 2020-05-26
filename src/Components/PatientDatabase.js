import React from 'react'
import PatientDetails from './PatientDetails';

export default function PatientDatabase() {
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
    return (
        <div>
            <p>foo</p>
        </div>
    )
}
