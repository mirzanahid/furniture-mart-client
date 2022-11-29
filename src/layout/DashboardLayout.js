import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';

const DashboardLayout = () => {
    const { show, setShow } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);
    const handleClose = () => setShow(false);


    const navItems = <>
        {
            isBuyer &&
            <li><NavLink onClick={handleClose} className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/myOrders"}>My Orders</NavLink></li>
        }
        {
            isSeller &&
            <>
                <li><NavLink onClick={handleClose} className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/myProducts"}>My Products</NavLink></li>
                <li><NavLink onClick={handleClose} className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/addProduct"}>Add A Product</NavLink></li>

            </>
        }
        {
            isAdmin &&
            <>
                <li><NavLink onClick={handleClose} className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/allSellers"}>All Sellers</NavLink></li>
                <li><NavLink onClick={handleClose} className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/allBuyers"}>All Buyers</NavLink></li>
                <li><NavLink onClick={handleClose} className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/allReport"}>Reported Items</NavLink></li>
            </>
        }
    </>



    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='3' className='d-none d-lg-block'>
                        <div className="dash_navbar">
                            <ul className='dash-navbar-items'>
                                {navItems}
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
                            <Offcanvas.Title>Dashboard</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Col lg='4' className=' d-lg-none'>
                                <div className="dash_navbar">
                                    <ul className='dash-navbar-items'>
                                        {navItems}
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