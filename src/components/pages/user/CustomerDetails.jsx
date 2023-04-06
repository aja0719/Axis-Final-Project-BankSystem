import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerDetails() {
  const [customer, setCustomer] = useState(null);
const [id,setId]=useState(localStorage.getItem('id'))
  useEffect(() => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/getCustomerById/'+id,
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
    <div>
      <h1>{customer.customerId}</h1>
      <p>{customer.accountNumber}</p>
      <p>{customer.balance}</p>
      <p>{customer.customerEmail}</p>
    </div>
  );
}

export default CustomerDetails;