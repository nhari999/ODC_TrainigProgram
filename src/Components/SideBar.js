import 'boosted/dist/css/boosted.min.css';
import { useEffect } from 'react';
import { Offcanvas } from 'boosted';
import { NavLink } from 'react-router-dom';
import ViewProfile from './ViewProfile';
function SideBar() {
  useEffect(() => {
    var offcanvasElement = document.getElementById('offcanvasDarkNavbar');
    var offcanvas = new Offcanvas(offcanvasElement);
  }, []);

  return (
    <nav className="navbar fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="header-icon" style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="navbar-toggler ms-0 me-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="dropdown" style={{ marginLeft: "1550px", marginTop: "18px" }}>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <svg fill="currentColor" width="2em" height="2em" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
                <path d="M656.7 422.409a229.96 229.96 0 0 1-315.39.008A224.95 224.95 0 0 0 224.064 615H224v210a100 100 0 0 0 100 100h450V620a224.94 224.94 0 0 0-117.3-197.591M679 255A180 180 0 1 1 499 75a180 180 0 0 1 180 180" />
              </svg>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li> View Profile</li> 
              <NavLink to="/ViewProfile" className="dropdown-item">View Profile</NavLink>
              <li>Log Out</li>
            </ul>
          </div>
        </div>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <img src={process.env.PUBLIC_URL + "/asset/orange.png"} alt="Orange" style={{ width: "130px", height: "130px", marginTop: "20px" }} />
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Close"></button>
          </div>
          <div className="offcanvas-body" style={{ marginTop: "70px" }}>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item" style={{ marginTop: "5px", marginBottom: "5px" }}>
                <div className='item-navbar' style={{ display: "flex", justifyContent: "space-between" }}>
                  <NavLink to="/Statistics" className="nav-link">Statistics</NavLink>
                  <img src={process.env.PUBLIC_URL + "/asset/statistics.png"} alt="Orange" style={{ width: "11%", height: "10%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
