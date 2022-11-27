import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main';
import Blog from '../pages/Blog/Blog';
import Error from '../pages/Error/Error';
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
import MyProfile from '../pages/Dashboard/MyProfile/MyProfile';


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
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <Sellers></Sellers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <Buyers></Buyers>
            },
            {
                path: '/dashboard/myOrders',
                element: <> <MyOrders></MyOrders></>
            },
            {
                path: '/dashboard/addProduct',
                element: <> <AddProduct></AddProduct></>
            },
            {
                path: '/dashboard/myProducts',
                element: <> <MyProducts></MyProducts></>
            }

        ]

    }
]);