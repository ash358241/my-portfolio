import React from 'react';
import "./Home.css";
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <Services></Services>
            <Projects></Projects>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;