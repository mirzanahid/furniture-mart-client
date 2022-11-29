import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import googleicon from '../../../assets/google.png';
import './Signup.css'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../../hooks/useToken';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';



const auth = getAuth(app)
// google provider
const provider = new GoogleAuthProvider();

const Signup = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, formState: { errors }, watch, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setcreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    // location state
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
            toast.success('sign up successful.')
        };
    }, [token, navigate, from])


    const handleSignIn = data => {
        setSignUpError('')
        // create new user 
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {

                        saveUserToDb(user?.displayName, user?.email, data.role)

                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.error(error)
                if (error.message) {
                    setSignUpError('This email already in used please try another. ')
                }
            })
    };

    // log in with google 
    const handlerForGoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                saveUserToDb(user?.displayName, user?.email, "buy")
            })
            .catch(error => {
                console.error('error', error)
            })
    };

    // save user to database
    const saveUserToDb = (name, email, role) => {
        const user = {
            name,
            email,
            role,
            verify: "false"
        };
        fetch(`https://furniture-mart-server-pink.vercel.app/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setcreatedUserEmail(email)
            })
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

                                <button className='social-signup' onClick={handlerForGoogleSignin}><img className='google-icon' src={googleicon} alt="google icon" /> Continue with Google</button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signup;