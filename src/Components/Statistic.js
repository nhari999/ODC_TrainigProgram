import { useState , useEffect} from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import DonutChart from "./DonutChart";
import axios from "axios";
import { NavLink } from "react-router-dom";



function Statistic() {
  const [UserData, setUserData] = useState([]);
  const [userDataData, setUserDataData] = useState({
    labels: [],
    datasets: [
      {
        label: "Participant qui possede une note > valeur moyenne",
        data: [],
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
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/statistics');
        // Format the statistics data as an array of objects
        setUserData(response.data.statistics);
        console.log('Fetched data:', response.data.statistics);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount
  
  useEffect(() => {
    setUserDataData({
      ...userDataData,
      labels: UserData.map((data) => data.year), // Assuming 'year' is your label field
      datasets: [
        {
          ...userDataData.datasets[0],
          data: UserData.map((data) => data.userGain),
        },
      ],
    });
  }, [UserData]); // Run this effect whenever UserData changes
  
  

  const [UserDataMois, setUserDataMois] = useState([]);
  const [userDataDataMois, setUserDataDataMois] = useState({
    labels: [],
    datasets: [
      {
        label: "Participant refusé",
        data: [],
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
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/statisticsMonth');
        // Format the statistics data as an array of objects
        setUserDataMois(response.data.statisticsMonth);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    if (UserDataMois.length > 0) {
      setUserDataDataMois({
        ...userDataDataMois,
        labels: UserDataMois.map((data) => data.mois),
        datasets: [
          {
            ...userDataDataMois.datasets[0],
            data: UserDataMois.map((data) => data.userGain),
          },
        ],
      });
    }
  }, [UserDataMois]);
  

  const [dateRange,setDateRange]= useState(true)
  
  
  const [userDataAge, setUserDataAge] = useState([]);
  const [userDataDataAge, setUserDataDataAge] = useState({
    labels: ["14-18", "18-25", "+25"],
    datasets: [
      {
        label: "Age Distribution of Participants",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  
  const [malePercentage, setMalePercentage] = useState(60);
  const [femalePercentage, setFemalePercentage] = useState(40);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/participants');
        setUserDataAge(response.data.participants);
        console.log('Participant data:', response.data.participants);
  
        // Count the number of participants in each age range
        const count14to18 = response.data.participants.filter(participant => {
          const age = calculateAge(participant.dateofbirth);
          return age >= 14 && age <= 18;
        }).length;
  
        const count18to25 = response.data.participants.filter(participant => {
          const age = calculateAge(participant.dateofbirth);
          return age > 18 && age <= 25;
        }).length;
  
        const countOver25 = response.data.participants.filter(participant => {
          const age = calculateAge(participant.dateofbirth);
          return age > 25;
        }).length;
  // Calculate male and female percentages
  const { malePercentage, femalePercentage } = calculateGenderPercentage(response.data.participants);
  setMalePercentage(malePercentage);
  setFemalePercentage(femalePercentage);
        // Update the state with the counts
        setUserDataDataAge({
          ...userDataDataAge,
          datasets: [
            {
              ...userDataDataAge.datasets[0],
              data: [count14to18, count18to25, countOver25],
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  // Function to calculate age from date of birth
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  
  
  const calculateGenderPercentage = (participants) => {
    // Count the number of male and female participants
    const maleCount = participants.filter(participant => participant.gender === 'Male').length;
    const femaleCount = participants.filter(participant => participant.gender === 'Female').length;
  
    // Calculate the total number of participants
    const totalCount = maleCount + femaleCount;
  
    // Calculate the percentage of male and female participants
    const malePercentage = (maleCount / totalCount) * 100;
    const femalePercentage = (femaleCount / totalCount) * 100;
  
    return { malePercentage, femalePercentage };
  };
  
  return (
    <div className="App" style={{ marginTop: "3%", marginLeft: "15%" }}>


      <div className="chartsContainer" style={{ marginTop: "2%", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
        <div className="chart-container" style={{ width: "105%", borderRadius: "2%", backgroundColor: "#f0f0f0", }}>
          <div className="LineChart" style={{ width: 800, height: 400, margin: "20px auto" }}>
          {dateRange ? (
  <LineChart chartData={userDataData} />
) : (
  <LineChart chartData={userDataDataMois} />
)}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div className="chart-container" style={{ width: "60%", borderRadius: "2%", backgroundColor: "#f0f0f0", marginTop: "2%" }}>

  <BarChart chartData={userDataDataAge} />



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
  {UserData.sort((a, b) => a.year - b.year).map((data, index) => (
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
          <NavLink to="/TablePerProgram" className="btn btn-primary" style={{marginTop:"5%", marginLeft:"20%" }}>
  View Statistic Per Trainer&Program
</NavLink>

        </div>
        
    </div> 
   
 
    </div>
  );
}
export default Statistic;
