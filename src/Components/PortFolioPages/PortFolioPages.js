import React from 'react';
import PortFolio from '../Home/PortFolio/PortFolio';
import BreakComponents from '../SharedComponents/BreakComponents/BreakComponents';
import Footer from '../SharedComponents/Footer/Footer';
import Navbar from '../SharedComponents/Navbar/Navbar';
import ScrollTop from 'react-scrolltop-button';

const PortFolioPages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PortFolio></PortFolio>
            <BreakComponents></BreakComponents>
            <Footer></Footer>
            <ScrollTop></ScrollTop>
        </div>
    );
};

export default PortFolioPages;