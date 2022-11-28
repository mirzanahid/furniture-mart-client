import React, { useContext, useState } from 'react';
import { Col } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import CategoriesSingleModal from '../Category/CategoriesSingleModal/CategoriesSingleModal';





const AdvertiseSingle = ({ advertise }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const { product_title, location, original_price, selling_price, seller_name, used_year, photo, post_date } = advertise
    const categorySingle = advertise;
    // location state




    const handleShow = () => {
        if (!user?.uid) {
            console.log('hello')
            navigate("/login")

        }
        else {
            setShow(true)
        }

    }


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
                    {/* <button onClick={handleForReport} className='row_btn d-block '>Report</button> */}
                    <Link className='regular-btn mt-3' onClick={handleShow}>Book Now</Link>
                </div>
            </div>

            <>

            </>


        </Col>
    );
};

export default AdvertiseSingle;