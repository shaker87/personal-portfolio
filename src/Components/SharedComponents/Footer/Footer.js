import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer-area">
           <div className="container">
               <div className="row">
                   <div className="col-md-3">
                   <div className="address-icon">
                            <h3>Shaker</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        </div>
                   </div>
                   <div className="col-md-3">
                   <div className="information">
                            <h4>Information</h4>
                            <ul>
                                <li><Link to="#"><i class="fa fa-caret-right"></i> Home</Link></li>
                                <li><Link to="#"><i class="fa fa-caret-right"></i> About</Link></li>
                                <li><Link to="#"><i class="fa fa-caret-right"></i> Service</Link></li>
                                <li><Link to="#"><i class="fa fa-caret-right"></i> Portfolio</Link></li>
                                <li><Link to="#"><i class="fa fa-caret-right"></i> Contact</Link></li>
                            </ul>
                        </div>
                   </div>
                   <div className="col-md-3">
                   <div className="latest-work">
                            <h4>Latest work</h4>
                            <ul>
                                <li><Link to="#"><i class="fa fa-caret-right"></i> Deliver</Link></li>
                                <li><Link to="#"><i class="fa fa-caret-right"></i> Newest</Link></li>
                                <li><Link to="#"><i class="fa fa-caret-right"></i> Paul Lapkin</Link></li>
                                <li><Link to="#"><i class="fa fa-caret-right"></i> Sovzilla</Link></li>
                                <li><Link to="#"><i class="fa fa-caret-right"></i> Seccar</Link></li>
                            </ul>
                        </div>
                   </div>
                   <div className="col-md-3">
                   <div className="quick-links">
                            <h4>Social Links</h4>
                            <ul>
                                <li><Link to="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</Link></li>
                                <li><Link to="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</Link></li>
                                <li><Link to="#"><FontAwesomeIcon icon={faYoutube} /> Youtube</Link></li>
                                <li><Link to="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</Link></li>
                            </ul>
                        </div>
                   </div>
                   <div className="col-md-12">
                   <p className="text-center">All rights reserved by Shaker Hossain</p>
                   </div>
               </div>
               
            </div> 
        </div>
    );
};

export default Footer;