
import './assets/css/style.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/img/apple-touch-icon.png';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Sidebar = () => {
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


    return (
        <>
            {
                <aside id="sidebar" className="sidebar" >

                    <ul className="sidebar-nav" id="sidebar-nav">

                        <li className="nav-item">
                            <Link to="/account" className="nav-link ">
                                <i className="bi bi-grid"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="profile" className="nav-link ">
                                <i class="fa-solid fa-list"></i>
                                <span>XXXXXXXX{customer.accountNumber.slice(-4)}</span>     
                                <span></span>
                            </Link></li>
                        {/* <li className="nav-item">
                            <Link to="transferfund" className="nav-link collapsed">
                                <i class="fa-solid fa-list"></i>
                                <span>Do Transactions</span>
                            </Link></li> */}

                        {/* <li className="nav-item">
                            <Link to="viewStatement" className="nav-link collapsed">
                                <i class="fa-solid fa-circle-user"></i>
                                <span>Account Statement</span>
                            </Link></li> */}
                            <li className="nav-item">
                            <Link to="/" className="nav-link collapsed">
                                <i class="fa-solid fa-circle-user"></i>
                                
                                <span>Logout</span>
                            </Link></li>

                    </ul>
                </aside>
            }
        </>
    )
}

export { Sidebar };
