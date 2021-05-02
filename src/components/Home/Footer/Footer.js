import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedinIn,
    faFacebook,
    faGithub,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className="text-center">
            <h5>Copyright © 2021 | ashraful</h5>
            <p>Address: Moulvibazaar, Sylhet, Bangladesh</p>
            <div className="socialLinks">
            <a href='//https://www.linkedin.com/in/ashraful-islam-5332201a4/'><FontAwesomeIcon style={{margin: '10px'}} icon = { faLinkedinIn } size='2x'/></a>
            <Link to='//https://github.com/ash358241'><FontAwesomeIcon style={{margin: '10px'}} icon = { faGithub } size='2x'/></Link>
            <FontAwesomeIcon style={{margin: '10px'}} icon = { faFacebook } size='2x'/>
            <FontAwesomeIcon style={{margin: '10px'}} icon = { faInstagram } size='2x'/>
            </div>
        </div>
    );
};

export default Footer;