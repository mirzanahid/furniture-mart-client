import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import googleicon from '../../../assets/google.png';
import './Signup.css'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, formState: { errors }, watch, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate();


    // location state
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = data => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('sign up successful.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserToDb(data.name, data.email, data.role)
                        navigate(from, { replace: true })
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.error(error)
                if (error.message) {
                    setSignUpError('This email already in used please try another. ')
                }

            })

        const saveUserToDb = (name, email, role) => {
            const user = {
                name,
                email,
                role
            };
            fetch(`http://localhost:5000/users`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data)
                })

        }


    }
    return (
        <div className='furnitureMart-form'>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col lg='6'>
                        <div className="signup-login-form">
                            <Form onSubmit={handleSubmit(handleSignIn)} >
                                <h2 className='signup-heading'>Sign Up</h2>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" {...register("name", { required: "this field is required" })} placeholder="Enter Name" />
                                    {errors.name && <p className='error-text' role="alert">{errors.name?.message}</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" {...register("email", { required: "this field is required" })} placeholder="Enter Email" />
                                    {errors.email && <p className='error-text' role="alert">{errors.email?.message}</p>}
                                </Form.Group>
                                <Form.Label>What you want to do?</Form.Label>
                                <Form.Select className="mb-3" {...register("role", { required: true })}>
                                    <option defaultChecked value="buy">Buy</option>
                                    <option value="sell">Sell</option>
                                </Form.Select>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" {...register("password", { required: "this field is required" })} placeholder="Enter Password" />
                                    {errors.password && <p className='error-text' role="alert">{errors.password?.message}</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" {...register("confirmPassword", {
                                        required: "this field is required", validate: data => {
                                            if (watch('password') !== data) {
                                                return 'password and confirm password not matched'
                                            }

                                        }
                                    })} placeholder="Enter Confirm Password" />
                                    {
                                        errors.confirmPassword && <p className='error-text' role="alert">{errors.confirmPassword?.message}</p>

                                    }
                                </Form.Group>
                                <p className='error-text' role="alert">{signUpError}</p>
                                <input className='submit-btn' value="Sign UP" type="submit" />
                                <p className='signUp-foot mt-3'>Already have an account? <Link className='form-footer-link' to={'/login'}>Log in</Link></p>
                                <p className='or'>Or</p>
                            </Form>
                            <div className="button-group">

                                <button className='social-signup'><img className='google-icon' src={googleicon} alt="google icon" /> Continue with Google</button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signup;