import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Advertise from '../Advertise/Advertise';


import Banner from '../Banner/Banner';
import Category from '../Category/Category/Category';
import OurPartner from '../OurPartner/OurPartner';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {

    const { data: advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise');
            const data = await res.json();
            return data;
        }
    })
    // console.log(advertise)
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