import React from 'react';
import 'boosted/dist/css/boosted.min.css';

function ManageAccount() {
  return (
    <div style={{width:"70%" , marginLeft:" 10%"}}>
      <div >
        <h6 style={{  marginTop: "10%", fontSize: '4rem' }}>Manage Accounts</h6>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"3%" }}>

        <button onClick={() => window.location.href = "/CreateAccount"} type="button" class="btn btn-primary btn-lg" style={{ display: "flex", justifyContent: "center", borderRadius: "4%" ,height:"70%", width:"16%" }}>
          <img src={process.env.PUBLIC_URL + "/asset/add.png"} alt="Orange" style={{ width:"6%"}} />
          <text style={{ fontSize: "120%", color: "white" }} > Add</text>
        </button>
        <form class="d-flex navbar-item ms-3" role="search" style={{height:"90%" }}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{  borderRadius: "4%" }} />
        <button class="btn btn-primary" type="submit" style={{height:"90%",  borderRadius: "4%" }}>Search</button>
      </form>

        </div>
      </div>
      <div class="table-responsive" style={{width:"100%"}}>
        <table class="table table-sm table-hover has-checkbox" >

          <thead>
            <tr>
              <th scope="col">
                <div class="form-check mb-0">

                  <label class="form-check-label" for="customCheck">
                    <span class="visually-hidden">Select all</span>
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
            <tr>
              <td>
                <div class="form-check mb-0">

                  <label class="form-check-label" for="customCheck1">
                    <span class="visually-hidden">Select first row</span>
                  </label>
                </div>
              </td>
              <td > <img src={process.env.PUBLIC_URL + "/asset/avatar.png"}  style={{ width: "6%", marginTop:"0%", borderRadius:"50%" }} />  Ahmed Nhari </td>
              <td>ahmed@gmail.com</td>
              <td><button type="button" class="btn btn-outline-secondary" style={{ borderRadius: "8%" }}>Modify</button></td>
              <td><button type="button" class="btn btn-danger" style={{ borderRadius: "8%" }}>Delete</button></td>
            </tr>

            <tr class="table-active">
              <td>
                <div class="form-check mb-0">

                  <label class="form-check-label" for="customCheck3">
                    <span class="visually-hidden">Select third row</span>
                  </label>
                </div>
              </td>
              <td> <img src={process.env.PUBLIC_URL + "/asset/imageAccount.png"}  style={{ width: "6%", marginTop:"0%", borderRadius:"50%"}} />Arij Fradi</td>
              <td>Arij@gmail.com</td>
              <td><button type="button" class="btn btn-outline-secondary" style={{ borderRadius: "8%" }}>Modify</button></td>
              <td><button type="button" class="btn btn-danger" style={{ borderRadius: "8%" }}>Delete</button></td>
            </tr>

            <tr>
              <td>
                <div class="form-check mb-0">

                  <label class="form-check-label" for="customCheck1">
                    <span class="visually-hidden">Select first row</span>
                  </label>
                </div>
              </td>
              <td><img src={process.env.PUBLIC_URL + "/asset/imageAccount.png"}  style={{ width: "6%", marginTop:"0%", borderRadius:"50%"}} />selim soyah</td>
              <td>selim@gmail.com</td>
              <td><button type="button" class="btn btn-outline-secondary" style={{ borderRadius: "8%" }}>Modify</button></td>
              <td><button type="button" class="btn btn-danger" style={{ borderRadius: "8%" }}>Delete</button></td>
            </tr>

            <tr class="table-active">
              <td>
                <div class="form-check mb-0">

                  <label class="form-check-label" for="customCheck3">
                    <span class="visually-hidden">Select third row</span>
                  </label>
                </div>
              </td>
              <td> <img src={process.env.PUBLIC_URL + "/asset/imageAccount.png"}  style={{ width: "6%", marginTop:"0%", borderRadius:"50%"}} />Mohamed kiki</td>
              <td>kiki@gmail.com</td>
              <td><button type="button" class="btn btn-outline-secondary" style={{ borderRadius: "8%" }}>Modify</button></td>
              <td><button type="button" class="btn btn-danger" style={{ borderRadius: "8%" }}>Delete</button></td>
            </tr>

            <tr>
              <td>
                <div class="form-check mb-0">

                  <label class="form-check-label" for="customCheck1">
                    <span class="visually-hidden">Select first row</span>
                  </label>
                </div>
              </td>
              <td> <img src={process.env.PUBLIC_URL + "/asset/imageAccount.png"}  style={{ width: "6%", marginTop:"0%", borderRadius:"50%"}} />emna chouchane</td>
              <td>emna@gmail.com</td>
              <td><button type="button" class="btn btn-outline-secondary" style={{ borderRadius: "8%" }}>Modify</button></td>
              <td><button type="button" class="btn btn-danger" style={{ borderRadius: "8%" }}>Delete</button></td>
            </tr>

            <tr class="table-active">
              <td>
                <div class="form-check mb-0">

                  <label class="form-check-label" for="customCheck3">
                    <span class="visually-hidden">Select third row</span>
                  </label>
                </div>
              </td>
              <td> <img src={process.env.PUBLIC_URL + "/asset/imageAccount.png"}  style={{ width: "6%", marginTop:"0%", borderRadius:"50%"}} />Aymen Gdhami</td>
              <td>aymen@gmail.com</td>
              <td><button type="button" class="btn btn-outline-secondary" style={{ borderRadius: "8%" }}>Modify</button></td>
              <td><button type="button" class="btn btn-danger" style={{ borderRadius: "8%" }}>Delete</button></td>
            </tr>
            



          </tbody>
        </table>
      </div>
    </div>

  );
}

export default ManageAccount;
