import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

export default function StudentRegister() {

   let navigate = useNavigate();

    const [user , setUser] = useState( {
      customerEmail:"",
      customerContactNumber:"",
      customerPassword:""
    
    });
  
    const {customerEmail,customerContactNumber, customerPassword} = user;
  
    const onInputChange = (e) => {
      setUser({...user, [e.target.name]:e.target.value});
  };
  
  const onSubmit = async (e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8090/signUp",user);
    alert("Welcome to Axis Fam!")
    navigate("/login");
  }
    
  return (
    <div className='container-fluid p-5 bg-img'>
    <div className='row'>
        <div className='col-sm-6 offset-md-3 border rounded shadow'>
        <h1 className='text-center form-control-lg'>SignUp</h1>
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label ml-auto">
                Email
              </label>
              <input required
                type={"name"}
                className="form-control"
                placeholder="Enter your email"
                name="customerEmail"
                value={customerEmail}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Mobile No.
              </label>
              <input required
                type={"number"}
                className="form-control"
                placeholder="Enter your number"
                name="customerContactNumber"
                value={customerContactNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
               Password
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Create password"
                name="customerPassword"
                value={customerPassword}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button  type="submit" className="btn btn-outline-primary">
              Register
            </button>

            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
    </div>
    </div>

  )
}
