import React from 'react';
import './HeaderMain.css';
import profile from '../../../Images/profile.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const HeaderMain = () => {
    return (
        <section className="container header-main">
            <div className="profile-text">
                <img className="img-fluid profile-img" src={profile} alt="Profile" srcset="" />
                <div className="profile-icon">
                    <ul>
                        <li><a href="https://www.facebook.com/saker.ahmmed.9/" target="_blank" rel="noreferrer"className="brand-icon"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="https://github.com/shaker87" className="brand-icon"><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li><a href="https://www.linkedin.com/in/shaker-hossain-49b2381ba/" target="_blank" rel="noreferrer" className="brand-icon"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href="https://twitter.com/SakerAhmmed" target="_blank" rel="noreferrer"className="brand-icon"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    </ul>
                </div>
                <h1>Hi, I am <span className="highlight">Shaker Hossain</span></h1>
                <h5>I am a MERN stack developer. I can provide clean code and pixel perfect design and  development. <br /> I also make website more & more interactive with web animations.</h5>
                <button className="btn btn-outline-dark"><Link style={{ color: 'white', textDecoration:'none' }}to="/portfolio">My Work <FontAwesomeIcon icon={faArrowDown} /></Link></button>

            </div>

        </section>
    );
};

export default HeaderMain;