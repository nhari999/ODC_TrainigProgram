import React, { useState } from 'react';
import 'boosted/dist/css/boosted.min.css';
function TrainingProgramForm() {
  return (
    <div>
      <div>

      </div>
      <ul class="nav nav-pills" style={{border:"3px solid black"}}>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '500px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', marginTop: '10px' }}>Training Program Creation</h2>
          <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div class="input-group flex-nowrap" style={{ marginBottom: '10px', width: '100%' }}>
              <span class="input-group-text" id="addon-wrapping">Name :</span>
              <input type="text" class="form-control" style={{ width: '100%' }} placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div class="input-group flex-nowrap" style={{ marginBottom: '10px', width: '100%' }}>
              <span class="input-group-text" id="addon-wrapping">Start Date :</span>
              <input type="date" class="form-control" style={{ width: '100%' }} placeholder="Date" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div class="input-group flex-nowrap" style={{ marginBottom: '10px', width: '100%' }}>
              <span class="input-group-text" id="addon-wrapping">Reminder Date :</span>
              <input type="date" class="form-control" style={{ width: '100%' }} placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="addon-wrapping">Search For Trainer :</span>

              <input type="text" class="form-control" aria-label="Text input with dropdown button" />
              <button class="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Available Trainers</button>

            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="addon-wrapping">Email Template For Invitation :</span>

              <input type="text" class="form-control" aria-label="Text input with dropdown button" />
              <button class="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>

            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="addon-wrapping">Template For Certification :</span>

              <input type="text" class="form-control" aria-label="Text input with dropdown button" />
              <button class="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>

            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginBottom: '10px' }}>
              <button type="button" class="btn btn-danger">Cancel</button>
              <button type="button" class="btn btn-success">Confirm</button>
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