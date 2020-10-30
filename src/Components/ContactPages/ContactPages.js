import React from 'react';
import Contact from '../Home/Contact/Contact';
import BreakComponents from '../SharedComponents/BreakComponents/BreakComponents';
import Footer from '../SharedComponents/Footer/Footer';
import Navbar from '../SharedComponents/Navbar/Navbar';
import ScrollTop from 'react-scrolltop-button';

const ContactPages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Contact></Contact>
            <BreakComponents></BreakComponents>
            <Footer></Footer>
            <ScrollTop />;
        </div>
    );
};

export default ContactPages;