import React, { useState } from 'react';
import 'boosted/dist/css/boosted.min.css';


function TrainingProgramForm() {
  const [Success, Setsuccess] = useState(false)
  const handleConfirm = () => {
    Setsuccess(true);
  };
  const handlecancel =() =>{
    Setsuccess(false)
  }

  const [showTrainersDropdown, setShowTrainersDropdown] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState("");

  const handleTrainerDropdownClick = () => {
    setShowTrainersDropdown(!showTrainersDropdown);
  };

  const handleTrainerSelection = (trainer) => {
    setSelectedTrainer(trainer);
    setShowTrainersDropdown(false);
  };

  const [showEmailDropdown, setShowEmailDropdown] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");

  const handleEmailDropdownClick = () => {
    setShowEmailDropdown(!showEmailDropdown);
  };

  const handleEmailSelection = (Email) => {
    setSelectedEmail(Email);
    setShowEmailDropdown(false);
  };
  
  const [showCertificateDropdown, setShowCertificateDropdown] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState("");

  const handleCertificateDropdownClick = () => {
    setShowCertificateDropdown(!showCertificateDropdown);
  };

  const handleCertificateSelection = (Certificate) => {
    setSelectedCertificate(Certificate);
    setShowCertificateDropdown(false);
  };
  return (
    <div>
      <div>{Success && (
        <div className="alert alert-success" role="alert">
          <span className="alert-icon"><span className="visually-hidden">Success</span></span>
          <p>Le programme a eté ajouter avec succés</p>
        </div>
      )}</div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',  }}>
        <div style={{ border: '2px solid grey', padding: '20px', borderRadius: '5px', width: '900px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', marginTop: '10px' }}>Creation du Programme</h2>
          <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="form-group" style={{ marginBottom: '20px', width: '100%' }}>
              <label>Nom :</label>
              <input type="text" className="form-control" id="name" style={{ width: '100%' }} aria-label="Username" aria-describedby="addon-wrapping" required />
            </div>
            <div className="form-group" style={{ marginBottom: '20px', width: '100%' }}>
              <label>Date de debut:</label>
              <input type="date" className="form-control" id="startDate" style={{ width: '100%' }} placeholder="Date" aria-label="Username" aria-describedby="addon-wrapping" required/>
            </div>
            <div className="form-group" style={{ marginBottom: '20px', width: '100%' }}>
              <label>Date de rappel :</label>
              <input type="date" className="form-control" id="reminderDate" style={{ width: '100%' }} placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping" required />
            </div>
            <div className="form-group mb-3" style={{ marginBottom: '20px', width: '100%' }}>
      
        <label>Selection des Coachs :</label>
        <div className="dropdown">
          <input type="text" className="form-control" id="trainer" aria-label="Text input with dropdown button" style={{ width: '100%' }}   />
          <button className="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '20%' }}   onClick={handleTrainerDropdownClick}> Trainer List</button>
          <ul className={`dropdown-menu ${showTrainersDropdown ? 'show' : ''}`}>
            <li><button className="dropdown-item" type="button" onClick={() => handleTrainerSelection("Trainer 1")}>Coach 1</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => handleTrainerSelection("Trainer 2")}>Coach 2</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => handleTrainerSelection("Trainer 3")}>Coach 3</button></li>
          </ul>
        </div>

            </div>
            <div className="form-group mb-3" style={{ marginBottom: '10px', width: '100%' }}>
              <label>Email Template  :</label>
              <div className="dropdown">
              <input type="text" className="form-control" id="trainer" aria-label="Text input with dropdown button" style={{ width: '100%' }}  />
          <button className="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '20%' }}   onClick={handleEmailDropdownClick}> Email List </button>
          <ul className={`dropdown-menu ${showEmailDropdown ? 'show' : ''}`}>
            <li><button className="dropdown-item" type="button" onClick={() => handleEmailSelection("Email 1")}>Template 1</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => handleEmailSelection("Email 2")}>Template 2</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => handleEmailSelection("Email 3")}>Template 3</button></li>
          </ul>
          </div>
            </div>
            <div className="form-group mb-3" style={{ marginBottom: '10px', width: '100%' }}>
            <label> Certificate Template :</label>
            <div className="dropdown">
              <input type="text" className="form-control" id="trainer" aria-label="Text input with dropdown button" style={{ width: '100%' }}  />
          <button className="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{ width: '20%' }}  onClick={handleCertificateDropdownClick}> Certificate List</button>
          <ul className={`dropdown-menu ${showCertificateDropdown ? 'show' : ''}`}>
            <li><button className="dropdown-item" type="button" onClick={() => handleCertificateSelection("Certificate 1")}>Template 1</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => handleCertificateSelection("Certificate 2")}>Template 2</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => handleCertificateSelection("Certificate 3")}>Template 3</button></li>
          </ul>
          </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginBottom: '10px' }}>
              <button type="button" className="btn btn-danger"onClick={handlecancel}>Cancel</button>
              <button type="button" className="btn btn-success" onClick={handleConfirm}>Confirm</button>

            </div>

          </form>
        </div>
        <div>
        </div>
        <footer>
        </footer>
      </div>
    </div>
  );
};

export default TrainingProgramForm;
