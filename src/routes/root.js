import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from '../components/ErrorPage';
import Test from '../components/Test';
import App from '../App';
import Layout from '../components/Layout';
import '../index.css';

const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <App/>
        },
        {
          path: "test/:testName",
          element: <Test />,
        },
      ]
    }
  ]);


  export default router;