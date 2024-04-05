import './Login.css';
import 'boosted/dist/css/boosted.min.css';
import React, { useState } from 'react';

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email,
          Password,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.status === "ok") {
        localStorage.setItem('token', data.User);
        alert('Login successful');
        // window.location.href = '/dashboard'
      } else {
        alert('Please check your username and password');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  }
  
  

  return (
    <div className="LoginContainer">
      <div className="mb-3 row">
        <label id='labelemail' className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" value={Email} onChange={(e) => setEmail(e.target.value)} id="inputEmail" />
        </div>
      </div>
      <div className="mb-3 row">
        <label id='labelpassword' className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" value={Password} onChange={(e) => setPassword(e.target.value)} id="inputPassword" />
        </div>
        <button className="btn btn-primary" type="button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
