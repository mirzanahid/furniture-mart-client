import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CategoriesSingle from '../CategoriesSingle/CategoriesSingle';



const Categories = () => {


    const categories = useLoaderData()

    return (
        <div>
            <h1>this is category items</h1>
            <Container>
                <Row className='my-5'>
                    {
                        categories.map(categorySingle => <CategoriesSingle key={categorySingle._id}  categorySingle={categorySingle}></CategoriesSingle>)
                    }
                </Row>
            </Container>
            <Container>
                <Row>
                    {
                       
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Categories;