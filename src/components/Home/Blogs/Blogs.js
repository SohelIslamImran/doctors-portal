import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import blogsData from '../../../data/blogsData';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';

const Blogs = () => {
    return (
        <section className="blogs my-5 py-5">
            <Container>
                <div className="text-center">
                    <h5>OUR BLOG</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <CardDeck className="mt-5">
                    {
                        blogsData.map((blog, idx) => <BlogPost key={idx} blog={blog} />)
                    }
                </CardDeck>
            </Container>
        </section>
    );
};

export default Blogs;