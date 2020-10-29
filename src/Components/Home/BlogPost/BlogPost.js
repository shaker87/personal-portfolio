import React from 'react';
import './BlogPost.css';

const BlogPost = ({ blog }) => {
    return (
        <diiv className="col-md-4">
            <div className="card  mt-5" style={{ width: '100%', }}>
                <img src={blog.images} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                </div>
                <div className="card-footer">
                    <a className="btn-grad" href={blog.url}>Read More</a>
                </div>
            </div>
        </diiv>
    );
};

export default BlogPost;