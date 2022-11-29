import React from 'react';
import Advertise from '../Advertise/Advertise';


import Banner from '../Banner/Banner';
import Category from '../Category/Category/Category';
import OurPartner from '../OurPartner/OurPartner';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertise></Advertise>
            <Testimonial></Testimonial>
            <OurPartner></OurPartner>
        </div>
    );
};

export default Home;