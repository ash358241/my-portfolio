import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import {
    faLinkedinIn,
    faFacebook,
    faGithub,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

const linkedInURL = "linkedin.com/in/ashraful-islam-5332201a4/";
const gitHub = "github.com/ash358241";
const faceBook = "facebook.com/profile.php?id=100007891147242";
const instaGram = "instagram.com/ashrafunique/";

// const linkedInURL = 'linkedin.com/in/ashabhussan';


const Footer = () => {
    return (
        <div className="text-center footer">
            <h5>Copyright © 2021 | ashraful</h5>
            <p>Address: Moulvibazar, Sylhet, Bangladesh</p>
            <div className="socialLinks">
            <Link target='_blank' to={"//" + linkedInURL}><FontAwesomeIcon style={{margin: '10px'}} icon = { faLinkedinIn } size='2x'/></Link>
            <Link target='_blank' to={"//" + gitHub} > <FontAwesomeIcon className='m-2 icon' icon={faGithub} size='2x'/></Link>
            <Link target='_blank' to={"//" + faceBook} > <FontAwesomeIcon className='m-2 icon' icon={faFacebook} size='2x'/></Link>
            <Link target='_blank' to={"//" + instaGram} > <FontAwesomeIcon className='m-2 icon' icon={faInstagram} size='2x'/></Link>
            </div>
        </div>
    );
};

export default Footer;