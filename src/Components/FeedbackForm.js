import React, { useState,useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './Feedback.css';
import axios from 'axios';
import 'boosted/dist/css/boosted.min.css';

function FeedbackForm() {
    const [ratings, setRatings] = useState(Array(5).fill(null).map(() => ({ rating: null, hover: null })));
    const [events, setEvents] = useState([]); 

    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:4000/GetFormData');
    //             const eventData = response.data.map(event => ({
    //                 id: event._id, 
    //                 title: event.name, 

    //             }));
    //             setEvents(eventData);
    //         } catch (error) {
    //             console.error('Error fetching events data:', error);
    //         }
    //     };

    //     fetchEvents(); 
    // }, []);
    const handleRatingChange = (index, currentRating) => {
        const updatedRatings = [...ratings];
        updatedRatings[index] = { ...updatedRatings[index], rating: currentRating };
        setRatings(updatedRatings);
    };

    const handleHoverChange = (index, currentRating) => {
        const updatedRatings = [...ratings];
        updatedRatings[index] = { ...updatedRatings[index], hover: currentRating };
        setRatings(updatedRatings);
    };

    const questions = [
        "How do you rate the user interface?",
        "What do you think about the website's performance?",
        "How likely are you to recommend our service to others?",
        "What is your overall satisfaction with our product?",
        "How responsive is our customer support?"
    ];

    return (
        <div className="feedback-container">
         
            <div className="feedback-form">
            <h1 style={{textAlign:'center'}}>Feedback Form <br/> ( Formation Python ) </h1> 
                {ratings.map((star, index) => (
                    <div key={index} className="feedback-item">
                        <p>{questions[index]}</p>
                        <div className="stars-container">
                        {/* <select id="eventSelect" className="form-control" onChange={(e) => handleEventSelect(e.target.value)}>
                            <option value="">Select an event...</option>
                            {events.map(event => (
                                <option key={event.id} value={event.title}>{event.title}</option>

                            ))}
                        </select> */}
                            {[...Array(5)].map((_, starIndex) => {
                                const currentRating = starIndex + 1;
                                return (
                                    <label key={starIndex}>
                                        <input
                                            type='radio'
                                            name={`rating${index}`}
                                            value={currentRating}
                                            onClick={() => handleRatingChange(index, currentRating)}
                                        />
                                        <FaStar
                                            color={currentRating <= (star.hover || star.rating) ? 'orange' : 'black'}
                                            onMouseEnter={() => handleHoverChange(index, currentRating)}
                                            onMouseLeave={() => handleHoverChange(index, null)}
                                            className='star'
                                            size={30}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                        <p>{star.rating !== null ? `You rated: ${star.rating}` : null}</p>
                    </div>
                ))}

                <button type="button" className="btn btn-success" id='confirmbutton'>Confirm</button>

            </div>
        </div>
    );
}

export default FeedbackForm;
    