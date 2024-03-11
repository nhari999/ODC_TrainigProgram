import React, { useState } from 'react';
import 'boosted/dist/css/boosted.min.css';
import "./Form.css";

function ModifyForm() {
    const [Success, Setsuccess] = useState(false);
    const [Name, Setname] = useState('Ahmed Nhari');
    const [Start, Setstart] = useState('2024-03-10');
    const [Reminder, Setreminder] = useState('2024-03-17');
    const [coach, setCoach] = useState('Asma');
    const [invalidInputs, setInvalidInputs] = useState(false);
    
    const handleCoachChange = (event) => {
        setCoach(event.target.textContent);
    };
    const [name, setName] = useState('Ahmed Nhari');
    const [startDate, setStartDate] = useState('2024-03-10'); 
    const [reminderDate, setReminderDate] = useState('2024-03-17'); 
    const handleConfirm = () => {
        if (!Name || !Start || !Reminder || !coach) {
            setInvalidInputs(true);
            alert('Some inputs are empty. Please fill in all fields !');
        } else {
            setInvalidInputs(false);
            Setsuccess(true);
        }
    };

    const handleCancel = () => {
        Setsuccess(false);
    };

    return (
        <div style={{height:'300vh'}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'100px' }}>
                <div style={{ border: '2px solid grey', padding: '20px', borderRadius: '5px', width: '900px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px', marginTop: '10px' }}>Modification du Programme</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className={`form-group ${invalidInputs && !Name && 'has-error'}`} style={{ marginBottom: '20px', width: '100%' }}>
                            <label>Nom :</label>
                            <input type="text" className="form-control" value={Name} onChange={(e) => Setname(e.target.value)} id="name" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className={`form-group ${invalidInputs && !Start && 'has-error'}`} style={{ marginBottom: '20px', width: '100%' }}>
                            <label>Date de debut:</label>
                            <input type="date" className="form-control" value={Start} onChange={(e) => Setstart(e.target.value)} id="startDate" style={{ width: '100%' }} placeholder="Date" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className={`form-group ${invalidInputs && !Reminder && 'has-error'}`} style={{ marginBottom: '20px', width: '100%' }}>
                            <label>Date de rappel :</label>
                            <input type="date" className="form-control" value={Reminder} onChange={(e) => Setreminder(e.target.value)} id="reminderDate" style={{ width: '100%' }} placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <label className='labelcoach'>Selection des Coachs :</label>
                        <div className={`input-group mb-3 ${invalidInputs && !coach && 'has-error'}`} style={{ marginBottom: '20px', width: '100%' }}>
                            <input
                                type="text"
                                className="form-control"
                                value={coach}
                                onChange={(event) => setCoach(event.target.value)}
                                aria-label="Text input with dropdown button"
                            />
                            <button
                                className="btn btn-dropdown dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><button className="dropdown-item" type="button" onClick={handleCoachChange}>Asma</button></li>
                                <li><button className="dropdown-item" type="button" onClick={handleCoachChange}>Mounib</button></li>
                                <li><button className="dropdown-item" type="button" onClick={handleCoachChange}>Malik</button></li>
                            </ul>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginBottom: '10px' }}>
                            <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancel</button>
                            <button type="button" className="btn btn-success" onClick={handleConfirm}>Modify</button>
                        </div>
                    </form>
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
