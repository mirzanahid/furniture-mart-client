import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main';
import Blog from '../pages/Blog/Blog';

import Dashboard from '../pages/Dashboard/Dashboard/Dashboard';
import Sellers from '../pages/Dashboard/Sellers/Sellers';
import Error from '../pages/Error/Error';
import Categories from '../pages/Home/Category/Categories/Categories';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Shared/Login/Login';
import Signup from '../pages/Shared/Signup/Signup';
import RoleRoute from './RoleRoute';
import PrivateRoute from './PrivateRoute';
import MyOrders from '../pages/Dashboard/Buyers/MyOrders/MyOrders';
import AddProduct from '../pages/Dashboard/Sellers/AddProduct/AddProduct';
import Buyers from '../pages/Dashboard/Buyers/Buyers/Buyers';

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
                path: '/dashboard/allSellers',
                element: <RoleRoute><Sellers></Sellers></RoleRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <RoleRoute> <Buyers></Buyers></RoleRoute>
            },
            {
                path: '/dashboard/myOrders',
                element: <RoleRoute> <MyOrders></MyOrders></RoleRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <RoleRoute> <AddProduct></AddProduct></RoleRoute>
            }

        ]

    }
]);