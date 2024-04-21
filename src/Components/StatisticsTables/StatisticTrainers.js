import React from 'react';
import { useNavigate } from 'react-router-dom';


const TablePerTrainer = ({ Trainers }) => {
    const navigate = useNavigate();

    const handleStatisticsClick = () => {
      navigate('/TablePerProgram');
    };
  return (
    <div className="table-responsive" style={{ marginTop: "6%" , width:"50%"}}>
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{ width: "80%" }}>
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={handleStatisticsClick} checked />
        <label className="btn btn-toggle" htmlFor="btnradio1">Année</label>
        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"  checked />
        <label className="btn btn-toggle" htmlFor="btnradio2">Mois</label>
      </div>
      <table className="table table-hover" >
        <thead>
          <tr>
            <th>Name of Trainer</th>
            <th>Number of Training Programs</th>
            <th>Programs</th>
          </tr>
        </thead>
        <tbody>
          {Trainers.map((trainer, index) => (
            <tr key={index}>
              <td>{trainer.name}</td>
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
