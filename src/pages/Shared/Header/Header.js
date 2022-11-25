import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const { user, logout } = useContext(AuthContext)

       const handleForLogout=()=>{
        logout()
        .then(()=>{

        })
        .catch(error=>{})
       }

    return (
        <Navbar expand="lg" className='navbar'>
            <Container>
                <Navbar.Brand><NavLink to={'/'}><img src="logo.svg" alt="logo" className='logo' /></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav d-flex align-items-center">
                    <Nav className="m-auto ">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/blog'}>Blog</NavLink></li>
                        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
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