import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CategoriesSingle from '../CategoriesSingle/CategoriesSingle';



const Categories = () => {


    const categories = useLoaderData()

    console.log(categories)

    return (
        <div>
            <div className="category_title_header">
                <h3>Product shows by Category</h3>
            </div>
            <Container>


                <Row className='my-5'>
                    {
                        categories.map(categorySingle => <CategoriesSingle key={categorySingle._id} categorySingle={categorySingle}></CategoriesSingle>)
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