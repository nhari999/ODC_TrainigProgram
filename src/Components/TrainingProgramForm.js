import React, { useState } from 'react';
import 'boosted/dist/css/boosted.min.css';
import "./Form.css";
import { useNavigate } from 'react-router-dom';

function CoachSelection({ selectedCoaches, setSelectedCoaches }) {
  const handleCoachSelect = (coach) => {
    if (!selectedCoaches.includes(coach)) {
      setSelectedCoaches([...selectedCoaches, coach]);
    }
  };

  const removeCoach = (index) => {
    const updatedCoaches = [...selectedCoaches];
    updatedCoaches.splice(index, 1);
    setSelectedCoaches(updatedCoaches);
  };

  return (
    <div>
      {selectedCoaches.map((coach, index) => (
        <div className="input-group mb-3" key={index}>
          <input
            type="text"
            className="form-control"
            value={coach}
            readOnly
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            style={{ Height: "1.5" }}
            onClick={() => removeCoach(index)}
          >
            &times;
          </button>
        </div>
      ))}
      <div className="input-group mb-3">
        <div className="input-group-append">
          <button
            className="btn btn-dropdown dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="dropdownbutton"
          >
            Available Coaches
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleCoachSelect("Asma")}
                id='asma'
              >
                Asma
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleCoachSelect("Mounib")}
                id='mounib'

              >
                Mounib
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleCoachSelect("Malik")}
                id='malik'

              >
                Malik
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function TrainingProgramForm() {
  const [Name, Setname] = useState("");
  const [Start, Setstart] = useState("");
  const [Reminder, Setreminder] = useState("");
  const [selectedCoaches, setSelectedCoaches] = useState([]);
  const [nameError, setNameError] = useState("");
  const [startError, setStartError] = useState("");
  const [reminderError, setReminderError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    let hasError = false;

    if (!Name) {
      setNameError("Please enter a name");
      hasError = true;
    } else {
      setNameError("");
    }

    if (!Start) {
      setStartError("Please select a start date");
      hasError = true;
    } else if (new Date(Start) < new Date()) {
      setStartError("Start date should be today or a future date");
      hasError = true;
    } else {
      setStartError("");
    }

    if (!Reminder) {
      setReminderError("Please select a reminder date");
      hasError = true;
    }else if (new Date(Reminder) < new Date(Start) || new Date(Reminder) < new Date() ) { 
      setReminderError("End date must be after the start date Or At the same day !");
      hasError = true;
    } else {
      setReminderError("");
    }
    if (selectedCoaches.length === 0) {
      alert("Please select at least one coach.");
      hasError = true;
    }
    if (!hasError) {
      setIsSubmitting(true);
      try {
        const response = await fetch('http://localhost:4000/CreateForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: Name,
            startDate: Start,
            reminderDate: Reminder,
            coaches: selectedCoaches
          }),
        });

        if (response.ok) {
          console.log('Form submitted successfully!');
          Setname("");
          Setstart("");
          Setreminder("");
          setSelectedCoaches([]);
          setShowSpinner(true);
          setTimeout(() => {
            navigate('/TrainingCalendar');
              document.title = 'Current Calendar';
            }, 1500);
        } else {
          console.error('Error submitting form:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        console.log("Done !\n")
      }
    }
  };

  const handleSaveChanges = () => {
    console.log("Changes saved successfully!");
    Setname("");
    Setstart("");
    Setreminder("");
    setSelectedCoaches([]);
  };

  return (
    <div>
      <div className='FormBox'>
        <div className='FormBorder'>
          <h2 className='Title'>Training Program Creation</h2>
          <form className='Forms'>
            <div className={`form-group ${nameError && 'has-error'}`}>
              <label>Name :</label>
              <input type="text" className="form-control" value={Name} id='name' onChange={(e) => Setname(e.target.value)} required />
              {nameError && <small className="text-danger">{nameError}</small>}
            </div>
            <div className={`form-group ${startError && 'has-error'}`}>
              <label>Start Date :</label>
              <input type="date" className="form-control" id='startDate' value={Start} onChange={(e) => Setstart(e.target.value)} required />
              {startError && <small className="text-danger">{startError}</small>}
            </div>
            <div className={`form-group ${reminderError && 'has-error'}`}>
              <label>End Date :</label>
              <input type="date" className="form-control" value={Reminder} id='reminderDate' onChange={(e) => Setreminder(e.target.value)} required />
              {reminderError && <small className="text-danger">{reminderError}</small>}
            </div>
            <label className='labelcoach' id='coachselect'>Select Coaches:</label>
            <CoachSelection selectedCoaches={selectedCoaches} setSelectedCoaches={setSelectedCoaches} />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id='clearbutton'>
                Cancel
              </button>
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title h5" id="exampleModalLabel">Are You Sure You Want To Cancel ? </h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span className="visually-hidden">Close</span></button>
                    </div>
                    <div className="modal-body">
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              {showSpinner && (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
              {!showSpinner && (
                <button type="button" className="btn btn-success" id='confirmbutton' onClick={handleSubmit}>Confirm</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TrainingProgramForm;
