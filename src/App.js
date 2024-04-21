import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import TrainingProgramForm from './Components/TrainingProgramForm';
import TrainingCalendar from './Components/TrainingCalendar';
import './App.css';
import ManageAccount from './Components/ManageAccount';
//import BarChart from "./Components/BarChart";
/*import LineChart from "./Components/LineChart";*/
/*import PieChart from "./Components/PieChart";*/
import Statistic from './Components/Statistic'
import Layout from './Components/layout';
import CreateAccount from "./Components/CreateAccount"
import Login from './Components/Login';
import ViewProfile from './Components/ViewProfile';
import EditProfile from './Components/EditProfile';
import Certificategenerator from './Components/CertificateGenerator/Certificategenerator';
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  // Custom hook to get the current location
  const location = useLocation();

  // Check if the current location is the login page
  const isLoginPage = location.pathname === '/';

  // Render the Layout component conditionally based on the current location
  return (
    <div className="App">
      { !isLoginPage && <Layout /> }
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
        <Route path="/Certificategenerator" element={<Certificategenerator />} />

      </Routes>
    </div>
  );
}

export default App;
