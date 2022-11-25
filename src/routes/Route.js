import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../pages/Blog/Blog';
import Dashboard from '../pages/Dashboard/Dashboard/Dashboard';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Shared/Login/Login';
import Signup from '../pages/Shared/Signup/Signup';
import PrivateRoute from './PrivateRoute';

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
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [

        ]

    }
]);