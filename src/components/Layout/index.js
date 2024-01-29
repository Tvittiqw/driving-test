import React from 'react';
import { Outlet } from "react-router-dom";
import './index.css';
import Header from '../Header';


const Layout = () => {
    return (
      <div className='layout'>
        <Header />
        <Outlet />
      </div>
    )
  }

export default Layout;