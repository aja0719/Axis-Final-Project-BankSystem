import React from "react";


const Dashboard = () => {
    return(
        <>
      <div className="row p-2">
        <p class="text-center fs-1" id="adminHead">Customer Dashboard</p>
        {/* <p>Our Services</p> */}
        <div class="col-md-6 cardx">
          <a class="text-decoration-none bg-custom">
            <div class="card paint-card">
              <div class="card-body text-center">
                <i class="bi bi-journal-check fa-2x"></i>
                
                <br />
                <p class="fs-3 text-dark">Cash Deposit</p>
                
                <p class="fs-3 text-dark"></p>
              </div>
            </div>
          </a>
        </div>
        
        <div class="col-md-6">
          <a class="text-decoration-none bg-custom">
            <div class="card paint-card ">
              <div class="card-body text-center">
                <i class="bi bi-minecart fa-2x"></i>
                <br />
                <p class="fs-3 text-dark">Transactions</p>
                <p class="fs-3 text-dark"></p>
              </div>
            </div>
          </a>
        </div>
      </div>
        </>
    )
}
export default Dashboard;