import React from 'react';
import me from '../../img/profile.jpg';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedinIn,
    faFacebook,
    faGithub,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

const linkedInURL = "linkedin.com/in/ashraful-islam-5332201a4/";
const gitHub = "github.com/ash358241";
const faceBook = "facebook.com/profile.php?id=100007891147242";
const instaGram = "instagram.com/ashrafunique/";

const About = () => {
    return (
        <div id="aboutMe" >
            <div className="text-center w-50 mx-auto" style={{paddingTop:'100px'}}>
            <img className="animate__animated animate__fadeInRight" style={{width: '50%', borderRadius: '20px'}} src={me} alt=""/>

            <div className="animate__animated animate__fadeInLeft">
            <h1>I'm Ashraful Islam</h1>
            <p style={{width: '80%', margin: '0 auto'}}>I basically work with MERN stack. For Front-End I use React, for Back-End I use Express and as database I use MongoDB. I always focus on learning new technology. Currently I am doing my B.Sc. in CSE from Leading University, Sylhet</p>
            <div className="socialLinks">
            <Link target='_blank' to={"//" + linkedInURL}><FontAwesomeIcon style={{margin: '10px'}} icon = { faLinkedinIn } size='2x'/></Link>
            <Link target='_blank' to={"//" + gitHub} > <FontAwesomeIcon className='m-2 icon' icon={faGithub} size='2x'/></Link>
            <Link target='_blank' to={"//" + faceBook} > <FontAwesomeIcon className='m-2 icon' icon={faFacebook} size='2x'/></Link>
            <Link target='_blank' to={"//" + instaGram} > <FontAwesomeIcon className='m-2 icon' icon={faInstagram} size='2x'/></Link>
            </div>
            </div>

            </div>

            <br/>

            <div className="row">
                <div className="col-md-6 skills">
                    <h2 className='text-center orelega-font'>Skills</h2>

                    <div className="ml-5 mb-5">
                        <h4 className='mb-3 orelega-font'>Comfortable</h4>
                        <Badge variant="info m-2">Javascript</Badge>
                        <Badge variant="info m-2">ES6</Badge>
                        <Badge variant="info m-2">React.js</Badge>
                        <Badge variant="info m-2">React Bootstrap</Badge>
                        <Badge variant="info m-2">Node.js</Badge>
                        <Badge variant="info m-2">Express.js</Badge>
                        <Badge variant="info m-2">MongoDB</Badge>
                        <Badge variant="info m-2">HTML5</Badge>
                        <Badge variant="info m-2">CSS3</Badge>
                        <Badge variant="info m-2">C</Badge>
                        <Badge variant="info  m-2">C++</Badge>
                        <Badge variant="info m-2">Java</Badge>
                        <Badge variant="info m-2">MaterialUI</Badge>
                        <Badge variant="info m-2">Framer Motion</Badge>
                        <Badge variant="info m-2">Sass</Badge>

                        <h4 className='mt-5 mb-3 orelega-font'>Familiar</h4>
                        <Badge variant="info  m-2">Typescript</Badge>
                        <Badge variant="info  m-2">Redux</Badge>
                        <Badge variant="info  m-2">React Native</Badge>
                        <Badge variant="info m-2">Tailwind CSS</Badge>
                        <Badge variant="info  m-2">Python</Badge>

                        <h4 className='mt-5 mb-3 orelega-font'>Tools</h4>
                        <Badge variant="info  m-2">Git</Badge>
                        <Badge variant="info  m-2">VS Code</Badge>
                        <Badge variant="info  m-2">Chrome Dev Tool</Badge>
                        <Badge variant="info  m-2">Heroku</Badge>
                        <Badge variant="info  m-2">Netlify</Badge>
                        <Badge variant="info  m-2"> Firebase</Badge>

                    </div>

                </div>

                <div className="col-md-6">
                    <h2 className='text-center orelega-font'>Education</h2>
                    <div className="ml-5 mb-5">
                        <h4 className='mb-3 orelega-font'>Under Graduation</h4>
                        <h5 className='ml-4'>Leading University</h5>
                        <h6 className='ml-4' >B.Sc. (Honours) in Computer Science & Engineering <br />
                        January 2019 - Present <br />
                        </h6>

                        <h4 className=' mt-5 mb-3 orelega-font'>Higher Secondary</h4>
                        <h5 className='ml-4'>Moulvibazar Government Collage</h5>
                        <h6 className='ml-4' >HSC <br />
                        Batch: 2018
                        </h6>

                        <h4 className=' mt-5 mb-3 orelega-font'>Secondary</h4>
                        <h5 className='ml-4'>Moulvibazar Government High School</h5>
                        <h6 className='ml-4' >SSC <br />
                        Batch: 2016
                        </h6>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default About;