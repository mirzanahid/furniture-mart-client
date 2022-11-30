import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import banner1 from '../../../assets/banner1.jpg';
import banner2 from '../../../assets/banner2.jpg';
import banner3 from '../../../assets/banner3.jpg';

import './Banner.css';
const Banner = () => {
    return (
        <Carousel className='banner'>
            <Carousel.Item interval={6000}>
                <img
                    className="d-block w-100 h-100 slider-image"
                    src={banner1}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <div className="overlay">
                        <h3 className='banner-heading'>Get Low prices and best quality furniture</h3>
                        <p className='banner-pra'>Used furniture is the great resource which is low price but in best quality</p>
                        <Link className='regular-btn'>Shop Now</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={6000}>
                <img
                    className="d-block w-100 h-100 slider-image"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <div className="overlay">
                        <h3 className='banner-heading'>Renovate your home</h3>
                        <p className='banner-pra'>Buy used furniture at a cheaper rate!</p>
                        <Link className='regular-btn'>Shop Now</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100 slider-image"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <div className="overlay">
                        <h3 className='banner-heading'>Your perfect room</h3>
                        <p className='banner-pra'>Sells what you don't need and buy what you need.</p>
                        <Link className='regular-btn'>Shop Now</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;