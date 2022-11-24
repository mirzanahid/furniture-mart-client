import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {



    return (
        <Navbar expand="lg" className='navbar'>
            <Container>
                <Navbar.Brand href="#home"><img src="logo.svg" alt="logo" className='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav d-flex align-items-center">
                    <Nav className="m-auto ">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/blog'}>Blog</NavLink></li>
                        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                        <li><NavLink to={'/login'}>Login</NavLink></li>
                        <li><NavLink to={'/signup'}>Signup</NavLink></li>
                      
                    </Nav>
                    <Link className="regular-btn header-btn lg:ms-auto">Login</Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;