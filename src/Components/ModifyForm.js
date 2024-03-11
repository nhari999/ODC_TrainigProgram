import React, { useState } from 'react';
import 'boosted/dist/css/boosted.min.css';


function ModifyForm() {
    const [Success, Setsuccess] = useState(false)
    const handleConfirm = () => {
        Setsuccess(true);
    };
    const handlecancel = () => {
        Setsuccess(false)
    }

    const [showTrainersDropdown, setShowTrainersDropdown] = useState(false);
    const [selectedTrainer, setSelectedTrainer] = useState("Coach1");

    const handleTrainerDropdownClick = () => {
        setShowTrainersDropdown(!showTrainersDropdown);
    };

    const handleTrainerSelection = (trainer) => {
        setSelectedTrainer(trainer);
        setShowTrainersDropdown(false);
    };

    const [showEmailDropdown, setShowEmailDropdown] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState("Template 1");

    const handleEmailDropdownClick = () => {
        setShowEmailDropdown(!showEmailDropdown);
    };

    const handleEmailSelection = (Email) => {
        setSelectedEmail(Email);
        setShowEmailDropdown(false);
    };

    const [showCertificateDropdown, setShowCertificateDropdown] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState("Template2");

    const handleCertificateDropdownClick = () => {
        setShowCertificateDropdown(!showCertificateDropdown);
    };

    const handleCertificateSelection = (Certificate) => {
        setSelectedCertificate(Certificate);
        setShowCertificateDropdown(false);
    };
    const [name, setName] = useState('Ahmed Nhari');
    const [startDate, setStartDate] = useState('2024-03-10'); 
    const [reminderDate, setReminderDate] = useState('2024-03-17'); 

  
    return (
        <div style={{marginTop:'300px',marginBottom:'300px'}}>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
                <div style={{ border: '2px solid grey', padding: '20px', borderRadius: '5px', width: '900px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px', marginTop: '10px' }}>Modification du Programme</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="form-group" style={{ marginBottom: '20px', width: '100%' }}>
                            <label>Nom :</label>
                            <input type="text" className="form-control" id="name" style={{ width: '100%' }} aria-label="Username" aria-describedby="addon-wrapping" value={name}
                                 onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group" style={{ marginBottom: '20px', width: '100%' }}>
                            <label>Date de debut:</label>
                            <input type="date" className="form-control" id="startDate" style={{ width: '100%' }} placeholder="Date" aria-label="Username" aria-describedby="addon-wrapping"  value={startDate}
                                onChange={(e) => setStartDate(e.target.value)} required />
                        </div>
                        <div className="form-group" style={{ marginBottom: '20px', width: '100%' }}>
                            <label>Date de rappel :</label>
                            <input type="date" className="form-control" id="reminderDate" style={{ width: '100%' }} placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping" value={reminderDate}
                                 onChange={(e) => setReminderDate(e.target.value)} required />
                        </div>
                        <div className="form-group mb-3" style={{ marginBottom: '20px', width: '100%' }}>

                            <label>Selection des Coachs :</label>
                            <div className="dropdown">
                                <input type="text" className="form-control" id="trainer" aria-label="Text input with dropdown button" style={{ width: '100%' }}  value={selectedTrainer}
                                    onChange={(e) => setSelectedTrainer(e.target.value)} />
                                <button className="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '20%' }} onClick={handleTrainerDropdownClick}> Trainer List</button>
                                <ul className={`dropdown-menu ${showTrainersDropdown ? 'show' : ''}`}>
                                    <li><button className="dropdown-item" type="button" onClick={() => handleTrainerSelection("Coach 1")}>Coach 1</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={() => handleTrainerSelection("Coach 2")}>Coach 2</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={() => handleTrainerSelection("Coach 3")}>Coach 3</button></li>
                                </ul>
                            </div>

                        </div>
                        <div className="form-group mb-3" style={{ marginBottom: '10px', width: '100%' }}>
                            <label>Email Template  :</label>
                            <div className="dropdown">
                                <input type="text" className="form-control" id="trainer" aria-label="Text input with dropdown button" style={{ width: '100%' }} value={selectedEmail}
                                    onChange={(e) => setSelectedEmail(e.target.value)} />
                                <button className="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '20%' }} onClick={handleEmailDropdownClick}> Email List </button>
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
                                <input type="text" className="form-control" id="trainer" aria-label="Text input with dropdown button" style={{ width: '100%' }} value={selectedCertificate}
                  onChange={(e) => setSelectedCertificate(e.target.value)} />
                                <button className="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '20%' }} onClick={handleCertificateDropdownClick}> Certificate List</button>
                                <ul className={`dropdown-menu ${showCertificateDropdown ? 'show' : ''}`}>
                                    <li><button className="dropdown-item" type="button" onClick={() => handleCertificateSelection("Certificate 1")}>Template 1</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={() => handleCertificateSelection("Certificate 2")}>Template 2</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={() => handleCertificateSelection("Certificate 3")}>Template 3</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginBottom: '10px' }}>
                            <button type="button" className="btn btn-danger" onClick={handlecancel}>Cancel</button>
                            <button type="button" className="btn btn-success" onClick={handleConfirm}>Modify</button>

                        </div>

                    </form>
                </div>
                <div>
                </div>
               
            </div>
            <div style={{marginTop:'20px'}}>{Success && (
                <div className="alert alert-success" role="alert">
                    <span className="alert-icon"><span className="visually-hidden">Success</span></span>
                    <p>Le programme a eté modifié avec succés</p>
                </div>
            )}</div>
        </div>
    );
};

export default ModifyForm;
