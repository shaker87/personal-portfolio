import React from 'react';
import About from '../Home/About/About';
import BreakComponents from '../SharedComponents/BreakComponents/BreakComponents';
import Footer from '../SharedComponents/Footer/Footer';
import Navbar from '../SharedComponents/Navbar/Navbar';

const AboutPages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <About></About>
            <BreakComponents></BreakComponents>
            <Footer></Footer>

        </div>
    );
};

export default AboutPages;