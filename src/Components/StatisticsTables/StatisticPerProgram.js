import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TablePerProgram = () => {
  const navigate = useNavigate();
  const [programs, setPrograms] = useState([]);

  const handleStatisticsClick = () => {
    navigate('/TablePerTrainer');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/programsStatistic');
        setPrograms(response.data.programsData); // Corrected: response.data.programsData instead of response.data.programsStatistic
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-responsive" style={{ marginTop: "6%", width: "50%" }}>
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{ width: "80%" }}>
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked />
        <label className="btn btn-toggle" htmlFor="btnradio1">Statistic par Program</label>
        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={handleStatisticsClick} />
        <label className="btn btn-toggle" htmlFor="btnradio2">Statistic par expert</label>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name of Program</th>
            <th>Start/End Date</th>
            <th>Average Score</th>
            <th>Number of Participants</th>
            <th>Participants with Score > Average</th>
            <th>Satisfaction Rate</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program, index) => (
            <tr key={index}>
              <td>{program.name}</td>
              <td>{program.startDate} - {program.endDate}</td>
              <td>{program.averageScore}</td>
              <td>{program.numParticipants}</td>
              <td>{program.numParticipantsAboveAverage}</td>
              <td>{program.satisfactionRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePerProgram;
