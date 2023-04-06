import './assets/css/style.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/img/apple-touch-icon.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState,useEffect } from 'react'


const UserNavbar = () => {
  
  const [customer, setCustomer] = useState(!null);
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
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg header fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white fw-bold"><i class="fa-solid fa-list"></i>Easy Bank</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown pe-3">
                <a className="nav-link nav-profile d-flex align-items-center pe-0 text-light" href="#">
                  <i className="bi bi-person-circle"></i>
                     <span className="d-none d-md-block ps-2">{customer.customerEmail}</span>
               
                  <span className="d-none d-md-block ps-2">
                    </span>
                </a>
                
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </React.Fragment>
  );
}


export { UserNavbar };