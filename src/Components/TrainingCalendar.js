import React, { useState } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import '../calendarStyle.css';
import Description from './Description';
import { NavLink } from 'react-router-dom'; 

function TrainingCalendar() {
    const [selectedEventDescription, setSelectedEventDescription] = useState(null);
    const [showBox, setShowBox] = useState(false); 

    const events = [
        {
            id: 1,
            start: dayjs("2024-04-13T12:00:00").toDate(),
            end: dayjs("2024-04-13T19:00:00").toDate(),
            title: "Formation Python",
            description: "This is a Python training session.",
            coordinator: "Asma amdouni"
        },
        {
            id: 2,
            start: dayjs("2024-04-20T12:00:00").toDate(),
            end: dayjs("2024-04-20T19:00:00").toDate(),
            title: "Formation JavaScript",
            description: "This is a JavaScript training session.",
            coordinator: "Asma amdouni"
        },
        {
            id: 3,
            start: dayjs("2024-04-16T12:00:00").toDate(),
            end: dayjs("2024-04-16T19:00:00").toDate(),
            title: "Introduction Cyber Sécurité",
            description: "This is an introduction to Cyber Security.",
            coordinator: "Asma amdouni"
        }
    ];

    const localizer = dayjsLocalizer(dayjs);

    const handleCloseDescription = () => {
        setShowBox(false);
    };

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
                events={events}
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
