import React from 'react';
import './Portfolio.css';
import port from '../../img/Debugging.jpg';

import tripperHome from '../../img/triH.png';
import tripperService from '../../img/triS.png';
import tripperFooter from '../../img/triF.png';

import bookHome from '../../img/bh.png';
import bookOrder from '../../img/bo.png';
import bookDetail from '../../img/bd.png';

import soccerHome from '../../img/sh.png';
import soccerCard from '../../img/sc.png';
import soccerDetail from '../../img/sd.png';
import { Badge, Carousel } from 'react-bootstrap';
const Portfolio = () => {
    return (
        
        <div className="port">
            <div className="w-100 mx-auto container animate__animated animate__fadeInDownBig" style={{animationDuration: '7s'}} style={{paddingTop:'100px', paddingBottom:'100px'}}>
            <div className="portfolio">
            <div className="w-100 mx-auto">
             
            <Carousel style={{width: '100%'}}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={tripperHome}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={tripperService}
                alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={tripperFooter}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </div>
            
            <div className='description ml-5 w-75'>
                <h1>Tripper</h1>
                <h3>This site is about to manage travel for you according to your need.</h3>
                <a href="https://tripper-285e0.web.app/">Live-Link</a>
                <p>Features: <br/>
                • Implemented Admin Panel and User Dashboard <br/>
                • Stripe Payment Method is integrated</p>
                <p>
                Technologies: <br/>
                <Badge variant='info m-2'>React.js</Badge>
                <Badge variant='info m-2'>React Router</Badge>
                <Badge variant='info m-2'>Firebase Authentication</Badge>
                <Badge variant='info m-2'>Node.js</Badge>
                <Badge variant='info m-2'>Express.js</Badge>
                <Badge variant='info m-2'>MongoDB</Badge>
                <Badge variant='info m-2'>React Bootstrap</Badge>
                <Badge variant='info m-2'>Stripe Payment Gateway</Badge>
                </p>
            </div>

            </div>



            <div className="portfolio ">
            <div className="w-100 mx-auto">
             
            <Carousel style={{width: '100%'}}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bookHome}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bookOrder}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bookDetail}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

            </div>
            <div className='description ml-5 w-75'>
                <h1>Book Store</h1>
                <h3>This site is for you to select the book you desire. Grab your book and enrich your knowledge.</h3>
                <a href="https://book-store-38cb3.web.app/">Live-Link</a>
                <p>Features: <br/>
                • Implemented Admins Features such as Managing/Adding/Removing Books <br/>
                • Implemented User Specific Feature and User-Specific Order History</p>
                <p>
                Technologies: <br/>
                <Badge variant='info m-2'>React.js</Badge>
                <Badge variant='info m-2'>React Router</Badge>
                <Badge variant='info m-2'>Firebase Authentication</Badge>
                <Badge variant='info m-2'>Node.js</Badge>
                <Badge variant='info m-2'>Express.js</Badge>
                <Badge variant='info m-2'>MongoDB</Badge>
                <Badge variant='info m-2'>React Bootstrap</Badge>
                </p>
            </div>

            </div>




            
            <div className="portfolio">
            <div className="w-100 mx-auto">
            
            <Carousel style={{width: '100%', border: '3px solid navy'}}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={soccerHome}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={soccerCard}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={soccerDetail}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

            </div>
            <div className='description ml-5 w-75'>
                <h1>Soccer Mania</h1>
                <h3>The site is about exploring details about teams which are playing in the league.</h3>
                <a href="https://pensive-feynman-ecf848.netlify.app/">Live-Link</a>
                <p>Features: <br/>
                • Here You can find various teams with their logos <br/>
                • You can explore respective team details</p>
                <p>
                Technologies: <br/>
                <Badge variant='info m-2'>React.js</Badge>
                <Badge variant='info m-2'>React Router</Badge>
                <Badge variant='info m-2'>FontAwesome</Badge>
                <Badge variant='info m-2'>React Bootstrap</Badge>
                </p>
            </div>
            
            </div>






        </div>
        </div>
        
    );
};

export default Portfolio;