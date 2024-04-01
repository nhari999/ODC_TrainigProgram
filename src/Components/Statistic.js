import { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { UserData } from "./Data";
import DonutChart from "./DonutChart";
import { UserDataMois } from "./DataMois";

function Statistic() {

  const [dateRange,setDateRange]= useState(true)

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Participant admis",
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
          {dateRange ? (
  <BarChart chartData={userData} />
) : (
  <BarChart chartData={userDataMois} />
)}

          </div>
          <div className="chart-container" style={{ width: "60%", borderRadius: "2%", backgroundColor: "#f0f0f0", marginLeft: "5%", marginTop: "2%" }}>
          {dateRange ? (
  <PieChart chartData={userData} />
) : (
  <PieChart chartData={userDataMois} />
)}

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
                <th scope="col">Nombre de participants admis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td style={{ width: "25%" }}>2020</td>
                <td>8.233</td>
                <td>6.355</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td style={{ width: "25%" }}>2019</td>
                <td>8.011</td>
                <td>5.255</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td style={{ width: "25%" }}>2018</td>
                <td>7.547</td>
                <td>3.866</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td style={{ width: "25%" }}>2017</td>
                <td>6.959</td>
                <td>3.898</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td style={{ width: "25%" }}>2016</td>
                <td>6.025</td>
                <td>3.123</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2> Répartition des sexes de l'année en cours </h2>
        </div>
        <div className="chart-container" style={{ width: "50%" , marginLeft:"23%"}}>
        <DonutChart malePercentage={malePercentage} femalePercentage={femalePercentage} />
      </div>
      </div>
    </div>
  );
}

export default Statistic;
