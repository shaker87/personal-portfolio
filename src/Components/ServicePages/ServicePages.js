import React from 'react';
import Service from '../Home/Service/Service';
import BreakComponents from '../SharedComponents/BreakComponents/BreakComponents';
import Footer from '../SharedComponents/Footer/Footer';
import Navbar from '../SharedComponents/Navbar/Navbar';

const ServicePages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Service></Service>
            <BreakComponents></BreakComponents>
            <Footer></Footer>
        </div>
    );
};

export default ServicePages;