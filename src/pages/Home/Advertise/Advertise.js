import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AdvertiseSingle from './AdvertiseSingle';

const Advertise = () => {
    const { data: advertises = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('https://furniture-mart-server-xi.vercel.app/advertise');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='mb-5'>
            <Container >
            <div className="title my-5">
                    <h3>Popular furniture</h3>
                </div>
                <Row className='mt-5'>
                    {
                        advertises.map(advertise => <AdvertiseSingle key={advertise?._id} advertise={advertise}></AdvertiseSingle>)
                    }
                </Row>
            </Container >
        </div>

    );
};

export default Advertise;