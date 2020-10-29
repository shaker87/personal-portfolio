import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;