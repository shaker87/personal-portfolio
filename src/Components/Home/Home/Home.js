import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import About from '../About/About';
import BreakComponents from '../BreakComponents/BreakComponents';
import Service from '../Service/Service';
import PortFolio from '../PortFolio/PortFolio';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakComponents></BreakComponents>
            <About></About>
            <BreakComponents></BreakComponents>
            <Service></Service>
            <BreakComponents></BreakComponents>
            <PortFolio></PortFolio>
        </div>
    );
};

export default Home;