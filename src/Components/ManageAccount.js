import React, { useState, useEffect } from 'react';
import 'boosted/dist/css/boosted.min.css';

import axios from 'axios'; // Import Axios
import { NavLink } from 'react-router-dom';


function ManageAccount() {
  const [coordinators, setCoordinators] = useState([]);

  useEffect(() => {
    fetchCoordinators();
  }, []);

  const fetchCoordinators = async () => {
    try {
      const response = await axios.get('http://localhost:4000/coordinators'); // Use axios to make the GET request
      const data = response.data; // Access the data property of the response object
      console.log("Fetched coordinators:", data.coordinators);
      setCoordinators(data.coordinators);
    } catch (error) {
      console.error(error);
    }
  };


  const deleteCoordinator = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/deleteCoordinator/${id}`);
      console.log('Coordinator deleted:', response.data.coordinator);
      // After successful deletion, fetch coordinators again to update the list
      fetchCoordinators();
    } catch (error) {
      console.error('Error deleting coordinator:', error);
    }
  };
  

  return (
    <div style={{ width: "70%", marginLeft: " 12%" }}>
      <div>
        <h6 style={{ marginTop: "10%", fontSize: '4rem' }}>Manage Accounts</h6>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3%" }}>


          <button onClick={() => window.location.href = "/CreateAccount"} type="button" className="btn btn-primary btn-lg" style={{ display: "flex", justifyContent: "center", borderRadius: "4%", height: "70%", width: "16%" }}>
            <img src={process.env.PUBLIC_URL + "/asset/add.png"} alt="Orange" style={{ width: "6%" }} />
            <text style={{ fontSize: "120%", color: "white" }} > Add</text>
          </button>
          <form className="d-flex navbar-item ms-3" role="search" style={{ height: "90%" }}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: "4%" }} />
            <button className="btn btn-primary" type="submit" style={{ height: "90%", borderRadius: "4%" }}>Search</button>
          </form>

        </div>
      </div>
      <div className="table-responsive" style={{ width: "100%" }}>
        <table className="table table-sm table-hover has-checkbox" >


          <thead>
            <tr>
              <th scope="col">
                <div className="form-check mb-0">
                  <label className="form-check-label" htmlFor="customCheck">
                    <span className="visually-hidden">Select all</span>
                  </label>
                </div>
              </th>
              <th scope="col">Nom</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>

          {coordinators.map((coordinator) => (
  <tr key={coordinator._id}>
    <td>
      <div className="form-check mb-0">
        <label className="form-check-label" htmlFor={`customCheck${coordinator._id}`}>
          <span className="visually-hidden">Select row {coordinator.fullName}</span>
        </label>
      </div>
    </td>
    <td>
      <img src={process.env.PUBLIC_URL + "/asset/avatar.png"} style={{ width: "6%", marginTop: "0%", borderRadius: "50%" }} />
      {coordinator.fullName}
    </td>
    <td>{coordinator.email}</td>
    <td><button type="button" className="btn btn-outline-secondary" style={{ borderRadius: "8%" }}> <NavLink to="/EditProfile" className="dropdown-item">Modify</NavLink></button></td>
    <td><button type="button" className="btn btn-danger" style={{ borderRadius: "8%" }} onClick={() => deleteCoordinator(coordinator._id)}>Delete</button></td>
  </tr>
))}

</tbody>


        </table>
      </div>
    </div>
  );
}

export default ManageAccount;