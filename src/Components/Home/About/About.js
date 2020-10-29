import React from 'react';
import './About.css';
import images from '../../../Images/1.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faMailBulk } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="about-image">
                            <img src={images} alt="" srcset="" />
                            <div className="p-bar">
                                <span>
                                    <h3>My skill</h3>
                                </span>
                                <h6>Javascript</h6>
                                <div className="progress">

                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                        aria-valuemax="100" style={{ width: '90%' }}>
                                        90%
                                    </div>
                                </div>

                                <h6>React</h6>
                                <div className="progress">

                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                                        aria-valuemax="100" style={{ width: '85%' }}>
                                        85%
                                    </div>
                                </div>
                                <h6>Node</h6>
                                <div className="progress">

                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                        aria-valuemax="100" style={{ width: '80%' }}>
                                        80%
                                    </div>
                                </div>
                                <h6>HTML & CSS</h6>
                                <div className="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                        aria-valuemax="100" style={{ width: '90%' }}>
                                        90%
                                    </div>
                                </div>

                                <h6>Bootstrap</h6>
                                <div className="progress">

                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                        aria-valuemax="100" style={{ width: '80%' }}>
                                        80%
                                    </div>
                                </div>
                                <h6>Material UI Design</h6>
                                <div className="progress">

                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                        aria-valuemax="100" style={{ width: '80%' }}>
                                        80%
                                    </div>
                                </div>

                                <h6>PHP</h6>
                                <div className="progress">

                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                        aria-valuemax="100" style={{ width: '60%' }}>
                                        60%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div class="abouts">
                            <h2>About Me</h2>
                            <p>Hi! My name is Shaker Hossain. I am a front-end developer, and I'm very passionate and dedicated
                            to my work. With 1 years ence as a professional front-end developer, I have acquired the skills
                            and knowledge necessary to make your project a success. I enjoy every step of the design
                            process, from discussion and collaboration to concept and execution, but I find the most
                                tion in seeing the finished product do everything for you that it was created to do.</p>
                        </div>
                        <div class="email-section">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Name:</th>
                                        <th>E-mail:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Shaker Hossain</td>
                                        <td><Link style={{ color: 'white' }} to="http://shaker.hossain87@gmail.com">shaker.hossain87@gmail.com</Link></td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>Phone:</th>
                                        <th>Twitter:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bor">
                                        <td>+8801866-568978</td>
                                        <td><Link style={{ color: 'white' }} to="http://helloexample@gmail.com">shaker-hossain</Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex justify-content-around">
                            <button className="btn btn-primary"><Link style={{ color: 'white', textDecoration: 'none' }} to="#">Send a message <FontAwesomeIcon icon={faMailBulk} /></Link></button>
                            <button className="btn btn-primary"><Link to="#" style={{ color: 'white', textDecoration: 'none' }}>Download Resume <FontAwesomeIcon icon={faDownload} /></Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;