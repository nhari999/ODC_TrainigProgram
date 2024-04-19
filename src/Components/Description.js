// Description.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import 'boosted/dist/css/boosted.min.css';
import './description.css'
function Description({ event , onClose }) {
    const { title, description, start, end, coordinator } = event;

    return (
        <div className="description-container">
            <div className="event-details-box">
            {/* <button type="button" class="btn-close close-button" onClick={onClose} data-bs-dismiss="modal" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button> */}

                <button className="close-button" onClick={onClose}>X</button>
                <h2>{title}</h2>
                <p>{description}</p>
                <p><strong>Start Date:</strong> {start.toString()}</p>
                <p><strong>End Date:</strong> {end.toString()}</p>
                <p><strong>Coordinator:</strong> {coordinator}</p>
                {/* <NavLink to="/Statistics" style={{ color: '#ff7900' }}> Show x²² Details </NavLink> */}
            </div>
        </div>
    );
}

export default Description;
