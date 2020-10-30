import React from 'react';
import Service from '../Home/Service/Service';
import BreakComponents from '../SharedComponents/BreakComponents/BreakComponents';
import Footer from '../SharedComponents/Footer/Footer';
import Navbar from '../SharedComponents/Navbar/Navbar';
import ScrollTop from 'react-scrolltop-button';

const ServicePages = () => {
    return (
    <div>
            <Navbar></Navbar>
            <Service></Service>
            <BreakComponents></BreakComponents>
            <Footer></Footer>
            <ScrollTop></ScrollTop>
        </div>
    );
};

export default ServicePages;