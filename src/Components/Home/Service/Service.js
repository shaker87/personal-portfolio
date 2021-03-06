import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Service.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const serviceData = [
    {
        title: 'E-commerce Apllication Design',
        icon: 'icon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, debitis!'
    },
    {
        title: 'Agency Apllication Design',
        icon: 'icon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, debitis!'
    },
    {
        title: 'Hospital Mangement AppLication Design',
        icon: 'icon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, debitis!'
    },
    {
        title: 'Blog Application Design',
        icon: 'icon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, debitis!'
    },
    {
        title: 'Inventory Apllication Design',
        icon: 'icon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, debitis!'
    },
    {
        title: 'Portfolio Apllication Design',
        icon: 'icon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, debitis!'
    }

]

const Service = () => {
    AOS.init({
        duration : 1000
      })
    return (
        <section className="service-area">
            <div className="container">

                <div class="section-title">
                    <h1>SERVICE</h1>
                    <div className="b-top"></div>
                    <div className="b-middle"></div>
                    <div className="b-bottom"></div>
                </div>
                <div className="row">
                    {
                        serviceData.map(service => <ServiceDetails service={service} key={service.title}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;