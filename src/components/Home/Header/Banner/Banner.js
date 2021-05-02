import React from 'react';
import Particles from 'react-tsparticles';
import './Banner.css';
import profileImage from '../../../../20181216_190708.jpg';

const Banner = () => {
    return (
        <div className='bannerContainer'>
            <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000000",
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
        </div>
        <div className="profileImage">
        <img style={{width: '80%', height: '44vh', marginLeft: '50px', borderRadius: '20px'}} src={profileImage} alt=""/>
        </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;