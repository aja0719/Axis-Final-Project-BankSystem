import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">

    <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarText">
    <a className="navbar-brand text-white" href="/"  style={{ fontSize: "2.5rem" }}> EasyBank </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
        <Link to="/" className="nav-link active text-white" ><i className="fa-solid fa-right-to-bracket"></i>Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page">About Us</a>
        </li>
      </ul>
      <div className="navbar-text">
      <Link to="login" className="nav-link active text-white" ><i className="fa-solid fa-right-to-bracket"></i> LOGIN</Link>
      </div>
      <div className="navbar-text ">
      <Link to="signup" className="nav-link active text-white" ><i className="fa-solid fa-right-to-bracket"></i> REGISTER</Link>
      </div>
    </div>
  </div>
  
</nav>

</div>

</>
  )
}

export default Navbar