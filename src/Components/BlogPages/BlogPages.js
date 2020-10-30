import React from 'react';
import Blog from '../Home/Blog/Blog';
import BreakComponents from '../SharedComponents/BreakComponents/BreakComponents';
import Footer from '../SharedComponents/Footer/Footer';
import Navbar from '../SharedComponents/Navbar/Navbar';
import ScrollTop from 'react-scrolltop-button';

const BlogPages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Blog></Blog>
            <BreakComponents></BreakComponents>
            <Footer></Footer>
            <ScrollTop />;
        </div>
    );
};

export default BlogPages;