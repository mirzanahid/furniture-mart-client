import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CategoriesSingle from '../CategoriesSingle/CategoriesSingle';
import CategoriesSingleModal from '../CategoriesSingle/CategoriesSingleModal/CategoriesSingleModal';

const Categories = () => {
    const [show, setShow] = useState(false);

    const categories = useLoaderData()

    return (
        <div>
            <h1>this is category items</h1>
            <Container>
                <Row className='my-5'>
                    {
                        categories.map(categorySingle => <CategoriesSingle key={categorySingle._id} setShow={setShow} categorySingle={categorySingle}></CategoriesSingle>)
                    }
                </Row>
            </Container>
            <Container>
                <Row>
                    {
                        <CategoriesSingleModal setShow={setShow} show={show}></CategoriesSingleModal>
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Categories;