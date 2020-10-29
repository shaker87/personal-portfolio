import React from 'react';
import PortFolio from '../Home/PortFolio/PortFolio';
import BreakComponents from '../SharedComponents/BreakComponents/BreakComponents';
import Footer from '../SharedComponents/Footer/Footer';
import Navbar from '../SharedComponents/Navbar/Navbar';

const PortFolioPages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PortFolio></PortFolio>
            <BreakComponents></BreakComponents>
            <Footer></Footer>
        </div>
    );
};

export default PortFolioPages;