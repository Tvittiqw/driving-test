import React from 'react';
import './index.css'

const CustomButton = ({ title, handleClick, type, byttonType, onKeyPressed}) => {

    const getClassName = (type) => {
        if(type === 'error'){
            return 'error'
        } else if (type === 'correct') {
            return 'correct'
        } else {
            return 'applyButton'
        }
    }
    return (
      <button type={byttonType} onClick={handleClick} className={`customButton ${getClassName(type)}`}>
        <p className='buttonTitle'>{title}</p>
      </button>
    );
  };

  export default CustomButton;