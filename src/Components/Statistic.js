import { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { UserData } from "./Data";
import DonutChart from "./DonutChart";
import { UserDataMois } from "./DataMois";
import { UserDataForAge }  from "./DataForAge";
import DataForTableStat from "./DataForTableStat"

function Statistic() {

  const [dateRange,setDateRange]= useState(true)

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Participant qui possede une note > valeur moyenne",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  

  const [userData2, setUserData2] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Participant admis",
        data: UserData.map((data) => data.percentage),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [userDataMois, setUserDataMois] = useState({
    labels: UserDataMois.map((data) => data.year),
    datasets: [
      {
        label: "Participant refusé",
        data: UserDataMois.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [userDataMois2, setUserDataMois2] = useState({
    labels: UserDataMois.map((data) => data.year),
    datasets: [
      {
        label: "Participant refusé",
        data: UserDataMois.map((data) => data.percentage),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [userDataAge, setuserDataAge] = useState({
    labels: UserDataForAge.map((data) => data.AgeRange),
    datasets: [
      {
        label: "Participant refusé",
        data: UserDataForAge.map((data) => data.nombreAdmis),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


  const malePercentage = 60;
  const femalePercentage = 40;

  return (
    <div className="App" style={{ marginTop: "3%", marginLeft: "15%" }}>
      <div className="chartsContainer" style={{ marginTop: "2%", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
        <div className="chart-container" style={{ width: "105%", borderRadius: "2%", backgroundColor: "#f0f0f0", }}>
          <div className="LineChart" style={{ width: 800, height: 400, margin: "20px auto" }}>
          {dateRange ? (
  <LineChart chartData={userData} />
) : (
  <LineChart chartData={userDataMois} />
)}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div className="chart-container" style={{ width: "60%", borderRadius: "2%", backgroundColor: "#f0f0f0", marginTop: "2%" }}>

  <BarChart chartData={userDataAge} />


<div className="dropdown" style={{marginLeft:"32%" , marginTop:"6%"}}>
  <button className="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Année
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">2022</a></li>
    <li><a className="dropdown-item" href="#">2021</a></li>
    <li><a className="dropdown-item" href="#"> 2020</a></li>
    <li><a className="dropdown-item" href="#"> 2019</a></li>
  </ul>
</div>

          </div>
          <div className="chart-container" style={{ width: "60%", borderRadius: "2%", backgroundColor: "#f0f0f0", marginLeft: "5%", marginTop: "2%" }}>
          <div >
          <h2 > Répartition des sexes  </h2>
        </div>
        <div className="chart-container" style={{ width: "50%" , marginLeft:"23%"}}>
        <DonutChart malePercentage={malePercentage} femalePercentage={femalePercentage} />
      </div>
      <div className="dropdown" style={{marginLeft:"32%" , marginTop:"6%"}}>
  <button className="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Année
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">2022</a></li>
    <li><a className="dropdown-item" href="#">2021</a></li>
    <li><a className="dropdown-item" href="#"> 2020</a></li>
    <li><a className="dropdown-item" href="#"> 2019</a></li>
  </ul>
</div>

          </div>
        </div>
      </div>
      <div className="statisticContainer" style={{ width: "32em", borderRadius: "2%", backgroundColor: "#f0f0f0", marginLeft: "5%", marginTop: "2%" }}>
        <div style={{ marginTop: "2%", width: "100%" }}>
          <h3>Voir les statistiques par</h3>
        </div>
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{ width: "80%" }}>
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={() => setDateRange((curr) => curr= true)} checked />
          <label className="btn btn-toggle" htmlFor="btnradio1">Année</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"  onClick={() => setDateRange((curr) => curr= false)}/>
          <label className="btn btn-toggle" htmlFor="btnradio2">Mois</label>

        </div>
        <div>
  <table className="table" style={{ width: "100%", marginTop: "5%" }}>
    <caption className="visually-hidden">Boosted tables basic look</caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Année</th>
        <th scope="col">Nombre de participants</th>
        <th scope="col">Note moyenne</th>
      </tr>
    </thead>
    <tbody>
      {DataForTableStat.map((data, index) => (
        <tr key={index}>
          <th scope="row"></th>
          <td style={{ width: "25%" }}>{data.year}</td>
          <td>{data.participants}</td>
          <td>{data.averageScore}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div>
          <h1> General statistic for ODC Training Programs</h1>
          <img src={process.env.PUBLIC_URL + "/asset/statistic.png"} alt="statistic" style={{width:"40%" , marginLeft:"30%"}} />
        </div>
        
      </div>
    </div>
  );
}

export default Statistic;
