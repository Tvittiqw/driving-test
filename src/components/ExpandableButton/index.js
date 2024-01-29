import React, { useState, useEffect } from 'react';
import QuestionIcon from '../../svgComponents/QuestionIcon';
import './index.css'

const ExpandButton = ({ title, handleClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        console.log('useEffect')
        const buttonElement = document.querySelector('.expand-button');
    
        const handleMouseEnter = () => {
          setIsHovered(true);
        };
    
        const handleMouseLeave = () => {
          setIsHovered(false);
        };
    
        buttonElement.addEventListener('mouseenter', handleMouseEnter);
        buttonElement.addEventListener('mouseleave', handleMouseLeave);
    
        return () => {
          buttonElement.removeEventListener('mouseenter', handleMouseEnter);
          buttonElement.removeEventListener('mouseleave', handleMouseLeave);
        };
      }, []);

    return (
      <button className="expand-button" onClick={handleClick}>
        <span className="text">{title}</span>
        <div className='icon'>
            <QuestionIcon fillColor={isHovered ?'#f1b51a': '#000'}/>
        </div>
      </button>
    );
  };

  export default ExpandButton;