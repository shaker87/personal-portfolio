import React from 'react';
import './Blog.css';
import BlogPost from '../BlogPost/BlogPost';
import blogImages from '../../../Images/Web-Development.jpg';

const blogData = [
    {
        title: 'Top 5 skill web developer must know',
        images: blogImages,
        url: 'https://shaker-hossain87.medium.com/top-5-skill-web-developer-must-know-14607fc142fa'
    },
    {
        title: 'Top 5 skill web developer must know',
        images: blogImages,
        url: 'https://shaker-hossain87.medium.com/top-5-skill-web-developer-must-know-14607fc142fa'
    },
    {
        title: 'Top 5 skill web developer must know',
        images: blogImages,
        url: 'https://shaker-hossain87.medium.com/top-5-skill-web-developer-must-know-14607fc142fa'
    },
    {
        title: 'Top 5 skill web developer must know',
        images: blogImages,
        url: 'https://shaker-hossain87.medium.com/top-5-skill-web-developer-must-know-14607fc142fa'
    }
]

const Blog = () => {
    return (
        <section className="blog-area">
            <div className="container">

                <div class="section-title text-center">
                    <h1>Blog</h1>
                    <div class="border-top"></div>
                    <div class="border-middle"></div>
                    <div class="border-bottom"></div>
                </div>
                <div className="row">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}></BlogPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;