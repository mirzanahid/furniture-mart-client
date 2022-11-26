import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Alert from 'react-bootstrap/Alert';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

const DashboardLayout = () => {
    const { show, setShow } = useContext(AuthContext)

    const handleClose = () => setShow(false);
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='4' className='d-none d-lg-block'>
                        <div className="dash_navbar">
                            <ul className='dash-navbar-items'>
                                <li><NavLink>My Orders</NavLink></li>
                                <li><NavLink>Add Product</NavLink></li>
                                <li><NavLink>All Sellers</NavLink></li>
                                <li><NavLink>All Buyers</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg='8'>
                        <h1>this is content</h1>
                        <Outlet></Outlet>
                    </Col>
                </Row>

                <>
                    <Offcanvas show={show} onHide={handleClose} responsive="lg" classNam="d-lg-none">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                                    <Col lg='4' className=' d-lg-none'>
                                        <div className="dash_navbar">
                                            <ul className='dash-navbar-items'>
                                                <li><NavLink>My Orders</NavLink></li>
                                                <li><NavLink>Add Product</NavLink></li>
                                                <li><NavLink>All Sellers</NavLink></li>
                                                <li><NavLink>All Buyers</NavLink></li>
                                            </ul>
                                        </div>
                                    </Col>
                        </Offcanvas.Body>
                    </Offcanvas>
                </>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;