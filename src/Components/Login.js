import './Login.css';
import 'boosted/dist/css/boosted.min.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate(); // Use useNavigate hook to get the navigate function
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);

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
        setLoginStatus('success');
        setTimeout(() => {
          navigate('/Statistic');
        }, 1000);      } else {
        setLoginStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginStatus('error');
    }
  }

  return (
    <div className="LoginContainer">
      {loginStatus === 'success' && (
        <div className="alert alert-success" role="alert">
          <span className="alert-icon"><span className="visually-hidden">Success</span></span>
          <p>Log In Successfull Welcome</p>
    
        </div>
      )}
      {loginStatus === 'error' && (
        <div className="alert alert-danger" role="alert">
          <span className="alert-icon"><span className="visually-hidden">Error</span></span>
          <p>Error Occured While Trying To Log In</p>
        </div>
      )}
      <div className="mb-3 row">
        <div className="col-sm-12">
          <label id='labelemail' className="col-form-label">Email :</label>
          <input type="email" className="form-control input-box" value={Email} onChange={(e) => setEmail(e.target.value)} id="inputEmail" required/>
        </div>
      </div>
      <div className="mb-3 row">
        <div className="col-sm-12">
          <label id='labelpassword' className="col-form-label">Password :</label>
          <input type="password" className="form-control input-box" value={Password} onChange={(e) => setPassword(e.target.value)} id="inputPassword" required/>
        </div>
      </div>
      <div className="mb-3 row">
        <div className="col-sm-12">
          <button className="btn btn-primary" type="button" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
  
}

export default Login;