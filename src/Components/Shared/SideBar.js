import 'boosted/dist/css/boosted.min.css';
import { useEffect } from 'react';
import { Offcanvas } from 'boosted';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';




function SideBar() {

  useEffect(() => {

    var offcanvasElement = document.getElementById('offcanvasDarkNavbar');
    var offcanvas = new Offcanvas(offcanvasElement);
  }, []);

  const [expanded,setExpanded]= useState(true)

  return (
    <nav className="navbar fixed-top" data-bs-theme="dark"   >
      <div className="container-fluid" >



          <div className="dropdown" style={{ marginLeft: "90%", marginTop: "1%" }}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <svg fill="currentColor" width="2em" height="2em" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
                <path d="M656.7 422.409a229.96 229.96 0 0 1-315.39.008A224.95 224.95 0 0 0 224.064 615H224v210a100 100 0 0 0 100 100h450V620a224.94 224.94 0 0 0-117.3-197.591M679 255A180 180 0 1 1 499 75a180 180 0 0 1 180 180" />
              </svg>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>     <NavLink to="/ViewProfile" className="dropdown-item">View Profile</NavLink></li>
              <li><a className="dropdown-item" href="#">Log Out</a></li>
            </ul>
          </div>
        </div>

        <div className="offcanvas offcanvas-start show" style={expanded ? {width:"18%"} : { width: '5%' }}  tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" >
          <div className="offcanvas-header" style={{ justifyContent: "space-between" }}>
          {expanded ? (
  <img onClick={() => setExpanded((curr) => !curr)} src={process.env.PUBLIC_URL + "/asset/orange.png"} alt="Orange" style={{ width: "130px", height: "130px", marginTop: "20px" }} />
) : (
  null
)}


            {expanded ? (
    <img onClick={() => setExpanded((curr) => !curr)} src={process.env.PUBLIC_URL + "/asset/previous.png"} alt="Previous" />
  ) : (
    <img onClick={() => setExpanded((curr) => !curr)} src={process.env.PUBLIC_URL + "/asset/forward.png"} alt="Forward" />
  )}
          </div>
          <div className="offcanvas-body" style={{ marginTop: "70px" }} >
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item" style={{ marginTop: "5px", marginBottom: "5px" }}>
                <div className='item-navbar' style={{ display: "flex",  }}  onClick={() => window.location.href = "/Statistic"}>
                <img src={process.env.PUBLIC_URL + "/asset/statistics.png"} alt="Orange" style={ expanded ? { width:"11%",height:"10%"  } : { width:"120%",height:"120%"  }}  />
                {expanded ? (
  <NavLink to="/Statistic" className="nav-link">
    Statistics
  </NavLink>
) : (
  null
)}

                  
                </div>
              </li>
              <li className="nav-item" style={{ marginTop: "5px", marginBottom: "5px" }}>
                <div className='item-navbar' style={{ display: "flex" }} onClick={() => window.location.href = "/TrainingCalendar"} >
                <img src={process.env.PUBLIC_URL + "/asset/calendar-month.png"} alt="Orange" style={ expanded ? { width:"11%",height:"10%"  } : { width:"120%",height:"120%"  }} />
                {expanded ? (
  <NavLink to="/TrainingCalendar" className="nav-link">
    Calendar
  </NavLink>
) : (
  null
)}

                  
                </div>
              </li>
              <li className="nav-item" style={{ marginTop: "5px", marginBottom: "5px" }}>
                <div className='item-navbar' style={{ display: "flex",  }}  onClick={() => window.location.href = "/ManageAccount"}  >
                <img src={process.env.PUBLIC_URL + "/asset/administrator.png"} alt="Orange" style={ expanded ? { width:"11%",height:"10%"  } : { width:"120%",height:"120%"  }}/>
                {expanded ? (
  <NavLink to="/ManageAccount" className="nav-link">
    Manage Accounts
  </NavLink>
) : (
  null
)}

                  
                </div>
              </li>
              <li className="nav-item dropdown" style={{ marginTop: "5px", marginBottom: "5px",  }}>
                <div className='item-navbar' style={{ display: "flex",  width: "42%" }} >
                <div>
                  <img src={process.env.PUBLIC_URL + "/asset/template.png"} alt="Orange"  style={ expanded ? { width:"100%",height:"100%"  } : { width:"200%",height:"180%", marginLeft:"50%"  }}/>
                  </div>
                  <div className="nav-item dropdown3" style={{ }}>
                    
                  {expanded ? (
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Templates
  </a>
) : (
  null
)}


                  
                  <ul className="dropdown-menu" style={{ border: "none" }} >
                    <li><a className="dropdown-item" href="#">Email Template</a></li>
                    <li>

                    </li>
                    <li><a className="dropdown-item" href="#">Certificate Template</a></li>
                    <li>

                    </li>
                    <li><a className="dropdown-item" href="#">Evaluation Form Template</a></li>


                  </ul>
                  
                  </div>
                
                </div>
              </li>
            </ul>

          </div>
        </div>
      
    </nav>
  );
}

export default SideBar;
