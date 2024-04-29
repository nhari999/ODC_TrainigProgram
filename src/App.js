import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrainingProgramForm from './Components/TrainingProgramForm';
import TrainingCalendar from './Components/TrainingCalendar';
import './App.css';
import { useEffect } from 'react';
import ManageAccount from './Components/ManageAccount';
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";
import PieChart from "./Components/PieChart";
import Statistic from './Components/Statistic'
import Layout from './Components/layout';
import Login from './Components/Login';
import CreateAccount from "./Components/CreateAccount"
import ModifyForm from "./Components/ModifyForm";
import AddSession from './Components/AddSession';


function App() {
  useEffect(() => {
    document.title = "Orange ODC";
  }, []);
  return (
    <div className="App">
      <Router>
        <Layout />
        <Routes>
          <Route path="/TrainingProgramForm" element={<TrainingProgramForm />} />
          <Route path="/TrainingCalendar" element={<TrainingCalendar />} />
          <Route path="/ManageAccount" element={<ManageAccount />} />
          <Route path="/Statistic" element={<Statistic />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/" element={<Login />} />
          <Route path="/AddSession" element={<AddSession />} />
          <Route path="/modifyForm" element={<ModifyForm />} />
        </Routes>

      </Router>
    </div>
  );
}
export default App;
