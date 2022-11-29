import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const imageHostKey = process.env.REACT_APP_img_key;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://furniture-mart-server-pink.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })


    const handleForAddProduct = data => {


        const image = data.imageFile[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        product_title: data.productName,
                        location: data.location,
                        phone: data.phone,
                        email: user?.email,
                        seller_name: user?.displayName,
                        original_price: data.buyingPrice,
                        selling_price: data.sellingPrice,
                        condition: data.conditionOfProduct,
                        category_id: data.category,
                        used_year: data.yearOfUsed,
                        photo: imgData.data.url,
                        description: data.description,
                        post_date: `${new Date()}`,
                        status: "available",
                        advertise: "0",
                    }

                    fetch('https://furniture-mart-server-pink.vercel.app/dashboard/addProduct', {
                        method: 'POST',
                        headers: {
                            'content-type': "application/json"
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {

                                navigate('/dashboard/myProducts')
                                toast("Product added successfully.")
                            }
                        })
                        .catch(error => console.error(error));

                }
            })


    }




    return (

        <div className='furnitureMart-form'>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col lg='6'>
                        <div className="signup-login-form">
                            <Form onSubmit={handleSubmit(handleForAddProduct)}>
                                <h2 className='signup-heading'>Add Product</h2>
                                <Form.Group className="mb-3" controlId="productName">
                                    <Form.Label >Product Name:</Form.Label>
                                    <Form.Control type="text" {...register("productName", { required: "this field is required" })} placeholder="Product Name" />
                                    {errors.productName && <p className='error-text' role="alert">{errors.productName?.message}</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="location">
                                    <Form.Label >Location:</Form.Label>
                                    <Form.Select className="mb-3" {...register("location", { required: true })}>
                                        <option defaultChecked>Select Location</option>
                                        <option value="Dhaka">Dhaka </option>
                                        <option value="Chittagong">Chittagong </option>
                                        <option value="Barisal">Barisal</option>
                                        <option value="Khulna ">Khulna </option>
                                        <option value="Mymensingh ">Mymensingh </option>
                                        <option value="Rajshahi ">Rajshahi </option>
                                        <option value="Sylhet">Sylhet</option>
                                        <option value="Rangpur">Rangpur</option>
                                    </Form.Select>
                                    {errors.location && <p className='error-text' role="alert">{errors.location?.message}</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label >Phone No:</Form.Label>
                                    <Form.Control type="text" {...register("phone", { required: "this field is required" })} placeholder="Enter Phone Number" />
                                    {errors.phone && <p className='error-text' role="alert">{errors.phone?.message}</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email address:</Form.Label>
                                    <Form.Control type="email" {...register("email")} defaultValue={user?.email} disabled />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="bPrice">
                                    <Form.Label >Purchase Price:</Form.Label>
                                    <Form.Control type="text" {...register("buyingPrice", { required: "this field is required" })} placeholder="Enter Purchase Price" />
                                    {errors.buyingPrice && <p className='error-text' role="alert">{errors.buyingPrice?.message}</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="sPrice">
                                    <Form.Label >Selling Price:</Form.Label>
                                    <Form.Control type="text" {...register("sellingPrice", { required: "this field is required" })} placeholder="Enter Selling Price" />
                                    {errors.sellingPrice && <p className='error-text' role="alert">{errors.sellingPrice?.message}</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="conditionOfProduct">
                                    <Form.Label>Current condition of the product:</Form.Label>
                                    <Form.Select className="mb-3" {...register("productCondition", { required: true })}>
                                        <option defaultChecked>Condition of your product</option>
                                        <option value="excellent">excellent</option>
                                        <option value="good">good</option>
                                        <option value="fair">fair</option>
                                    </Form.Select>
                                    {errors.productCondition && <p className='error-text' role="alert">{errors.productCondition?.message}</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="category">
                                    <Form.Label>Select Category:</Form.Label>
                                    <Form.Select className="mb-3" {...register("category", { required: true })}>
                                        <option defaultChecked>Select Category</option>
                                        {
                                            categories.map(category => <option key={category._id} value={category.category_id}>{category.title}</option>)
                                        }
                                        {errors.category && <p className='error-text' role="alert">{errors.category?.message}</p>}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="yearOfUsed">
                                    <Form.Label>Year of Used:</Form.Label>
                                    <Form.Control type="text" {...register("yearOfUsed", { required: "this field is required" })} placeholder="Year of Used" />
                                    {errors.purchaseYear && <p className='error-text' role="alert">{errors.purchaseYear?.message}</p>}
                                </Form.Group>
                                <Form.Group controlId="imageFile" className="mb-3">
                                    <Form.Label>Upload Product Image:</Form.Label>
                                    <Form.Control className='imageFile' type="file"  {...register("imageFile", { required: "this field is required" })} />
                                    {errors.imageFile && <p className='error-text' role="alert">{errors.imageFile?.message}</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Label>Product Description:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                        {...register("description", { required: "Enter Description" })}
                                    />
                                    {errors.description && <p className='error-text' role="alert">{errors.description?.message}</p>}
                                </Form.Group>
                                <input className='submit-btn' value="Submit" type="submit" />
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddProduct;