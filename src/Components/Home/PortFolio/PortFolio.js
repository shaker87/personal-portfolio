import React from 'react';
import './PortFolio.css';

import portImage from '../../../Images/p2.png';
import PortFolioDetails from '../PortFolioDetails/PortFolioDetails';

const portFolioData = [
    {
        title: 'E-commerce Apllication Design',
        image: portImage,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, debitis!'
    },
    {
        title: 'Agency Apllication Design',
        image: portImage,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, debitis!'
    },
    {
        title: 'Hospital Mangement AppLication Design',
        image: portImage,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, debitis!'
    },
    {
        title: 'Blog Application Design',
        image: portImage,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, debitis!'
    },
    {
        title: 'Inventory Apllication Design',
        image: portImage,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, debitis!'
    },
    {
        title: 'Portfolio Apllication Design',
        image: portImage,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, debitis!'
    }

]

const PortFolio = () => {
    return (
        <section className="portFolio-area">
            <div className="container">

                <div class="section-title">
                    <h1>PORTFOLIO</h1>
                    <div class="border-top"></div>
                    <div class="border-middle"></div>
                    <div class="border-bottom"></div>
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