import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleForAddProduct = data => {
        console.log(data)
    }


    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

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
                                        <option defaultChecked value="buy">Select Location</option>
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
                                <Form.Group className="mb-3" controlId="yearOfPurchase">
                                    <Form.Label>Year of purchase:</Form.Label>
                                    <Form.Control type="text" {...register("purchaseYear", { required: "this field is required" })} placeholder="Purchase Year" />
                                    {errors.purchaseYear && <p className='error-text' role="alert">{errors.purchaseYear?.message}</p>}
                                </Form.Group>
                                <Form.Group controlId="imageFile" className="mb-3">
                                    <Form.Label>Default file input example:</Form.Label>
                                    <Form.Control className='imageFile' type="file"  {...register("imageFile", { required: "this field is required" })} />
                                    {errors.imageFile && <p className='error-text' role="alert">{errors.imageFile?.message}</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Label>Description:</Form.Label>
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