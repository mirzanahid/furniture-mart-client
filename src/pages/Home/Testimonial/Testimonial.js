import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Testimonial.css';
import { FaStar, FaRegStar } from "react-icons/fa";
import { Container } from 'react-bootstrap';


const Testimonial = () => {
    return (
        <Container>
            <div className="title mt-5">
                <h3>Testimonials</h3>
            </div>
            <Carousel variant="dark">
                <Carousel.Item>

                    <Carousel.Caption>
                        <ul className='testimonial-star mb-3'>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaRegStar></FaRegStar></li>
                        </ul>
                        <p className='testimonial_feedback'>"A furniture mart is very fantastic! Great customer support from beginning to end of the process. They are really informed and go the extra mile at every stage. I would recommend them unreservedly."</p>

                        <div className="customer_details">
                            <div className="customer">
                                <img src="https://i.ibb.co/yW5fZrk/Avatar-2.png" alt="Avatar-2" />
                            </div>
                            <h5>Anthony M. Frigo</h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <ul className='testimonial-star mb-3'>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                        </ul>
                        <p className='testimonial_feedback'>"Excellent customer service! Whenever I needed something they were there for me. Thank you guys"</p>

                        <div className="customer_details">
                            <div className="customer">
                                <img src="https://i.ibb.co/92n6Dnd/Avatar-1.png" alt="Avatar-2" />
                            </div>
                            <h5>Maxine J.</h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <Carousel.Caption>
                        <ul className='testimonial-star mb-3'>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaRegStar></FaRegStar></li>
                        </ul>
                        <p className='testimonial_feedback'>
                            " Best customer service. I really appreciate all the efforts. From customer service department he put on solving my issue. I was pleasantly surprised. Great work!""
                        </p>

                        <div className="customer_details">
                            <div className="customer">
                                <img src="https://i.ibb.co/XfnY689/Avatar.png" alt="Avatar-2" />
                            </div>
                            <h5>Marjorie J. Brock</h5>
                        </div>


                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>

    );
};



export default Testimonial;