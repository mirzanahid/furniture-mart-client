import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

import CategoryItem from '../CategoryItem/CategoryItem';

const Category = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://furniture-mart-server-xi.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='pt-2 lg:pt-5'>
            <Container>
                <div className="title my-5">
                    <h3>Categories</h3>
                </div>
                <Row>
                    {
                        categories.map(category => <CategoryItem key={category._id} category={category}></CategoryItem>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Category;