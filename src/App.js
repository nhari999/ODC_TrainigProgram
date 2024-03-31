import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrainingProgramForm from './Components/TrainingProgramForm';
import TrainingCalendar from './Components/TraningCalendar';
import SideBar from './Components/Shared/SideBar';
import Footer from './Components/Shared/Footer';
import './App.css';
import ManageAccount from './Components/ManageAccount';
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";
import PieChart from "./Components/PieChart";
import Statistic from './Components/Statistic'
import Layout from './Components/layout';
import CreateAccount from "./Components/CreateAccount"

function App() {
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
          <Route path="/" element={<TrainingCalendar />} />
        </Routes>
  
      </Router>
    </div>
  );
}

export default App;
