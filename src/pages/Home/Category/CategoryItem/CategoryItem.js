import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CategoryItem.css'

const CategoryItem = ({ category }) => {
    const { title, thumbnail_url, category_id } = category;
    return (
        <Col lg='3' md='6' >
            <Link to={`/categories/${category_id}`} className='category-item-link'>
                <div className="category-image">
                    <img src={thumbnail_url} alt="category images" />
                </div>
                <div className="categoryTitle text-center mt-3">
                    <p className='category-title'>{title}</p>
                </div>
            </Link>
        </Col>
    );
};

export default CategoryItem;