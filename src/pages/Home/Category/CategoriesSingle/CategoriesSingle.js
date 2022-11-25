import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CategoriesSingle.css'

const CategoriesSingle = () => {
    return (
        <Col lg='4'>
            <div className="categorySingle">
                <div className="product_image">
                    <img src="https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="category_text">
                    <h2 className='cate-item-title'>title</h2>
                    <p className='cate-other-info'>Location: <span>janina</span></p>
                    <p>Resale price:$ <span>200</span></p>
                    <p>Original Price:$ <span>200</span></p>
                    <p>Years of used: <span>2</span> Years</p>
                    <p>Post: <span>Date</span></p>
                    <p>Seller Name: <span>Nahid</span></p>
                    <Link className='regular-btn mt-3'>Book Now</Link>
                </div>
            </div>
        </Col>
    );
};

export default CategoriesSingle;