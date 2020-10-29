import React from 'react';
import Blog from '../Home/Blog/Blog';
import BreakComponents from '../SharedComponents/BreakComponents/BreakComponents';
import Footer from '../SharedComponents/Footer/Footer';
import Navbar from '../SharedComponents/Navbar/Navbar';

const BlogPages = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Blog></Blog>
            <BreakComponents></BreakComponents>
            <Footer></Footer>
        </div>
    );
};

export default BlogPages;