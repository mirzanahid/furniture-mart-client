import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import googleicon from '../../../assets/google.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../../hooks/useToken';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const auth = getAuth(app)
// google provider
const provider = new GoogleAuthProvider();

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')
    const [registerdEmail, setRegisterEmail] = useState('')
    const [token] = useToken(registerdEmail)
    const navigate = useNavigate()


    // location state
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    useEffect(() => {
        if (token) {
            toast.success('Login successful.')
            navigate(from, { replace: true })
        }
    }, [token, navigate, from])


    const handleForLogin = data => {
        setLoginError('')
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                setRegisterEmail(user.email)
                console.log(user)
            })
            .catch(error => {
                console.error(error.message);
                if (error.message) {
                    setLoginError('your email and password is incorrect');
                }

            })
    }

    //log in with google 
    const handlerForGoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                saveUserToDb(user?.displayName, user?.email, "buy")
            })
            .catch(error => {
                console.error('error', error)
            })
    }

    // save user to database
    const saveUserToDb = (name, email, role) => {
        const user = {
            name,
            email,
            role
        };
        fetch(`http://localhost:5000/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setRegisterEmail(email)
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

                                <input className='submit-btn' value="Log In" type="submit" />
                                <p className='signUp-foot mt-3'>New to Furniture Mart?? <Link className='form-footer-link' to={'/signup'}>Sign Up</Link></p>
                                <p className='or'>Or</p>

                            </Form>
                            <div className="button-group">

                                <button className='social-signup' onClick={handlerForGoogleSignin}><img className='google-icon' src={googleicon} alt="" /> Continue with Google</button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;