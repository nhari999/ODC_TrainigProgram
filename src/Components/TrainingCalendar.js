import React, { useState } from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from 'dayjs'
import '../calendarStyle.css'

function TrainingCalendar() {
    const [selectedEventDescription, setSelectedEventDescription] = useState(null);

    const events = [
        {
            id: 1,
            start: dayjs("2024-03-13T12:00:00").toDate(),
            end: dayjs("2024-03-13T19:00:00").toDate(),
            title: "Formation Python",
            description: "This is a Python training session."
        },
        {
            id: 2,
            start: dayjs("2024-03-20T12:00:00").toDate(),
            end: dayjs("2024-03-20T19:00:00").toDate(),
            title: "Formation JavaScript",
            description: "This is a JavaScript training session."
        },
        {
            id: 3,
            start: dayjs("2024-03-16T12:00:00").toDate(),
            end: dayjs("2024-03-16T19:00:00").toDate(),
            title: "Introduction Cyber Sécurité",
            description: "This is an introduction to Cyber Security."
        }
    ];

    const localizer = dayjsLocalizer(dayjs);

    const components = {
        event: props => {
            const { data } = props.event;
            const color = data && data.x > 10 ? 'green' : 'red';
            return (
                <div
                    style={{ whiteSpace: 'normal'}}
                    onClick={() => setSelectedEventDescription(props.event.id === selectedEventDescription?.id ? props.event : null)}
                >
                    <div style={{fontWeight:'bold'}}>{props.event.title}</div>
                    {selectedEventDescription?.id === props.event.id && (
                        <div>{selectedEventDescription.description}</div>
                    )}
                </div>
            );
        }
    }

    const handleSelectEvent = event => {
        setSelectedEventDescription(event);
    };

    return (
        <div style={{
            height: '95vh',
            width: "70vw",
            paddingTop: '90px',
            paddingBottom: '20px'
        }}>
            <Calendar
                localizer={localizer}
                events={events}
                components={components}
                onSelectEvent={handleSelectEvent}
            />
        </div>
    )
}

export default TrainingCalendar;
