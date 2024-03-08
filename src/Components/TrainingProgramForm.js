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
  return (
    <div>
      <div>{Success && (
        <div className="alert alert-success" role="alert">
          <span className="alert-icon"><span className="visually-hidden">Success</span></span>
          <p>Training Program Has Been Added To Your Calendar</p>
        </div>
      )}</div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '750px' }}>
        <div style={{ border: '2px solid black', padding: '20px', borderRadius: '5px', width: '750px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', marginTop: '10px' }}>Training Program Creation</h2>
          <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="form-group" style={{ marginBottom: '20px', width: '100%' }}>
              <label>Name :</label>
              <input type="text" className="form-control" id="name" style={{ width: '100%' }} aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div className="form-group" style={{ marginBottom: '20px', width: '100%' }}>
              <label>Start Date :</label>
              <input type="date" className="form-control" id="startDate" style={{ width: '100%' }} placeholder="Date" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div className="form-group" style={{ marginBottom: '20px', width: '100%' }}>
              <label>Reminder Date :</label>
              <input type="date" className="form-control" id="reminderDate" style={{ width: '100%' }} placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div className="form-group mb-3" style={{ marginBottom: '20px', width: '100%' }}>
              <label>Search For Trainer :</label>
              <input type="text" className="form-control" id="trainer" aria-label="Text input with dropdown button" style={{ width: '100%' }} />
              <button className="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
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
