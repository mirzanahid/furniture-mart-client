import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import googleicon from '../../../assets/google.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')

    const handleForLogin = data => {
        setLoginError('')
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error.message);
                if (error.message) {
                    setLoginError('your email and password is incorrect');
                }

            })
    }
    return (
        <div>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col lg='6'>
                        <div className="signup-login-form">
                            <Form onSubmit={handleSubmit(handleForLogin)} >
                                <h2 className='signup-heading'>Log In</h2>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" {...register("email", { required: "this field is required" })} placeholder="Enter Email" />
                                </Form.Group>
                                {errors.email && <p className='error-text' role="alert">{errors.email?.message}</p>}
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" {...register("password", { required: "this field is required" })} placeholder="Enter Password" />
                                </Form.Group>
                                {errors.password && <p className='error-text' role="alert">{errors.password?.message}</p>}
                                <p className='error-text' role="alert">{loginError}</p>

                                <input className='submit-btn' value="Sign UP" type="submit" />
                                <p className='signUp-foot mt-3'>New to Furniture Mart?? <Link className='form-footer-link' to={'/signup'}>Sign Up</Link></p>
                                <p className='or'>Or</p>

                            </Form>
                            <div className="button-group">

                                <button className='social-signup'><img className='google-icon' src={googleicon} alt="" /> Continue with Google</button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;