import React from 'react';
import img1 from '../../../img/web.jpeg';
import img2 from '../../../img/react.jpg';
import img3 from '../../../img/javascript.jpg';
import './Blogs.css';

const blog1 = 'ashrafulunit7.medium.com/web-application-essentials-you-should-know-4918b90d3a9d';
const blog2 = 'ashrafulunit7.medium.com/react-essentials-you-should-know-4cfb645579b9';
const blog3 = 'shrafulunit7.medium.com/javascript-essentials-you-should-know-58d202b0c9f';

const Blogs = () => {
    return (
        <div className="blogPart">

<div className="text-white mt-5 pt-5" >
            <h1 className="text-center animate__animated animate__zoomIn">Some Blogs of Mine</h1>
            <hr style={{width: '50%', margin: '0 auto', backgroundColor: 'white', height: '5px'}}/>
            <br/>
            <br />
            <div className="row w-75 mx-auto text-dark animate__animated animate__zoomInUp">
                <div className="col-md-4 mb-3">
               
                <div class="cardItem">

                <div class="card-img-wrapper">
                <img class="card-img-top" src={img1} alt="Card image cap"/>
                </div>

                <div class="card-body">
                   <h5 class="card-title">Web Application Essentials You Should Know</h5>
                    <div class="card-content p-3">
                        <p class="card-text">Cross Browser Testing: <br />
                        It is basically used to ensure whether our web application is working fine on browsers or not </p>
                        <a href={'//' + blog1} target="_blank" class="btn btn-primary">Read More</a>
                    </div>
                </div>
                </div>
                </div>

                <div className="col-md-4 mb-3">
                <div class="cardItem">
                <div class="card-img-wrapper">
                <img class="card-img-top" src={img2} alt="Card image cap"/>
                </div>
                <div class="card-body">
                   <h5 class="card-title">React Essentials You Should know</h5>
                    <div class="card-content p-3">
                        <p class="card-text">What React actually is? <br />
                        React is actually JavaScript’s library. It’s not actually a framework. While dealing with a framework </p>
                        <a href={'//' + blog2} target="_blank" class="btn btn-primary">Read More</a>
                    </div>
                </div>
                </div>
                </div>

                <div className="col-md-4 mb-3">
                <div class="cardItem">

                <div class="card-img-wrapper">
                <img class="card-img-top" src={img3} alt="Card image cap"/>
                </div>

                <div class="card-body">
                   <h5 class="card-title">JavaScript Essentials You Should Know</h5>
                    <div class="card-content p-3">
                        <p class="card-text">Why JavaScript? <br />
                        It’s the most demandable programming language in the software industry right now. For any kind </p>
                        <a href={'//' + blog3} target="_blank" class="btn btn-primary">Read More</a>
                    </div>
                </div>

                </div>
                </div>

            </div>

        </div>

        </div>
    );
};

export default Blogs;