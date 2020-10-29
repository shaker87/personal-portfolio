import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({ service }) => {
    return (
        <div className="col-md-4">
            <div className="service-card c1">
                <div className="card-padding">
                    <Link to="#"><i class="fa fa-code"></i></Link>
                    <h2>{service.title}</h2>
                    <div className="border"></div>
                    <p>{service.description}</p>
                </div>
                <span className="BorderTopBottom"></span>
                <span className="BorderLeftRight"></span>
            </div>
        </div>
    );
};

export default ServiceDetails;