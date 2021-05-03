import React from 'react';
import { Card, Button } from 'react-bootstrap';
import design from '../../../img/le-wagon-6YZewlZjS4w-unsplash.jpg';
import developing from '../../../img/development.jpg';
import debug from '../../../img/Debugging.jpg';
import './Services.css';

const Services = () => {
    return (
        <div className="services my-5">
            <div className="text-center">
            <h1 className="text-white">Service I Provide</h1>
            <hr style={{width: '50%', margin: '0 auto', backgroundColor: 'white', height: '5px'}}/>
            </div>
            <br/>
            <div className='row w-100 mx-auto container'>
        	<div className="col-md-4 my-3">
            <Card className="card">
            <Card.Img style={{width: '100%'}} variant="top" src={design} />
            <Card.Body>
                <Card.Title>Web Designing</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className="col-md-4 my-3">
            <Card >
            <Card.Img variant="top" src={developing} />
            <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className="col-md-4 my-3">
            <Card >
            <Card.Img variant="top" src={debug} />
            <Card.Body>
                <Card.Title>Debugging and Testing</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
            </div>
        </div>
    );
};

export default Services;