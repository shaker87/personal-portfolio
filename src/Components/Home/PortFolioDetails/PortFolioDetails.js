import React from 'react';
import { Link } from 'react-router-dom';
import './PortFolioDetails.css';

const PortFolioDetails = ({ port }) => {
    return (

        <div className="col-md-4">
            <div className="card" style={{ width: '100%', marginBottom: '30px' }}>
                <img className="card-img-top" src={port.images} alt="" srcset="" />
                <div class="card-body">
                    <h5 class="card-title">{port.title}</h5>
                    <p class="card-text">{port.description}</p>

                </div>
                <div class="card-body d-flex justify-content-around">
                    <Link to="#" class="btn btn-primary">Live View</Link>
                    <Link to="#" class="btn btn-primary">Github</Link>
                </div>
            </div>
        </div>

    );
};

export default PortFolioDetails;