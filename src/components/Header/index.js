import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/icons/Logo.svg'
import './index.css';


const Header = () => {
    const navigate = useNavigate();

    function goHome() {
        navigate(`/`);
    }

    return (
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' onClick={goHome}/>
        </div>
    )
  }

export default Header;