import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryItem from '../CategoryItem/CategoryItem';

const Category = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='py-5'>
            <Container>
                <div className="title mb-4">
                    <h3 className='section_heading'>Categories</h3>
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