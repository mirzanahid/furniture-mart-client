import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main';
import Blog from '../pages/Blog/Blog';
import Error from '../pages/Shared/Error/Error';
import Categories from '../pages/Home/Category/Categories/Categories';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Shared/Login/Login';
import Signup from '../pages/Shared/Signup/Signup';
import PrivateRoute from './PrivateRoute';
import MyOrders from '../pages/Dashboard/Buyers/MyOrders/MyOrders';
import AddProduct from '../pages/Dashboard/Sellers/AddProduct/AddProduct';
import Buyers from '../pages/Dashboard/Buyers/Buyers/Buyers';
import Sellers from '../pages/Dashboard/Sellers/Sellers/Sellers';
import MyProducts from '../pages/Dashboard/Sellers/MyProducts/MyProducts';
import SellerRoute from './SellerRoute';
import BuyerRoute from './BuyerRoute';
import AdminRoute from './AdminRoute';
import Payment from '../pages/Dashboard/Buyers/Payment/Payment';
import Advertise from '../pages/Home/Advertise/Advertise';
import AllReport from '../pages/Dashboard/Buyers/AllReport/AllReport';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><Categories></Categories></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><Sellers></Sellers></AdminRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><Buyers></Buyers></AdminRoute>
            },
            {
                path: '/dashboard/myOrders',
                element: <BuyerRoute> <MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <BuyerRoute> <Payment></Payment></BuyerRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/payment/${params.id}`)
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute> <AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute> <MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/allReport',
                element: <SellerRoute> <AllReport></AllReport></SellerRoute>
            }

        ]

    }
]);