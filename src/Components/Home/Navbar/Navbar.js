import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <Link class="navbar-brand" to="#"><h1>Shaker</h1></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link cool_link active" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link cool_link" href="#">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link cool_link" href="#">Service</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link cool_link" href="#">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link cool_link" href="#">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link cool_link" href="#">Contact</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;