import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrainingProgramForm from './Components/TrainingProgramForm';
import TrainingCalendar from './Components/TraningCalendar';
import './App.css';
import ManageAccount from './Components/ManageAccount';
import Statistics from './Components/Statistics'
import Layout from './Components/layout';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Routes>
          <Route path="/TrainingProgramForm" element={<TrainingProgramForm />} />
          <Route path="/TrainingCalendar" element={<TrainingCalendar />} />
          <Route path="/ManageAccount" element={<ManageAccount />} />
          <Route path="/Statistics" element={<Statistics />} />
          <Route path="/Login" element={<Login/>} />
        </Routes>

      </Router>
    </div>
  );
}
export default App;
