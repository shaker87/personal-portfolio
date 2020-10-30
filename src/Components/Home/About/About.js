import React from 'react';
import './About.css';
import images from '../../../Images/shakerProfile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-xs-12">
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
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <div class="abouts">
                            <h2>About Me</h2>
                            <p>Hi! My name is Shaker Hossain. I am a MERN stack developer, and I'm very passionate and dedicated
                            to my work. With 1 years ence as a professional MERN stack developer, I have acquired the skills
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
                                        <td>shaker.hossain87@gmail.com</td>
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
                                        <td>Shaker87</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-5">
                            <a href="https://drive.google.com/file/d/1JJDPQFgEWvjdGOHIvuUYRe3m5JpC2YG_/view?usp=sharing" target="_blank" rel="noreferrer"><button className="btn btn-primary">Download Resume <FontAwesomeIcon icon={faDownload} /></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;