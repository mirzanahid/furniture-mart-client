import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';
import logo from '../../../assets/logo1.png'

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [expanded, setExpanded] = useState(false);

    const handleForLogout = () => {
        logout()
            .then(() => {

            })
            .catch(error => { })
    }
    return (
        <Navbar expanded={expanded} expand="lg" className='navbar-main'>
            <Container>
                <Navbar.Brand><NavLink to={'/'}><img src={logo} alt="logo" className='logo' /></NavLink></Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav d-flex align-items-center">
                    <Nav className="m-auto ">
                        <li><NavLink onClick={() => setExpanded(false)} to={'/'}>Home</NavLink></li>
                        <li><NavLink onClick={() => setExpanded(false)} to={'/blog'}>Blog</NavLink></li>
                        {
                            user?.uid ?
                                <li><NavLink onClick={() => setExpanded(false)} to={'/dashboard'}>Dashboard</NavLink></li>
                                :
                                null
                        }
                    </Nav>
                    {
                        user?.uid ?
                            <p onClick={() => setExpanded(false)}> <Link to={"/login"} onClick={handleForLogout} className="regular-btn header-btn lg:ms-auto">Logout</Link></p>
                            :
                            <Link onClick={() => setExpanded(false)} to={"/login"} className="regular-btn header-btn lg:ms-auto">Login</Link>
                    }



                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;