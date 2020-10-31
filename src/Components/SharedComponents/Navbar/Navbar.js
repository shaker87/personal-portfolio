import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import pdf from '../../SharedComponents/Navbar/Resume.pdf';

const Navbar = () => {
    return (
        
       <div className="bg-dark sticky-top">
            <div className="container">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <Link class="navbar-brand" to="#"><h1>Shaker</h1></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link cool_link active" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link cool_link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link cool_link" to="/service">Service</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link cool_link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link cool_link" to="/blog">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link cool_link" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                        <a href="https://drive.google.com/file/d/1JJDPQFgEWvjdGOHIvuUYRe3m5JpC2YG_/view?usp=sharing" target="_blank" rel="noreferrer"><button className="btn btn-outline-primary">Get Resume</button></a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
       </div>
    );
};

export default Navbar;