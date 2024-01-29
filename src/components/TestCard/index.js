import React, { useState } from 'react';
import './index.css'
import CustomButton from '../CustomButton';
import ExpandButton from '../ExpandableButton';
import ProgressBar from '../ProgressBar';

  
const TestCard = ({
    icon, 
    usersAnswer, 
    handleInputChnage, 
    submitSign, 
    label, 
    type, 
    description, 
    currentQuestion, 
    total,
    isCheck,
    handleNextSign,
    usedHint
}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const progressPercent = (currentQuestion / total) * 100;


    const handleFlip = () => {
        setIsFlipped((prevIsFlipped) => !prevIsFlipped);
    };

    const renderSign = () => <img className='roadSign' src={icon} alt='road sighn'/>

    const renderHead = (isHint) =>  {
        return (
            <div className='testCardHead'>
                    <div className='titleWrapper'>
                        <h2 className='testTitle'>Road marking test</h2>

                        {!isCheck && !isHint && <ExpandButton title={'Get a hint'} handleClick={handleFlip}/>}
                    </div>
                    <ProgressBar 
                        progressPercent={progressPercent} 
                        totalQuestions={total} 
                        currentQuestion={currentQuestion}
                    />
                </div>
        )
    }

    const renderQuestionContent = (isHint) => {
        return(
            <div className='testCard'>
                {renderHead(isHint)}
                <form className='questionForm' onSubmit={(e)=>{
                    e.preventDefault()

                        if(isHint) {
                            setIsFlipped(false)
                        }
                        submitSign(isHint)
                    }}>
                    <div className='content'>
                            {renderSign()}
                            {isHint ? <>
                                    <h2 className='hintLable'>{label}</h2>
                                    <p className='greyText'>{type}</p>
                                </> : <input 
                                    placeholder='Type sign name' 
                                    className='answerInput' 
                                    type="text" 
                                    name="name" 
                                    onChange={(e)=>{handleInputChnage(e)}}
                                />
                            }  
                    </div>
                    <CustomButton byttonType={'submit'} title={'Apply'} 
                    // handleClick={()=>{
                    //     if(isHint) {
                    //         setIsFlipped(false)
                    //     }
                    //     submitSign(isHint)
                    // }}
                    />
                 </form>
            </div>
        )
    }

    const renderCheck = () => {
        return(
            <div className='checkCard'>
                {renderHead()}
                <div className='content'>
                    {renderSign()}
                    <h2 className='hintLable'>{label}</h2>
                    <p className='greyText signType'>{type}</p>
                    <p className='basicText description'>{description}</p>
                    <div className='answerWrapper'>
                        <p className='answerTitle greyText'>Your answer:</p>
                        <h2>{usersAnswer}</h2>
                    </div>
                    
                </div>
                <div className='checkButtonsWrapper'>
                    <CustomButton type={'correct'}  title={'Correct'} handleClick={()=>handleNextSign('correct')}/>
                    <CustomButton  type={'error'} title={'Incorrect'} handleClick={()=>handleNextSign('error')}/>
                </div>               
            </div>
        )
    }
    return (
        isCheck 
            ? renderCheck() 
            : <div className="scene scene--card">
                    <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
                        <div className="card__face card__face--front">
                            {renderQuestionContent()}
                        </div>

                        <div className="card__face card__face--back">
                            {renderQuestionContent(true)}
                        </div>
                    </div>
                </div>
    )
};

export default TestCard;
