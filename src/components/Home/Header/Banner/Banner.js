import React from 'react';
import Particles from 'react-tsparticles';
import './Banner.css';
import profileImage from '../../../../img/profile.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const resume = "drive.google.com/file/d/1FmMTnd23sg34II8LAJuNaUMWI-hBg6_G/view";

const Banner = () => {
    return (
        <div className='bannerContainer'>
            <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#232741",
            },
          },
          fpsLimit: 120,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />

      <div className="bannerChild">
          
        <div className="content">
        <div className="info text-white">
        <h1>Hi, I am <span style={{color: 'aqua'}}>Ashraful <br/>Islam </span> </h1>
        <h3 className="typewriter">MERN Stack Developer</h3>
        <p>I am an enthusiastic Javascript Developer. I work with MERN stack. I handle both the Front-End and Back-End with significant and highly demandable frameworks.</p>
        <Link target="_blank" to={"//" + resume}><button className="btn btn-info px-3 py-2"><FontAwesomeIcon icon = { faDownload } /> Get Resume</button></Link>
        </div>
        <div className="profileImage">
        <img style={{width: '100%',   borderRadius: '20px'}} src={profileImage} alt=""/>
        </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;