import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import myLogo from '../../img/myLogo.png';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light pt-3 navbarStyle">
  <div class="container-fluid">
    {/* <h1 className='text-white'>AI</h1> */}
      <img style={{width: '60px', height: '60px'}} src={myLogo} alt="" />
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse font-weight-bold animate__animated animate__fadeInUp" id="navbarSupportedContent" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <Link className="nav-link text-white mr-5 fs-5" to='/home'>Home</Link>
        </li>
        <li class="nav-item">
            <Link className="nav-link text-white mr-5 fs-5" to="/about">About Me</Link>
        </li>
        <li class="nav-item">
            <Link className="nav-link text-white mr-5 fs-5" to="/portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
            <Link className="nav-link text-white mr-5 fs-5" to='/blogs'>Blogs</Link>
        </li>
        <li class="nav-item">
            <Link className="nav-link text-white mr-5 fs-5" to="/contact">Contact</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;