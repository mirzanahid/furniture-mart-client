import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);

    const navItems = <>

        {
            isBuyer &&
            <>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/myOrders"}>My Orders</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/myReports"}>My Reports</NavLink></li>
            </>
        }
        {
            isSeller &&
            <>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/myProducts"}>My Products</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/addProduct"}>Add A Product</NavLink></li>

            </>
        }
        {
            isAdmin &&
            <>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/allSellers"}>All Sellers</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/allBuyers"}>All Buyers</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={"/dashboard/allReport"}>Reported Items</NavLink></li>
            </>
        }
    </>



    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col className=''>
                        <div className="dash_navbar">
                            <ul className='dash-navbar-items'>
                                {navItems}
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;