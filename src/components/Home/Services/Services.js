import React from 'react';
import { Card, Button } from 'react-bootstrap';
import design from '../../../img/le-wagon-6YZewlZjS4w-unsplash.jpg';
import developing from '../../../img/development.jpg';
import debug from '../../../img/Debugging.jpg';
import './Services.css';

const Services = () => {
    return (
        <div className="services mt-5">
            <div className="text-center  "> 
            <h1 className="text-white">Service I Provide</h1>
            <hr style={{width: '50%', margin: '0 auto', backgroundColor: 'white', height: '5px'}}/>
            </div>
            <br/>
            <div className='row w-75 mx-auto'>
        	<div className="col-md-4 my-3">
            <Card className="cardItem">
            <Card.Img style={{width: '100%'}} variant="top" src={design} />
            <Card.Body>
                <Card.Title>Web Designing</Card.Title>
                <Card.Text className="pt-4">
                I am able to make immersive design. I have a good knowledge in HTML, CSS, Bootstrap, Sass, ReactJS for designing aesthetic web ui. I work with perfection providing satisfaction. 
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className="col-md-4 my-3">
            <Card className="cardItem">
            <Card.Img variant="top" src={developing} />
            <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text className="pt-4">
                I basically work with MERN stack. I can make website functional and interactive. For doing so I use NodeJs, ExpressJS and as database I use MongoDB.
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className="col-md-4 my-3">
            <Card className="cardItem">
            <Card.Img variant="top" src={debug} />
            <Card.Body>
                <Card.Title>Debugging and Testing</Card.Title>
                <Card.Text className="pt-4">
                Having a good coding proficiency I can fix the bug which is ruining your user experience and causing problem while interacting with your web application. 
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
            </div>
        </div>
    );
};

export default Services;