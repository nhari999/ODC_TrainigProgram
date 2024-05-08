import { useState, useEffect } from 'react';
import { BsCheck,BsCheckCircle,BsPencil } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios'; // Import Axios
import { jwtDecode } from "jwt-decode";

const ViewProfile = () => {
  const [coordinator, setCoordinators] = useState([]);
  const accessToken = localStorage.getItem('token')
  const decoded = jwtDecode(accessToken);
  const [userEmail, setUserEmail] = useState("");
  const [newUserData, setNewUserData] = useState({
    username: '',
    password: '',
    phoneNumber: 0,
    email: '',
    role: ''
  });
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    setUserEmail(decoded.Email);
  }, [decoded.Email]);

  useEffect(() => {
    async function fetchCoordinators() {
      try {
        const response = await axios.get(`http://localhost:4000/coordinators?userEmail=${userEmail}`);
        const data = response.data;
        console.log("Fetched coordinators:", data);
        setCoordinators(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCoordinators();
  }, [userEmail]);

  useEffect(() => {
    if (coordinator) {
      setNewUserData({
        username: coordinator.Username || '',
        password: coordinator.Password || '',
        phoneNumber: coordinator.phoneNumber || 0,
        email: coordinator.Email || '',
        role: coordinator.Role || ''
      });
    }
  }, [coordinator]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleClick = async () => {
    try {
      const response = await axios.patch('http://localhost:4000/updatecoordinator', {
        newUserData: newUserData,
        userEmail: userEmail
      });
      console.log("user updated", response.data);
      setNotification("Les modifications sont effectuées avec succès");
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', }}>
      <div className="text-center" style={{ maxWidth: '900px', width: '100%', padding: '0 15px' }}>
        <h2 className="mb-4"> Modifier le Profile <FaUserCircle size={30} className="mb-1" style={{ marginLeft: '10px' }} /></h2>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="username" className="form-label me-2" style={{ width: '150px', textAlign: 'right', marginBottom: '8px', lineHeight: '1.5', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}> Nom d'utilisateur:
 </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder={coordinator.Username}
            onChange={handleChange}
            className="form-control rounded mb-3 flex-grow-1"
            style={{ maxWidth: '100%', width: 'unset', color: 'black' }}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="password" className="form-label me-2" style={{ width: '150px', textAlign: 'right', marginBottom: '8px', lineHeight: '1.5', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>Mot de passe:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder={coordinator.Password}
            onChange={handleChange}
            className="form-control rounded mb-3 flex-grow-1"
            style={{ maxWidth: '100%', width: 'unset' }}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="role" className="form-label me-2" style={{ width: '150px', textAlign: 'right', marginBottom: '8px', lineHeight: '1.5', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>Role:</label>
          <select
            id="role"
            name="role"
            onChange={handleChange}
            className="form-select rounded mb-3 flex-grow-1"
            style={{ maxWidth: '100%', width: 'unset' }}
            placeholder={coordinator.Role}
          >
            <option value="Trainer">Expert</option>
            <option value="Coordinator">Coordinateur</option>
            <option value="Admin">Admin</option>
            <option value="User">Partcipant</option>
          </select>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="email" className="form-label me-2" style={{ width: '150px', textAlign: 'right', marginBottom: '8px', lineHeight: '1.5', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>Adresse mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder={coordinator.Email}
            className="form-control rounded mb-3 flex-grow-1"
            style={{ maxWidth: '100%', width: 'unset' }}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="phoneNumber" className="form-label me-2" style={{ width: '150px', textAlign: 'right', marginBottom: '8px', lineHeight: '1.5', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}> Téléphone:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            onChange={handleChange}
            placeholder={coordinator.phoneNumber}
            className="form-control rounded mb-3 flex-grow-1"
            style={{ maxWidth: '100%', width: 'unset' }}
          />
        </div>


        <div className="mb-3 d-flex align-items-center justify-content-center">
          <button className="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#exampleModal"> Sauvegarder
             <BsCheck size={20} className="ms-2" />
          </button>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog">
              <div className="modal-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="modal-header" >
                <h1 className="modal-title h6 mb-0" id="exampleModalLabel" >Enregistrement réussi <BsCheckCircle size={22} className="ms-2" style={{ color: 'green' }} /></h1>

                </div>
                <div className="modal-body">
                  <p>{notification}</p>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal"> Close </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;