import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceDetails.css';

const ServiceDetails = ({ service }) => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleOrderService = (title, service) => {
        const newAddedService = {...loggedInUser,service:service};
        console.log(newAddedService)
        setLoggedInUser(newAddedService);
        history.push(`/services/${title}`);
        
    }
    return (
        <div className="col-md-4 col-xs-12">
            <div onClick={()=> handleOrderService(service.title, service)} className="service-card c1">
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