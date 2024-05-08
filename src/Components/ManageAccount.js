import React, { useState, useEffect } from 'react';
import 'boosted/dist/css/boosted.min.css';
import axios from 'axios'; 
import { NavLink } from 'react-router-dom';
import { BiPlus, BiSearch} from 'react-icons/bi';



function ManageAccount() {
  const [coordinators, setCoordinators] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchCoordinators();
  }, []);

  const fetchCoordinators = async () => {
    try {
      const response = await axios.get('http://localhost:4000/coordinators');
      const data = response.data;
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
      fetchCoordinators();
    } catch (error) {
      console.error('Error deleting coordinator:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredCoordinators = coordinators.filter(coordinator => {
    if (searchQuery && coordinator && coordinator.fullName) {
      const query = searchQuery.toLowerCase();
      const fullName = coordinator.fullName.toLowerCase();
      return fullName.startsWith(query);
    }
    return true;
  });

  return (
    <div style={{ marginTop: "5%", width: "70%", marginLeft: " 12%" }}>
      <div>
        <h6 style={{ marginTop: "10%", fontSize: '4rem' }}>Gérer les comptes</h6>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3%" }}>
        <button onClick={() => window.location.href = "/CreateAccount"} type="button" className="btn btn-primary btn-lg" style={{ display: "flex", justifyContent: "center", borderRadius: "4%", height: "70%", width: "16%" }}>
      <BiPlus size={24} style={{ marginRight: "5px",color: "white" }} />
      <span style={{ fontSize: "120%", color: "white" }}> Ajouter </span>
    </button>

    <form className="d-flex navbar-item ms-3" role="search" style={{ height: "90%" }}>
      <div className="input-group">
        <input 
          className="form-control me-2" 
          type="search" 
          placeholder="Rechercher" 
          aria-label="Search" 
          style={{ borderRadius: "4%", paddingLeft: "38px" }} 
          onChange={handleSearch} 
        />
        <span className="input-group-text bg-transparent border-0" style={{ borderRight: "none" }}>
          <BiSearch size={20} />
        </span>
      </div>
    </form>
          
        </div>
      </div>
      <div className="table-responsive" style={{ marginTop: "2%", width: "100%" }}>
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
            {filteredCoordinators.map((coordinator) => (
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
                <td><button type="button" className="btn btn-outline-secondary" style={{ borderRadius: "8%" }}> <NavLink to="/EditProfile" className="dropdown-item">Modifier</NavLink></button></td>
                <td><button type="button" className="btn btn-danger" style={{ borderRadius: "8%" }} onClick={() => deleteCoordinator(coordinator._id)}>Supprimer</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageAccount;
