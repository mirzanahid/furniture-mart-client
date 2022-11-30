import React, { useContext, useState } from 'react';
import { Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import CategoriesSingleModal from '../CategoriesSingleModal/CategoriesSingleModal';
import './CategoriesSingle.css';
import { FaCheckCircle } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';

const CategoriesSingle = ({ categorySingle }) => {
    const { user } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const { _id, product_title, location, original_price, selling_price, seller_name, used_year, photo, post_date, email } = categorySingle
    const handleShow = () => setShow(true);



    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`https://furniture-mart-server-xi.vercel.app/user/verity/${email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleForReport = () => {
        const reportProduct = {
            product_title: categorySingle.product_title,
            name: user?.displayName,
            product_id: _id,
            email: user?.email

        }
        fetch('https://furniture-mart-server-xi.vercel.app/report', {
            method: 'POST',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(reportProduct)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("your report for this product is successful")
            })
            .catch(error => console.error(error));
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
                    <p>Seller Name: <span>{seller_name} {sellers.isVerify === "true" ? <FaCheckCircle className='text-primary'></FaCheckCircle> : null}</span></p>
                    <button onClick={handleForReport} className='row_btn d-block '>Report</button>
                    <Link className='regular-btn mt-3' onClick={handleShow}>Book Now</Link>

                </div>
            </div>

            <>
                {
                    <CategoriesSingleModal setShow={setShow} show={show} categorySingle={categorySingle}></CategoriesSingleModal>
                }
            </>


        </Col>
    );
};

export default CategoriesSingle;