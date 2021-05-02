import React from 'react';
import './Portfolio.css';
import port from '../../img/Debugging.jpg';
import { Carousel } from 'react-bootstrap';
const Portfolio = () => {
    return (
        
        <div className="w-100 mx-auto container" style={{marginTop:'100px'}}>
            <div className="portfolio my-3">
            <div className="w-100 mx-auto">
             
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={port}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={port}
                alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={port}
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



            <div className="portfolio my-3">
            <div className="w-100 mx-auto">
             
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={port}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={port}
                alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={port}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </div>
            
            <div className='description ml-5'>
                <h1>Book Store</h1>
                <h3>This site is for you to select the book you desire.</h3>
                <a href="https://tripper-285e0.web.app/">Live-Link</a>
                <p>Features: <br/>
                • Implemented Admins Features such as Managing/Adding/Removing Books <br/>
                • Implemented User Specific Feature and User-Specific Order History</p>
                <p>
                Technologies: <br/>
                React.js, React Router, Firebase Authentication, Node.js,
                Express.js, MongoDB, React-Bootstrap
                Gateway

                </p>
            </div>
            </div>


        </div>
        
    );
};

export default Portfolio;