import React, {  } from 'react';
import { useNavigate } from "react-router-dom";
import './index.css'

const NavCard = ({card}) => {
    const {image, title, questionQuantity, route} = card
    const navigate = useNavigate();

    function goToSignsTest(route) {
        navigate(`/test${route}`);
    }

  
  return (
    <div className='navCard' onClick={()=>goToSignsTest(route)}>
        <img className='navCover' src={image} alt={'test cover'}/>
        <h2 className='title'>{title}</h2>
        <p className='greyText'>{questionQuantity}</p>
    </div>
  );
};

export default NavCard;
