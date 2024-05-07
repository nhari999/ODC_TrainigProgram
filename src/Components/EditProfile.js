import React, { useState } from 'react';
import { BsPencil, BsCheck } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

const EditProfile = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [password, setPassword] = useState('');

  const handleSaveChanges = () => {
    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      alert('Password must contain at least 8 characters including letters and a special character.');
      return;
    }

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 90000);
  };

  const validatePassword = (password) => {
    // Updated regex to require a minimum of 5 characters with at least one letter and one digit
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$_!/+%*#?&]{5,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="text-center" style={{ maxWidth: '900px', width: '100%', padding: '0 15px' }}>
        <h2 className="mb-4">Edit Profile <FaUserCircle size={30} className="mb-1" style={{ marginLeft: '10px' }} /></h2>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="username" className="form-label me-2" style={{ width: '150px', textAlign: 'right', marginBottom: '8px', lineHeight: '1.5' }}>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Emna chouchane"
            readOnly={isSaved}
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
            placeholder="123456"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            readOnly={isSaved}
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
            disabled={isSaved}
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
            readOnly={isSaved}
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
            readOnly={isSaved}
            className="form-control rounded mb-3 flex-grow-1"
            style={{ maxWidth: '100%', width: 'unset' }}
          />
        </div>
        <div className="mb-3 d-flex align-items-center justify-content-center">
          <button type="button" className="btn btn-primary me-3" onClick={handleSaveChanges}>
            Save Changes <BsCheck size={20} className="ms-2" />
          </button>
          {isSaved && (
            <div className="alert alert-success alert-dismissible fade show" role="alert" style={{ position: 'relative', border: 'none', backgroundColor: 'white', color: 'green', paddingTop: '30px' }}>
              Changes Saved Successfully! <span role="img" aria-label="tick emoji">✅</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;