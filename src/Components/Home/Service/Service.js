import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Service.css';

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
    return (
        <section className="service-area">
            <div className="container">

                <div class="section-title">
                    <h1>SERVICE</h1>
                    <div class="border-top"></div>
                    <div class="border-middle"></div>
                    <div class="border-bottom"></div>
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