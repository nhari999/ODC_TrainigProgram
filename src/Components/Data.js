import React, { useState, useRef } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';

function CreateAccount() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/createCoordinator', formData);
      console.log('Coordinator created:', response.data.coordinator);
      // Reset form fields after successful submission
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        role: '',
      });
    } catch (error) {
      console.error('Error creating coordinator:', error);
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_7idk6gs', 'template_v7s5x6t', form.current, {
        publicKey: 'HdGNxqJw6cPK0hlNk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h2>Create Account</h2>
      <form  ref={form} onSubmit={sendEmail}  style={{ width: "140%", height:"60%", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
        <div style={{ marginBottom: "2%" }}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "2%", border: "1px solid #ccc", borderRadius: "4px", marginTop:"3%" }}
          />
        </div>
        <div style={{ marginBottom: "2%" }}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]{8}"
            placeholder="Format: 93314914"
            required
            style={{ width: "100%", padding: "2%", border: "1px solid #ccc", borderRadius: "4px", marginTop:"3%" }}
          />
        </div>
        <div style={{ marginBottom: "2%" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "2%", border: "1px solid #ccc", borderRadius: "4px" , marginTop:"3%" }}
          />
        </div>
        <div style={{ marginBottom: "2%" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength="8"
            required
            style={{ width: "100%", padding: "2%", border: "1px solid #ccc", borderRadius: "4px" , marginTop:"3%" }}
          />
        </div>
        <div style={{ marginBottom: "2%" }}>
          <p>Choose Role:</p>
          
            <input
              type="radio"
              name="role"
              value="expert"
              checked={formData.role === 'expert'}
              onChange={handleChange}
              style={{marginLeft:"5%" , transform: "scale(1.5)"  }}
            />
            <label  style={{marginLeft:"2%" , }}>
            Expert
          </label>
          
            <input
              type="radio"
              name="role"
              value="coordinator"
              checked={formData.role === 'coordinator'}
              onChange={handleChange}
              style={{marginLeft:"5%" , transform: "scale(1.5)"  }}
             
            />
            <label  style={{marginLeft:"2%" , }}>
            Coordinator
          </label>
        </div>
        <div style={{ marginTop: "11%" , marginLeft:"30%" }}>
          <button type="submit" style={{ padding: "4%", marginRight: "3%", border: "none", borderRadius: "4px", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" }}>Submit</button>
          <button type="button" onClick={() => setFormData({ fullName: '', phoneNumber: '', email: '', password: '', role: '' })} style={{ padding: "4%", border: "none", borderRadius: "4px", backgroundColor: "#dc3545", color: "#fff", cursor: "pointer" }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;
