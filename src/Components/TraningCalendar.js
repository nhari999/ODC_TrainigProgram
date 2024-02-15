import React from 'react'
import {Calendar, dayjsLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from 'dayjs'
import '../calendarStyle.css'

function TraningCalendar() {
    const event = [
        {
            start :dayjs("2024-02-13T:12:00:00").toDate(), 
            end : dayjs("2024-02-13T:19:00:00").toDate(),
            title: "Formation Python",
            data:{
                x:10
            }
        },
        {
            start :dayjs("2024-02-20T:12:00:00").toDate(), 
            end : dayjs("2024-02-20T:19:00:00").toDate(),
            title: "Formation JavaScript",
            data:{
                x:15
            }
        },
        {
            start :dayjs("2024-02-16T:12:00:00").toDate(), 
            end : dayjs("2024-02-16T:19:00:00").toDate(),
            title: "Introduction Cyber Sécurité",
            data:{
                x:20
            }
        }
    ]
    const localizer = dayjsLocalizer(dayjs)
    const components = {
        event:props=>{
        const {data}=props.event;
            if (data.x>10){
                return <div style={{background:'green'}}>
                    {props.title}
                </div>
            }else{
                return <div style={{background:'red'}}>
                {props.title}
            </div>
            }
            console.log(props);
            return <div>Test</div>
        }
    }
    return (
        <div style={{
            height:'95vh',
            width:"70vw"
        }}>
            
            <Calendar
                localizer = {localizer}
                events={event}
                // components={components}
            />
        </div>
  )
}

export default TraningCalendar