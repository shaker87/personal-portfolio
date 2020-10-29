import React from 'react';
import { Link } from 'react-router-dom';
import './PortFolioDetails.css';

const PortFolioDetails = ({ port }) => {
    return (
        <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="port-box">
                <div className="p-img">
                    <img src={port.image} alt="" srcset="" />
                    <div className="image-hover">
                        <Link className="hover-icon" to="#"><i class="fa fa-eye"></i></Link>
                    </div>
                </div>
                <h4 className="mt-2">{port.title}</h4>
                <p>{port.description}</p>
                <div className="btn-box d-flex justify-content-around">
                    <button className="btn btn-dark"><Link className="text-white" to="#">Live View</Link></button>
                    <button className="btn btn-dark"><Link className="text-white" to="#">Github</Link></button>
                </div>
            </div>
        </div>
    );
};

export default PortFolioDetails;