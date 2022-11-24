import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import './Signup.css'

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className='furnitureMart-form'>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col lg='6'>
                        <div className="signup-login-form">
                            <Form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} >
                                <h2 className='signup-heading'>Sign Up</h2>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" {...register("firstName")} placeholder="First name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" {...register("firstName")} placeholder="First name" />
                                </Form.Group>
                                <Form.Label>What you want to do? sell or buy?</Form.Label>
                                <Form.Select className="mb-3" {...register("category", { required: true })}>
                                    <option defaultChecked value="buy">Buy</option>
                                    <option value="sell">Sell</option>
                                </Form.Select>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" {...register("password")} placeholder="Enter Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" {...register("confirmPassword")} placeholder="Enter Confirm Password" />
                                </Form.Group>
                                <input className='submit-btn' value="Sign UP" type="submit" />
                                <p className='or'>Or</p>
                            </Form>
                            <div className="button-group">

                                <button className='social-signup'><img className='google-icon' alt="" /> Continue with Google</button>
                            </div>
                            <p className='signUp-foot'>Already have an account? <Link to={'/login'}>Log in</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signup;