import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import React, { useState,useEffect } from 'react'

const TransferFund = () => {

  const [customer, setCustomer] = useState(null);
  const [id,setId]=useState(localStorage.getItem('id'))
  //fetch particular data

  const navigate = useNavigate();

    const [transaction , setTrans] = useState( {
      customerId:"",
      transactionType:"",
      transactionNature:"",
      amount:"",
      narration:"",
      beneficiaryAccountNumber:"",
      transactionDate:""
    
    });
  
    const {customerId,transactionType, transactionNature,amount ,beneficiaryAccountNumber,narration ,transactionDate} = transaction;
  
    const onInputChange = (e) => {
      setTrans({...transaction, [e.target.name]:e.target.value});
  };
  
  const onSubmit = async (e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8090/transactions/perform",transaction);
    alert("Transaction successful!");
    navigate('/account/profile');

  }
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

  function updateSecondDropdown(){
    var firstDropdown =document.getElementById("first-dropdown")
    var secondDropdown =document.getElementById("second-dropdown")
    var selectedOption = firstDropdown.options[firstDropdown.selectedIndex].value;

    secondDropdown.innerHTML="";
    switch(selectedOption){
      case "Cash Deposit":
        addOption("Credit");
      break;
      case "Fund Transfer":
        addOption("Debit");
    }
  }
  function addOption(text,value){
    var option = document.createElement("option")
    option.text=text;
    option.value=value;
    document.getElementById("second-dropdown").add(option);
  }
  
  return (
    <>
      <div className="row p-2">
        <p class="text-center fs-1" id="adminHead">Transactions</p>
        <div class="col-md-7 cardx">
          <a class="text-decoration-none bg-custom">
            <div class="card paint-card">
              <div class="card-body text-left">
             
                <p class="fs-3 text-dark">Current Balance is Rs. {customer.balance} </p>

                <p class="fs-3 text-dark"></p>
              </div>
            </div>
          </a>
        </div>
        
      </div>
      {/* Deposit And transactions start here */}
      {/* <p className="text-danger ">All fields are required...</p> */}
      <form onSubmit={(e) => onSubmit(e)} class="row g-3 border border-dark"  >
        <div class="col-md-6 ">
          <label class="form-label">Customer ID</label>
          <input type={"number"} placeholder="Enter Customer ID" 
          class="form-control"   name="customerId" value={customer.customerId}
           onSelect={(e) => onInputChange(e)} required />
        </div>
        <div class="col-md-4">
          <label class="form-label">Transaction Type</label>
          <select id="first-dropdown" class="form-select" name="transactionType" value={transactionType} onChange={(e) => onInputChange(e)} required>
          <option >Choose</option>
            <option value="Cash Deposit">Cash Deposit</option>
            <option value="Fund Transfer">Fund Transfer</option>
          </select>
        </div>
        <div class="col-md-2">
          <label class="form-label">Transaction Nature</label>
          <select class="form-select" id="second-dropdown" name="transactionNature" value={transactionNature} onChange={(e) => onInputChange(e)} required>
            <option >Choose</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>
        <div class="col-md-6">
          <label class="form-label">Amount(Rs.)</label>
          <input type="number" min={1} placeholder="Enter Amount" class="form-control" name="amount" value={amount} onChange={(e) => onInputChange(e)} required/>
        </div>
        <div class="col-md-6">
          <label class="form-label">Beneficiary Account Number</label>
          <input type="number" placeholder="Enter Beneficiary Account Number" class="form-control" name="beneficiaryAccountNumber"  value={beneficiaryAccountNumber} onChange={(e) => onInputChange(e)}required />
          
        </div>
     
      <div className="row mt-3">
          <div className="col">
            <label class="form-label">Narration </label>
            <textarea maxLength={40}
              required
              rows="3"
              cols="2"
              placeholder="Leave message here..."
              className="form-control"
              name="narration"
              value={narration} onChange={(e) => onInputChange(e)}
            ></textarea><br></br>
          </div>
        </div>
     
        <div className="row mt-3">
        <div className="col py-2">
          <button type="submit" class="btn btn-success btn-mg me-md-3 ">Pay </button>
          <Link class="btn btn-danger btn-mg " to={"/account"}>Cancel </Link>
          
        </div>
      </div>
      </form>
    </>
  )
}
export default TransferFund