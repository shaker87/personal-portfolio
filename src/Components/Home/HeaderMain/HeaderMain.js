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
                        <li><Link href="#" className="brand-icon"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                        <li><Link href="#" className="brand-icon"><FontAwesomeIcon icon={faGithub} /></Link></li>
                        <li><Link href="#" className="brand-icon"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                        <li><Link href="#" className="brand-icon"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                    </ul>
                </div>
                <h1>Hi, I am <span className="highlight">Shaker Hossain</span></h1>
                <h5>I am a frontend web developer. I can provide clean code and pixel perfect design. I also <br /> make website more & more interactive with web animations.</h5>
                <button className="btn btn-primary"><Link style={{ color: 'white', textDecoration:'none' }}to="/portfolio">My Work <FontAwesomeIcon icon={faArrowDown} /></Link></button>

            </div>

        </section>
    );
};

export default HeaderMain;