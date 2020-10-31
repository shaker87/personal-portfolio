import React from 'react';
import './PortFolioDetails.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PortFolioDetails = ({ port }) => {
    AOS.init({
        duration : 1000
      })
    return (

        <div  className="col-md-4 col-sm-6 col-xs-12">
            <div data-aos="zoom-in" className="card" style={{ width: '100%', marginBottom: '30px' }}>
                <img className="card-img-top img-fluid" src={port.images} alt="" srcset="" />
                <div class="card-body">
                    <h5 class="card-title">{port.title}</h5>
                    <p class="card-text">{port.description}</p>

                </div>
                <div class="card-footer d-flex justify-content-around">
                    <a href={port.liveUrl} target="_blank" rel="noreferrer" class="btn btn-outline-primary">Live View</a>
                    <a href={port.gitUrl} target="_blank" rel="noreferrer" class="btn btn-outline-primary">Github</a>
                </div>
            </div>
        </div>

    );
};

export default PortFolioDetails;