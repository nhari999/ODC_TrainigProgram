import React, { useState, useEffect } from 'react';
import 'boosted/dist/css/boosted.min.css';
import "./Form.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

}

function AddSession() {
    const [Name, Setname] = useState("");
    const [Start, Setstart] = useState("");
    const [Reminder, Setreminder] = useState("");
    const [selectedCoaches, setSelectedCoaches] = useState([]);
    const [nameError, setNameError] = useState("");
    const [startError, setStartError] = useState("");
    const [reminderError, setReminderError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [events, setEvents] = useState([]); // State to hold events data
    const [selectedEvent, setSelectedEvent] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        // Fetch events data from the API endpoint
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:4000/GetFormData');
                const eventData = response.data.map(event => ({
                    id: event._id, // Use _id as id
                    title: event.name, // Use name as title

                }));
                setEvents(eventData);
            } catch (error) {
                console.error('Error fetching events data:', error);
            }
        };

        fetchEvents(); // Call the fetchEvents function when the component mounts
    }, []);
    const handleSubmit = async () => {

        setIsSubmitting(true);
        try {
            const response = await fetch('http://localhost:4000/CreateSession', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // name: Name,
                    Name:Name,
                    startDate: Start,
                    selectedEvent: selectedEvent,
                    // reminderDate: Reminder,
                    // coaches: selectedCoaches
                }),
            });

            if (response.ok) {
                console.log('Form submitted successfully!');

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

    };
    const handleEventSelect = (event) => {
        setSelectedEvent(event); // Update the selected event state
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
                    <h2 className='Title'>Session Creation</h2>
                    <form className='Forms'>
                        <select id="eventSelect" className="form-control" onChange={(e) => handleEventSelect(e.target.value)}>
                            <option value="">Select an event...</option>
                            {events.map(event => (
                                <option key={event.id} value={event.title}>{event.title}</option>

                            ))}
                        </select>
                        {console.log(selectedEvent)}
                        <div className={`form-group ${nameError && 'has-error'}`}>
                            <label>Title :</label>
                            <input type="text" className="form-control" value={Name} id='name' onChange={(e) => Setname(e.target.value)} required />
                            {nameError && <small className="text-danger">{nameError}</small>}
                        </div>
                        <div className={`form-group ${startError && 'has-error'}`}>
                            <label>Start Date :</label>
                            <input type="date" className="form-control" id='startDate' value={Start} onChange={(e) => Setstart(e.target.value)} required />
                            {startError && <small className="text-danger">{startError}</small>}
                        </div>
                        {/* <div className={`form-group ${reminderError && 'has-error'}`}>
              <label>End Date :</label>
              <input type="date" className="form-control" value={Reminder} id='reminderDate' onChange={(e) => Setreminder(e.target.value)} required />
              {reminderError && <small className="text-danger">{reminderError}</small>}
              </div> */}
                        {/* <label className='labelcoach' id='coachselect'>Select Coaches:</label> */}
                        {/* <CoachSelection selectedCoaches={selectedCoaches} setSelectedCoaches={setSelectedCoaches} /> */}
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
                        {/* <div className="event-dropdown">
            <label htmlFor="eventSelect">Select Event:</label>
            <select id="eventSelect" className="form-control" onChange={(e) => handleEventSelect(e.target.value)}>
              <option value="">Select an event...</option>
              {events.map(event => (
                <option key={event.id} value={event.title}>{event.title}</option>
              ))}
            </select>
          </div> */}
                    </form>
                </div>

            </div>
        </div>
    );
}

export default AddSession;