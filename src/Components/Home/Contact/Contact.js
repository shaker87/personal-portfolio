import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_sG0KIB3KdSYDcPOSSxZZP");

const Contact = () => {
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('shaker1234', 'gmail87', e.target, 'user_sG0KIB3KdSYDcPOSSxZZP')
            .then((result) => {
                alert('Email sent successfully.');
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className="contact-area">
            <div className="container">
                <div class="section-title">
                    <h1 className="text-center">GET IN TOUCH</h1>
                    <div className="br-top"></div>
                    <div className="br-middle"></div>
                    <div className="br-bottom"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <form onSubmit={sendEmail}>
                            <div className="row pt-2 mx-auto">
                                <div className="col-10 form-group mx-auto">
                                    <input type="text" className="form-control" placeholder="Name" name="name" />
                                </div>
                                <div className="col-10 form-group pt-2 mx-auto">
                                    <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                </div>
                                <div className="col-10 form-group pt-2 mx-auto">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject" />
                                </div>
                                <div className="col-10 form-group pt-2 mx-auto">
                                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                </div>
                                <div className="col-10 pt-3 mx-auto">
                                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 contact-info">
                        <div style={{ color: 'white' }}>
                            <h3>Contact Information</h3>
                            <p>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                            <div style={{ borderLeft: '2px solid gray', color: 'white' }}>
                                <div className="contact-info ml-2">
                                    <h4 style={{ color: '#24ACF2' }}>Name</h4>
                                    <h5>Shaker Hossain</h5>
                                    <h4 style={{ color: '#24ACF2' }}>Mobile</h4>
                                    <h5>+8801866568978</h5>
                                    <h4 style={{ color: '#24ACF2' }}>E-mail</h4>
                                    <h5>shaker.hossain87@gmail.com</h5>
                                    <h4 style={{ color: '#24ACF2' }}>Locations</h4>
                                    <h5>Dhanmondi 8/A, Dhaka</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;