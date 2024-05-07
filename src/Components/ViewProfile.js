import React from 'react';
import { Link } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

const ViewProfile = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="text-center" style={{ maxWidth: '900px', width: '100%', padding: '0 15px' }}>
        <h2 className="mb-4">Profile <FaUserCircle size={30} className="mb-1" style={{ marginLeft: '10px' }} /></h2>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="username" className="form-label me-2" style={{ width: '150px', textAlign: 'right', marginBottom: '8px', lineHeight: '1.5' }}>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Emna chouchane"
            readOnly
            className="form-control rounded mb-3 flex-grow-1"
            style={{ maxWidth: '100%', width: 'unset' }}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="password" className="form-label me-2" style={{ width: '150px', textAlign: 'right', marginBottom: '8px', lineHeight: '1.5' }}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*****"
            readOnly
            className="form-control rounded mb-3 flex-grow-1"
            style={{ maxWidth: '100%', width: 'unset' }}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="role" className="form-label me-2" style={{ width: '150px', textAlign: 'right', marginBottom: '8px', lineHeight: '1.5' }}>Role:</label>
          <select
            id="role"
            name="role"
            defaultValue="Trainer"
            disabled
            className="form-select rounded mb-3 flex-grow-1"
            style={{ maxWidth: '100%', width: 'unset' }}
          >
            <option value="Trainer">Trainer</option>
            <option value="Coordinator">Coordinator</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="email" className="form-label me-2" style={{ width: '150px', textAlign: 'right', marginBottom: '8px', lineHeight: '1.5' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            readOnly
            className="form-control rounded mb-3 flex-grow-1"
            style={{ maxWidth: '100%', width: 'unset' }}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="phoneNumber" className="form-label me-2" style={{ width: '150px', textAlign: 'right', marginBottom: '8px', lineHeight: '1.5' }}>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+216 XX XXX XXX"
            readOnly
            className="form-control rounded mb-3 flex-grow-1"
            style={{ maxWidth: '100%', width: 'unset' }}
          />
        </div>
        <div className="mb-3 d-flex align-items-center justify-content-center">
          <Link to="/Editprofile" className="btn btn-primary me-3">Edit Profile <BsPencil size={20} className="ms-2" /></Link>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;