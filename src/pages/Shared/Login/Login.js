import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div>
              <Container>
                <Row className='d-flex justify-content-center'>
                    <Col lg='6'>
                        <div className="signup-login-form">
                            <Form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} >
                                <h2 className='signup-heading'>Log In</h2>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" {...register("firstName")} placeholder="First name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" {...register("password")} placeholder="Enter Password" />
                                </Form.Group>
                                <input className='submit-btn' value="Sign UP" type="submit" />
                                <p className='or'>Or</p>
                            </Form>
                            <div className="button-group">

                                <button className='social-signup'><img className='google-icon' alt="" /> Continue with Google</button>
                            </div>
                            <p className='signUp-foot'>Already have an account? <Link to={'/signup'}>Sign Up</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;