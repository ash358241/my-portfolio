import React from 'react';
import me from '../../20181216_190708.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedinIn,
    faFacebook,
    faGithub,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="text-center w-50 mx-auto" style={{marginTop:'100px'}}>
            <img style={{width: '50%', borderRadius: '20px'}} src={me} alt=""/>
            <h1>I'm Ashraful Islam</h1>
            <p style={{width: '80%', margin: '0 auto'}}>I basically work with MERN stack. For Front-End I use React, for Back-End I use Express and as database I use MongoDB. I always focus on learning new technology. Currently I am doing my B.Sc. in CSE from Leading University, Sylhet</p>
            <div className="socialLinks">
            <a href='//https://www.linkedin.com/in/ashraful-islam-5332201a4/'><FontAwesomeIcon style={{margin: '10px'}} icon = { faLinkedinIn } size='2x'/></a>
            <Link to='//https://github.com/ash358241'><FontAwesomeIcon style={{margin: '10px'}} icon = { faGithub } size='2x'/></Link>
            <FontAwesomeIcon style={{margin: '10px'}} icon = { faFacebook } size='2x'/>
            <FontAwesomeIcon style={{margin: '10px'}} icon = { faInstagram } size='2x'/>
            </div>
        </div>
    );
};

export default About;