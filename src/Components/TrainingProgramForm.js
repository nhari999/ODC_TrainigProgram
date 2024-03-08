import React, { useState } from 'react';
import 'boosted/dist/css/boosted.min.css';
import "./Form.css"
import SideBar from './SideBar';

function TrainingProgramForm() {
  const [Success, Setsuccess] = useState(false);
  const [Name, Setname] = useState("");
  const [Start, Setstart] = useState("")
  const [Reminder, Setreminder] = useState("")
  const [Coach, Setcoach] = useState("")
  const handleConfirm = () => {
    Setsuccess(true);
  };

  const handleCancel = () => {
    Setsuccess(false);
  };

  return (
    <div>
      <div>{Success && (
        <div className="alert alert-success" role="alert">
          <span className="alert-icon"><span className="visually-hidden">Success</span></span>
          <p>Training Program Has Been Added To Your Calendar</p>
        </div>
      )}</div>
      <div className='FormBox'>
        <div className='FormBorder'>
          <h2 className='Title'>Training Program Creation</h2>
          <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="form-group">
              <label>Name :</label>
              <input type="text" className="form-control" value={Name} onChange={Setname} id="name" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div className="form-group">
              <label>Start Date :</label>
              <input type="date" className="form-control" value={Start} onChange={Setstart} id="startDate" placeholder="Date" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div className="form-group">
              <label>Reminder Date :</label>
              <input type="date" className="form-control" value={Reminder} onChange={Setreminder} id="reminderDate" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <label className='labelcoach'>Select Coaches :</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" value={Coach} onChange={Setcoach} aria-label="Text input with dropdown button" />
              <button className="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginBottom: '10px' }}>
              <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancel</button>
              <button type="button" className="btn btn-success" onClick={handleConfirm}>Confirm</button>
            </div>
          </form>
          <footer className="footer navbar fixed-bottom" data-bs-theme="dark">
            <h2 className="visually-hidden">Sitemap & information</h2>
            <div className="container-fluid footer-terms">
              <ul className="navbar-nav gap-md-3 d-flex justify-content-evenly" style={{ width: '100%' }}>
                <li className="fw-bold">© Orange 2024</li>
                <li><a className="nav-link" href="#">Terms and conditions</a></li>
                <li><a className="nav-link" href="#">Privacy</a></li>
                <li><a className="nav-link active" href="#" aria-current="page">Accessibility statement</a></li>
                <li><a className="nav-link" href="#">Cookie policy</a></li>
              </ul>
            </div>
          </footer>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
          </button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title h5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
                </div>
                <div class="modal-body">

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingProgramForm;
