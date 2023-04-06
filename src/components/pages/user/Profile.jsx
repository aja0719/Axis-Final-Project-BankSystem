import React from "react";
import  { useState,useEffect } from 'react'
import axios from "axios";
import TransferFund from "./TransferFund";
import { Link } from "react-router-dom";
const Profile = () => {
  const [customer, setCustomer] = useState(null);
  const [id,setId]=useState(localStorage.getItem('id'))
  //fetch particular data

  useEffect(() => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8090/getCustomerById/'+id,
      headers: {
        'Cookie': 'JSESSIONID=84E59A7F34CB91EA8AB03E582817B29C'
      }
    };

    axios.request(config)
      .then((response) => {
        setCustomer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!customer) {
    return <div>Loading...</div>;
  }


    return(
        <>
        <div className="row p-2">
        <p class="text-center fs-1" id="adminHead">Customer Profile</p>
        <div class="d-flex justify-content-center">
        <div class="col-md-6">
          <a class="text-decoration-none bg-custom">
            <div class="card paint-card ">
              <div class="card-body text-center">
                <br />
                <p class="fs-3 text-dark"><i class="bi bi-bank"></i> Customer ID: {customer.customerId}</p>
                <p class="fs-3 text-dark"></p>
              </div>
            </div>
          </a>
        </div>
        </div>
        {/* <div class="col-md-6">
          <a class="text-decoration-none bg-custom">
            <div class="card paint-card ">
              <div class="card-body text-left">
                <br />
                <p class="fs-3 text-dark"><i class="bi bi-bank"></i> Customer ID: {customer.customerId}</p>
                <p class="fs-3 text-dark"></p>
              </div>
            </div>
          </a>
        </div> */}
       
        <div class="col-md-6 cardx">
          <a class="text-decoration-none bg-custom">
            <div class="card paint-card">
              <div class="card-body text-left">
                <br />
                <p class="fs-3 text-dark"> <i class="bi bi-bank"></i> Account No: {customer.accountNumber} </p>
                <p class="fs-3 text-dark"></p>
              </div>
            </div>
          </a>
        </div>
        
        <div class="col-md-6">
          <a class="text-decoration-none bg-custom">
            <div class="card paint-card ">
              <div class="card-body text-left">
                <br />
                <p class="fs-3 text-dark"><i class="bi bi-wallet2"></i> Account Balance: Rs.{customer.balance}</p>
                <p class="fs-3 text-dark"></p>
              </div>
            </div>
          </a>  
        </div>
        <div class="col-md-6">
          <a class="text-decoration-none bg-custom">
            <div class="card paint-card ">
              <div class="card-body text-center">
                <br />
                <p class="fs-3 text-dark">
                {/* <button type="button" class="btn btn-success">Transactions</button> */}
                <Link to="../transferfund" className="nav-link collapsed">
                                <i class="fa-solid fa-list"></i>
                                <span>Transactions</span>
                            </Link></p>
                           
                <p class="fs-3 text-dark"></p>
              </div>
            </div>
          </a>  
        </div>
        <div class="col-md-6">
          <a class="text-decoration-none bg-custom">
            <div class="card paint-card ">
              <div class="card-body text-center">
                <br />
                <p class="fs-3 text-dark">
                {/* <button type="button" class="btn btn-success">View</button> */}
                <Link to={`../viewStatement/${customer.customerId}`} className="nav-link collapsed">
                                <i class="fa-solid fa-list"></i>
                                <span>Account Statement </span>
                            </Link></p>
                            
                <p class="fs-3 text-dark"></p>
              </div>
            </div>
          </a>  
        </div>
        </div>
        
      
      
        </>
    )}
    export default Profile;