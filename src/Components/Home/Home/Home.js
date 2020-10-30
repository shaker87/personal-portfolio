import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import './Home.css';
import About from '../About/About';
import BreakComponents from '../../SharedComponents/BreakComponents/BreakComponents';
import Service from '../Service/Service';
import PortFolio from '../PortFolio/PortFolio';
import Review from '../Review/Review';
import Contact from '../Contact/Contact';
import Footer from '../../SharedComponents/Footer/Footer';
import ScrollTop from 'react-scrolltop-button';


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
            <BreakComponents></BreakComponents>
            <Review></Review>
            <BreakComponents></BreakComponents>
            <Contact></Contact>
            <BreakComponents></BreakComponents>
            <Footer></Footer>
            <ScrollTop />;
        </div>
    );
};

export default Home;