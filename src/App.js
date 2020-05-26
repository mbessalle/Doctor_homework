import React from "react";
import "./App.css";
import Home from "./Components/Home";
import PatientSignup from "./Components/PatientSignup";
import PatientDatabase from "./Components/PatientDatabase";
import DoctorSchedule from "./Components/DoctorSchedule";
import { Switch, Route } from "react-router-dom";
import NavBar from "./navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/patient-signup" component={PatientSignup} />
        <Route path="/patient-database" component={PatientDatabase} />
        <Route path="/doctor-schedule" component={DoctorSchedule} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
