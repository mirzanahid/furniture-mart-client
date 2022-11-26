import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Alert from 'react-bootstrap/Alert';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
    const { show, setShow } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const handleClose = () => setShow(false);
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='3' className='d-none d-lg-block'>
                        <div className="dash_navbar">
                            <ul className='dash-navbar-items'>
                                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/myOrders"}>My Orders</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/allProducts"}>Add A Product</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/myProducts"}>My Products</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/myBuyers"}>My Buyers</NavLink></li>
                                {
                                    isAdmin &&
                                    <>
                                        <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/allSellers"}>All Sellers</NavLink></li>
                                        <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/allBuyers"}>All Buyers</NavLink></li>
                                        <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/allBuyers"}>Reported Items</NavLink></li>
                                    </>
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>
                </Row>

                <>
                    <Offcanvas show={show} onHide={handleClose} responsive="lg" className="d-lg-none">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Col lg='4' className=' d-lg-none'>
                                <div className="dash_navbar">
                                    {/* <ul className='dash-navbar-items'>
                                                <li><NavLink>My Orders</NavLink></li>
                                                <li><NavLink>Add Product</NavLink></li>
                                                <li><NavLink>All Sellers</NavLink></li>
                                                <li><NavLink>All Buyers</NavLink></li>
                                            </ul> */}
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