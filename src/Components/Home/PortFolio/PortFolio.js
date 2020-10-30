import React from 'react';
import './PortFolio.css';

import emaJohn from '../../../Images/ema-john.png';
import creativeAgency from '../../../Images/creative-agency.png';
import travelGuru from '../../../Images/travel-guru.jpg';
import volunteer from '../../../Images/volunteer.png';
import doctoPortal from '../../../Images/doctor-portal.png';
import hotGadget from '../../../Images/hot-gadget.png';
import PortFolioDetails from '../PortFolioDetails/PortFolioDetails';

const portFolioData = [
    {
        title: 'Ema-John E-commerce Apllication',
        images: emaJohn,
        description: 'Ema-John is a e-commerce website. It is build with React js, node js, mongoose, express. User can, More.',
        gitUrl: 'https://github.com/shaker87/ema-john-simple-client',
        liveUrl: 'https://ema-simple.firebaseapp.com/'
    },
    {
        title: 'Creative Agency Web Application',
        images: creativeAgency,
        description: 'A Website for a softwre agency with responsive ui. It is build with React js, Node js, Mongose, express.',
        gitUrl:'https://github.com/shaker87/creative-agency-client',
        liveUrl: 'https://creative-agency-2de70.firebaseapp.com/'
    },
    {
        title: 'Volunteer Network Web Application',
        images: volunteer,
        description: 'A volunteer Network is a volunteer management system. Volunteer can add him/her activities & create event.',
        gitUrl:'https://github.com/shaker87/volunteer-network-client',
        liveUrl: 'https://volunteer-network-a4ef6.firebaseapp.com/'
    },
    {
        title: 'Travel Guru simple Web Application',
        images: travelGuru,
        description: 'Travel guru is a travel agency web application. It is build with React js, Node js, Mongose, express',
        gitUrl:'',
        liveUrl: 'https://travel-guru-2477b.firebaseapp.com/'
    },
    {
        title: 'Doctor Portal simple Web Application',
        images: doctoPortal,
        description: 'Doctor portal is a patient and doctor management web application. A Patient can add booking and ...more',
        gitUrl:'https://github.com/shaker87/doctors-portal-client',
        liveUrl: 'https://doctor-portal-b3098.firebaseapp.com/'
    },
    {
        title: 'Hot Gadget E-commerce Apllication',
        images: hotGadget,
        description: 'Hot gadget is a static ecommerce application. It is build with html, css, bootstrap & javascript.',
        gitUrl:'https://github.com/shaker87/hot-gadget-ecommerce',
        liveUrl: 'https://shaker87.github.io/hot-gadget-ecommerce/'
    }

]

const PortFolio = () => {
    return (
        <section className="portFolio-area">
            <div className="container">

                <div class="section-title">
                    <h1>PORTFOLIO</h1>
                    <div className="br-top"></div>
                    <div className="br-middle"></div>
                    <div className="br-bottom"></div>
                </div>
                <div className="row mt-5">
                    {
                        portFolioData.map(port => <PortFolioDetails port={port} key={port.title}></PortFolioDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default PortFolio;