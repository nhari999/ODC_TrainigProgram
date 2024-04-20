import React, { useState, useEffect } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import '../calendarStyle.css';
import Description from './Description';
import { NavLink } from 'react-router-dom'; 
import axios from 'axios'; // Import axios for making HTTP requests

function TrainingCalendar() {
    const [selectedEventDescription, setSelectedEventDescription] = useState(null);
    const [showBox, setShowBox] = useState(false); 
    const [events, setEvents] = useState([]); // State to hold events data

    const localizer = dayjsLocalizer(dayjs);

    const handleCloseDescription = () => {
        setShowBox(false);
    };

    const components = {
        event: props => {
            return (
                <div
                    style={{ whiteSpace: 'normal'}}
                    onClick={() => {
                        setSelectedEventDescription(props.event);
                        setShowBox(true);
                    }}
                >
                    <div style={{fontWeight:'bold',margin:'3px'}}>{props.event.title}</div>
                </div>
            );
        }
    };
    useEffect(() => {
        // Fetch events data from the API endpoint
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:4000/GetFormData');
                const eventData = response.data.map(event => ({
                    id: event._id, // Use _id as id
                    title: event.name, // Use name as title
                    start: new Date(event.startDate), // Convert startDate to Date object
                    end: new Date(event.reminderDate), // Convert reminderDate to Date object
                    coaches: `Coaches: ${event.coaches.join(', ')}`, // Concatenate coaches as description
                }));
                setEvents(eventData);
            } catch (error) {
                console.error('Error fetching events data:', error);
            }
        };

        fetchEvents(); // Call the fetchEvents function when the component mounts
    }, []); // Empty dependency array ensures useEffect runs only once after initial render

    return (
        <div style={{
            height: '105vh',
            width: "70vw",
            paddingTop: '90px',
            paddingBottom: '20px',
            position: 'relative', 
        }}>

            <NavLink to="/TrainingProgramForm">
                <button 
                    className="addButton" 
                    onClick={() => setShowBox(true)} 
                >
                    +
                </button>
            </NavLink>

            
            {showBox && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backdropFilter: 'blur(8px)', 
                    zIndex: 9998, 
                }}></div>
            )}

            <Calendar
                localizer={localizer}
                events={events} // Pass events data to the Calendar component
                onSelectEvent={event => {
                    setSelectedEventDescription(event);
                    setShowBox(true);
                }}
            />

            {showBox && selectedEventDescription && (
                <Description event={selectedEventDescription} onClose={handleCloseDescription} />
            )}
        </div>
    );
}

export default TrainingCalendar;


