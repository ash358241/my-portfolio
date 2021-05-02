import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../../img/le-wagon-6YZewlZjS4w-unsplash.jpg';
import image from '../../../img/development.jpg';
import './Projects.css';

const Projects = () => {
    return (
        <div className="w-100 mx-auto container">
            <h1 className="text-center">Some Projects of Mine</h1>
            <hr style={{width: '50%', margin: '0 auto'}}/>
            <br/>
            <div className="carouselDes">
            <div className="w-100 mx-auto">
             
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img}
                alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </div>
            
            <div className='description ml-5'>
                <h1>Tripper</h1>
                <h3>This site is about to manage travel for you according to your need.</h3>
                <a href="https://tripper-285e0.web.app/">Live-Link</a>
                <p>Features: <br/>
                • Implemented Admin Panel and User Dashboard <br/>
                • Stripe Payment Method is integrated</p>
                <p>
                Technologies: <br/>
                React.js, React Router, Firebase Authentication, Node.js,
                Express.js, MongoDB, React-Bootstrap, Stripe Payment
                Gateway
                </p>
            </div>
            </div>

            <div className="carouselDes">
            <div className="w-100 mx-auto">
            
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

            </div>
            <div className='description ml-5'>
                <h1>Book Store</h1>
                <h3>This site is for you to select the book you desire. Grab your book and enrich your knowledge.</h3>
                <a href="https://book-store-38cb3.web.app/">Live-Link</a>
                <p>Features: <br/>
                • Implemented Admins Features such as Managing/Adding/Removing Books <br/>
                • Implemented User Specific Feature and User-Specific Order History</p>
                <p>
                Technologies: <br/>
                React.js, React Router, Firebase Authentication, Node.js, Express.js,
                MongoDB, React-Bootstrap
                </p>
            </div>
            </div>
        </div>
    );
};

export default Projects;