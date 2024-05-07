import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import TrainingProgramForm from './Components/TrainingProgramForm';
import TrainingCalendar from './Components/TrainingCalendar';
import './App.css';
import { useEffect } from 'react';
import ManageAccount from './Components/ManageAccount';
import Statistic from './Components/Statistic'
import Layout from './Components/layout';

import CreateAccount from "./Components/CreateAccount"
import Login from './Components/Login';
import ViewProfile from './Components/ViewProfile';
import EditProfile from './Components/EditProfile';
import TablePerProgram from './Components/StatisticsTables/StatisticPerProgram';
import Programs from "./Components/StatisticsTables/Programs"
import TablePerTrainer from './Components/StatisticsTables/StatisticTrainers';
import Trainers from './Components/StatisticsTables/Trainers';

import AddSession from './Components/AddSession';



function App() {
  useEffect(() => {
    document.title = "Orange ODC";
  }, []);
  return (
    <Router>
      <div className="App scrollable" style={{overflowY: "scroll" }} >
        <AppContent />
      </div>
    </Router>
  );
}

function AppContent() {
  // Custom hook to get the current location
  const location = useLocation();

  // Check if the current location is the login page
  const isLoginPage = location.pathname === '/';

  // Render the Layout component conditionally based on the current location
  const layoutComponent = !isLoginPage ? <Layout /> : null;

  return (
    <div className="App">

      {layoutComponent}
      <Routes>
        <Route path="/TrainingProgramForm" element={<TrainingProgramForm />} />
        <Route path="/TrainingCalendar" element={<TrainingCalendar />} />
        <Route path="/ManageAccount" element={<ManageAccount />} />
        <Route path="/Statistic" element={<Statistic />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/" element={<Login />} />
        <Route path="/TrainingCalendar" element={<TrainingCalendar />} />
        <Route path="/ViewProfile" element={<ViewProfile />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/TablePerProgram" element={<TablePerProgram Programs={Programs} />} />
        <Route path="/TablePerTrainer" element={<TablePerTrainer Trainers={Trainers} />} />
   <Route path="/AddSession" element={<AddSession />} />
      </Routes>

          
         

   

  

    </div>
  );
}

export default App;
