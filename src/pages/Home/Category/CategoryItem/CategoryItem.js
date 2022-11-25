import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CategoryItem.css'

const CategoryItem = ({ category }) => {
    const { title, thumbnail_url, category_id } = category;
    return (
        <Col lg='2' >
            <Link to={`/categories/${category_id}`} className='category-item-link'>
                <div className="category-image">
                    <img src={thumbnail_url} alt="category images" />
                </div>
                <div className="categoryTitle text-center mt-3">
                    <h4 className='category-title'>{title}</h4>
                </div>
            </Link>
        </Col>
    );
};

export default CategoryItem;