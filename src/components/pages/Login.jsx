import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    customerId: '',
    customerPassword: '',
  });

  const [current, setCurrentUser] = useState(null);
  const { customerId, customerPassword } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!customerId || !customerPassword) {
      alert('Please enter both customer id and password');
      return;
    }

    try {
      await axios.post('http://localhost:8090/signin', user);
      alert('Login Successfull');
      localStorage.setItem('id', user.customerId);
      navigate('/account');
    } catch (error) {
      alert('Invalid customer id or password');
    }
  };

  return (
    <div
      className="container-fluid p-5 bg-img"
      style={{
        backgroundImage: 'url(img/back2.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="row">
        <div className="col-md-5 offset-md-3">
          <div className="card paint-card">
            <div className="card-header ">
              <h4 className="text-dark text-center">Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                  <label className="form-label">Customer Id</label>
                  <input
                    required
                    type="number"
                    className="form-control"
                    name="customerId"
                    value={customerId}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    name="customerPassword"
                    value={customerPassword}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>

                <button type="submit" className="btn btn-primary col-md-12">
                  Login
                </button>
              </form>
            </div>
            <div className="card-footer bg-white text-center p-3">
              Don't have account
              <Link to="/signup" className="text-decoration-none ms-2">
                register
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;