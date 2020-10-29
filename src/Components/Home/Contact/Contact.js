import React from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="contact-area">
            <div className="container">
                <div class="section-title">
                    <h1 className="text-center">GET IN TOUCH</h1>
                    <div class="border-top"></div>
                    <div class="border-middle"></div>
                    <div class="border-bottom"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input name="name" ref={register} className="form-control custom-field-style" placeholder="Name" />
                            {errors.name && <span style={{color: 'white' }}>This field is requiwhite</span>} <br />

                            <input name="email" ref={register({ requiwhite: true })} className="form-control custom-field-style" placeholder="E-mail" />
                            {errors.email && <span style={{color: 'white' }}>This field is requiwhite</span>} <br />

                            <input name="subject" ref={register({ requiwhite: true })} className="form-control custom-field-style" placeholder="Subject" />
                            {errors.subject && <span style={{color: 'white' }}>This field is requiwhite</span>} <br />

                            <textarea name="message" ref={register({ requiwhite: true })} className="form-control custom-field-style" placeholder="Your Message Write Here" />
                            {errors.message && <span style={{color: 'white' }}>This field is requiwhite</span>}
                            <br />
                            <input type="submit" className="btn btn-primary"/>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div style={{color: 'white' }}>
                            <h3>Contact Information</h3>
                            <p>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                            <div style={{borderLeft: '2px solid gray', color: 'white'}}>
                                <div className="contact-info ml-2">
                                    <h4 style={{color:'#24ACF2'}}>Name</h4>
                                    <h5>Shaker Hossain</h5>
                                    <h4 style={{color:'#24ACF2'}}>Mobile</h4>
                                    <h5>+8801866568978</h5>
                                    <h4 style={{color:'#24ACF2'}}>E-mail</h4>
                                    <h5>shaker.hossain87@gmail.com</h5>
                                    <h4 style={{color:'#24ACF2'}}>Locations</h4>
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