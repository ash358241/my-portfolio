import React from 'react';
import { Badge, Carousel } from 'react-bootstrap';
import tripperHome from '../../../img/triH.png';
import tripperService from '../../../img/triS.png';
import tripperFooter from '../../../img/triF.png';
import bookHome from '../../../img/bh.png';
import bookOrder from '../../../img/bo.png';
import bookDetail from '../../../img/bd.png';

import soccerHome from '../../../img/sh.png';
import soccerCard from '../../../img/sc.png';
import soccerDetail from '../../../img/sd.png';
import './Projects.css';

const Projects = () => {
    return (
        <div className="w-100 mx-auto container text-white pt-5" style={{paddingBottom: '70px'}}>
            <h1 className="text-center ">Some Projects of Mine</h1>
            <hr style={{width: '50%', margin: '0 auto', backgroundColor: 'white', height: '5px'}}/>
            <br/>
            <div className="carouselDes">
            <div className="w-100 mx-auto">
             
            <Carousel style={{width: '100%', border: '3px solid navy'}}>
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
                <a href="https://tripper-285e0.web.app/" target='_blank'>Live-Link</a>
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

            <div className="carouselDes">
            <div className="w-100 mx-auto">
            
            <Carousel style={{width: '100%', border: '3px solid navy'}}>
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
                <a href="https://book-store-38cb3.web.app/" target='_blank'>Live-Link</a>
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



            <div className="carouselDes">
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
                <a href="https://pensive-feynman-ecf848.netlify.app/" target='_blank'>Live-Link</a>
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
    );
};

export default Projects;