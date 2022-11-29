import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';
import logo from '../../../assets/logo1.png'

const Header = () => {
    const { user, logout, setShow } = useContext(AuthContext)

    const handleForLogout = () => {
        logout()
            .then(() => {

            })
            .catch(error => { })
    }
    const handleShow = () => setShow(true);
    return (
        <Navbar expand="lg" className='navbar-main'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Brand><NavLink to={'/'}><img src={logo} alt="logo" className='logo' /></NavLink></Navbar.Brand>
                <Link onClick={handleShow} className='navbar-toggler-icon d-lg-none'></Link>
                <Navbar.Collapse id="basic-navbar-nav d-flex align-items-center">
                    <Nav className="m-auto ">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/blog'}>Blog</NavLink></li>
                        {
                            user?.uid ?
                                <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                                :
                                null
                        }
                    </Nav>
                    {
                        user?.uid ?
                            <Link to={"/login"} onClick={handleForLogout} className="regular-btn header-btn lg:ms-auto">Logout</Link>
                            :
                            <Link to={"/login"} className="regular-btn header-btn lg:ms-auto">Login</Link>
                    }



                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;