import React from 'react';
import { useNavigate } from "react-router-dom";
import './index.css';
import CustomButton from '../CustomButton';
import CrossIcon from '../../svgComponents/CrossIcon';



const Conclusion = ({mistakesAmount, totalSigns, mistakesArr}) => {
    const navigate = useNavigate();
    function goHome() {
        navigate(`/`);
    }
    const correctAmount = totalSigns - mistakesAmount;
    

    return (
        <>
            <div className='conclusionHead'>
                <h2>Well done!</h2>
                <p>Your score is {correctAmount} out of {totalSigns}</p>

                <CustomButton  
                    title={ 'Exit'} 
                    handleClick={goHome}
                />
            </div>
            
            {mistakesArr.map((sign, index) => {
                return(
                        <div className="incorrectCard" key={index}>
                            {sign.icon && <img className="roadSign mistakeSign" src={sign.icon} alt="road sign"/>}
                            <div className='mistakeDetails'>
                                <h2 className='mistakeSignTitle'>Label: {sign.label}</h2>
                                <p className='greyText signType mistakeType'>{sign.type}</p>
                                <p className='basicText description mistakeDescr'>{sign.description}</p>
                            </div>
                            <div className='divider'></div>
                            <div className='mistakeAnswerWrapper'>
                                <div className='finalAnswerWrapper'>
                                    <p className='answerTitle'>Your answer: </p>
                                    <h2 className='usersAnswer'>{sign.usersAnswer}</h2>
                                </div>
                                <div className='mistakeConclusion'>
                                    <CrossIcon />
                                    <p>Incorrect</p>
                                </div>
                                
                            </div>
                        </div>
                )
            })}
        
        </>
    )
  }

export default Conclusion;