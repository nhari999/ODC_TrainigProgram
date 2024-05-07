import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TablePerTrainer = () => {
  const navigate = useNavigate();
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/TrainersStatistic');
        setTrainers(response.data.trainers); // Corrected: response.data.trainers instead of response.data.TrainersStatistic
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleStatisticsClick = () => {
    navigate('/TablePerProgram');
  };

  return (
    <div className="table-responsive" style={{ marginTop: "6%", width: "50%" }}>
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{ width: "80%" }}>
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={handleStatisticsClick} checked />
        <label className="btn btn-toggle" htmlFor="btnradio1">Statistic par program</label>
        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"  checked />
        <label className="btn btn-toggle" htmlFor="btnradio2">Statistic par Expert</label>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name of Trainer</th>
            <th>Email</th>
            <th>Number of Training Programs</th>
            <th>Programs</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer, index) => (
            <tr key={index}>
              <td><img src={process.env.PUBLIC_URL + "/asset/avatar.png"} style={{ width: "8%",  borderRadius: "50%" }} /> {trainer.name}</td>
              <td>{trainer.email}</td>
              <td>{trainer.numTrainingPrograms}</td>
              <td>
                <ul>
                  {trainer.programs.map((program, idx) => (
                    <li key={idx}>{program}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePerTrainer;
