import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CategoriesSingle.css'

const CategoriesSingle = ({ categorySingle, setShow }) => {
    const { product_title, location, original_price, selling_price, seller_name, used_year, photo, post_date } = categorySingle
    console.log(categorySingle)
    console.log(used_year, post_date)
    const handleShow = () => setShow(true);
    return (
        <Col lg='4'>
            <div className="categorySingle">
                <div className="product_image">
                    <img src={photo} alt="" />
                </div>
                <div className="category_text">
                    <h2 className='cate-item-title'>{product_title}</h2>
                    <p className='cate-other-info'>Location: <span>{location}</span></p>
                    <p>Resale price:$<span>{selling_price}</span></p>
                    <p>Original Price:$<span>{original_price}</span></p>
                    <p>Years of used: <span>{used_year}</span> Years</p>
                    <p>Post: <span>{post_date.slice(0, 15)}</span></p>
                    <p>Seller Name: <span>{seller_name}</span></p>
                    <Link className='regular-btn mt-3' onClick={handleShow}>Book Now</Link>
                </div>
            </div>
        </Col>
    );
};

export default CategoriesSingle;